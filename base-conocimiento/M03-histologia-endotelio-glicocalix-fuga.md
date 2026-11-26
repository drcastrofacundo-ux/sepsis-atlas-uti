---
id: M03
titulo: Histología Endotelial, Glicocálix y Fuga Capilar
subtitulo: De la barrera luminal de Starling revisada al simulador hemodinámico-endotelial y cálculo dual de ALI/IFC
ultima_actualizacion: 2026-11-25
piloto_fase2: true
fuentes_nlm:
  - "Sepsis > 2026 (glicocalix, gap CO2, Na por peso)"
  - "Sepsis > Microcirculacion - Bibliografia extensa"
  - "Sepsis > Microcirculacion - Sintesis clinica y fenotipos"
  - "Sepsis > Albumina"
  - "[Tesis] Albumina, Glicocalix y PK de Midazolam - MIRA-Research"
  - "[SATI] clases"
fuentes_vault:
  - "03-Proyectos/_apps/glicocalix-endotelial.html"
  - "03-Proyectos/Calculadora Fuga Capilar (ALI).md"
  - "04-Recursos/Clases/Presentaciones/Permeabilidad_Vascular_Masterclass.pptx"
  - "04-Recursos/Clases/Glicocalix endotelial en sepsis.md"
  - "04-Recursos/Papers/Glicocalix en sepsis - biomarcadores plasmaticos 2025-2026 (sintesis).md"
  - "04-Recursos/Papers/PBR y GlycoCheck - monitoreo funcional del glicocalix en sepsis (sintesis).md"
  - "04-Recursos/Papers/CLOVERS 2025 - Heparan sulfato y glicocalix en sepsis.md"
  - "04-Recursos/Papers/Rovas 2026 - Marco de dos dominios de disfuncion microvascular en sepsis.md"
  - "04-Recursos/Papers/Scarbeck 2026 - Estudio EDGE videomicroscopia sublingual en guardia.md"
  - "04-Recursos/Papers/Beltran 2026 - Fenotipos microvasculares en sepsis pediatrica.md"
  - "04-Recursos/Papers/Sakr 2026 - ARISS Albumina en shock septico.md"
  - "04-Recursos/Papers/Indice de Fuga Capilar en Sepsis.md"
  - "04-Recursos/Papers/_crudos/sepsis/indice de fuga capilar.pdf"
  - "04-Recursos/Papers/_crudos/sepsis/indice de fuga capilar2.pdf"
palabras_clave: [glicocalix, endotelio, starling, syndecan-1, endocan, heparan sulfato, pbr, glycocheck, fuga capilar, ali, ifc, angiopoyetina-2, albumina]
---

# M03 — Histología Endotelial, Glicocálix y Fuga Capilar *(Piloto Fase 2A)*

> **Resumen operativo para la guardia:** El endotelio sano está protegido por un gel polianiónico de ~0,5–2,0 µm (glicocálix) que sostiene la barrera oncótica subglicocálix y frena la adhesión leucocitaria/plaquetaria. En sepsis, la pérdida de ese escudo acompaña a la respuesta inflamatoria y deja la filtración capilar a merced de la presión hidrostática ($P_c$) y de la apertura de uniones VE-cadherina. **Medir permeabilidad directamente al lado de la cama hoy no es posible**: la clínica combina balance/VExUS/líneas B/PVPI con cautela crítica sobre los biomarcadores plasmáticos y el PBR sublingual.

---

## 1. Capa Base — Desde cero (Fisiología, Histología y Fundamentos)

### 1.1 Arquitectura Histológica de la Barrera Microvascular (4 Capas)
La barrera entre la sangre y el intersticio no es un tubo inerte, sino una unidad funcional de cuatro estratos con heterogeneidad regional (endotelio **continuo** con uniones estrechas en pulmón y barrera hematoencefálica; **fenestrado** en glomérulo renal e intestino; **sinusoidal** discontinuo en hígado, donde no hay retención significativa de albúmina):

1. **Glicocálix Endotelial (GE):** Capa gelatinosa hidratada luminal (espesor *in vivo* hidratado ~0,5–2,0 µm en capilares y vénulas, mayor en arterias con alto cizallamiento; en microscopía electrónica clásica se deshidrata y colapsa a 0,1–0,5 µm). Se organiza en:
   - **Proteoglicanos centrales (*core*):**
     - *Sindecanos (1, 2 y 4; hegemonía de Sindecano-1 / CD138):* Glicoproteínas transmembrana ancladas por ezrina/actina al citoesqueleto cortical endotelial. Transducen fuerza mecánica.
     - *Glipicano-1:* Fijado a la hoja externa de membrana mediante ancla glicosilfosfatidilinositol (GPI) en microdominios lipídicos (*caveolas*) asociados directamente a la **eNOS**.
   - **Glicosaminoglicanos (GAGs):** Cadenas polisacáridas largas no ramificadas con carga fuertemente negativa por sulfatos y carboxilos:
     - *Heparán sulfato (HS):* 50–90% de los GAGs totales. Fija **antitrombina III (AT-III)** (pentasacárido específico que multiplica ×1000 la inhibición de trombina/FXa), **TFPI** y **superóxido dismutasa extracelular (ecSOD)**.
     - *Condroitín / Dermatán sulfato (CS/DS):* Proporción habitual HS:CS ~4:1. Contribuyen a la densidad de carga que oculta físicamente a las moléculas de adhesión (selectinas P/E, ICAM-1, VCAM-1, cuya longitud es mucho menor que el espesor del GE sano).
     - *Ácido hialurónico (Hialuronano, HA):* Polímero no sulfatado de altísimo peso molecular ($10^6\text{–}10^7\text{ Da}$) unido a receptores **CD44**; atrapa grandes volúmenes de agua otorgando viscoelasticidad. En alto peso molecular es antiinflamatorio; fragmentado a bajo peso molecular actúa como DAMP sobre TLR2/TLR4.
   - **Capa Superficial Endotelial Adsorbida (ESL):** Incorpora proteínas plasmáticas atrapadas electrostática y anfóteramente: **albúmina** (~50% de la masa intravascular interactúa dinámicamente con el GE y vehiculiza **esfingosina-1-fosfato [S1P]**), fibrinógeno y factores anticoagulantes.
2. **Monocapa Endotelial:** Regula transcitosis caveolar (gp60) y síntesis basal de óxido nítrico (NO) vía eNOS y prostaciclina ($\text{PGI}_2$).
3. **Uniones Intercelulares:**
   - *Adherentes:* **VE-cadherina** conectada al citoesqueleto vía $\beta/\alpha$-cateninas. Su estabilización depende de **Angiopoyetina-1 (Ang-1)** activando el receptor **Tie2** y de **S1P/S1P1**.
   - *Estrechas (Tight junctions):* Claudina-5, ocludina, ZO-1 (predominan en BHE y pulmón).
4. **Membrana Basal y Pericitos:** Sostén mecánico y drenaje linfático intersticial.

### 1.2 Mecanotransducción y Efecto Fåhraeus-Lindqvist
El flujo sanguíneo laminar genera un estrés tangencial de cizallamiento (*shear stress* fisiológico $\sim 10\text{–}20\text{ dyn/cm}^2$). Las cadenas de heparán sulfato y ácido hialurónico transmiten ese torque por los sindecanos al citoesqueleto y por los glipicanos a las caveolas, activando **KLF2 → eNOS** (vasodilatación fisiológica dependiente de flujo). Además, la repulsión electrostática mantiene una **capa plasmática libre de células** junto a la pared capilar, reduciendo la viscosidad efectiva (*efecto Fåhraeus-Lindqvist*) y facilitando el tránsito eritrocitario. Tras una degradación aguda experimental, la reconstitución *in vitro* del GE requiere **al menos 3 días** de flujo laminar sostenido.

### 1.3 El Modelo Revisado de Starling (Levick & Michel, 2010; Woodcock & Woodcock, 2012)
El modelo clásico de 1896 asumía filtración arteriolar y reabsorción venular hacia el intersticio global. El **Modelo Revisado de Starling** demostró que el gradiente oncótico efectivo no se da contra el intersticio global, sino entre el plasma luminal ($\pi_p$) y un **microespacio subglicocálix** virtual protegido ($\pi_{sg}$):

$$J_v = L_p S \cdot \left[ (P_c - P_i) - \sigma \cdot (\pi_p - \pi_{sg}) \right]$$

- **$J_v$:** Tasa de filtración transvascular neta.
- **$L_p S$:** Conductividad hidráulica $\times$ área superficial (basal $\approx 20 \times 10^{-7}\text{ cm}\cdot\text{s}^{-1}\cdot\text{mmHg}^{-1}$).
- **$P_c - P_i$:** Presión hidrostática capilar (20–32 arteriolar → 12–15 venular mmHg) menos presión intersticial (−5 a 0 mmHg; succión linfática).
- **$\sigma$ (Coeficiente de reflexión de Staverman):** Fracción proteica retenida por la barrera (sano: **0,85–0,95** en músculo esquelético; **0,50–0,70** en capilar pulmonar; en sepsis con lisis del GE cae hacia **0**).
- **Regla de "No Reabsorción Venular":** En capilares continuos intactos, el ultrafiltrado pobre en proteínas que atraviesa el GE lava continuamente el subglicocálix manteniendo $\pi_{sg} \approx 0$. Aun en el extremo venular, la suma de presiones mantiene una filtración neta baja drenada al 100% por el **sistema linfático**. Cuando el GE colapsa y las proteínas invaden el subglicocálix ($\pi_{sg} \to \pi_p$) y cae $\sigma \to 0$, desaparece el freno oncótico: toda alza de $P_c$ se traduce en fuga plasmática masiva rica en albúmina hacia el intersticio.

---

## 2. Capa Profundidad R2–R3 y Frontera (2022–2026)

### 2.1 Fisiopatología Molecular del *Shedding* y Ruptura de Uniones
- **Enzimas *sheddases*:** TNF-$\alpha$, IL-1$\beta$, ROS y catecolaminas/estrés activan **heparanasa-1 (HPA-1)** (escinde heparán sulfato), **MMP-2 / MMP-9 / ADAM17** (clivan el ectodominio de Sindecano-1) e **hialuronidasas** (fragmentan HA).
- **Eje Ang-2 / Tie2:** El endotelio activado libera **Angiopoyetina-2 (Ang-2)** desde cuerpos de Weibel-Palade, antagonizando a Ang-1 sobre Tie2; esto desacopla VE-cadherina y abre brechas paracelulares (Suzuki 2025, `PMID 40029709`: catepsina K escinde Ang-2).
- **Giro Causal Crítico (Wang H et al., *Crit Care* 2026;30:60, `PMID 41593637`):** En 384 adultos con NAC (guardia, sala y UTI + 50 controles, 32 biomarcadores), los pacientes con **Syndecan-1 basal normal ya presentaban marcada elevación en los 5 dominios de respuesta inmune/inflamatoria**. La degradación mostró relación **no lineal con efecto umbral ($p=0,008$)** (corte $\ge 3.037,9\text{ pg/mL}$ [óptimo 4.474 pg/mL]: mortalidad 30d **17,7% vs 8,2%**, $p=0,013$). **Conclusión:** la degradación del glicocálix **acompaña o sigue** a la respuesta del huésped; **NO es el evento iniciador**, lo que explica el fracaso de estrategias pensadas para "prevenir el primer daño".

### 2.2 Jerarquía Diagnóstica de 3 Niveles de Permeabilidad (Belveyre et al., *Crit Care* 2026)
No existe un "permeabilímetro" directo a la cabecera del paciente; se integra en 3 niveles junto a las 4 fases **ROSE** (*Resuscitation → Optimization → Stabilization → Evacuation*):
- **Nivel 1 (Bedside):** Edema con fóvea, balance hídrico acumulado, peso diario, líneas B en ecografía pulmonar ($r^2 = 0,68\text{–}0,92$ vs EVLW), eco subcutánea y VExUS *(con cautela: cohorte multicéntrica en sepsis n=108, Ann Intensive Care 2025;15:105, VExUS $\ge 2$ no predijo AKI ni mortalidad tras ajuste)*.
- **Nivel 2 (Cuantitativo indirecto):**
  - **Termodilución transpulmonar (TPTD/PiCCO):** $\text{EVLW} > 10\text{ mL/kg}$ + **PVPI $> 3,0$** distingue edema por permeabilidad (SDRA) de hidrostático ($< 3,0$), pero **solo mide lecho pulmonar**.
  - **Bioimpedancia (BIA):** $\text{ECW/TBW} \ge 0,40$.
  - **Fórmulas hematológicas:** $\text{ePVS}$ (Strauss/Duarte, normal 4–5 dL/g; sobrecarga $> 7\text{ dL/g}$) y **VLI** (*Vascular Leak Index* = %$\Delta$Hto / balance neto).
- **Nivel 3 (Investigación / Biomarcadores / Videomicroscopía):**
  - **Nivel 3A — Metaanálisis de Biomarcadores (Daniyarova KR et al., *MicrobiologyOpen* 2025;14(6):e70155, `PMID 41195755`, 23 estudios, `n=4.529`):**
    - **Syndecan-1 → Mortalidad:** **OR 2,04 (IC95% 1,66–2,51; $I^2 = 84\%$)**.
    - **Syndecan-1 → MODS:** **OR 2,35 (IC95% 0,93–5,94; NO significativo; $I^2 = 94\%$)**.
    - **Syndecan-1 → Falla respiratoria:** **OR 1,05 (IC95% 0,27–4,02; NO significativo; $I^2 = 91\%$)**.
    - **Endocan → Mortalidad:** **OR 5,06 (IC95% 2,52–10,18; $p<0,0001$; $I^2 = 42,5\%$)** *(n=435, menor heterogeneidad aunque muestra chica)*.
    - **Angiopoyetina-2 (Zhuo 2024, `PMID 39522088`, 33 estudios, `n=4.703`):** AUC **0,76** para mortalidad.
  - **Heparán sulfato por LC-MS en RCT — CLOVERS 2025 (Oshima K et al., *Ann Am Thorac Soc* 2025;22(9):1382–1393, `PMID 40315385`, `n=574`):** Mortalidad 90d por terciles de HS basal: **9,9% → 20,4% → 44,2% ($p<0,001$)**, **aHR por IQR = 3,12 (2,18–4,46)**. **Dato disruptivo:** la rama liberal vs restrictiva + vasopresor precoz **NO modificó la degradación de HS ni SYN-1 a 24 h**.
  - **Nivel 3B (Fisiología cuantitativa):** **TERA** (*Transcapillary Escape Rate* de albúmina marcada): normal **~5%/h**, en shock séptico sube a **>7–15%/h** (+300%).
  - **Nivel 3C (Videomicroscopía sublingual / GlycoCheck — Auditoría EDGE & Beltrán 2026):**
    - **NOSTRADAMUS (Rovas 2021, `PMID 33741036`, `n=51`):** pérdida selectiva de capilares pequeños (5 µm −63%, 6 µm −42%, 7 µm −28%), pérdida de autorregulación $\text{CBV}_{\text{dynamic}}$ y colapso de $\text{MVHS}_{\text{dynamic}}$ (7,4 → 1,8, $p<0,0001$).
    - **Carta Rovas & Kümpers 2026 (*Crit Care* 30:413):** propone separar **PBR** (capa superficial) de **densidad capilar**, admitiendo explícitamente que **PBR NO mide espesor anatómico del glicocálix ni permeabilidad ni fuga**.
    - **EDGE (Scarbeck 2026, `PMID 41998704`, `n=299` guardia):** MVHS predijo progresión en no-sépticos (`n=174`, **AUC 0,79** vs PCT 0,61 / IL-6 0,64; cuadrante intacto VPN **94,7%**, ambos alterados VPP **30,7%**), **PERO el PBR NO sobrevivió al multivariable (aOR 1,13 [0,98–1,31], $p=0,1$; dif 0,05 µm dentro del CoV 5,26% del equipo)**.
    - **De dónde viene la técnica y quién la valida:** el PBR se describió alterado en críticos en 2013 (Donati, `PMID 23988876`); enfermería entrenada lo mide con concordancia aceptable (GlycoNurse 2018, ICC ~0,75, `PMID 29444696`); y en 2019 el mismo grupo mostró que **el PBR no se asocia a los parámetros clásicos de microcirculación** (MFI, PPV, densidad capilar; `PMID 31340868`) — glicocálix y colapso microvascular serían capas de daño parcialmente independientes. El MVHS*dynamic* de NOSTRADAMUS es la métrica que GlycoCheck comercializa como "Microvascular Health Score", y **toda la línea proviene del grupo que licenció la técnica**, sin validación externa independiente robusta ni ensayo de intervención guiada por PBR con desenlace duro (síntesis propia *PBR y GlycoCheck*).
    - **Panel pediátrico (Liu 2026, `PMID 41618177`, $n = 85$, retrospectivo):** para sepsis grave, el **ácido hialurónico** (AUC 0,858) rindió igual o mejor que el Syndecan-1 (0,852) y el heparán sulfato (0,816); en adultos, el hialuronano también se asoció más a falla orgánica que el Syndecan-1. No extrapolable directamente.
    - **Beltrán 2026 (`PMID 41645301`, `n=239` UTIP):** tres clusters (MODS 10→28→42%; mort 1,9→12,1→17,2%), **PERO el PBR NO difirió entre fenotipos (2,10 vs 2,20 vs 2,01 µm; $p=0,753$)** y los clusters fueron colineales con edad y foco respiratorio.

### 2.3 Índice de Fuga Capilar (ALI / IFC) — Fórmulas y Trampa de Unidades ×10 / ×100
- **Palacios Moguel et al., *Med Crit* 2018 (`indice de fuga capilar.pdf`, `n=116`):**
  $$\text{IFC (escala Cordemans/Palacios)} = \frac{\text{PCR (mg/dL)}}{\text{Albúmina (g/L)}} \times 100 = 10 \times \frac{\text{PCR (mg/L)}}{\text{Albúmina (g/L)}}$$
  Valores normales: **2,5–25**; Cordemans 2012 **>61**; Malbrain **<60**. En derivación (`n=62`): corte **≥85,55** (AUC 0,88, S 90%, E 87%); en validación (`n=54`): **AUC 0,95** (S 100%, E 89%, VPN 100%, supervivencia 28d **88,6% vs 20,0%**, $p<0,001$).
- **García Uribe 2021 (`indice de fuga capilar2.pdf`, `n=176` UTI):** usa cociente directo sin ×100 ($\text{PCR (mg/L)} / \text{Albúmina (g/L)}$, equivalente a `ALI` de la nota local): **corte D3 ≥7,41** (equivale a **74,1** en escala Palacios; AUC 0,76 [0,69–0,83], en no-COVID **AUC 0,811**; aOR muerte por punto **1,05 [1,02–1,07]**).
- **Advertencia obligatoria:** El cociente PCR/albúmina es un subrogante compuesto de inflamación y reactante negativo, **NO mide permeabilidad capilar directa**, y cambia un orden de magnitud según si el laboratorio informa PCR en `mg/L` o `mg/dL` y albúmina en `g/L` o `g/dL`.

### 2.4 Intervenciones y Albúmina 2025–2026
- **Albúmina — ARISS (Sakr et al., *JAMA Netw Open* 2026, `PMID 41712212`, `n=440` de 1.662):** Albúmina 20% (60 g carga + titulación hasta 28 d para meta $\ge 3,0\text{ g/dL}$). **Mortalidad 90d neutra: 43,3% vs 45,9% (RR 0,94 [0,76–1,17]; $p=0,71$)** (subpotenciado al 26,5%, 48,6% de controles recibió albúmina, >50% del brazo activo no llegó a 3,0 g/dL). **Li et al. 2025 (*Mil Med Res*, TTE `n=27.088` MIMIC-IV):** albúmina <24h asoció **+3,47% SA-AKI** (94,18% vs 90,71%) sin mejorar sobrevida 7d. **Cusack et al. 2025:** bolo de albúmina 20% (~300 mL) mejoró la reactividad NIRS/VOT solo en fluido-respondedores. **Enibarcimab / Adrecizumab (Knothe 2025, AdrenOSS-2):** en subgrupo bio-ADM $>70\text{ pg/mL}$ + DPP3 $<70\text{ ng/mL}$, mort 28d 26%→18% (HR 0,65).
- **HBPM como anti-heparanasa:** Dos RCTs del **mismo hospital chino** con fechas solapadas dieron resultados opuestos: **Chen D 2024** (`PMID 39170046`, `n=105`, mort 28d 19,2% vs 45,3%, −26 pp implausible) vs **Chen TT 2023** (`PMID 37744293`, `n=95`, sin diferencia en citoquinas, estadía ni mortalidad). No es indicación clínica.


### Novedades del barrido anual 2025–2026 (PubMed + avisos de correo, leídas en abstract)
> Agregadas el 2026-11-26 desde el abstract de PubMed (no el texto completo). Cada una lleva su PMID. Lista completa de candidatos en `candidatos-pubmed-correo.md`.

- **Albúmina en shock séptico, metaanálisis frecuentista y bayesiano** (*Crit Care* 2026, 7 ECAs, $n = 3.273$): reanimación con albúmina asociada a **10% menos mortalidad relativa** (RR 0,90; IC95% 0,83–0,99; $I^2 = 0\%$; probabilidad posterior de beneficio 94,7%), sin modificación por formulación, dosis ni albúmina basal. Contrasta con ARISS neutro: leerlo junto con la sección 2.4 y con la advertencia de que 4 de los 7 ensayos aportan solo subgrupos. `PMID 42410446`

---

## 3. Mitos vs. Evidencia — Cómo NO sobreinterpretarlo

1. **Mito:** *"El daño del glicocálix inicia la cascada séptica y su grosor/Syndecan-1 predice directamente qué paciente va a hacer FMO."*
   - **Evidencia:** **Wang 2026** demuestra que la tormenta inmune precede al shedding, y **Daniyarova 2025** prueba que Syndecan-1 predice mortalidad (OR 2,04) pero **NO predice MODS (OR 2,35 NS)** ni falla respiratoria (OR 1,05 NS).
2. **Mito:** *"Cada bolo de cristaloide lava mecánicamente el glicocálix vía ANP, por eso siempre la restricción de fluidos protege el glicocálix."*
   - **Evidencia:** En el único análisis anidado en un gran RCT (**CLOVERS 2025**, `n=574`), la estrategia liberal vs restrictiva **no cambió heparán sulfato ni Syndecan-1 a las 24 h** (con ~1–2 L de separación real). El daño ocurre por exceso hidrostático sostenido en no-respondedores y por inflamación, no como regla mecánica lineal por un bolo aislado necesario.
3. **Mito:** *"El PBR de GlycoCheck mide el espesor anatómico real del glicocálix y la fuga capilar."*
   - **Evidencia:** **Rovas 2026** admite que no mide ni espesor anatómico ni fuga. En **EDGE 2026** el efecto de 0,05 µm cae dentro del ruido del aparato (CoV 5,26%) y desaparece en multivariable ($p=0,1$), y en **Beltrán 2026** el PBR fue idéntico entre clusters ($p=0,753$).
4. **Mito:** *"Corregir la albúmina sérica ≥3,0 g/dL sella la barrera endotelial y reduce la mortalidad."*
   - **Evidencia:** Tanto **ALBIOS (2014)** como **ARISS (2026, RR 0,94, $p=0,71$)** resultaron neutros en su objetivo primario de supervivencia. Con $\sigma \to 0$ y TERA >15%/h, la albúmina infundida fuga al intersticio y es contraindicada en TCE (**SAFE-TBI RR 1,88**).
5. **Mito:** *"Un Índice de Fuga Capilar (ALI/IFC) de 80 indica que está todo bien porque el corte de Palacios es 85,5."*
   - **Evidencia:** **80 en escala García Uribe** equivale a **800 en escala Palacios** (10 veces el umbral!). Siempre chequear las unidades (`mg/L` vs `mg/dL`; factor ×100) y recordar que mide inflamación/albúmina, no permeabilidad directa.

---

## 4. Especificación del Simulador / Atlas Interactivo (Evolución de `glicocalix-endotelial.html`)

Evolucionaremos `glicocalix-endotelial.html` pasando de un interruptor binario (Sano vs Séptico) a un **Laboratorio Hemodinámico-Endotelial Continuo + Calculadora Dual ALI/IFC**:

### 4.1 Controles Interactivos (Sliders y Toggles)
| Control | Rango | Paso | Default (Sano) | Unidad | Efecto en Modelo |
|---|---|---|---|---|---|
| `estadoInflamatorio` (TNF-$\alpha$/HPA-1/MMPs) | 0 – 100 | 1 | 5 | % | Degrada fracción intacta del GE, reduce $\sigma$, eleva $\pi_{sg}$, aumenta sheddases e índice de fuga |
| `presionCapilar` ($P_c$) | 10 – 45 | 1 | 20 | mmHg | Empuja filtración hidrostática $J_v$ (aumenta en sobrecarga hídrica o congestión venosa) |
| `shearStress` ($\tau_w$) | 1 – 25 | 0.5 | 15 | dyn/cm² | Modula activación eNOS (flujo laminar óptimo 10–20; bajo shear cae NO y reclutamiento) |
| `albuminaSerica` | 1.2 – 4.8 | 0.1 | 4.0 | g/dL | Determina $\pi_p \approx 5.54 \cdot \text{Alb} + 2.8$ (aprox. lineal en rango fisiológico), estabilización parcial ESL y denominador ALI |
| `pcrSerica` | 2 – 400 | 2 | 5 | mg/L | Numerador ALI/IFC; retroalimenta inflamación endotelial |
| `modoVista` (Toggle) | `Base` / `Frontera R2–R3` | — | `Base` | — | Cambia textos de los 10 hotspots interactivos |
| `unidadPcrCalc` / `unidadAlbCalc` | `mg/L` vs `mg/dL`; `g/L` vs `g/dL` | — | `mg/L`, `g/L` | — | Selector explícito en calculadora ALI/IFC para eliminar error ×10/×100 |

### 4.2 Ecuaciones y Lógica del Simulador
1. **Integridad de Glicocálix ($I_{gc} \in [0.15, 1.0]$):**
   $$I_{gc} = \max\left(0.15,\ 1 - 0.0085 \cdot \text{Inflamación} \cdot \left(1 - 0.12 \cdot \max(0, \text{Alb} - 2.5)\right)\right)$$
2. **Espesor funcional estimado ($\mu\text{m}$):** $\text{Espesor} = 0.35 + 1.65 \cdot I_{gc}$ *(rango 0,60 a 2,00 µm, anotando explícitamente que depende de la técnica)*.
3. **Coeficiente de reflexión ($\sigma$):** $\sigma = 0.85 \cdot I_{gc}^{1.35}$ *(de 0,85 sano a ~0,07 en shedding severo)*.
4. **Presiones Oncóticas ($\text{mmHg}$):**
   $$\pi_p = 5.54 \cdot \text{Alb}, \qquad \pi_{sg} = \pi_p \cdot (1 - I_{gc})^{1.1}$$
5. **Filtración Transvascular Normalizada ($J_v$ índice, $P_i = -2\text{ mmHg}$, $L_p S_{rel} = 1 + 2.5(1-I_{gc})$):**
   $$J_v = L_p S_{rel} \cdot \left[ (P_c - P_i) - \sigma \cdot (\pi_p - \pi_{sg}) \right]$$
6. **TERA estimado (%/h):** $\text{TERA} = 5 + 13 \cdot (1 - I_{gc})$.
7. **Calculadora Dual ALI / IFC:**
   - $\text{ALI}_{\text{directo (García Uribe)}} = \frac{\text{PCR (mg/L)}}{\text{Alb (g/L)}}$ *(corte alerta D3 $\ge 7,41$)*.
   - $\text{IFC}_{\text{Cordemans/Palacios}} = 10 \times \text{ALI}_{\text{directo}} = \frac{\text{PCR (mg/dL)}}{\text{Alb (g/L)}} \times 100$ *(normal 2,5–25; Cordemans >61; Palacios $\ge 85,55$)*.

### 4.3 Presets Clínicos
1. **Endotelio Sano:** Inflamación 5%, $P_c$ 20 mmHg, Shear 15, Alb 4.0 g/dL, PCR 5 mg/L → $I_{gc} \approx 0,97$, $\sigma \approx 0,81$, $J_v$ bajo, TERA ~5%/h, ALI 0,13 (IFC 1,3).
2. **Sepsis Temprana / Respuesta Inicial:** Inflamación 45%, $P_c$ 24 mmHg, Shear 9, Alb 2.9 g/dL, PCR 140 mg/L → shedding moderado, $\pi_{sg}$ ascendente, ALI 4,8 (IFC 48,3).
3. **Shock Séptico + Sobrecarga Hídrica ("Edema Refractario"):** Inflamación 88%, $P_c$ 38 mmHg, Shear 4, Alb 1.9 g/dL, PCR 280 mg/L → $I_{gc} \to 0,25$, $\sigma \to 0,13$, $\pi_{sg} \approx \pi_p$, fuga $J_v$ masiva, TERA ~15%/h, ALI 14,7 (IFC 147,4 ≥85,55).
4. **Hipoalbuminemia sin Tormenta Inflamatoria (ej. desnutrición crónica compensada):** Inflamación 10%, $P_c$ 18 mmHg, Shear 14, Alb 2.2 g/dL, PCR 8 mg/L → $I_{gc}$ preservado, fuga moderada hidrostática sin parálisis de VE-cadherina, ALI 0,36 (IFC 3,6).

### 4.4 Capas SVG y Hotspots Clickeables (10 elementos heredados y actualizados)
- **Canvas SVG (`viewBox 0 0 1000 620`, escala $0\text{–}2,0\ \mu\text{m}$):**
  1. *Lumen + Flujo celular:* eritrocitos y plaquetas cuya velocidad responde al slider `shearStress`, desplazándose hacia la pared cuando colapsa el espesor del GE.
  2. *Glicocálix dinámico:* 6 pilares **Sindecano-1** (2 cadenas HS + 2 CS c/u cuya altura `scaleY` y ángulo siguen continuamente a $I_{gc}$), 4 **Glipicanos-1** en caveolas eNOS, 3 **CD44** + polímero **Hialuronano** intacto o fragmentado en partículas flotantes proporcionales a $1-I_{gc}$, más **albúmina** y **AT-III** adsorbidas.
  3. *Monocapa y uniones:* hendidura **VE-cadherina** (cuya apertura y flechas de fuga `leakFlow` escalan con $J_v$) e **intersticio** con glóbulos de edema dinámicos.
- **10 Hotspots con doble capa (Base + R2–R3):** `membrana`, `sindecano`, `glipicano`, `heparan`, `condroitin`, `hialuronano`, `albumina`, `antitrombina`, `flujo`, `intersticio` *(con los textos de `glicocalix-endotelial.html` corregidos según Wang 2026, Daniyarova 2025, CLOVERS 2025 y ARISS 2026)*.

---

## 5. Actividades de Entrenamiento (SATI)

### Preguntas de Opción Múltiple (Estilo Examen SATI R2–R3)

**Pregunta 1:** Un paciente de 62 años cursa el día 2 de shock séptico abdominal. Se solicita un perfil de laboratorio: PCR 180 mg/L y albúmina sérica 2,0 g/dL (20 g/L). Un residente calcula el Índice de Fuga Capilar dividiendo directamente $180 / 20 = 9{,}0$ y concluye que el paciente está "muy por debajo del punto de corte de riesgo (85,55) publicado por Palacios Moguel". ¿Cuál es la interpretación correcta?
- A) Tiene razón: el valor de 9,0 indica indemnidad endotelial y autoriza reposición agresiva con cristaloides.
- B) El residente omitió multiplicar por 100 usando PCR en mg/dL: en la escala de Palacios/Cordemans este paciente equivale a **90**, superando tanto el umbral de Cordemans (>61) como el de Palacios (≥85,55), aunque debe interpretarse como marcador inflamatorio-oncótico indirecto y no como medición directa de permeabilidad.
- C) La fórmula correcta utiliza albúmina al cuadrado en el denominador para compensar la presión oncótica de Gibbs-Donnan.
- D) El Índice de Fuga Capilar solo puede calcularse si se dispone simultáneamente de Syndecan-1 plasmático >150 ng/mL.
- E) Con albúmina 2,0 g/dL debe iniciarse albúmina 20% para sostener ≥3,0 g/dL, dado que el ensayo ARISS 2026 demostró reducción significativa de mortalidad a 90 días.

> **Respuesta correcta: B.** *Fundamentación:* En `Palacios 2018` ($\text{PCR mg/dL} / \text{Alb g/L} \times 100 = 18 / 20 \times 100 = 90$) el umbral es ≥85,55; en `García Uribe 2021` el cociente directo ($180/20 = 9{,}0$) tiene corte D3 ≥7,41. Ambos expresan lo mismo con factor ×10. E es falsa porque ARISS 2026 fue neutro a 90d (43,3% vs 45,9%, RR 0,94).

**Pregunta 2:** En relación con el monitoreo del glicocálix endotelial en sepsis, ¿cuál de las siguientes afirmaciones refleja con mayor exactitud la evidencia publicada en 2025–2026 (Daniyarova 2025, CLOVERS 2025, Wang 2026, EDGE 2026)?
- A) La reanimación restrictiva con vasopresores precoces en CLOVERS redujo un 50% la degradación de heparán sulfato a las 24 h frente a la estrategia liberal.
- B) El Syndecan-1 plasmático predice de manera robusta la disfunción orgánica múltiple (MODS) y la falla respiratoria aguda, con homogeneidad metodológica ($I^2 < 20\%$).
- C) La degradación del glicocálix precede temporalmente a toda respuesta inmune-inflamatoria del huésped, actuando como gatillo primario único del shock.
- D) El heparán sulfato basal (LC-MS) se asocia fuertemente a mortalidad a 90 días (CLOVERS 2025), pero la estrategia hídrica no modificó el shedding a 24 h; además, Syndecan-1 se asocia a mortalidad (OR 2,04) pero no predijo MODS ni falla respiratoria en el metaanálisis 2025.
- E) En el estudio EDGE 2026, la región límite perfundida (PBR) por videomicroscopía sublingual fue el predictor multivariable más sólido de progresión a sepsis ($p < 0,001$).

> **Respuesta correcta: D.** *Fundamentación:* Resume los cuatro hallazgos clave de auditoría: CLOVERS (`PMID 40315385`) mostró gradiente 9,9→20,4→44,2% pero sin efecto de fluidos a 24h; Daniyarova 2025 (`PMID 41195755`) mostró SYN-1 NS para MODS (OR 2,35) y falla resp (OR 1,05); Wang 2026 (`PMID 41593637`) mostró respuesta inmune ya activa con SYN-1 normal; EDGE (`PMID 41998704`) mostró PBR NS en multivariable ($p=0,1$).

**Pregunta 3:** Según el Modelo Revisado de Starling (Levick & Michel) en un capilar continuo sano versus uno en shock séptico con pérdida del glicocálix, ¿qué ocurre con la fuerza oncótica transvascular?
- A) En el extremo venular sano predomina una reabsorción neta masiva de líquido intersticial hacia el capilar gracias a la presión oncótica del intersticio global.
- B) La fuerza oncótica efectiva se establece entre el plasma luminal y el espacio subglicocálix ($\pi_p - \pi_{sg}$); en salud $\pi_{sg} \approx 0$ y la filtración baja drena por vía linfática sin reabsorción venular neta, mientras que en sepsis colapsan $\sigma$ y $\pi_p - \pi_{sg}$ quedando la fuga gobernada por $P_c$.
- C) Infundir albúmina al 20% siempre revierte instantáneamente el edema intersticial aunque el coeficiente de reflexión $\sigma$ haya caído a cero.
- D) El espacio subglicocálix posee una concentración de proteínas idéntica al plasma basal (7 g/dL) para amortiguar cambios de presión hidrostática.
- E) La albúmina no interactúa con el glicocálix; solo ejerce presión oncótica libre en plasma y su tasa de escape transcapilar (TERA) en sepsis cae por debajo del 1%/hora.

> **Respuesta correcta: B.** *Fundamentación:* Regla central de no-reabsorción de Michel-Weinbaum/Levick-Michel: en sepsis $\sigma \to 0$, $\pi_{sg} \to \pi_p$ y la TERA sube de ~5%/h a >15%/h.

**Pregunta 4:** Un paciente séptico con traumatismo craneoencefálico moderado asociado (contusión frontal) presenta albúmina sérica de 2,1 g/dL y shock distributivo. ¿Qué conducta respecto a albúmina es correcta según la evidencia?
- A) Indicar albúmina al 4% o 20% precozmente para proteger la barrera hematoencefálica y mejorar la sobrevida a 24 meses.
- B) Evitar soluciones de albúmina en presencia de trauma craneoencefálico (mayor mortalidad demostrada en SAFE-TBI, RR 1,88) y priorizar cristaloides balanceados y soporte vasopresor guiado por respuesta dinámica.
- C) Administrar albúmina al 20% en carga de 60 g seguida de infusión para mantener ≥3,0 g/dL basado en el beneficio de sobrevida de ARISS 2026.
- D) Combinar albúmina 5% con heparina de bajo peso molecular para restaurar la expresión de eNOS caveolar en 2 horas.
- E) Reemplazar cristaloides por hidroxietilalmidón al 6% para preservar $\sigma$ endotelial sin edema cerebral.

> **Respuesta correcta: B.** *Fundamentación:* SAFE-TBI (`N Engl J Med 2007`, RR 1,88, $p<0,001$) y SSC 2026 recomiendan evitar albúmina en TCE; almidones contraindicados en sepsis.

### Casos "Detectá el error de guardia"
1. **Caso 1 (Albúmina como "esponja" en shock con anasarca):** Residente indica 200 mL de albúmina 20% cada 8 h en paciente con balance +12 L, VExUS 3 y PVC 16 mmHg para "chupar líquido del intersticio" sin evaluar respuesta ni diuresis/UF. *Error:* Con $P_c$ alta, $\sigma \to 0$ y TERA >15%/h, la albúmina fuga al intersticio, empeora congestión/preload venoso y según Li 2025/ARISS no mejora sobrevida ni sustituye la fase de evacuación (ROSE).
2. **Caso 2 (Sobrelectura del ALI en UTI):** Confundir PCR en mg/L con mg/dL en la fórmula de Palacios (`120 / 25 × 100 = 480`) o asumir que un IFC bajo descarta edema pulmonar por permeabilidad en paciente neutropénico/inmunosuprimido con baja síntesis de PCR.

### Flashcards de Repaso Rápido
- **Anverso:** ¿Qué porcentaje de GAGs del glicocálix representa el heparán sulfato y qué molécula anticoagulante endógena fija? → **Reverso:** 50–90% de los GAGs; fija Antitrombina III (y TFPI / ecSOD), acelerando ×1000 la inhibición de trombina/FXa.
- **Anverso:** ¿Cuál es el determinante oncótico en la ecuación revisada de Starling? → **Reverso:** $\sigma(\pi_p - \pi_{sg})$, entre el lumen y el microespacio subglicocálix ($\pi_{sg} \approx 0$ en salud), sin reabsorción venular neta; el retorno es linfático.
- **Anverso:** En el metaanálisis de Daniyarova 2025, ¿qué predijo Syndecan-1 y qué NO predijo? → **Reverso:** Predijo mortalidad (OR 2,04), pero **NO** MODS (OR 2,35 NS) ni falla respiratoria (OR 1,05 NS); Endocan tuvo OR 5,06 para mortalidad.
- **Anverso:** ¿Qué demostró CLOVERS 2025 respecto a fluidos y degradación del glicocálix? → **Reverso:** Heparán sulfato basal predijo muerte a 90d (9,9→44,2%), pero fluidos liberales vs restrictivos no alteraron su degradación a 24 h.
- **Anverso:** ¿Cuál es la diferencia ×10 entre ALI directo (García Uribe) e IFC (Cordemans/Palacios)? → **Reverso:** $\text{IFC}_{\text{Palacios}} = (\text{PCR mg/dL} / \text{Alb g/L})\times 100 = 10 \times (\text{PCR mg/L} / \text{Alb g/L})$; cortes: Palacios $\ge 85{,}55$, García Uribe D3 $\ge 7{,}41$.

---

## 6. Referencias Verificadas y Registro de Correcciones
1. Levick JR, Michel CC. *Cardiovasc Res*. 2010;87(2):198–210; Woodcock TE, Woodcock TM. *Br J Anaesth*. 2012;108(3):384–394.
2. Daniyarova KR et al. *MicrobiologyOpen*. 2025;14(6):e70155 (`PMID 41195755`).
3. Wang H et al. *Crit Care*. 2026;30:60 (`PMID 41593637`).
4. Oshima K et al. (CLOVERS). *Ann Am Thorac Soc*. 2025;22(9):1382–1393 (`PMID 40315385`).
5. Scarbeck MM et al. (EDGE). *Crit Care*. 2026;30(1):241 (`PMID 41998704`); Beltrán JC et al. *Crit Care*. 2026;30(1):61 (`PMID 41645301`); Rovas A & Kümpers P. *Crit Care*. 2026;30:413.
6. Rovas A et al. (NOSTRADAMUS). *Crit Care*. 2021;25(1):112 (`PMID 33741036`).
7. Sakr Y et al. (ARISS). *JAMA Netw Open*. 2026;9(2):e2559297 (`PMID 41712212`).
8. Li et al. *Mil Med Res*. 2025;12(1):51; Cusack R et al. *J Crit Care*. 2025;87:155039; Knothe C et al. *J Crit Care*. 2025;88:155077.
9. Palacios Moguel P et al. *Med Crit*. 2018;32(3):141–146; García Uribe LP. Tesis Cartagena 2021.
10. **Registro de corrección local:** Al integrar `glicocalix-endotelial.html` y `MIRA-Research` al módulo M03 se reemplazaron las afirmaciones previas de causalidad lineal (SYN-1 > SOFA/APACHE, lavado automático por bolos de 500 mL y meta obligatoria de albúmina >3,0 g/dL) por las auditorías 2025–2026.
