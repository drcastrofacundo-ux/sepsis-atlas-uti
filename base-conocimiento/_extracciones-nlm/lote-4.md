# Extracción NotebookLM — Lote 4 (`LRA en Shock Séptico`, `Higado en shock`, `Oxigeno - hiperoxia y microcirculacion`, `[Cardio] Shock & Vasoactivos`, `[Eco] Ecografía Crítica`, `[SATI] clases`)

Extraído el 2026-11-25 desde `https://notebook.google.com/` (se excluyó estrictamente `[SATI] Registro de Pase de Guardia`).

---

# 1. `Manejo de la Lesión Renal Aguda en el Shock Séptico`
- **URL:** `https://notebook.google.com/notebook/b49a91b6-6000-4caf-974f-dbc0f1971a6b` (6 ago 2026)
- **Fuentes:** **6 fuentes** (`ATHOS-3 AKI post-hoc`, `VANISH`, `SMART NEJM 2018`, `Reporte Nefrología en Sepsis`, `Sepsis-Associated AKI review PMC`, `Tigris Trial`; 1 presentación en Studio).

### Bloque 1–5 (Resumen Completo Integrado)
- **Fisiopatología básica:** S-AKI ocurre con RBF global conservado/aumentado por vasodilatación eferente desproporcionada + inducción cortical de iNOS (shunt cortical + hipoxia medular) + vía RIPK3/NOX4 (inhibición complejos I/III → parada del ciclo celular / hibernación tubular protectora). Farmacología: NE ($\alpha_1$), AVP ($V_1$), Angiotensina II ($AT_1$ vasoconstricción eferente preferencial).
- **Evidencia clínica en este cuaderno:** SMART (`Semler 2018`, n=15.802, MAKE30 sepsis **33,8% vs 39,5%, OR 0,80 [0,67–0,94], p=0,01**); VANISH (`Gordon 2016`, n=409, TRR **25,4% vs 35,3%**, dif −9,9%); ATHOS-3 AKI-3 post-hoc (`Chaba 2025, Shock`, n=203, mort 28d **48% vs 67%, HR 0,57 [0,36–0,91], p=0,024**; AKI global HR 0,75 NS); Aldardeer 2024 (`HR 0,588` ajuste tardío β-lactámicos); STARRT-AKI 2020 (dependencia diálisis 90d **10,4% vs 6,0%**); AKIKI-2 2021 (demora extrema urea >140 mg/dL → **HR 1,25**); TIGRIS 2026; Kovacevic 2026 (CytoSorb vs oXiris n=97, sin dif en días libres VP ni sobrevida).
- **Umbrales:** `%FO = [(Ingresos - Egresos)/Peso] × 100` (>4,6% pre-CRRT predice mort 28d; >9,6% letalidad disparada); ARC >130 mL/min/1,73 m²; dosis CKRT (efluente 20–25 mL/kg/h).
- **⚠️ AUDITORÍA CRÍTICA DE ESTE CUADERNO:** Este cuaderno sugiere PAM 70–80 mmHg en HTA crónica citando OPTPRESS y presenta TIGRIS sin caveat bayesiano. **Corregido en bóveda primaria**: en **OPTPRESS (`PMID 40358717`)**, PAM 80–85 vs 65–70 se detuvo por exceso de mortalidad (39,3% vs 28,6%) **sin beneficio en ningún subgrupo, incluidos hipertensos crónicos**; y **TIGRIS (`PMID 41887242`)** es RCT abierto sin sham con prior bayesiano informativo (n=151, RRA 28d 6,4% / 90d 17,4%).

---

# 2. `Sepsis > Higado en shock`
- **URL:** `https://notebook.google.com/notebook/be9bf54d-e848-4cec-8592-ac4a0ac70aae` (25 jun 2026)
- **Fuentes:** **52 fuentes** (Notas + Conversaciones de Gemini [1]; Studio vacío)

### Bloque 1: Fisiología, Histología y Farmacología
- **Zonificación acinar:** Zona 3 (perivenosa/centrolobulillar) = menor tensión basal de $O_2$ → blanco preferente de hepatitis hipóxica. Células endoteliales sinusoidales fenestradas (LSECs) + células de Kupffer (80–90% macrófagos tisulares) + transportadores biliares (NTCP, OATP, BSEP, MDR3/4, AE2 → colestasis funcional séptica).
- **Propofol (2,6-diisopropilfenol):** emulsión soja/lecitina 1–2% (1 mL = 0,1 g grasa = 1,1 kcal), metabolismo UGT1A9 + CYP2B6, metabolitos quinol (orina/hígado verde), inhibición CPT-I + desacoplamiento Complejos I, II, III y CoQ10 + antagonismo funcional β y canales lentos $\text{Ca}^{2+}$.

### Bloque 2: Evidencia Clínica con Cifras Exactas
- **SRLI/SALD:** incidencia 11–34,7%, mortalidad **54–68%**. **Chen X et al. 2026 (*Front Med* 13:1649101, MIMIC-IV n=9.434 + Jinling externa):** Random Forest **ROC-AUC 0,867 (0,834–0,900)** interna / **0,862 (0,785–0,938)** externa (vs SOFA 0,729, SAPS II 0,632); **umbrales SHAP 24h: Bilirrubina >0,75–0,80 mg/dL + INR >1,45**. Piroptosis vía TLR4/NF-κB/NLRP3/caspasa-1/GSDMD (`Xu 2025`).
- **PRIS / Propofol:** incidencia 1,1% global (`Roberts 2009`), **17%** si ≥5 mg/kg/h, **31%** si >6 mg/kg/h; mortalidad 18–81%. **Krajčová 2015 (*Crit Care* 19:398, 153 casos):** fiebre OR 8,25, arritmias OR 4,60, hiperkalemia OR 2,86, acidosis metabólica OR 2,48. **Cohorte Pitié-Salpêtrière 2025 (*Front Neurol* 16:1753979, 2.158 días-paciente):** al día $t+1$ triglicéridos +1,24 g/L, $p\text{CO}_2$ +1,36 mmHg, pH −0,014, fosfato −0,05 mmol/L, PCR +20,0 mg/L, PCT +0,72 µg/L (AST/ALT NS).
- **Hepatitis hipóxica (IRI Zona 3):** etiologías shock 48%, PCR 25%, hipoxemia 13%; hemorragia >1500 mL hiperbilirrubinemia OR 23,911 ($p=0,019$).

### Bloque 3–5: Fórmulas, Errores y 12 Estudios Clave
- **EASL DILI Factor R:** $(\text{ALT}/\text{ULN}_{\text{ALT}}) / (\text{ALP}/\text{ULN}_{\text{ALP}})$ ($\ge 5$ hepatocelular, $2<R<5$ mixto, $\le 2$ colestásico) + **Ley de Hy modificada (nR)**: Max(ALT,AST) $\ge 3\times\text{ULN}$ + Bb $\ge 2\times\text{ULN}$ (mortalidad $\ge 10\%$).
- **SRLI:** Bb >2,0 mg/dL + INR >1,5. **Propofol límites:** ≤4–5 mg/kg/h (67–83 µg/kg/min), ≤48 h, dosis acumulada crítica >240–360 mg/kg (`Hemphill 2019`: 380 mg/kg), lípidos >2–3 g/kg/d; **CPK ≥5.000 UI/L (`Schroeppel 2014`: redujo PRIS a 0/1.038)**; aporte glucosa protector **6–8 mg/kg/min**.
- **Errores de guardia:** confundir colestasis séptica (ALP/GGT 2–3×, AST/ALT casi normales) con hepatitis hipóxica (AST/ALT >10–20×); dar bicarbonato en bolo en acidosis láctica PRIS; escalar catecolaminas y propofol en círculo vicioso; pensar que hemodiálisis convencional dializa propofol (>98% UP lipofílico); confiar en SOFA hepático día 1 (solo mide bilirrubina).
- 12 referencias principales: SSC 2026, EASL 2019, Chen 2026, Xu 2025, Pretzsch 2022, Mirrakhimov 2015, Pitié-Salpêtrière 2025, Krajčová 2015, Schroeppel 2014, Hemphill 2019, Roberts 2009, Wang 2022.

---

# 3. `Oxigeno - clase Martes UTI (hiperoxia y microcirculacion)`
- **URL:** `https://notebook.google.com/notebook/4a5e97cb-3c6b-4098-94e9-e0640ef6904e` (30 jul 2026)
- **Fuentes:** **73 fuentes** (0 notas; 6+ artefactos Studio)

### Resumen Completo (Bloques 1–5; foco en hiperoxia, DO2/VO2 y microcirculación en sepsis)
- **Fisiología:** $O_2$ como fármaco dosis-dependiente (HALI si $\text{FiO}_2 > 0.70$ sostenida). Transicionar SpO₂ 96%→100% dispara $\text{PaO}_2$ a 200–400 mmHg con mínimo aporte disuelto ($0.0031\text{ mL O}_2/\text{dL/mmHg}$). Hiperoxia genera $\text{O}_2^{\bullet-}$ que consume $\text{NO} \to \text{ONOO}^-$, provocando vasoconstricción arteriolar/coronaria y anulación del sensor alostérico eritrocitario (ATP/$S$-nitrosotioles).
- **Evidencia Clínica:** **De Backer 2002** (<20 µm perfundidos **48% vs 90%**, $p<0.001$); **Farquhar 2009** (resistencias coronarias +21.5% a +40.9%, flujo −7.9% a −28.9%); **IOTA (Chu 2018, 25 RCTs, n=16.037)** liberal RR mort hosp 1.21 (1.03–1.43); **HYPERS2S (Asfar 2017, n=442)** detenido (mort 28d 43% vs 35%, SAE 85% vs 76%); **LOCO2 (Barrot 2020, n=205)** detenido por daño en rama conservadora 55–70 mmHg (44.4% vs 30.4%, 5 vs 0 isquemia mesentérica); **UK-ROX (Martin 2025, n=16.500)** neutro (35.4% vs 34.9%, p=0.28); **LOGICAL (Hodgson 2026, n=1.840)** neutro (GOS-E 5–8 38.2% vs 39.7%, p=0.65); **HOT-ICU (2021, n=2.928)** neutro (42.9% vs 42.4%); **AVOID (2015, n=441)** reinfarto **5.5% vs 0.9%**; **DETO2X-AMI (2017, n=6.629)** neutro.
- **Simulador:** $\text{CaO}_2 = (\text{Hb}\times 1.34\times \text{SaO}_2) + (\text{PaO}_2\times 0.0031)$, $\text{DO}_2 = \text{GC}\times\text{CaO}_2\times 10$ (normal 900–1100 mL/min; $\text{DO}_{2\text{crit}} = 300\text{–}330\text{ mL/min/m}^2$), $\text{VO}_2$ (normal 200–300 mL/min), $\text{O}_2\text{ER} = \text{VO}_2/\text{DO}_2$ (normal 20–30%; >60–70% anaerobiosis).
- **Errores de guardia:** confiar en SpO₂ 100%; acoplamiento matemático $\text{DO}_2/\text{VO}_2$; tratar lactato adrenérgico subiendo $\text{DO}_2$; irse a extremos (HYPERS2S vs LOCO2); **hipoxemia oculta en piel oscura** (1.1% clara vs 8.2% intermedia vs **21.1% oscura**, Gudelunas 2024).

---

# 4. `[Cardio] Manejo Actualizado del Shock e Insuficiencia Cardíaca`
- **URL:** `https://notebook.google.com/notebook/28486c9c-a6b5-4c09-a85b-5567203641ea` (21 abr 2025)
- **Fuentes:** **10 fuentes** (0 notas; 1 mapa mental en Studio)

### Resumen Focalizado (Shock séptico/mixto, vasoactivos, inotrópicos y precarga)
- **Fisiología y fármacos:** Ley de Poiseuille ($r^4$), Frank-Starling, NE (0.05–1.5 µg/kg/min), dopamina, dobutamina (2–20 µg/kg/min), milrinona (0.375–0.75 µg/kg/min), levosimendán (0.05–0.2 µg/kg/min), AVP.
- **Evidencia:** **SOAP II (2010, n=1.679)**; **ESC 2021** (epinefrina triplicó riesgo muerte vs NE en shock cardiogénico, n=2.583); **Vieillard-Baron 2020 (SDRA, n=1.861)**: injuria VD 21%, muerte UCI **OR 3.08**; **Kumar 2006** (−7.5%/h); **Ferreira 2001** (SOFA >15 >90% mortalidad); **VA-ECMO miocarditis (*Int J Cardiovasc Sci* 2024)**: sobrevida 41%, isquemia MMII 16.9%.
- **Umbrales:** $IC < 2.2\text{ L/min/m}^2$, $RVS = 800\text{–}1200$, $IS = FC/PAS > 0.9$; **Kircher 1990** VCI/PAD; disfunción VD (**TAPSE <17 mm**, S' <9.5 cm/s, FAC <35%, VD/VI >0.6–1.0); $E/e' > 15 \to PCP > 15$.
- **Errores:** PVC estática aislada; sobrecargar VD con bolos 500–1000 mL; "dosis renal" dopamina; dar dobutamina en betabloqueados crónicos (preferir levosimendán/milrinona).

---

# 5. `[Cardio] Fármacos Vasoactivos`
- **URL:** `https://notebook.google.com/notebook/5f4d4357-cca7-48b1-ab23-1dc452a57057` (20 nov 2025)
- **Fuentes:** **28 fuentes** (1 nota: *Vasoactivos e Inotrópicos en Infusión Continua*; Studio vacío)

### Resumen Focalizado
- **Evidencia:** **SOAP II / De Backer 2012/2017** (dopamina vs NE: mortalidad **RR 1.611**, arritmias **RR 3.426**, GI **RR 5.474**); **OptimaCC (Levy 2018, *JACC*)**: adrenalina vs NE shock refractario **37% vs 7%**; **VIS (Pérez Navero / García 2016–2017)**: $\text{VIS} \ge 20$ a 12 h **AUC 0.852** (S 69%, E 90%).
- **Fórmulas:** $\text{VIS} = \text{Dop} + \text{Dob} + 10(\text{Mil}) + 100(\text{Epi}+\text{NE}) + 10\,000(\text{AVP})$; $E_a \approx 0.9\times PAS / VS$, óptimo $E_a/E_{es} \approx 1.0$.
- **Perla crítica de enfermería/farmacia UTI:** **Incompatibilidad física en Y** entre **furosemida (pH >8–9)** y **catecolaminas (pH ≤4)** → precipitación inmediata de microcristales; iniciar NE por vía periférica proximal/antecubital mientras se coloca CVC sin demorar PAM.

---

# 6. `[Eco] Ecografía en el Paciente Crítico`
- **URL:** `https://notebook.google.com/notebook/93f4f66f-695e-46ee-9cd4-a01923e4f8c0` (18 ago 2025)
- **Fuentes:** **34 fuentes** (2 notas; 1 presentación Studio: *Precision IVC Hemodynamics*)

### Resumen Focalizado (PoCUS, RUSH, VTI, BLUE, VExUS, Cardiopatía Séptica)
- **Rendimiento:** **RUSH** (S 85%, E 95%); neumotórax eco S 91%/E 99%; **BLUE** precisión **90.5%**; WIPO (≥6 líneas B en 4 cuadrantes anteriores: S 88%, E 88%); **OTSVI/SAM hasta 22%** en shock séptico temprano; **EPSS >9.5 mm** (LR+ 9.5 para FEVI <40%); **Zhang 2025 (*PLoS ONE*)** VCI sepsis global S 0.84/E 0.87 ($cVCI$ espontánea S 0.92/E 0.93; $dVCI$ VMI S 0.79/E 0.82); **Cardozo Júnior 2023** espontánea AUC 0.83 (S 0.63/E 0.83); **Berikashvili 2025 (*J Clin Med* 14:492)** SUCRA $\Delta$ Caval 98.4% > Caval 73.7% > IJV 65.7% > $VCI_{\min}$ 58.8% (VYI útil cuando HIA/PEEP distorsionan VCI).
- **Fórmulas:** $VS = VTI_{TSVI} \times \pi \times (\varnothing_{TSVI}/2)^2$ (VTI normal 18–22 cm; <15 bajo gasto; >18 hiperdinamia); **PLR** $\Delta VTI \ge 15\%$; **TOTE** 15 s $\Delta GC \ge 5\%$; **Mini-Fluid Challenge** 100 mL en 2 min $\Delta VS \ge 5\%$ (S 93%, E 91%); $cVCI > 40\text{–}42\%$ espontánea / $dVCI \ge 12\text{–}18\%$ VMI; **LUS** 0–36.
- **Errores:** VCI estática sola (AUROC ~0.50); "efecto cilindro" (medir 2 ejes ortogonales); usar VCI con HIA/PEEP >10 (preferir VYI); usar índices dinámicos con $VC<8$, esfuerzo o cor pulmonale; dar dobutamina en SAM/OTSVI.

---

# 7. `[SATI] clases`
- **URL:** `https://notebook.google.com/notebook/bfa45dba-9441-4932-b6ab-ac25715e0ed4` (18 may 2026)
- **Fuentes:** **240 fuentes** en 9 carpetas temáticas (0 notas; 7+ artefactos Studio). *Excluido estrictamente `[SATI] Registro de Pase de Guardia`.*

### Respuesta Completa Focalizada en Perlas Docentes y Examen SATI R2–R3
- **Bloque 1 (Fisiología/Farmacología):** Starling revisado (Michel-Weinbaum); iNOS (1000× NO micromolar vía NF-κB) → sGC ($Fe^{2+}$) → GMPc → PKG → apertura $K_{ATP}$ / inhibición canales L; NE autotransfusión esplácnica ($P_{msf}$); AVP $V_{1a}$ (eferente) + $V_2$ (aferente/NO preservando TFG); **Dobutamina racémica 50:50** (`(-)` $\alpha_1$ / débil $\beta_1$ vs `(+)` antagonista $\alpha_1$ / potente $\beta_1$ + $\beta_2$ vasodilatador → explica hipotensión en sepsis con desensibilización $\beta_1$ y sobreexpresión PDE4).
- **Bloque 2 (Evidencia SATI):**
  - *Glicocálix:* meta-análisis *World J Emerg Med* 2026 SYN-1 **OR 2.32 (1.89–3.10)**, Hu 2024 AUC 0.668 (+APACHE II 0.726), Endocan +11.1%/ng/mL (AUC 0.81 shock), sICAM-1 OR 3.24, vWF/ADAMTS-13 AUC 0.79 *(auditar contra Daniyarova 2025 / Wang 2026 en M03)*.
  - *Vasopresina:* VASST 2008 (n=778, estrato <15 µg/min 28d 26.5% vs 35.7%, 90d 35.8% vs 46.1%, NNT=10, TRR RR 0.86); VANISH 2016 (n=409, TRR 25.4% vs 35.3%); Zhong 2020 (isquemia digital RR 2.43) / Chen 2019 (RR 4.85); Nagendran 2019 (menos arritmias −2.8%); **por cada +10 µg/min NE-eq al iniciar AVP, odds muerte +20.7% (aOR 1.21)**; **2nd Swiss Vasopressin Consensus (2025)**: inicio a NE $\ge 0.20\ \mu\text{g/kg/min}$.
  - *Vitamina C:* Marik 2017 (40.4%→8.5%) refutado por CITRIS-ALI 2019, **LOVIT 2022 (RR 1.21, 44.5% vs 38.5%)**, **REMAP-CAP & LOVIT-COVID (*JAMA* 2023, n=1.568, prob daño 91.4%, futilidad 99.9%)**, **LOVIT Burns / VICTORY (Kumar, *JAMA* 2026: mort 28d 15% vs 8%, HR 1.96–2.02)** y SSC 2026 en contra (RR 1.06).
- **Bloque 3 (Umbrales y Algoritmos):** **$E_{adyn} = PPV/SVV$ (Guinot 2015: $<0.94$ predice caída PAM $\ge 15\%$ al bajar NE, AUC 0.87)**; Monge García ($>0.89$ predice $\Delta PAM \ge 15\%$ tras fluidos); **Destete dual "Vasopressin: earlier in, slower out"** (bajar primero NE <0.10–0.15, luego AVP de 0.005–0.01 UI/min c/1–2h; suspender AVP brusco OR ~3.2 rebote); Azul de Metileno (1–2 mg/kg + 0.25–0.5 mg/kg/h).
- **Bloque 4 (Trampas de Examen SATI):**
  1. Lactato alto con CRT normal / HLH (>14.000 µg/L ferritina).
  2. Dobutamina ciega en shock séptico (48% disfunción diastólica, 22% OTSVI/SAM).
  3. **Vitamina C falsos peligros:** pro-oxidante Fenton ($Fe^{3+} \to Fe^{2+}$), nefropatía por oxalato (≥6–14 g/d) y **falsa hiperglucemia (>300–400 mg/dL) en tiras POC GDH-PQQ → coma hipoglucémico por insulina**.
  4. **L-NMMA (546W88) en fase III:** inhibir eNOS constitutiva subió PA pero disparó mortalidad (vasoconstricción pulmonar + microtrombosis) — trampa clásica de examen vs inhibición selectiva downstream sGC.
- **Bloque 5:** 12 referencias maestras consolidadas.
