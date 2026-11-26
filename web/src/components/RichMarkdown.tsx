import React, { useMemo } from 'react';
import { marked } from 'marked';
import katex from 'katex';

interface RichMarkdownProps {
  markdown: string;
  onNavigateModule?: (moduleId: string) => void;
  className?: string;
}

marked.setOptions({
  breaks: false,
  gfm: true,
});

function renderMathProtectedMarkdown(md: string): string {
  if (!md) return '';

  const mathTokens: string[] = [];
  const pushMath = (tex: string, displayMode: boolean): string => {
    const idx = mathTokens.length;
    try {
      const html = katex.renderToString(tex.trim(), {
        displayMode,
        throwOnError: false,
        strict: false,
      });
      mathTokens.push(html);
    } catch {
      mathTokens.push(`<code>${tex}</code>`);
    }
    return `@@KATEX_TOKEN_${idx}@@`;
  };

  // Preserve fenced code blocks from math replacement
  const codeBlocks: string[] = [];
  let text = md.replace(/```[\s\S]*?```/g, (block) => {
    const idx = codeBlocks.length;
    codeBlocks.push(block);
    return `@@CODE_BLOCK_${idx}@@`;
  });

  // Replace display math $$...$$
  text = text.replace(/\$\$([\s\S]*?)\$\$/g, (_, tex) => pushMath(tex, true));

  // Replace inline math $...$ (avoid currency like \$100 or empty)
  text = text.replace(/(?<!\\)\$([^\n$]+?)(?<!\\)\$/g, (_, tex) => pushMath(tex, false));

  // Restore fenced code blocks before marked parses markdown
  text = text.replace(/@@CODE_BLOCK_(\d+)@@/g, (_, idx) => codeBlocks[Number(idx)] ?? '');

  // Normalize internal module links [MXX...](file:///...M05-...) -> #module-M05
  text = text.replace(
    /\[([^\]]+)\]\((?:file:\/\/\/[^)]*?(M\d{2})[^)]*\.md)\)/gi,
    '[$1](#module-$2)'
  );

  let html = marked.parse(text) as string;

  // Replace math placeholders
  html = html.replace(/@@KATEX_TOKEN_(\d+)@@/g, (_, idx) => mathTokens[Number(idx)] ?? '');

  return html;
}

export const RichMarkdown: React.FC<RichMarkdownProps> = ({
  markdown,
  onNavigateModule,
  className = '',
}) => {
  const html = useMemo(() => renderMathProtectedMarkdown(markdown), [markdown]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLElement).closest('a');
    if (!target) return;
    const href = target.getAttribute('href') || '';
    const modMatch = href.match(/^#module-(M\d{2})$/i);
    if (modMatch && onNavigateModule) {
      e.preventDefault();
      onNavigateModule(modMatch[1].toUpperCase());
      return;
    }
    if (href.startsWith('http://') || href.startsWith('https://')) {
      target.setAttribute('target', '_blank');
      target.setAttribute('rel', 'noopener noreferrer');
    }
  };

  return (
    <div
      className={`icu-prose ${className}`.trim()}
      onClick={handleClick}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
