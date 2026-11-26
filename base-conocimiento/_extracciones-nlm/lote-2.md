# Extracción NotebookLM — Lote 2 (`Microcirculacion x2`, `PD y presion de pulso`, `Albumina`, `Farmacoterapia y manejo hemodinamico`)

Extraído el 2026-11-25 desde `https://notebook.google.com/`.

---

# 1. `Sepsis > Microcirculacion - Bibliografia extensa`
- **URL:** `https://notebook.google.com/notebook/d15affd9-f184-4e8c-ad9a-b173854a2f3c`
- **Fuentes:** **146 fuentes** (0 notas; 2 artefactos Studio: *Multimodal Permeability Phenotyping*, *Sepsis Mapa*)

### Bloque 1: Fisiología, Histología y Farmacología Básica
- **Glicocálix endotelial (eGC):** malla polianiónica luminal 0.5–3.0 µm; proteoglicanos Sindecano-1/4 y glipicanos; GAGs heparán sulfato (50–90%), condroitín sulfato y ácido hialurónico.
- **Starling revisado:** gradiente oncótico efectivo entre plasma libre y espacio subglicocálix desprovisto de proteínas.
- **Mecanotransducción / trombomodulación:** *shear stress* → eNOS → NO/prostaciclina; ecSOD; AT-III vía pentasacárido de HS; grosor supera longitud de selectinas P/E e ICAM-1/VCAM-1.
- **Farmacología vasoactiva y microcirculación:** Norepinefrina ($\alpha_1/\beta_1$), Levosimendán (sensibilizador Ca²⁺ + apertura $K_{\text{ATP}}$, 0.1–0.2 µg/kg/min), Nitroglicerina (sistémica IV falla en reclutar; tópica sublingual rescata densidad capilar funcional latente).

### Bloque 2: Fisiopatología Avanzada y Evidencia Clínica con Cifras Exactas
- **Shedding / PBR / Biomarcadores:**
  - Sindecano-1: sanos 20–40 ng/mL vs shock séptico mediana 204.5 ng/mL (IQR 114.2–358.9) vs controles 21.3 ($p<0.0001$).
  - PBR: normal 1.7–2.0 µm → sepsis mediana 2.34 µm (IQR 2.21–2.46, $p<0.0001$), daño sustancial $\ge 2.5\ \mu\text{m}$.
  - Rovas et al.: SYN-1 admisión AUC 0.781 (0.610–1.000, $p=0.035$), PBR admisión AUC 0.778 (0.582–0.977, $p=0.033$). MA biomarcadores endoteliales SYN-1 muerte OR 1.77 (0.93–3.36, $I^2=84.1\%$). *(Nota de auditoría: contrastar con Wang 2026 / Daniyarova 2025 / EDGE 2026 en M03).*
- **NOSTRADAMUS y SDF:** pérdida selectiva 5–7 µm + falla autorregulación $\text{CBV}_{\text{dynamic}}$, $\text{MVHS}_{\text{dynamic}}$ 7.4 → 1.8 ($p<0.0001$).
  - **Zhang et al. 2025/2026 (*Shock*):** $\text{PPV}_{6\text{h}} > 68.6\%$ AUC 0.788 (vs PAM 0.59, FC 0.58, PVC 0.50).
  - **Pan et al.:** a 6 h, aclaramiento lactato <20% asocia $\Delta\text{PPV}$ 5.9% vs 17.9% ($p=0.005$) y PI 0.79 vs 1.52 ($p=0.012$); PI 1.41% + $\Delta\text{PPV}$ 12.1% AUC 0.709 (S 62.2%, E 75.7%).
- **Cheng et al. 2025 (*J Intensive Care* 13:35, n=105):** $\text{Cv-aCO}_2/\text{Ca-vO}_2$ + $\text{Pv-aCO}_2$ estratifica mort 28d 8.3% (ambos normales) → 46.7% (ambos alterados, $p=0.014$). HR 1.67 (1.03–2.69, $p=0.036$) y HR 1.13 (1.00–1.27, $p=0.043$); correlación con $\text{sPPV} <20\ \mu\text{m}$: $r=-0.49$ ($p<0.001$) y $r=-0.22$ ($p=0.028$).
- **ANDROMEDA-SHOCK 1 & 2:** n=1501, Win Ratio 1.16 (1.02–1.33, $p=0.04$), mort 28d 26.5% vs 26.6% ($p=0.91$), fluidos 6h −251 mL (−312 a −190), inotrópicos 9.7% vs 3.6%.
- **ImmunoSep / PROVIDE:** MALS (ferritina >4420 ng/mL, mort 28d 79.1%, HR 2.38 [1.49–3.81]) / SIP (mHLA-DR <5000, mort 28d 66.9%, HR 1.76 [1.17–2.64]); ImmunoSep SOFA D9 35.1% vs 17.9%. Fan 2023 pediátrica (n=397): ferritina >500 mort 23% vs 5.7%, OR 4.85 (2.55–9.60).

### Bloque 3: Fórmulas, Parámetros y Umbrales para Simulador
- **CRT:** >3.0 s anormal (compresión 10 s portaobjetos).
- **DSI:** $\text{FC}/\text{PAD}$ (normal 1.0–1.4; $\ge 2.0$ urgencia vasopresora; $>2.2$ predictor muerte); **$\Delta\text{DSI}_{24\text{h}}$** (Sarkar 2026): falla en descenso $\Delta\text{DSI} \ge -0.17$ → HR 2.03 (1.34–3.06).
- **LDR (Li 2026):** $(\text{Lactato}/\text{PAD invasiva}) \times 100$.
- **VNERi (Goury 2025):** $\text{PAD} / (\text{NA }\mu\text{g/kg/min} \times \text{FC})$ en J invertida *(corte exacto del paper en vault: 2.6 / 6.7 / 10.8; nota: el cuaderno NLM reportó cifras aproximadas `<0.9 / 1.6-2.5 / >3.5` o de unidades distintas — verificar contra Goury 2025 `PMID 40133652`!)*.
- **PPV / sPPV:** >95–98% normal; $\le 68.6\%$ a 6h alta mortalidad. **MFI:** $\ge 2.9$ normal vs $<2.0$ crítico. **PBR:** 1.7–2.0 µm normal vs $\ge 2.34\text{–}2.50\ \mu\text{m}$. **PI:** >1.4% normal vs <0.6–1.4%.
- **$\text{Pv-aCO}_2$:** 2–5 mmHg normal vs >6 mmHg. **$\text{Cv-aCO}_2/\text{Ca-vO}_2$:** <1.0–1.4 vs >1.4–1.8.

### Bloque 4: Controversias, Límites Metodológicos y Errores de Guardia
- Trampa del Win Ratio en ANDROMEDA-2 (mortalidad idéntica 26.5% vs 26.6%; open-label).
- **Paradoja de DAMIS (Bruno et al., *Ann Intensive Care* 2023):** visualizar microcirculación SDF cambió conductas en 1ª hora (66.7% vs 41.8%, $p=0.009$) sin mejorar microcirculación a 24 h ni mortalidad 30 d (HR 1.54, $p=0.118$).
- No calcular DSI/LDR sobre PANI oscilométrica; requiere línea arterial con lavado rápido; falla en IC previa / betabloqueantes.
- No responder con bolos ciegos a CRT >3 s si PP $\ge 40$ y PAD $<50\text{ mmHg}$.
- Evitar nutrición parenteral hiperosmolar/glutamina en shock inestable (hiperglucemia $>120$ acelera shedding y riesgo *Candida*).

### Bloque 5: 15 Estudios Fundamentales (ANDROMEDA 1 & 2, ImmunoSep, PROVIDE, DAMIS 2023, NOSTRADAMUS 2021, Goury 2025, Sarkar 2026, Li 2026, Bertacchi 2024, Cheng 2025, Zhang 2025/2026, Fan 2023, Ilyina 2022, Clausen/MA 2024/2025).

---

# 2. `Sepsis > Microcirculacion - Sintesis clinica y fenotipos`
- **URL:** `https://notebook.google.com/notebook/96ae6e1e-8d85-4ef6-be99-60fec67c8944` (15 ene 2026)
- **Fuentes:** **47 fuentes** (Notas presentes; Studio vacío)

### Bloque 1: Fisiología, Histología y Farmacología Básica
- **Ultraestructura del Glucocálix (GE):** espesor hidratado 0,5–1,0 µm (rango 0,2–2,0 µm) en capilares/vénulas; heparán sulfato 90–95% de GAGs, ácido hialurónico, condroitín/dermatán sulfato; albúmina (67 kDa), AT-III y ecSOD adsorbidas en ESL.
- **Starling Revisado:** $J_v = K_f[(P_c - P_i) - \sigma(\pi_p - \pi_{sg})]$; $\pi_{sg} \approx 0$ en endotelio íntegro; colapso de GE eleva $\pi_{sg}$ y genera fuga sin reabsorción venular.
- **Mecanotransducción:** *shear stress* → hialuronano/sindecanos → actina/tubulina → $\text{Ca}^{2+}$/calmodulina → eNOS → NO y $\text{PGI}_2$.
- **Farmacología protectora:** UFH/HBPM inhiben heparanasa (HPA-1); Sulodexide (80% heparina rápida + 20% dermatán sulfato); Albúmina 20% + esfingosina-1-fosfato (S1P).

### Bloque 2: Fisiopatología Avanzada y Evidencia Clínica con Cifras Exactas
- **CLOVERS (Oshima et al., *Ann Am Thorac Soc* 2025;22(9):1382-1393, n=574):** HS basal por LC-MS predice muerte 90d: tercil inferior **9,9%** → medio **20,4%** → superior **44,2%** ($p<0,001$), **aHR 3,12 (2,18–4,46)**. Estrategia liberal vs restrictiva NO modificó degradación a 24 h.
- **Daniyarova et al. 2025 (*MicrobiologyOpen* 14(6):e70155, 23 estudios, n=4.529):** SYN-1 mortalidad **OR 2,04 (1,66–2,51, I²=84%)**, MODS **OR 2,35 (0,93–5,94 NS)**, falla respiratoria **OR 1,05 (0,27–4,02 NS)**; Endocan mortalidad **OR 5,06 (2,52–10,18, I²=42,5%)**.
- **Wang et al. 2026 (*Crit Care*, n=384 NAC/sepsis):** corte SYN-1 **3.037,9 pg/mL** (óptimo 4.474 pg/mL); mort 30d 17,7% vs 8,2% ($p=0,013$); relación no lineal ($p=0,008$); activación sistémica ya presente con SYN-1 normal.
- **ANDROMEDA-SHOCK-2 (*JAMA* 2025;334(22):1988-1999, n=1.501):** SWR 1,16 (1,02–1,33, $p=0,04$), mort 28d 26,5% vs 26,6% (HR 0,99), días libres soporte vital 16,5 vs 15,4 (pOR 1,28), fluidos 6h 600 vs 850 mL (balance 0,9 vs 1,2 L).
- **Putowski et al. 2023 (*J Intensive Care Med*, 10 estudios, n=917):** correlación PAM vs CRT pobre ($R = -0,158$, $p<0,001$, $I^2=0\%$).
- **Dubin et al. 2009 (*Crit Care* 13:R92):** subir PAM 65→75→85 mmHg no mejoró MFI/PPV y redujo FCD ($18 \to 14\text{ vasos/mm}^2$, $p=0,045$).
- **Chen D et al. 2024 (*Front Med* 11:1429109, n=105):** HBPM 4000 UI/d × 7d en miocardiopatía séptica redujo HPA-1/SYN-1 y mortalidad 28d 45,3%→19,2% ($p<0,001$) *(auditar contra Chen TT 2023 neutro del mismo centro)*.

### Bloque 3: Fórmulas, Parámetros y Umbrales para Simulador
- **Starling Revisado:** $\sigma$ (normal 1 → lisis GE 0). **Gap $\text{CO}_2$:** $>6,0\text{ mmHg}$. **Índice Heterogeneidad (HI):** $(MFI_{\max}-MFI_{\min})/MFI_{\text{prom}} > 0,40$.
- **Cytocam-IDF vs SDF:** $TVD \approx 21,60 \pm 4,30\text{ mm/mm}^2$, $PVD \approx 21,50 \pm 4,38$ (vs SDF $16,35 \pm 2,78$, $p<0,0001$); shock $PVD < 10$, $MFI < 2,0$, $PPV < 65\text{–}75\%$, $PBR > 2,0\text{–}3,2\ \mu\text{m}$.
- **Modelos Fenotípicos 4V-2C (Vélez-Páez 2025 *RATI*) y SLOOP (Huang 2025 *Shock*):**
  - *Vasoplejía (Paralysis):* NA >0,2 µg/kg/min, PAM <65, $SvO_2 >70\%$, IC >2,3, PVC >8, SVRI/SBRI bajos, TVD conservada.
  - *Vasoconstricción (Occlusion):* PAM normal/alta, CRT >3 s, $\Delta\text{CO}_2 >6$, SBRI alto, TVD/PVD colapsados.
  - *Obstrucción Vascular (Obstruction):* plaquetopenia, DD/TAT altos, TEG alterado, microagregados.
  - *Congestión Venosa (Stasis):* PVC >12, VExUS 2–3, MFI bajo con estasis venular.
  - *Fuga Capilar (Leakage):* PVPI >3,0, EVLW alto, PBR >2,0, SYN-1 >3.000 pg/mL.
  - *Hipoxia Citopática:* Lactato >2–4 con $SvO_2 >70\text{–}80\%$, $DO_2$ conservado.

### Bloque 4 y 5: Controversias y 13 Estudios Clave
- PAM ≥65 no garantiza perfusión; no guiar fluidos por lactato aislado; no asumir 30 mL/kg sin respuesta a volumen (CLOVERS 2025); paradoja de coloides si $\sigma \to 0$ (Cusack 2025); SYN-1 no predice MODS (Daniyarova 2025); CRT estandarizado con portaobjetos 10 s.
- 13 estudios: ANDROMEDA-2, CLOVERS 2025, Daniyarova 2025, Vélez-Páez 2025, Huang 2025, Ince 2015, Dubin 2009, Putowski 2023, Cusack 2025, Chen D 2024, Fage 2023, Aykut 2015, SSC 2021/2024.

---

# 3. `Sepsis > PD y presion de pulso`
- **URL:** `https://notebook.google.com/notebook/d9e19d53-5ecb-48e2-ab62-18ab7d778454` (2 may 2026)
- **Fuentes:** **86 fuentes** (Notas + Conversaciones de Gemini [1]; Studio vacío)

### Bloque 1: Fisiología y Farmacología
- **Efecto Windkessel y decaimiento diastólico:** depende de RVS y duración de diástole (FC); PAD baja con taquicardia severa = vasoplejía profunda que supera el acortamiento diastólico.
- **Presión de Pulso:** $PP = PAS - PAD \approx SV / C$ (en rigidez arterial senil la onda refleja temprana amplifica PAS y ensancha PP).
- **Guyton:** $VR = (MSFP - RAP)/RVR$; noradrenalina ($\alpha_1$) recluta volumen no estresado → estresado elevando MSFP; vasopresina ($V_1$ / cierre $K_{\text{ATP}}$) preserva diástole sin taquicardia; dobutamina ($\beta_1/\beta_2$) y milrinona (PDE-3) pueden desplomar PAD si hay vasoplejía.

### Bloque 2: Evidencia Clínica con Cifras Exactas
- **Ji et al. 2026 (*Front Med* 13:1770215, n=3.194 MIMIC-IV + externa):** zona segura PP24h **40–70 mmHg**. >70 mmHg aOR 1,656 (1,274–2,153, $p<0,001$); <40 mmHg aOR 1,476 (1,182–1,844, $p=0,001$). PSM: PP alta vs normal mort 28d 34% vs 26% ($p=0,027$); PP baja vs normal 42% vs 32% ($p=0,001$, mort 3d 14% vs 9%). Interacción por edad: >65 años predomina daño con PP >70; ≤65 años con PP <40 ($p_{\text{int}}<0,05$).
- **Lee et al. 2020 (KoSS, *Korean J Intern Med* 35(6):1400-1409, n=340):** TWA-PP 6h mayor en no sobrevivientes (43,0 vs 39,2 mmHg, $p=0,020$; OR 1,28 [1,012–1,622], $p=0,039$).
- **Ospina-Tascón 2020 (*Ann Intensive Care* 10:41):** DSI pre-vasopresor superó a PAM e índice de shock.
- **Sharma et al. 2026 (*IJCCM* 30(2):99-106, n=90):** $\Delta\text{DSI}_{24\text{h}}$ superó DSI basal (AUC 0,684 vs 0,402); $\Delta\text{DSI}+\text{VIS}+\text{Lactato}$ AUC 0,781; $\Delta\text{DSI}$ OR 4,07 ($p=0,006$).
- **Lim et al. 2025 (n=93 shock cardiogénico / ECMO-CS):** Presión de Perfusión Diastólica ($\text{DPP} = \text{PAD} - \text{RAP}$), corte **37 mmHg**; ningún paciente con DPP <36 mmHg respondió a inotrópicos ($CPOI \ge 0,28\text{ W/m}^2$); beneficio de VA-ECMO si DPP <37 mmHg.
- **Paiva et al. 2024 (*Eur Heart J*):** $\text{DSI} \ge 2,2$ identificó fenotipo mixto vasopléjico-cardiogénico.

### Bloque 3: Fórmulas para Simulador
- $PP = PAS - PAD$ (40–70 mmHg segura); $DSI = FC/PAD$ (<1,4–1,6 normal, ≥2,0–2,2 severo); $\Delta DSI = DSI_{24h}-DSI_{0h}$; $DPP = PAD - RAP$ (<37 mmHg); $CPP = ADP - LVEDP$; $PAM = \frac{2}{3}PAD + \frac{1}{3}PAS$; $MPP = PAM - CVP$ (<60 mmHg riesgo AKI); $CPO = (PAM \times CO)/451$ (<0,60 W); $CPOI = [(PAM-RAP)\times CI]/451$ (≥0,28 W/m²); $API = (PAS-PAD)/PCWP$ (<1,45); $PAPI = (PASP-PADP)/RAP$ (<0,90); $Eadyn = PPV/SVV$ (<1,0 vasoplejía, >1,0 fluido sube PAM); $TVC\ \Delta PPV = PPV_{8mL}-PPV_{6mL} \ge 3,5\%$; $VIS$.

### Bloque 4 y 5: Controversias y 12 Estudios Principales
- No titular NE ciega a PAM sin ver desacople $Ea/Ees$ (>1,36); no malinterpretar PP >70 en ancianos; respetar condiciones de PPV (VT, esfuerzo $P_{0.1}\ge 1,5$); macro ≠ micro; no dar inodilatadores puros en cardiogénico vasopléjico (DPP <37 / DSI ≥2,2).
- 12 referencias: Singer 2016, Hernández 2019, Lamontagne 2020 (65 Trial), Lee 2020, Ospina-Tascón 2020, Evans 2021, Valeanu 2021, Khanna 2023, Paiva 2024, Lim 2025, Ji 2026, Sharma 2026.

---

# 4. `Sepsis > Albumina`
- **URL:** `https://notebook.google.com/notebook/858875c3-9775-423b-932c-ee30d1315207` (15 ene 2026)
- **Fuentes:** **42 fuentes** (Notas presentes; Studio vacío)

### Resumen Completo (Bloques 1–5)
- **Fisiología / Cinética:** Pool 4–5 g/kg (40% IV / 60% extravascular); síntesis 120–150 mg/kg/d; **TERA basal ~5%/h** (en sepsis >15%/h, +300%); $t_{1/2}$ ~20 d (reciclaje FcRn); albúmina 5% expansión ~1:1 vs albúmina 20–25% (COP ~70–100 mmHg, recluta 3,5–4× volumen si $\sigma$ y linfáticos preservados). Starling revisado ($L_p S \approx 20\times 10^{-7}$, $\sigma$ músculo 0,85–0,95, pulmón 0,5–0,7 → 0 en sepsis).
- **Evidencia Clínica:** SAFE 2004/2011 (n=6.997, sepsis OR 0,87 [0,74–1,02]; **SAFE-TBI 2007 RR 1,88 [1,31–2,70], $p<0,001$**); ERASS 2011 (n=792, 24,1% vs 26,3%); ALBIOS 2014 (n=1.818, global RR 0,94, post-hoc shock n=1.121 RR 0,87 [0,77–0,99], $p=0,03$, VP 3 vs 4 d); CRISTAL 2013 (n=1.553 shock HR 0,95); MA NIH 2024 (14 ECA, n=6.736, global RR 0,98 [0,93–1,04], 90d RR 0,89 [0,79–1,00] cruzó futilidad TSA); **Cusack 2025** (albúmina 20% ~300 mL mejora NIRS/VOT en respondedores); **Li 2025 (*Mil Med Res*, TTE MIMIC-IV n=27.088)**: albúmina <24h aumentó SA-AKI +3,47% (94,18% vs 90,71%) y adelantó falla 7,69 h sin ventaja 7d; **ARISS 2026 (Sakr, n=440)**: mort 90d 43,3% vs 45,9% (RR 0,94 [0,76–1,17], $p=0,71$).
- **Simulador:** $J_v = L_p S [(P_c - P_i) - \sigma(\pi_c - \pi_{sg})]$; $\text{I-L/A (Lactato/Albúmina)} \ge 0,79$ (AUC 0,790); SYN-1.
- **Errores:** tratar albuminemia aislada; usar albúmina 20% con $\sigma \to 0$; retrasar NE; usar albúmina en TCE (SAFE-TBI).

---

# 5. `Sepsis > Farmacoterapia y manejo hemodinamico`
- **URL:** `https://notebook.google.com/notebook/90d8b9a1-1a3d-4389-8c45-def7718b0a29` (18 ene 2026)
- **Fuentes:** **110 fuentes** (3 notas guardadas; Studio vacío)

### Resumen Completo (Bloques 1–5)
- **Fisiología y Receptores:** Guyton $V_r = (P_{msf} - P_{ra})/R_{vr}$ (60–70% volumen en capacitancia venosa; autotransfusión $\alpha_1$ de NE); $V_{1a}$ de AVP; $AT_1$ de Angiotensina II; $\beta_1/\beta_2$ dobutamina; sensibilizador Ca²⁺ + $K_{\text{ATP}}$ levosimendán.
- **Evidencia Cuantificada:** CENSER (<1 h) + Ospina-Tascón (NE <1 h: fluidos 8h 1100 vs 2600 mL, mort 28d HR 0,31 [0,17–0,57]); **Rodríguez 2025 (*J Clin Med*, 11 ECA, levosimendán vs dobutamina en SICM)**: OR 0,64 (0,47–0,88), FEVI +5,49%, BNP SMD −1,87, lactato SMD −1,63 (TSA aún incompleto); Corticoides NMA 2024 (17 ECA, n=7.688, HC+FC vs placebo RR 0,85 [0,72–0,99], HC+FC vs HC RR 0,88 [0,74–1,03]) + MA 18 ECA (n=7.982, RR 0,88); VASST (<15 µg/min 26,5 vs 35,7%); VANISH (TRR OR 0,40); ATHOS-3 (69,9 vs 23,4%); SEPSIS-ACT (selepresina negativa); **AdrenOSS-2 subgrupo (Knothe 2025, *J Crit Care*)**: enibarcimab/adrecizumab con bio-ADM >70 pg/mL + DPP3 <70 ng/mL → mort 28d 26%→18% (HR 0,65), ΔSOFA 1,33 ($p=0,006$).
- **Simulador:** $V_r$, $RVS = [(PAM-PVC)/GC]\times 80$, $TPP = PAM - CCP$, $\Delta pCO_2 > 6$, $CRT > 3\text{ s}$, Mottling $\ge 2$, $PAD < 50$, $VVS > 12\text{–}13\%$, $EVLWI > 10\text{ mL/kg}$.
- **Errores de guardia:** esperar 30 mL/kg para iniciar NE; "PA cosmética" con incoherencia micro; titular AVP como catecolamina (>0,04 UI/min); malinterpretar LeoPARDS (sin cribado eco); nitroglicerina IV (Boerma 2010 negativa); confundir lactato $\beta_2$ por adrenalina con hipoperfusión.
