# Actualizacion mensual del Sepsis Atlas UTI.
# La corre la tarea de Windows "AtlasActualizacionMensual" el dia 1 de cada mes.
# Tambien se puede correr a mano:  powershell -NoProfile -File scripts\actualizar_mensual.ps1
#
# Pasos:
#   1. Ingesta las entregas del Radar Bibliografico y consulta PubMed (ultimos 35 dias).
#   2. Regenera los datos, verifica los motores y arma el build (web\dist).
#   3. Si hubo novedades, las commitea y hace push a main: el workflow de GitHub Pages
#      compila y publica el sitio solo.
#   4. Anota el resultado en actualizaciones.log (en la raiz del proyecto).
#
# Este archivo es ASCII a proposito: PowerShell 5.1 lee mal los .ps1 UTF-8 sin BOM.

$ErrorActionPreference = 'Stop'
$proyecto = Split-Path -Parent $PSScriptRoot
$web = Join-Path $proyecto 'web'
$log = Join-Path $proyecto 'actualizaciones.log'
# Python instalado para el usuario actual; si no esta ahi, se usa el del PATH.
$python = Join-Path $env:LOCALAPPDATA 'Programs\Python\Python313\python.exe'
if (-not (Test-Path $python)) { $python = (Get-Command python -ErrorAction Stop).Source }

function Write-Log([string]$texto) {
    $linea = "{0}  {1}" -f (Get-Date -Format 'yyyy-MM-dd HH:mm'), $texto
    Add-Content -Path $log -Value $linea -Encoding UTF8
    Write-Output $linea
}

function Invoke-Paso([string]$nombre, [scriptblock]$bloque) {
    # En PowerShell 5.1, con 'Stop', cualquier linea en stderr de un programa (avisos de npm,
    # por ejemplo) corta el script aunque el programa termine bien. Aca manda el codigo de salida.
    $ErrorActionPreference = 'Continue'
    $salida = & $bloque 2>&1 | Out-String
    if ($LASTEXITCODE -ne 0) {
        Write-Log "FALLO en '$nombre' (codigo $LASTEXITCODE)."
        Add-Content -Path $log -Value $salida.Trim() -Encoding UTF8
        throw "Fallo el paso: $nombre"
    }
    return $salida
}

try {
    Write-Log '--- Inicio de actualizacion mensual ---'

    Set-Location $proyecto
    $ingesta = Invoke-Paso 'ingesta del Radar + PubMed' { & $python 'scripts\ingestar_radar.py' --check-pubmed-days 35 }
    Write-Log ("Ingesta: " + (($ingesta -split "`n" | Where-Object { $_.Trim() }) | Select-Object -Last 1).Trim())

    $json = Get-Content (Join-Path $proyecto 'base-conocimiento\evidencia-viva.json') -Raw -Encoding UTF8 | ConvertFrom-Json
    $nuevos = 0
    if ($json.chequeo_pubmed -and $json.chequeo_pubmed.ok) { $nuevos = @($json.chequeo_pubmed.pmids_nuevos).Count }
    Write-Log ("Evidencia viva: {0} entradas de {1} entregas del Radar (hasta {2}). PubMed: {3} PMID nuevos sin ingresar." -f `
        $json.total_entradas, $json.radars_procesados, $json.rango_fechas.hasta, $nuevos)

    # Candidatos del mes en PubMed (ensayos, metaanalisis y guias de sepsis). No se publican:
    # quedan en base-conocimiento\candidatos-pubmed-correo.md para curacion manual.
    $barrido = Invoke-Paso 'barrido PubMed del mes' { & $python 'scripts\barrido_pubmed_anual.py' --dias 35 }
    Write-Log ("Barrido: " + (($barrido -split "`n" | Where-Object { $_.Trim() }) | Select-Object -Last 1).Trim())

    Set-Location $web
    Invoke-Paso 'verificacion de motores' { npm run verify } | Out-Null
    Invoke-Paso 'build' { npm run build } | Out-Null
    Write-Log 'Build OK (web\dist).'

    # Publicacion: el push a main dispara el workflow de GitHub Pages, que vuelve a
    # compilar y publicar. Se suben solo los datos que regenera este script, no todo
    # el arbol, para no arrastrar ediciones a medio hacer de los modulos.
    Set-Location $proyecto
    $datos = @(
        'base-conocimiento\evidencia-viva.json',
        'base-conocimiento\pendientes-revision.md',
        'base-conocimiento\candidatos-pubmed-correo.md',
        'base-conocimiento\candidatos-pubmed-correo.json',
        'web\src\data\generated'
    ) | Where-Object { Test-Path (Join-Path $proyecto $_) }

    Invoke-Paso 'git add' { git add -- $datos } | Out-Null
    $pendiente = Invoke-Paso 'git status' { git status --porcelain -- $datos }

    if ($pendiente -and ($pendiente -join '').Trim()) {
        $mensaje = 'Actualizacion mensual ' + (Get-Date -Format 'yyyy-MM')
        Invoke-Paso 'git commit' { git commit -m $mensaje } | Out-Null
        Invoke-Paso 'git push' { git push origin main } | Out-Null
        Write-Log 'Publicado: push a main, GitHub Pages se actualiza solo en ~1 minuto.'
    } else {
        Write-Log 'Sin novedades del mes: no hubo cambios para publicar.'
    }

    Write-Log '--- Fin OK ---'
    exit 0
} catch {
    Write-Log ("--- Fin con error: " + $_.Exception.Message + " ---")
    exit 1
}
