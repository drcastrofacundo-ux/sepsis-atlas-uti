---
id: M05
titulo: "Hemodinamia de Guardia: PAD, Presión de Pulso, Retorno Venoso y Resucitación con Fluidos"
subtitulo: "De Windkessel y Guyton al ANDROMEDA-SHOCK-2, ARISE FLUIDS 2026 y desresucitación sin congestión"
ultima_actualizacion: 2026-11-25
piloto_fase2: true
fuentes_nlm:
  - "Microcirculacion - Bibliografia extensa"
  - "Microcirculacion - Sintesis clinica y fenotipos"
  - "PD y presion de pulso"
  - "Farmacoterapia y manejo hemodinamico"
  - "[Cardio] Shock e IC"
  - "General"
fuentes_vault:
  - "Sepsis y Shock Septico/"
  - "00 Radar Bibliografico/ (2026-07 a 2026-11)"
palabras_clave:
  - PAD
  - presión de pulso
  - DSI
  - VNERi
  - DPP
  - retorno venoso
  - Guyton
  - ARISE FLUIDS
  - ANDROMEDA-SHOCK-2
  - OPTPRESS
  - fluido-tolerancia
  - Eadyn
  - PIA
  - VExUS
---

# M05 — Hemodinamia de Guardia: PAD, Presión de Pulso, Retorno Venoso y Resucitación con Fluidos

---

## 1. Capa Base — Desde cero (Fisiología, Histología y Fundamentos)

### 1.1 El modelo Windkessel de 2 elementos y la curva de presión arterial
Cuando el ventrículo izquierdo eyecta sangre hacia la aorta durante la sístole, solo una fracción avanza de inmediato hacia la periferia; el resto distiende la pared elástica de los grandes vasos (efecto *Windkessel* o cámara de compresión). Al cerrarse la válvula aórtica (incisura dícrota), la energía elástica almacenada retrocede y mantiene el flujo y la presión durante toda la diástole mediante un decaimiento exponencial gobernado por dos parámetros físicos: la **resistencia vascular sistémica** ($R$, determinada principalmente por las arteriolas de resistencia) y la **complianza arterial** ($C_{\text{art}}$):

$$P(t) = P_{\text{incisura}} \cdot e^{-\frac{t}{R \cdot C_{\text{art}}}}$$

Este modelo elemental explica por qué mirar únicamente la **Presión Arterial Media ($\text{PAM}$)** oculta fenómenos fisiopatológicos opuestos:

$$\text{PAM} \approx \text{PAD} + \frac{1}{3}(\text{PAS} - \text{PAD})$$

Dos pacientes pueden compartir una $\text{PAM}$ idéntica de $65\text{ mmHg}$ con perfiles hemodinámicos completamente distintos:
- **Paciente A ($\text{PAS } 88 / \text{PAD } 54\text{ mmHg}$, $\text{PP } 34\text{ mmHg}$):** bajo volumen sistólico ($\text{VS}$) con tono arterial relativamente conservado.
- **Paciente B ($\text{PAS } 105 / \text{PAD } 45\text{ mmHg}$, $\text{PP } 60\text{ mmHg}$):** vasoplejia arterial profunda ($\text{PAD} < 50\text{ mmHg}$) compensada transitoriamente por gasto cardíaco alto o rigidez arterial.

### 1.2 Qué determinan la PAD y la Presión de Pulso (PP)
- **Presión Arterial Diastólica ($\text{PAD}$):** depende de la $\text{RVS}$, la $C_{\text{art}}$ y la **duración de la diástole** (inversamente ligada a la frecuencia cardíaca, $\text{FC}$). En un sujeto con tono arteriolar normal, la **taquicardia** acorta el tiempo de descarga diastólica e **incrementa** la $\text{PAD}$ basal (la curva se corta antes de caer). Por lo tanto, la coexistencia de **$\text{PAD}$ baja ($< 50\text{ mmHg}$) y taquicardia** es la firma fisiológica inequívoca de pérdida grave del tono vasomotor arteriolar (vasoplejia). Además, la $\text{PAD}$ constituye la presión impulsora principal de la perfusión coronaria izquierda ($\text{PPC} = \text{PAD} - \text{PDVI}$).
- **Presión de Pulso ($\text{PP} = \text{PAS} - \text{PAD}$):** es aproximadamente proporcional al cociente entre el volumen sistólico y la complianza arterial ($\text{PP} \approx \text{VS} / C_{\text{art}}$).
  - Una $\text{PP}$ estrecha ($< 40\text{ mmHg}$) en un paciente joven con arterias elásticas traduce caída del volumen sistólico (hipovolemia absoluta/relativa, disfunción miocárdica o taponamiento).
  - En el adulto mayor o arteriosclerótico ($C_{\text{art}}$ muy reducida), incluso un $\text{VS}$ normal o discretamente reducido produce una $\text{PP}$ amplia ($> 70\text{ mmHg}$), generando la ilusión de "buen pulso" pese a existir $\text{PAD}$ crítica.

### 1.3 Retorno venoso de Guyton y volumen estresado vs. no estresado
El gasto cardíaco en estado estacionario debe igualar al **retorno venoso ($\text{RV}$)** descrito por Guyton:

$$\text{RV} = \frac{P_{\text{msf}} - P_{\text{ad}}}{R_{\text{rv}}}$$

donde $P_{\text{msf}}$ es la presión media de llenado sistémico, $P_{\text{ad}}$ la presión auricular derecha (aproximada por la $\text{PVC}$) y $R_{\text{rv}}$ la resistencia al retorno venoso.

En el lecho venoso de capacitancia (fundamentalmente esplácnico), el volumen sanguíneo se divide funcionalmente en:
1. **Volumen no estresado ($V_0$, ~70–75% de la volemia):** llena el árbol venoso sin distender sus paredes ni generar presión transmural ($P = 0$).
2. **Volumen estresado ($V_s$, ~25–30%):** estira la pared venosa y genera $P_{\text{msf}}$ ($\approx 7\text{–}10\text{ mmHg}$ en reposo).

**Consecuencia clínica clave de esta fisiología:**
- **¿Por qué los fluidos fallan cuando se dan en exceso?** Si el ventrículo opera ya en la parte plana de la curva de Frank-Starling, administrar cristaloides eleva tanto $P_{\text{msf}}$ como $P_{\text{ad}}$, dejando intacto o reducido el gradiente $(P_{\text{msf}} - P_{\text{ad}})$ mientras aumenta la presión hidrostática capilar, destruye el glicocálix vía péptido natriurético auricular (ver [M03](#module-M03)) y congestiona órganos encapsulados.
- **¿Por qué la noradrenalina precoz ahorra volumen?** Además de su efecto $\alpha_1$ arteriolar (sube $\text{PAD}$ y $\text{RVS}$), la estimulación $\alpha_1$ sobre las vénulas esplácnicas contrae su capacitancia y **recluta $V_0 \to V_s$**, elevando $P_{\text{msf}}$ como un "autotransfusión farmacológica" sin agregar agua libre ni $\text{Cl}^-$ al intersticio.

### 1.4 Fórmulas e índices derivados al pie de cama
| Índice | Fórmula | Qué integra fisiológicamente | Lectura básica en guardia |
| :--- | :--- | :--- | :--- |
| **PAM** | $\text{PAD} + \frac{1}{3}(\text{PAS} - \text{PAD})$ | Presión media del ciclo cardíaco | Estándar mínimo $\ge 65\text{ mmHg}$ (insuficiente si se analiza aislada) |
| **PP** | $\text{PAS} - \text{PAD}$ | $\approx \text{VS} / C_{\text{art}}$ | Rango seguro $40\text{–}70\text{ mmHg}$; $<40$ sugiere bajo $\text{VS}$; $>70$ alerta rigidez/estrés pulsátil |
| **MPP** | $\text{PAM} - \text{PVC}$ | Gradiente neto de perfusión visceral | Caída de $\text{MPP}$ por $\text{PVC}$ elevada explica LRA congestiva incluso con $\text{PAM } 65\text{–}70$ |
| **DPP** | $\text{PAD} - \text{RAP}$ (o $\text{PVC}$) | Gradiente diastólico de perfusión (coronaria/renal) | Permite detectar pérdida de perfusión diastólica cuando coexisten vasoplejia y congestión venosa |
| **DSI** | $\text{FC} / \text{PAD}$ | Estrés simpático ($\uparrow\text{FC}$) / tono diastólico ($\downarrow\text{PAD}$) | Valores crecientes $\ge 2{,}0\text{–}2{,}2$ reflejan desacoplamiento vasomotor severo |
| **VNERi** | $\dfrac{\text{PAD}}{\text{NA}_{\text{bitartrato}}\ (\mu\text{g/kg/min}) \times \text{FC}}$ | Tono diastólico normalizado por dosis vasopresora y FC | Exige estandarizar la sal de noradrenalina (base vs bitartrato $\div 2{,}00$); curva en J invertida |
| **$E_{\text{adyn}}$** | $\text{PPV} / \text{SVV}$ | Cupla ventrículo-arterial funcional en VM controlada | Predice si el aumento de $\text{VS}$ tras volumen elevará la $\text{PAM}$ ($E_{\text{adyn}}$ preservada) o solo aumentará flujo |

### 1.5 Principios de Fluido-Respuesta (FR) y Fluido-Tolerancia (FT)
- **Fluido-respuesta ($\text{FR}$):** capacidad de ambos ventrículos de aumentar su $\text{VS} \ge 10\text{–}15\%$ tras aumentar la precarga. Requiere pruebas dinámicas, no presiones estáticas ($\text{PVC}$ o $\text{POAP}$ basales no predicen $\text{FR}$):
  - **Elevación Pasiva de Piernas (PLR):** autotransfusión reversible de ~$250\text{–}300\text{ mL}$; exige medir cambio de $\text{VS}$ o $\text{VTI}$ en tiempo real ($30\text{–}90\text{ s}$), no guiarse solo por variación de PAM.
  - **Variación de Presión de Pulso ($\text{PPV}$) / Volumen Sistólico ($\text{SVV}$):** umbral clásico $\ge 12\text{–}13\%$. Exige **condiciones estrictas**: ventilación mecánica controlada sin esfuerzo inspiratorio espontáneo, ritmo sinusal, volumen corriente $V_T \ge 8\text{ mL/kg}$ (pierde sensibilidad con $V_T$ protector de $6\text{ mL/kg}$, donde requiere test de reto $V_T$ transitorio), tórax cerrado y ausencia de falla derecha o $\text{PIA}$ elevada.
  - **Test de oclusión al final de la espiración (EEOT):** útil cuando el paciente está adaptado a VM controlada con $V_T$ bajo.
- **Fluido-tolerancia ($\text{FT}$):** capacidad de los órganos (pulmón, riñón, hígado, intestino) de recibir volumen sin desarrollar congestión clínicamente deletérea. Un paciente puede ser simultáneamente **$\text{FR}+$** y **fluido-intolerante ($\text{FT}-$)**; por eso la pregunta de guardia siempre es triple: *(1) ¿hay hipoperfusión activa?, (2) ¿es fluido-respondedor?, (3) ¿es fluido-tolerante?*.

---

## 2. Capa Profundidad R2–R3 y Frontera (2022–2026)

### 2.1 Fenotipado temprano por PAD y Presión de Pulso (2025–2026)
- **PAD $< 50\text{ mmHg}$ y vasopresor muy precoz (Ko et al. 2026, *Crit Care* 30:88, `PMID 41593462`):** en una cohorte de $n = 1.104$ pacientes con shock séptico que recibieron noradrenalina muy precoz ($\le 25\text{ min}$), el beneficio ajustado en mortalidad se concentró estrictamente en quienes ingresaron con **$\text{PAD} < 50\text{ mmHg}$** ($\text{aOR } 0{,}48$; IC95% $0{,}25\text{–}0{,}90$; $p = 0{,}023$), sin beneficio estadístico cuando la $\text{PAD}$ inicial era $\ge 50\text{ mmHg}$ ($\text{aOR } 0{,}93$; $p_{\text{interacción}} = 0{,}036$). El subgrupo con mayor señal favorable combinó $\text{PAD} < 50\text{ mmHg}$ con $\text{PP} \ge 25\text{ mmHg}$ ($\text{aOR } 0{,}60$; IC95% $0{,}38\text{–}0{,}93$).
  - *Lectura crítica R3:* diseño observacional unicéntrico y presencia de una inconsistencia aritmética interna en tabla del manuscrito original ($273 + 55 = 328$ reportado frente a $n = 215$ en otra sección); valida la hipótesis fisiológica pero no reemplaza a un ECA confirmatorio dirigido por PAD.
- **Zona segura en U de la $\text{PP}_{24\text{h}}$ ($40\text{–}70\text{ mmHg}$) (Ji et al. 2026, *Front Med* 13:1770215):** en $n = 3.194$ pacientes críticos, mantener una $\text{PP}$ a 24 h fuera del rango **$40\text{–}70\text{ mmHg}$** incrementó la mortalidad en forma de U: **$\text{PP} > 70\text{ mmHg}$** ($\text{aOR } 1{,}656$) y **$\text{PP} < 40\text{ mmHg}$** ($\text{aOR } 1{,}476$). Existe clara interacción por edad: en mayores de $65\text{ años}$ predomina el riesgo de mortalidad con $\text{PP} > 70\text{ mmHg}$ (carga pulsátil sobre árbol arterial rígido y microcirculación vulnerable), mientras en $\le 65\text{ años}$ domina el riesgo de $\text{PP} < 40\text{ mmHg}$ (gasto sistólico persistentemente deprimido).
- **$\text{DPP} = \text{PAD} - \text{RAP}$ (Lim et al. 2025):** en $n = 93$ pacientes en shock cardiogénico/ECMO-CS, el punto de corte discriminatorio de $\text{DPP}$ fue **$37\text{ mmHg}$**. Aunque fisiológicamente atractivo para shock séptico con miocardiopatía asociada o PVC elevada, ese umbral aún carece de validación prospectiva en cohorte pura de shock séptico.

### 2.2 Índices Dinámicos Integrados: DSI, $\Delta\text{DSI}_{24\text{h}}$ y VNERi
- **Diastolic Shock Index ($\text{DSI} = \text{FC}/\text{PAD}$):**
  - **Ospina-Tascón et al. 2020** (`PMID 32296976`) describieron una relación continua y progresiva entre $\text{DSI}$ creciente en las primeras horas y mayor mortalidad/necesidad de vasopresores.
  - **Paiva et al. 2024** (*Eur Heart J*): un **$\text{DSI} \ge 2{,}2$** alerta sobre colapso vasopléjico grave y eventual solapamiento con fenotipo mixto cardiogénico-vasopléjico.
  - **Trayectoria vs. foto fija (Sarkar et al. 2026, 2.º autor Sharma, *Indian J Crit Care Med* 30:99–106, `n = 90`):** el $\text{DSI}$ basal aislado discriminó pobremente la mortalidad ($\text{AUC } 0{,}402$), pero el **cambio dinámico en 24 h ($\Delta\text{DSI}_{24\text{h}}$)** predijo mortalidad con $\text{OR } 4{,}07$ ($\text{AUC } 0{,}684$), ascendiendo a **$\text{AUC } 0{,}781$** al combinarlo con *Vasoactive-Inotropic Score* (VIS) y lactato. Un $\Delta\text{DSI}_{24\text{h}} \ge -0{,}17$ (es decir, ausencia de descenso del DSI tras 24 h de resucitación) duplicó el riesgo ($\text{HR } 2{,}03$). *(Estudio monocéntrico de tamaño muestral modesto).*
- **VNERi (Goury et al. 2025, *Ann Intensive Care* 15:43, `PMID 40133652`, `n = 424`):**
  - Definido originalmente usando noradrenalina expresada como **sal bitartrato**:
    $$\text{VNERi} = \frac{\text{PAD}}{\text{NA bitartrato}\ (\mu\text{g/kg/min}) \times \text{FC}}$$
  - Presentó curva de riesgo en **J invertida** con nadir de mortalidad en **$6{,}7$** y umbrales en **$2{,}6$ y $10{,}8$**:
    - **$\text{VNERi} < 2{,}6$:** mortalidad **$56 \pm 6\%$** (vasoplejia refractaria extrema: dosis alta de NA con $\text{PAD}$ baja persistente y taquicardia).
    - **$\text{VNERi } 2{,}6\text{–}10{,}8$:** mortalidad **$28 \pm 7\%$** (zona de respuesta vasomotora estable).
    - **$\text{VNERi} > 10{,}8$:** mortalidad **$39 \pm 19\%$** (sobreexposición o disautonomía/bradicardia relativa con tono elevado).
  - Logró mejor ajuste estadístico que el cociente clásico $\text{PAM}/\text{NA}$ ($\text{AIC } 543$ vs $564$). *Limitación:* medición transversal única dentro de las primeras 24 h; si el hospital prescribe en **noradrenalina base**, hay que multiplicar la dosis base por **$2{,}00$** antes de aplicar los cortes de Goury 2025.

### 2.3 Resucitación Restrictiva de Fluidos y Personalización por Perfusión (2025–2026)
- **ARISE FLUIDS 2026 (Peake et al., *NEJM* 2026, `PMID 42274006`, `n = 1.000` aleatorizados / $963$ analizados):** comparó estrategia restrictiva de fluidos + inicio precoz de vasopresores vs. estrategia liberal habitual en shock séptico temprano en urgencias/UCI.
  - **Separación de fluidos a 24 h:** $1.140\text{ mL}$ vs $2.248\text{ mL}$ (diferencia $-1.108\text{ mL}$).
  - **Desenlace primario (días vivos y fuera del hospital a 90 d):** **$76$ vs $76$ días** ($p = 1{,}00$).
  - **Mortalidad a 90 d:** $16{,}4\%$ vs $14{,}4\%$ (diferencia estadísticamente no significativa).
  - **Edema pulmonar agudo:** **$0{,}6\%$ vs $5{,}0\%$** ($\text{RR } 0{,}12$; $p < 0{,}001$).
  - *Implicancia clínica junto a CLASSIC y CLOVERS:* restringir volumen apoyándose en vasopresores tempranos **no empeora la supervivencia** (neutro en mortalidad) pero **reduce en casi 90% el edema pulmonar iatrogénico**.
- **ANDROMEDA-SHOCK-2 (Hernández et al., *JAMA* 2025, `n = 1.467`):** evaluó una resucitación hemodinámica personalizada guiada por **tiempo de llenado capilar (CRT)** integrada con variables de pulso/diastólica y pruebas de FR en dos niveles (*Tier 1* y *Tier 2*):
  - En pacientes con $\text{CRT} > 3\text{ s}$: evalúa $\text{PP} < 40\text{ mmHg}$ (sospecha de bajo volumen sistólico → pruebas de FR y eventual ecografía cardíaca) y $\text{PAD} < 50\text{ mmHg}$ (titulación/optimización de noradrenalina) antes de repetir bolos a ciegas, incorporando en *Tier 2* la prueba de PAM hacia $80\text{–}85\text{ mmHg}$ solo en hipertensos crónicos seleccionados con respuesta verificable de CRT, eco para disfunción miocárdica y búsqueda de otras causas.
  - **Desenlace primario jerárquico (*Stratified Win Ratio*):** **$\text{SWR } 1{,}16$ (IC95% $1{,}02\text{–}1{,}33$; $p = 0{,}04$)** favorable al brazo personalizado.
  - **Días libres de soporte orgánico:** **$16{,}5$ vs $15{,}4$ días** (impulsor principal del Win Ratio).
  - **Mortalidad a 28 d:** **$26{,}5\%$ vs $26{,}6\%$** ($\text{HR } 0{,}99$, neutra en forma aislada).
  - **Fluidos en las primeras 6 h:** **$595$ vs $847\text{ mL}$** ($-251\text{ mL}$).
- **Metaanálisis de resucitación guiada por CRT (Mendes et al. 2026, 7 ECAs, `n = 2.408`):** $\text{RR } 0{,}87$ en mortalidad (IC95% $0{,}76\text{–}1{,}01$), con probabilidad posterior bayesiana de beneficio del **$97{,}2\%$** (señal altamente consistente aunque en el límite de significación frecuentista clásica).

### 2.4 Metas de PAM e Individualización (2009–2026)
- **Dünser et al. 2009 (`n = 274`):** en las primeras 24 h de shock séptico, episodios por debajo de **$\text{PAM } 60\text{ mmHg}$** predijeron mortalidad ($\text{AUC } 0{,}779$, $\text{OR } 2{,}96$), mientras la necesidad de terapia de reemplazo renal ($\text{TRR}$) aumentó cuando la $\text{PAM}$ cayó debajo de **$75\text{ mmHg}$** ($\text{AUC } 0{,}724$).
- **65 Trial (Lamontagne et al., *JAMA* 2020):** en $\ge 65\text{ años}$ con shock vasodilatador, una meta de "hipotensión permisiva" ($\text{PAM } 60\text{–}65\text{ mmHg}$) frente a cuidado usual fue segura en mortalidad a 90 d y redujo la exposición total a catecolaminas.
- **OPTPRESS 2025 (`PMID 40358717`):** aleatorizó PAM objetivo alta (**$80\text{–}85\text{ mmHg}$**) vs estándar (**$65\text{–}70\text{ mmHg}$**) y fue **detenido precozmente por daño**: mortalidad a 90 d **$39{,}3\%$ vs $28{,}6\%$**, **sin beneficio en el subgrupo con hipertensión arterial crónica**. Refuta la extrapolación mecánica del subanálisis de SEPSISPAM (2014) hacia metas rutinariamente altas en hipertensos.
- **ECA PAM guiada por Índice de Resistencia Renal (RRI) 2026 (`PMID 42469213`, `n = 274`):** estrategia de titulación según RRI Doppler vs estándar resultó neutra en mortalidad a 28 d ($\text{RR } 0{,}69$, $p = 0{,}11$).

### 2.5 Fluido-Tolerancia, Congestión Oculta y Confusores Mecánicos
- **Muñoz et al. 2024 (`n = 90`):** el **$53\%$ de los pacientes clasificados como fluido-respondedores ($\text{FR}+$) ya presentaban congestión** (VExUS elevado, líneas B pulmonares o hipertensión venosa). Ser $\text{FR}+$ no protege al órgano del edema intersticial.
- **Si et al. 2026 (*Crit Care* 30:35, `n = 64`):** demostró la desconexión entre tamaño de cava y congestión parenquimatosa: **$55\%$ de los pacientes con $\text{VCI} < 2\text{ cm}$ ya tenían puntaje patológico en flujos venosos orgánicos (porta/renal)**. Tras administrar un bolo de fluido, el score VExUS empeoró en el **$5\%$ de los $\text{FR}+$ frente al $73\%$ de los $\text{FR}-$**, y en pacientes con SDRA el agua pulmonar extravascular ($\text{EVLWI}$) aumentó incluso cuando eran $\text{FR}+$.
- **Hipertensión intraabdominal ($\text{PIA} \ge 12\text{ mmHg}$):**
  - El rendimiento de la **PLR se desploma** (AUROC cae de **$0{,}96$ a $0{,}71$**, `PMID 42469838`), generando **falsos negativos** porque la presión abdominal elevada comprime la cava inferior e impide que la sangre de miembros inferiores alcance la aurícula derecha.
  - **Puiac et al. 2018:** la HIA reduce severamente el retorno venoso y el gasto cardíaco ($6{,}96 \to 4{,}57\text{ L/min}$), elevando ficticiamente las presiones intravasculares medidas ($\text{PVC}$ y $\text{POAP}$) respecto a su presión transmural real.
- **Hipertensión pulmonar y sobrecarga del VD (Wyler von Ballmoos 2010):** la $\text{PPV}$ fracasa en presencia de hipertensión pulmonar ($\text{AUC } 0{,}555$) produciendo **falsos positivos**: la oscilación amplia de la presión de pulso se debe a caída cíclica de eyección derecha por aumento de poscarga durante la insuflación positiva, no a déficit de precarga; administrar volumen empeora la sobredistensión ventricular derecha e interdependencia septal.
- **Presión meseta ($P_{\text{plat}}$) elevada (Valenti 2021):** incrementar $P_{\text{plat}}$ de $15$ a $25\text{ cmH}_2\text{O}$ eleva artificialmente $\text{SVV}$ y $\text{PPV}$ sin descenso de la $\text{RAP}$ transmural real.
- **Regla de parada del punto z (Magder 2015):** si durante una carga rápida la $\text{PVC}$ sube $\ge 2\text{ mmHg}$ sin aumento simultáneo de $\text{VS}$ o $\text{GC}$, el corazón alcanzó la meseta de Frank-Starling o la restricción pericárdica: suspender fluidos inmediatamente.
- **Contexto de gasto nativo, monitorización y destete vasopresor:**
  - **Cioccari et al. 2016:** en la sepsis nativa aún no resucitada con volumen/vasopresores, el gasto cardíaco no es hiperdinámico sino normodinámico ($\text{IC } 2{,}68 \pm 0{,}42\text{ L/min/m}^2$).
  - **Takala et al. 2011:** añadir monitorización continua de gasto cardíaco sin un protocolo de decisiones acoplado no mejora la supervivencia.
  - **Guinot et al. 2015:** una elastancia arterial dinámica **$E_{\text{adyn}} = \text{PPV}/\text{SVV} < 0{,}94$** predice caída de $\text{PAM} \ge 15\%$ al intentar destetar la noradrenalina ($\text{AUC } 0{,}87$), señalando vasoplejia arterial todavía dependiente de catecolaminas.


### Novedades del barrido anual 2025–2026 (PubMed + avisos de correo, leídas en abstract)
> Agregadas el 2026-11-26 desde el abstract de PubMed (no el texto completo). Cada una lleva su PMID. Lista completa de candidatos en `candidatos-pubmed-correo.md`.

- **Cochrane: soluciones balanceadas vs salino 0,9%** (2026, 23 estudios, $n = 36.452$): poca o ninguna diferencia en mortalidad (OR 0,95; IC95% 0,90–1,01; **certeza alta**) y probablemente en LRA (OR 0,87; 0,75–1,02). `PMID 42011817`
- **SHAMROC** (*Am J Respir Crit Care Med* 2026, seguimiento a 6 y 12 meses de CLOVERS, $n = 702$): restrictivo vs liberal **sin diferencias** en cognición, función ejecutiva, discapacidad, movilidad ni calidad de vida. `PMID 42093058`
- **Señales de intolerancia a fluidos como semáforo** (*Crit Care* 2026, ECA en 3 UTI chilenas, detenido con 35 de 62 pacientes): antes de cada bolo, LUS, VExUS, E/e' y PVC en verde (500 mL), amarillo (250 mL) o rojo (nada). Menos volumen de protocolo (250 vs 650 mL) y mejor PaO₂/FiO₂ a 6 h (+78 puntos), sin diferencias en lactato ni CRT. Prometedor y chico. `PMID 42995612`
- **PVC titulada por Doppler de vena renal** (*Crit Care* 2026, piloto, $n = 127$): factible en el 100%; progresión de LRA a 7 días 43% vs 57% (RR 0,74; IC95% 0,52–1,06, NS). `PMID 41580843`

---

## 3. Mitos vs. Evidencia — Cómo NO sobreinterpretarlo

1. **Mito: "Si la PAM es ≥ 65 mmHg, la macrohemodinamia está resuelta."**
   - **Realidad fisiopatológica:** $\text{PAS } 106 / \text{PAD } 44$ da $\text{PAM } 65\text{ mmHg}$, pero una $\text{PAD} < 50\text{ mmHg}$ con $\text{FC } 122$ ($\text{DSI } 2{,}77$) traduce vasoplejia grave e isquemia subendocárdica potencial, y en un paciente con $\text{PVC } 18\text{ mmHg}$ deja una $\text{MPP}$ de apenas $47\text{ mmHg}$. Desglosar siempre $\text{PAD}$, $\text{PP}$, $\text{FC}$ y $\text{PVC}$.
2. **Mito: "Si la prueba de fluido-respuesta (PLR o PPV) es positiva, el paciente necesita fluidos."**
   - **Realidad (Muñoz 2024; Si 2026; ARISE FLUIDS 2026):** más de la mitad de los sujetos $\text{FR}+$ ya tienen congestión orgánica o alveolar. La positividad de una prueba de $\text{FR}$ solo responde si el ventrículo *puede* subir el $\text{VS}$ con volumen; la indicación clínica la definen la **hipoperfusión activa ($\text{CRT} > 3\text{ s}$, lactato, $\Delta P_{\text{v-a}}\text{CO}_2$)** y la **fluido-tolerancia** (VExUS, pulmón B, $\text{PIA}$).
3. **Mito: "En hipertensos crónicos hay que fijar siempre una meta de PAM 80–85 mmHg."**
   - **Realidad (OPTPRESS 2025):** la meta fija de $80\text{–}85\text{ mmHg}$ incrementó la mortalidad global ($39{,}3\%$ vs $28{,}6\%$) y **no benefició al subgrupo hipertenso**. Solo se justifica una prueba corta reversible hacia PAM mayor (como en el *Tier 2* acotado de ANDROMEDA-SHOCK-2) si un parámetro objetivo de perfusión (p. ej. CRT o diuresis) responde de forma verificable sin sobrecarga de vasopresores o arritmias.
4. **Mito: "El DSI basal o la PPV sirven de algoritmo único para decidir conducta."**
   - **Realidad:** un $\text{DSI}$ aislado al ingreso discriminó mal en **Sarkar 2026** ($\text{AUC } 0{,}402$ vs $\Delta\text{DSI}_{24\text{h}}$ $\text{AUC } 0{,}684\text{–}0{,}781$); y la $\text{PPV}$ engaña en disfunción de VD (**Wyler von Ballmoos 2010**), $P_{\text{plat}}$ elevada (**Valenti 2021**), FA o ventilación espontánea, mientras la PLR falla en $\text{PIA} \ge 12\text{ mmHg}$ (`PMID 42469838`).
5. **Mito: "Puedo meter la dosis de noradrenalina de mi hospital directo en la fórmula del VNERi."**
   - **Realidad crítica:** Goury 2025 calibró $\text{VNERi}$ ($2{,}6\text{ / }6{,}7\text{ / }10{,}8$) usando **bitartrato monohidrato**. Si tu UCI expresa la noradrenalina en **base** y la ingresás sin multiplicar por $2{,}00$, duplicás falsamente el VNERi y ocultás una vasoplejia extrema ($< 2{,}6$, mortalidad $56\%$) haciéndola parecer segura.
6. **Mito: "Poner un catéter o monitor de gasto cardíaco de por sí reduce la mortalidad."**
   - **Realidad (Takala 2011):** la tecnología de monitoreo sin un protocolo fisiológico explícito ni resolución de la congestión/foco tiene impacto neutro.

---

## 4. Especificación del Simulador / Atlas Interactivo

### 4.1 Identidad del Simulador Piloto (Fase 2A)
- **Nombre UI:** *Simulador Hemodinámico de Guardia (Windkessel + Guyton + ANDROMEDA-2 + VNERi)*
- **Propósito docente:** permitir al residente R2–R3 manipular presiones fásicas, frecuencia cardíaca, formulación y dosis de noradrenalina, congestión y confusores mecánicos, observando en vivo cómo cambian la curva arterial, la curva de retorno venoso, la matriz de decisiones ANDROMEDA-SHOCK-2 y el riesgo en J invertida del VNERi.

### 4.2 Controles interactivos y rangos exactos
| Control | Tipo | Mín | Máx | Paso | Default | Unidad |
| :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| `PAS` (Presión Sistólica) | Slider | $60$ | $190$ | $1$ | $96$ | $\text{mmHg}$ |
| `PAD` (Presión Diastólica) | Slider | $25$ | $100$ | $1$ | $44$ | $\text{mmHg}$ *(clamp $\le \text{PAS} - 10$)* |
| `FC` (Frecuencia Cardíaca) | Slider | $45$ | $160$ | $1$ | $118$ | $\text{lpm}$ |
| `PVC / RAP` | Slider | $0$ | $26$ | $1$ | $11$ | $\text{mmHg}$ |
| `Peso real` | Slider | $40$ | $150$ | $1$ | $75$ | $\text{kg}$ |
| `Formulación NA` | Select | — | — | — | `Bitartrato monohidrato (×1,00)` | `Base (×2,00)` / `Bitartrato monohidrato (×1,00)` / `Bitartrato anhidro (×1,06)` / `Clorhidrato (×1,64)` |
| `Dosis NA (en etiqueta elegida)` | Slider | $0{,}00$ | $2{,}00$ | $0{,}01$ | $0{,}35$ | $\mu\text{g/kg/min}$ |
| `PPV` | Slider | $2$ | $30$ | $1$ | $15$ | $\%$ |
| `SVV` | Slider | $2$ | $30$ | $1$ | $13$ | $\%$ |
| `CRT` (Llenado capilar) | Slider | $1{,}0$ | $8{,}0$ | $0{,}2$ | $4{,}2$ | $\text{s}$ |
| `HTA crónica` | Toggle | `false` | `true` | — | `false` | Booleano |
| `PIA ≥ 12 mmHg (HIA)` | Toggle | `false` | `true` | — | `false` | Booleano |
| `Disfunción VD / HTP` | Toggle | `false` | `true` | — | `false` | Booleano |
| `VExUS ≥ 2 / Pulmón B+` | Toggle | `false` | `true` | — | `false` | Booleano |
| `Sinusal + VM controlada Vt ≥ 8` | Toggle | `false` | `true` | — | `true` | Booleano |

### 4.3 Motor matemático en tiempo real
```text
PAM = PAD + (PAS - PAD) / 3
PP = PAS - PAD
MPP = PAM - PVC
DPP = PAD - PVC
DSI = FC / PAD

Factor_a_Bitartrato:
  - Base: × 2,00
  - Bitartrato monohidrato: × 1,00
  - Bitartrato anhidro: × 1,058  (= 2,00 / 1,89)
  - Clorhidrato: × 1,639       (= 2,00 / 1,22)

NA_bit_eq = Dosis_NA * Factor_a_Bitartrato
NA_base_eq = NA_bit_eq / 2,00
NA_ug_min = NA_bit_eq * Peso_real

Si NA_bit_eq > 0:
  VNERi = PAD / (NA_bit_eq * FC)
  Riesgo_VNERi =
    - VNERi < 2,6  -> "Crítico (<2,6 · Ref. Goury 2025: 56% mort)"
    - 2,6..10,8    -> "Zona estable (nadir 6,7 · ~28% mort)"
    - > 10,8       -> "Alerta sobreexposición/bradicardia (>10,8 · ~39% mort)"

Eadyn = PPV / SVV
Alerta_Destete_NA = (NA_bit_eq > 0 && Eadyn < 0,94)  // Guinot 2015 AUC 0,87

Validez_PPV:
  válida sí y solo sí: (Sinusal_VM_Vt8 == true) AND (Disfuncion_VD == false) AND (PIA_alta == false)
Validez_PLR:
  reducida a AUROC ~0,71 si PIA_alta == true (riesgo falso negativo)

Motor ANDROMEDA-SHOCK-2:
  1. Hipoperfusión activa si CRT > 3,0 s.
  2. Tier 1 — Si PAD < 50 mmHg: priorizar titulación de NA antes que cristaloides repetidos (Ko 2026 / ANDROMEDA-2).
  3. Tier 1 — Si PP < 40 mmHg: sospechar bajo VS -> eco + prueba de FR válida; si PP > 70 mmHg -> vigilar estrés pulsátil/rigidez (Ji 2026).
  4. Fluido-tolerancia — Si (VExUS >= 2) o (PIA_alta && PVC >= 12): BLOCKER "Intolerancia a fluidos / Congestión activa (Muñoz 2024; Si 2026)" incluso aunque PPV o PLR dieran positivos.
  5. Si HTA_cronica == true y PAM 65..70 con buena CRT/diuresis: recordar OPTPRESS 2025 (NO escalar rutinariamente a 80–85).
```

### 4.4 Presets clínicos obligatorios (mínimo 4)
1. **Preset 1 — Vasoplejia temprana pura (Perfil Ko 2026):** `PAS 96 / PAD 40 / FC 120 / PVC 6 / NA 0,18 bitartrato / PPV 14% / SVV 12% / CRT 4,0 s / Sinusal+VM ON`.
   - *Lectura:* $\text{PAM } 59$, $\text{PP } 56$ (en zona $40\text{–}70$), $\text{DSI } 3{,}00$, $\text{VNERi } 1{,}85$ ($<2{,}6$). Dispara recomendación ANDROMEDA-2 Tier 1 + ARISE FLUIDS: iniciar/escalar NA precoz para llevar $\text{PAD} \ge 50$ y recuperar $\text{VNERi}$ hacia zona estable sin inundar de cristaloides.
2. **Preset 2 — Anciano rígido "normotenso falso" ($\text{PP} > 70\text{ mmHg}$):** `PAS 138 / PAD 48 / FC 104 / PVC 10 / NA 0,25 bitartrato / PPV 11% / SVV 11% / CRT 3,8 s / HTA crónica ON`.
   - *Lectura:* $\text{PAM } 78\text{ mmHg}$ aparente tranquilizadora, pero **$\text{PP } 90\text{ mmHg}$** ($>70$, riesgo Ji 2026 en $>65\text{ años}$), **$\text{PAD } 48 < 50$**, $\text{DSI } 2{,}17$. Enseña a no subir a ciegas PAM a $85\text{ mmHg}$ (OPTPRESS 2025) ni suspender NA solo por ver PAS 138.
3. **Preset 3 — Bajo volumen sistólico ($\text{PP} < 40\text{ mmHg}$):** `PAS 78 / PAD 46 / FC 128 / PVC 4 / NA 0,10 bitartrato / PPV 21% / SVV 16% / CRT 4,8 s / Sinusal+VM ON`.
   - *Lectura:* $\text{PAM } 57$, **$\text{PP } 32$** ($<40$ Ji 2026 + Tier 2 ANDROMEDA-2), $\text{DSI } 2{,}78$, $E_{\text{adyn}} = 1{,}31$. Indica evaluar ecocardiografía (descartar miocardiopatía séptica/LVOTO) + prueba de FR antes de bolo focalizado.
4. **Preset 4 — Shock refractario + Confusores ($\text{PIA} \ge 12$, Congestión VExUS $\ge 2$):** `PAS 88 / PAD 42 / FC 124 / PVC 18 / NA 0,90 bitartrato / PPV 18% / SVV 15% / CRT 5,2 s / PIA ON / VExUS ON`.
   - *Lectura:* $\text{PAM } 57$, **$\text{MPP } 39$**, **$\text{DPP } 24$** ($<37$), **$\text{VNERi } 0{,}38$** ($<2{,}6$). Alerta múltiple: PLR poco confiable (AUROC $0{,}71$), intolerancia severa a fluidos (Muñoz/Si), $\text{PPV}$ no utilizable con seguridad para guiar cargas; priorizar descompresión/revisión vasoactiva multimecanismo (M06) y descarga venosa si corresponde.
5. **Preset 5 — Trampa de conversión Base vs. Bitartrato (Educativo):** idéntico al Preset 1 con NA $0{,}18\ \mu\text{g/kg/min}$ si el usuario selecciona `Base` vs `Bitartrato`: el VNERi salta del verdadero $0{,}93$ (crítico extremo) a $1{,}85$, graficando la magnitud del error documental en guardia.

### 4.5 Arquitectura de capas SVG
1. **Panel A — Osciloscopio Arterial Windkessel en vivo:** gráfica de $1\text{–}2$ latidos mostrando $\text{PAS}$, incisura dícrota, curva de decaimiento diastólico modulada por $\text{FC}$ y $\text{PAD}$, banda sombreada de zona $\text{PAD} \ge 50\text{ mmHg}$ y flecha vertical dinámica de $\text{PP}$ ($40\text{–}70$ verde, $<40$ o $>70$ ámbar/rojo).
2. **Panel B — Curva J invertida de VNERi (Goury 2025):** curva suavizada con zonas $<2{,}6$ ($56\%$ mort), $2{,}6\text{–}10{,}8$ (nadir $6{,}7$, $28\%$), $>10{,}8$ ($39\%$) y marcador vivo del paciente según formulación estandarizada.
3. **Panel C — Diagrama acoplado Guyton + Frank-Starling:** curva venosa ($P_{\text{msf}}$ desplazable por fluidos o $\alpha_1$-NA y pendiente $1/R_{\text{rv}}$), curva de función ventricular y bandera de *punto z de Magder* / *congestión VExUS* cuando $P_{\text{ad}}$ ($\text{PVC}$) supera la meseta.
4. **Panel D — Matriz Táctica 2×3 ($\text{PAD}$ × $\text{PP}$) + Semáforo ANDROMEDA-2:** ubicación exacta del paciente en el algoritmo de Tier 1 / Tier 2 y candado de fluido-tolerancia.

---

## 5. Actividades de Entrenamiento (SATI)

### 5.1 Preguntas de Opción Múltiple (estilo Examen Integrador SATI — 5 opciones)

> *Nota pedagógica:* las respuestas y justificaciones tripartitas figuran consolidadas al pie de la subsección para evitar sesgo durante el estudio.

**Pregunta 1.** Ingresa a guardia un varón de $58\text{ años}$ con shock séptico abdominal tras $1.000\text{ mL}$ de Ringer lactato iniciales. Signos vitales actuales en línea arterial: $\text{PAS } 98\text{ mmHg}$, $\text{PAD } 42\text{ mmHg}$ ($\text{PAM } 61\text{ mmHg}$), $\text{FC } 126\text{ lpm}$, $\text{CRT } 4{,}4\text{ s}$, $\text{PVC } 7\text{ mmHg}$. Aún no tiene vasopresores iniciados. Considerando la fisiopatología Windkessel y la evidencia de Ko et al. (2026), ARISE FLUIDS (2026) y ANDROMEDA-SHOCK-2 (2025), ¿cuál es la interpretación y conducta inicial MÁS adecuada?
- A) Como la presión de pulso es de $56\text{ mmHg}$ (normal), la caída de la PAM se debe exclusivamente a hipovolemia; debe recibir otros $30\text{ mL/kg}$ de cristaloides antes de considerar noradrenalina.
- B) La combinación de $\text{PAD } 42\text{ mmHg}$ ($< 50\text{ mmHg}$) con taquicardia ($\text{DSI } 3{,}0$) traduce vasoplejia arterial severa; iniciar noradrenalina precoz mientras se personalizan eventuales bolos solo según perfusión y fluido-respuesta reduce el riesgo de sobrecarga pulmonar sin empeorar supervivencia.
- C) Se debe fijar de entrada una meta de $\text{PAM } 80\text{–}85\text{ mmHg}$ para proteger la perfusión renal en las primeras 24 h independientemente de sus antecedentes.
- D) El paciente presenta un $\text{DSI}$ basal de $3{,}0$, lo que permite predecir con $>90\%$ de certeza mortalidad hospitalaria y contraindica cualquier bolo adicional de fluidos.
- E) La $\text{PP}$ de $56\text{ mmHg}$ confirma hiperdinamia por miocardiopatía séptica leve, por lo que está indicado asociar esmolol para bajar la frecuencia cardíaca y prolongar la diástole.

**Pregunta 2.** Paciente de $74\text{ años}$, hipertenso crónico conocido, en shock séptico de foco urinario bajo ventilación mecánica controlada ($V_T\ 6\text{ mL/kg}$), con noradrenalina a $0{,}22\ \mu\text{g/kg/min}$ (etiqueta bitartrato). Presenta $\text{PAS } 136\text{ mmHg}$, $\text{PAD } 48\text{ mmHg}$ ($\text{PAM } 77\text{ mmHg}$), $\text{FC } 96\text{ lpm}$, $\text{CRT } 2{,}6\text{ s}$ y diuresis $0{,}7\text{ mL/kg/h}$. Un colega sugiere subir noradrenalina hasta alcanzar $\text{PAM } 85\text{ mmHg}$ por el antecedente de HTA crónica, mientras otro propone suspenderla porque la PAS está en $136\text{ mmHg}$. ¿Qué postura respalda la evidencia 2025–2026?
- A) Subir la PAM a $80\text{–}85\text{ mmHg}$ porque los ensayos recientes demostraron menor necesidad de diálisis y menor mortalidad en hipertensos crónicos.
- B) Suspender de golpe la noradrenalina guiándose exclusivamente por la PAS de $136\text{ mmHg}$, dado que la $\text{PP}$ de $88\text{ mmHg}$ demuestra tono vascular normal.
- C) Reconocer que $\text{PP } 88\text{ mmHg}$ ($> 70\text{ mmHg}$ en $>65\text{ años}$, Ji 2026) con $\text{PAD } 48\text{ mmHg}$ ($< 50$) refleja rigidez arterial más vasoplejia residual y que escalar rutinariamente a PAM $80\text{–}85\text{ mmHg}$ en hipertensos aumentó la mortalidad en OPTPRESS 2025; no escalar vasopresor si la perfusión tisular ($\text{CRT}$, diuresis) es adecuada y evaluar si tolera destete suave vigilando $E_{\text{adyn}}$ y $\text{PAD}$.
- D) Administrar nitroglicerina en baja dosis para bajar la $\text{PAS}$ a $110\text{ mmHg}$ y reducir la presión de pulso a $62\text{ mmHg}$.
- E) Iniciar albúmina al $20\%$ de rutina para corregir la compliance arterial y normalizar la onda dícrota.

**Pregunta 3.** Mujer de $63\text{ años}$ en posoperatorio de peritonitis fecal, séptica, con distensión abdominal marcada ($\text{PIA } 18\text{ mmHg}$), ventilada con $P_{\text{plat}}\ 26\text{ cmH}_2\text{O}$, en ritmo sinusal con $\text{PVC } 16\text{ mmHg}$, $\text{PAM } 64\text{ mmHg}$, $\text{PPV } 17\%$ y ecografía hepática con vena porta pulsátil ($60\%$). Se realiza una maniobra de elevación pasiva de piernas (PLR) y el $\text{VTI}$ sube apenas un $5\%$. ¿Cuál es el análisis hemodinámico correcto?
- A) El $\text{PPV}$ de $17\%$ es el estándar de oro absoluto en ritmo sinusal y obliga a administrar un bolo de $500\text{ mL}$ de cristaloides, ignorando el resultado de la PLR.
- B) La $\text{PIA}$ de $18\text{ mmHg}$ reduce drásticamente el rendimiento de la PLR (riesgo de falso negativo por colapso de cava inferior), mientras la $P_{\text{plat}}$ elevada infla artificialmente la $\text{PPV}$ y la pulsatilidad portal ($>50\%$) más $\text{PVC } 16$ alertan intolerancia a fluidos / congestión venosa; requiere descomprimir/revisar PIA y extremar cautela antes de aportar más volumen.
- C) El aumento de $5\%$ en el $\text{VTI}$ descarta totalmente cualquier beneficio potencial de mejorar la precarga derecha, incluso tras descompresión abdominal.
- D) La combinación de $\text{PVC } 16$ y $\text{PAM } 64$ da una $\text{MPP}$ de $48\text{ mmHg}$, lo cual es normal y excluye riesgo de LRA congestiva.
- E) El resultado obliga a indicar inmediatamente un inotrópico puro como dobutamina a $10\ \mu\text{g/kg/min}$ para bajar la $\text{PVC}$.

**Pregunta 4.** En la revista de sala comparan dos pacientes con shock séptico en su hora $12$, ambos con $\text{PAD } 52\text{ mmHg}$ y $\text{FC } 100\text{ lpm}$ recibiendo noradrenalina a $0{,}25\ \mu\text{g/kg/min}$. Sin embargo, la Unidad A prescribe la droga expresada como **noradrenalina base** y la Unidad B como **noradrenalina bitartrato monohidrato**. Al calcular el **VNERi** según los umbrales de Goury et al. (2025) ($\text{corte crítico } < 2{,}6$; $\text{nadir } 6{,}7$), ¿qué ocurre si el médico de la Unidad A no realiza conversión?
- A) Obtiene un VNERi artificialmente bajo ($1{,}04$ en lugar de $2{,}08$), sobreestimando falsamente la severidad.
- B) Obtiene un VNERi idéntico ($2{,}08$), porque la fórmula anula automáticamente las unidades de masa.
- C) Obtiene un VNERi de $2{,}08$ cuando el equivalente real en bitartrato ($0{,}50\ \mu\text{g/kg/min}$) arroja un VNERi de **$1{,}04$** ($< 2{,}6$); al omitir la conversión subestima a la mitad la severidad vasopléjica real.
- D) La conversión solo aplica si la concentración de preparación supera los $4\text{ mg}$ en $50\text{ mL}$.
- E) El bitartrato monohidrato es menos potente en proporción $1{,}22:1$ respecto de la base, por lo que la corrección cambia menos de $20\%$.

**Pregunta 5.** Respecto a la interacción entre **fluido-respuesta** y **fluido-tolerancia** en sepsis demostrada por Muñoz et al. (2024) y Si et al. (2026), señale la afirmación CORRECTA:
- A) Si la vena cava inferior mide menos de $2{,}0\text{ cm}$, queda descartada la presencia de congestión venosa en los flujos portal o intrarrenal.
- B) Aproximadamente la mitad ($53\%$) de los pacientes fluido-respondedores ($\text{FR}+$) ya presentan signos de congestión orgánica, y en presencia de SDRA el $\text{EVLWI}$ aumenta incluso cuando el paciente responde al bolo con mayor gasto cardíaco.
- C) En los pacientes no respondedores ($\text{FR}-$), administrar un único bolo de $500\text{ mL}$ raramente empeora el puntaje VExUS ($<10\%$).
- D) Cuando un paciente es $\text{FR}+$ y muestra elevación de $\text{PVC}$ de $2\text{ mmHg}$ tras un bolo sin aumento de gasto cardíaco, debe administrarse un segundo bolo más rápido para superar la compliancia ventricular derecha.
- E) En ARISE FLUIDS (2026), la estrategia restrictiva redujo el edema pulmonar a costa de un aumento significativo de la mortalidad a 90 días.

<!-- practica-2026-11-26 -->
**Pregunta 6.** La revisión Cochrane 2026 de soluciones balanceadas vs salino 0,9% (23 estudios, 36.452 participantes) concluyó que:
- A) Las balanceadas reducen la mortalidad un 30%.
- B) Hay poca o ninguna diferencia en mortalidad (OR 0,95; IC95% 0,90–1,01) con certeza alta.
- C) El salino reduce la LRA.
- D) Las balanceadas aumentan la hiperkalemia grave.
- E) No hay datos en adultos.

**Pregunta 7.** En el ECA chileno de **señales de intolerancia a fluidos** (LUS, VExUS, E/e' y PVC como semáforo antes de cada bolo):
- A) Se demostró menor mortalidad.
- B) El grupo semáforo recibió más volumen.
- C) Se detuvo antes (35 de 62 pacientes); el grupo semáforo recibió menos volumen de protocolo y tuvo mejor PaO₂/FiO₂ a 6 h, sin diferencias en lactato ni CRT, por lo que el efecto sigue siendo incierto.
- D) El VExUS solo bastó para decidir cada bolo.
- E) Se incluyeron pacientes en ventilación espontánea sin hipoperfusión.

<details>
<summary>Ver respuestas y justificación tripartita (Preguntas 1–5)</summary>

1. **Respuesta correcta: B.** *Justificación:* (1) Fisiopatología: $\text{PAD} < 50\text{ mmHg}$ con taquicardia ($\text{DSI } 3{,}0$) expresa vasoplejia arterial con acortamiento diastólico insuficiente para sostener presión de retroceso Windkessel. (2) Evidencia: Ko et al. (2026) hallaron beneficio máximo de NA muy precoz cuando $\text{PAD} < 50$ ($\text{aOR } 0{,}48$), ARISE FLUIDS (2026) demostró menos edema pulmonar ($0{,}6\%$ vs $5{,}0\%$) y ANDROMEDA-SHOCK-2 (2025) integró $\text{PAD} < 50$ + $\text{CRT}$ logrando mayor Win Ratio ($1{,}16$) y días libres de soporte orgánico. (3) Descarte: A desconoce el daño por sobrecarga; C contradice OPTPRESS 2025; D confunde el pobre valor basal de Sarkar 2026 ($\text{AUC } 0{,}402$) con certeza pronóstica; E es peligroso (STRESS-L, M06) en vasoplejia no resucitada.
2. **Respuesta correcta: C.** *Justificación:* (1) $\text{PP } 88\text{ mmHg}$ en anciano se debe a baja $C_{\text{art}}$ y no a hiperflujo; $\text{PAD } 48 < 50\text{ mmHg}$ señala persistencia de vasoplejia relativa. (2) OPTPRESS (2025) demostró mayor mortalidad con meta $80\text{–}85\text{ mmHg}$ ($39{,}3\%$ vs $28{,}6\%$) sin beneficio en hipertensos crónicos, y Ji et al. (2026) asociaron $\text{PP} > 70\text{ mmHg}$ a mayor mortalidad en $>65\text{ años}$. (3) Descarte: A afirma lo contrario a OPTPRESS; B suspende abruptamente sin evaluar $E_{\text{adyn}}$ (<0,94 Guinot 2015); D/E carecen de indicación en shock séptico vasopléjico.
3. **Respuesta correcta: B.** *Justificación:* (1) En HIA ($\text{PIA } 18\text{ mmHg}$), la PLR colapsa su sensibilidad (AUROC $0{,}96 \to 0{,}71$) por compresión de cava, mientras $P_{\text{plat}}$ alta eleva $\text{PPV}$ sin reflejar precarga transmural real (Valenti 2021). (2) La pulsatilidad portal $\ge 50\%$ traduce congestión orgánica venosa avanzada (intolerancia a fluidos). (3) Descarte: A, C, D y E malinterpretan el artefacto de presiones no transmurales y pueden precipitar fallo biventricular/edema pulmonar.
4. **Respuesta correcta: C.** *Justificación:* (1) $0{,}25\ \mu\text{g/kg/min}$ de base equivalen a $0{,}50\ \mu\text{g/kg/min}$ de bitartrato monohidrato (razón $2{,}00:1$, ver M06). (2) $\text{VNERi}_{\text{real}} = 52 / (0{,}50 \times 100) = 1{,}04$ (muy por debajo del umbral crítico $<2{,}6$ de Goury 2025, mortalidad $56\%$), mientras usar $0{,}25$ da $2{,}08$ (subestimación del $50\%$). (3) E confunde la razón del clorhidrato ($1{,}22:1$) con la del bitartrato ($2{,}00:1$).
5. **Respuesta correcta: B.** *Justificación:* (1) Muñoz et al. (2024) hallaron congestión en el $53\%$ de los $\text{FR}+$ y Si et al. (2026) observaron ascenso de $\text{EVLWI}$ en SDRA incluso en $\text{FR}+$, además de congestión venosa en $55\%$ de pacientes con $\text{VCI} < 2\text{ cm}$. (2) Descarte: C es falsa porque en $\text{FR}-$ de Si et al. el VExUS empeoró en **$73\%$**; D viola el punto z de Magder (2015); E tergiversa ARISE FLUIDS (mortalidad 90 d NS $16{,}4\%$ vs $14{,}4\%$).

6. **Respuesta correcta: B.** *Justificación:* `PMID 42011817`. La LRA probablemente tampoco difiere (OR 0,87; certeza moderada).
7. **Respuesta correcta: C.** *Justificación:* `PMID 42995612`. Prometedor pero chico y detenido temprano.

</details>

### 5.2 Casos "Detectá el error de guardia" (3 casos)

1. **Caso 1 — "El residente que suspendió el bolo porque la PLR dio negativa, y el que lo indicó porque la PPV era 18%":** Paciente con íleo paralítico grave post-colecistectomía ($\text{PIA } 16\text{ mmHg}$) y SDRA moderado con $P_{\text{plat}}\ 28\text{ cmH}_2\text{O}$ e hipertensión pulmonar moderada por PEEP $14\text{ cmH}_2\text{O}$.
   - *Error oculto:* ninguno de los dos test de cabecera es interpretable linealmente bajo esas condiciones mecánicas. La $\text{PIA } 16$ genera falsos negativos de la PLR (AUROC $0{,}71$), y tanto la $P_{\text{plat}}\ 28$ como la sobrecarga del VD (Wyler von Ballmoos 2010, AUC $0{,}555$) producen **falsos positivos de $\text{PPV}$**. Conducta correcta: medir $\text{VExUS}$, evaluar $\text{VS}/\text{TAPSE}/\text{Septo}$ por eco y realizar EEOT o mini-reto monitorizando variación de $\text{PVC}$ (regla de Magder $\Delta\text{PVC} \ge 2$ sin $\uparrow\text{GC}$ = parar) mientras se trata la $\text{PIA}$.
2. **Caso 2 — "Tiene PAM 68 mmHg y está bárbaro, bajemos la noradrenalina rápido":** Paciente séptico con $\text{PAS } 106 / \text{PAD } 44$, $\text{FC } 128$, $\text{NA } 0{,}30\ \mu\text{g/kg/min}$, $\text{PPV } 9\%$ y $\text{SVV } 12\%$.
   - *Doble error:* (a) confunde $\text{PAM } 65\text{–}68$ con tono resuelto cuando $\text{PAD } 44 < 50$ y $\text{DSI } 2{,}91$ muestran vasoplejia severa; (b) inicia destete con $E_{\text{adyn}} = 9/12 = 0{,}75$ ($< 0{,}94$ de Guinot 2015, riesgo muy alto de hipotensión $\ge 15\%$ al bajar NA).
3. **Caso 3 — "Vino hipertenso, pongámosle la bomba de PAM a 85 mmHg por las dudas":** Adulto de $71\text{ años}$ con HTA ambulatoria leve, $\text{PAM } 67\text{ mmHg}$, $\text{CRT } 2{,}2\text{ s}$, diuresis conservada y lactato en descenso.
   - *Error oculto:* aplicar protocolarmente PAM $80\text{–}85\text{ mmHg}$ ignora **OPTPRESS 2025** (detenido por daño, sin beneficio en HTA crónica) y **65 Trial** (tolerar $60\text{–}65\text{ mmHg}$ seguro en $\ge 65\text{ años}$ si perfunde), exponiendo innecesariamente a isquemia mesentérica/digital, arritmias y exceso de catecolaminas.

### 5.3 Flashcards de repaso rápido (6 tarjetas)
1. **¿Qué define fisiológicamente la tríada $\text{PAD} < 50\text{ mmHg}$ + taquicardia?** → Pérdida grave de tono arteriolar (vasoplejia), ya que en tono normal la taquicardia eleva la PAD al acortar el tiempo de decaimiento exponencial Windkessel.
2. **¿Cuál es la zona segura de $\text{PP}_{24\text{h}}$ (Ji 2026) y cómo cambia su significado con la edad?** → **$40\text{–}70\text{ mmHg}$**: en $>65\text{ años}$ daña más $\text{PP} > 70$ (rigidez/pulsatilidad); en $\le 65\text{ años}$ daña más $\text{PP} < 40$ (bajo volumen sistólico).
3. **¿Cuáles son los 3 umbrales del VNERi (Goury 2025) y en qué sal se calibraron?** → Nadir **$6{,}7$**; riesgo crítico **$< 2{,}6$** ($56\%$ mort) y exceso **$> 10{,}8$** ($39\%$ mort); calibrado en **noradrenalina bitartrato monohidrato** ($\text{base} \times 2{,}00$).
4. **¿Qué demostró ARISE FLUIDS (2026) en shock séptico temprano?** → Restricción con vasopresor temprano ($1.140$ vs $2.248\text{ mL}$): mortalidad y días fuera del hospital neutros ($76$ vs $76$), pero redujo el **edema pulmonar de $5{,}0\%$ a $0{,}6\%$ ($\text{RR } 0{,}12$)**.
5. **¿Qué es el punto z de Magder (2015) al administrar un bolo de fluidos?** → Si $\Delta\text{PVC} \ge 2\text{ mmHg}$ sin aumento concomitante de $\text{VS}/\text{GC}$, el corazón alcanzó su meseta de llenado/restricción y hay que **frenar inmediatamente el volumen**.
6. **¿Cuándo falla específicamente la PLR como test de fluido-respuesta?** → En hipertensión intraabdominal (**$\text{PIA} \ge 12\text{ mmHg}$**), donde el AUROC cae de **$0{,}96$ a $0{,}71$** por falsos negativos al comprimirse el retorno de la vena cava inferior.
7. **¿Restrictivo vs liberal cambia la cognición o la discapacidad al año?** → No: SHAMROC (seguimiento de CLOVERS) no mostró diferencias a 6 y 12 meses (`PMID 42093058`).

---

## 6. Referencias Verificadas y Registro de Correcciones

### 6.1 Referencias verificadas
1. **Ko YS et al.** Very early norepinephrine initiation and diastolic arterial pressure $<50\text{ mmHg}$ in septic shock. *Crit Care*. 2026;30:88. `PMID 41593462` *(Nota de auditoría: observar inconsistencia numérica menor en tabla del subgrupo PP $\ge 25$)*.
2. **Ji Z et al.** 24-hour pulse pressure U-shaped association with ICU mortality and age interaction. *Front Med*. 2026;13:1770215.
3. **Sarkar S, Sharma N et al.** Dynamic change in Diastolic Shock Index ($\Delta\text{DSI}_{24\text{h}}$) vs baseline DSI in septic shock. *Indian J Crit Care Med*. 2026;30:99–106. *(Nota de auditoría: Sarkar es el primer autor; Sharma es segundo autor).*
4. **Ospina-Tascón GA et al.** Diastolic shock index: prognostic significance in septic shock. *Crit Care*. 2020. `PMID 32296976`.
5. **Paiva LS et al.** Mixed vasodilatory-cardiogenic phenotype and DSI $\ge 2.2$. *Eur Heart J*. 2024.
6. **Goury A et al.** Vasoactive-Norepinephrine Index (VNERi) and outcome in septic shock. *Ann Intensive Care*. 2025;15:43. `PMID 40133652`.
7. **Lim JY et al.** Diastolic perfusion pressure ($\text{PAD} - \text{RAP}$) in cardiogenic shock / ECMO-CS. 2025.
8. **Peake SL et al. (ARISE FLUIDS Investigators).** Early restricted fluid vs standard resuscitation in early septic shock. *N Engl J Med*. 2026. `PMID 42274006`.
9. **Hernández G et al. (ANDROMEDA-SHOCK-2 Investigators).** Personalized hemodynamic resuscitation targeting capillary refill time in early septic shock. *JAMA*. 2025.
10. **Mendes RS et al.** Meta-analysis of capillary refill time–guided resuscitation (7 RCTs, $n=2.408$). 2026.
11. **Dünser MW et al.** Arterial blood pressure during early sepsis and outcome. *Intensive Care Med*. 2009.
12. **Lamontagne F et al. (65 Trial).** Permissive hypotension ($60\text{–}65\text{ mmHg}$) in patients $\ge 65$ years. *JAMA*. 2020.
13. **OPTPRESS Trial Investigators.** High ($80\text{–}85\text{ mmHg}$) vs standard ($65\text{–}70\text{ mmHg}$) MAP targets in septic shock. *JAMA / Intensive Care*. 2025. `PMID 40358717`.
14. **RRI-guided MAP Trial.** Renal resistive index-guided blood pressure management in septic shock. 2026. `PMID 42469213`.
15. **Muñoz F et al.** Venous congestion in fluid-responsive critically ill patients. *Crit Care*. 2024.
16. **Si X et al.** Discrepancy between IVC diameter, VExUS worsening ($5\%$ FR+ vs $73\%$ FR−), and EVLWI in ARDS. *Crit Care*. 2026;30:35.
17. **Intra-abdominal hypertension & PLR meta-analysis / clinical evidence.** PLR AUROC degradation in $\text{PIA} \ge 12\text{ mmHg}$. 2026. `PMID 42469838`; **Puiac C et al.** 2018.
18. **Wyler von Ballmoos M et al.** Failure of pulse pressure variation in pulmonary hypertension. *Crit Care*. 2010.
19. **Valenti E et al.** Effect of plateau pressure increase on SVV/PPV without transmural RAP change. 2021.
20. **Magder S.** Bench-to-bedside review: An approach to hemodynamic monitoring — Guyton at the bedside. *Crit Care*. 2012/2015.
21. **Cioccari L et al.** Cardiac output in untreated native sepsis. 2016.
22. **Takala J et al.** Continuous cardiac output monitoring without protocolized therapy. 2011.
23. **Guinot PG et al.** Dynamic arterial elastance ($E_{\text{adyn}} < 0.94$) predicts arterial pressure decrease during norepinephrine weaning. *Crit Care*. 2015.

### 6.2 Registro de correcciones de auditoría (vinculado a `00-matriz-fuentes.md`)
- **Ítem #2 y #5:** Corregida la recomendación de PAM $80\text{–}85\text{ mmHg}$ en hipertensos (**OPTPRESS**, `PMID 40358717`, mayor mortalidad sin beneficio) e integrados **ARISE FLUIDS 2026** y **CLOVERS 2025** / **ARISS 2026** frente a bolos liberales.
- **Ítem #9 y #10:** Retiradas afirmaciones docentes pre-auditoría sin respaldo primario (`PAD MasterClass` antigua); corregida la atribución de **Sarkar et al. 2026** (*IJCCM* 30:99–106; Sharma es segundo autor), señalada la inconsistencia numérica interna de tabla en **Ko 2026** (`PMID 41593462`), aclarado el origen cardiogénico/ECMO-CS de **Lim 2025** ($\text{DPP } 37\text{ mmHg}$) y sustituidos cortes antiguos aproximados por los umbrales verificados de **Goury 2025** ($2{,}6 / 6{,}7 / 10{,}8$).
- **Ítem #11:** Documentada la conversión estricta entre noradrenalina **base** y **bitartrato monohidrato** ($\times 2{,}00$) / **bitartrato anhidro** ($\times 1{,}89$) / **clorhidrato** ($\times 1{,}22$) antes de interpretar el VNERi (**Goury 2025**).
