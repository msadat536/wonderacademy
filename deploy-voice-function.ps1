# Wonder Academy - deploy the voice Edge Function from PowerShell.
# No Docker. No dashboard clicking.
#
# Run it from anywhere:
#   cd E:\wonder-academy
#   powershell -ExecutionPolicy Bypass -File .\deploy-voice-function.ps1

$ErrorActionPreference = "Stop"
$ProjectRef = "juirydvjggrkhnlucwpp"
$AppDir     = "E:\wonder-academy"
$FnDir      = Join-Path $AppDir "supabase\functions\voice"
$Source     = Join-Path $AppDir "voice-function.ts"

Write-Host ""
Write-Host "  Wonder Academy - deploying the voice function" -ForegroundColor Cyan
Write-Host "  ---------------------------------------------"
Write-Host ""

# --- check node ---
try {
  $nodeVer = & node --version 2>$null
  Write-Host "  [ok] Node $nodeVer"
} catch {
  Write-Host "  Node.js is not installed." -ForegroundColor Red
  Write-Host "  Get it from https://nodejs.org (the LTS button), then run this again."
  exit 1
}

# --- check the source file ---
if (-not (Test-Path $Source)) {
  Write-Host "  Cannot find $Source" -ForegroundColor Red
  Write-Host "  Move voice-function.ts into $AppDir first."
  exit 1
}
Write-Host "  [ok] Found voice-function.ts"

# --- the CLI expects supabase\functions\<name>\index.ts ---
New-Item -ItemType Directory -Force -Path $FnDir | Out-Null
Copy-Item $Source (Join-Path $FnDir "index.ts") -Force
Write-Host "  [ok] Staged as supabase\functions\voice\index.ts"

# --- some CLI builds want a config file present ---
$CfgPath = Join-Path $AppDir "supabase\config.toml"
if (-not (Test-Path $CfgPath)) {
  "project_id = ""$ProjectRef""" | Set-Content -Path $CfgPath -Encoding ASCII
  Write-Host "  [ok] Wrote supabase\config.toml"
}
Write-Host ""

# --- log in (opens a browser once, then remembers) ---
Write-Host "  Signing in to Supabase..." -ForegroundColor Yellow
Write-Host "  A browser window will open. Approve it, then come back here."
Write-Host ""
Push-Location $AppDir
& npx --yes supabase@beta login
if ($LASTEXITCODE -ne 0) { Write-Host "  Login failed." -ForegroundColor Red; Pop-Location; exit 1 }

# --- deploy, no Docker needed thanks to --use-api ---
Write-Host ""
Write-Host "  Deploying..." -ForegroundColor Yellow
& npx --yes supabase@beta functions deploy voice --use-api --project-ref $ProjectRef
$code = $LASTEXITCODE
Pop-Location

Write-Host ""
if ($code -eq 0) {
  Write-Host "  ============================================" -ForegroundColor Green
  Write-Host "     DEPLOYED" -ForegroundColor Green
  Write-Host "  ============================================" -ForegroundColor Green
  Write-Host ""
  Write-Host "  https://$ProjectRef.supabase.co/functions/v1/voice"
  Write-Host ""
  Write-Host "  Now in the app:"
  Write-Host "    Parent area - Narrator - Voice Studio"
  Write-Host "    Pick a voice, then tap '1. Test it'"
  Write-Host ""
} else {
  Write-Host "  Deploy failed (exit $code)." -ForegroundColor Red
  Write-Host ""
  Write-Host "  If it complained about Docker, your CLI is too old for --use-api."
  Write-Host "  Try:   npx --yes supabase@latest functions deploy voice --use-api --project-ref $ProjectRef"
  Write-Host ""
  Write-Host "  If it still fails, paste the error and I will sort it out."
  Write-Host ""
}
