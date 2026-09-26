@echo off
setlocal enabledelayedexpansion
title Wonder Academy - Voice Setup
color 0B

echo.
echo   ============================================
echo      WONDER ACADEMY - VOICE SETUP
echo   ============================================
echo.
echo   This makes the app read lessons in a better voice.
echo   You only run this once. Then it is done forever.
echo.

REM ---------- check python ----------
python --version >nul 2>&1
if errorlevel 1 (
  color 0C
  echo   PROBLEM: Python is not installed.
  echo.
  echo   Fix it: open the Microsoft Store, search "Python 3.12",
  echo   click Get. Takes 2 minutes. Then run this file again.
  echo.
  pause
  exit /b
)
echo   [ok] Python found
echo.

REM ---------- remember settings ----------
set CFG=%~dp0my-settings.txt
if exist "%CFG%" (
  echo   Using your saved settings.
  for /f "usebackq tokens=1,* delims==" %%a in ("%CFG%") do set %%a=%%b
  echo.
  goto MENU
)

echo   ----------------------------------------
echo   First time. I need 3 things from Supabase.
echo   ----------------------------------------
echo.
echo   Open supabase.com, click your wonderacademy project.
echo.
echo   1) Left sidebar bottom: Project Settings, then API.
echo      Copy "Project URL".
echo.
set /p SUPABASE_URL=   Paste Project URL here:
echo.
echo   2) Same page, scroll down to "service_role".
echo      Click reveal, copy that long key.
echo      (This is secret. It stays on this PC only.)
echo.
set /p SUPABASE_SERVICE_KEY=   Paste service_role key here:
echo.
echo   3) Left sidebar: Authentication, then Users.
echo      Copy the UUID next to your email.
echo.
set /p OWNER_ID=   Paste your user UUID here:
echo.

> "%CFG%" (
  echo SUPABASE_URL=!SUPABASE_URL!
  echo SUPABASE_SERVICE_KEY=!SUPABASE_SERVICE_KEY!
  echo OWNER_ID=!OWNER_ID!
)
echo   [ok] Saved. You will not be asked again.
echo.

:MENU
echo   ============================================
echo      WHAT DO YOU WANT?
echo   ============================================
echo.
echo   [1]  A much better voice  (RECOMMENDED)
echo        Takes about 15 minutes. Works on any PC.
echo        A real human-sounding voice, not the robot.
echo        Pick a US, Indian, or Hindi voice.
echo.
echo   [2]  MY OWN voice
echo        You record 30 seconds, it clones you.
echo        Needs a good graphics card or it runs all night.
echo.
echo   [3]  Just test 5 clips first (safe, 5 minutes)
echo.
echo   [4]  Quit
echo.
set /p CHOICE=   Type 1, 2, 3 or 4 then press Enter:
echo.

if "%CHOICE%"=="4" exit /b
if "%CHOICE%"=="3" goto TEST
if "%CHOICE%"=="2" goto CLONE
if "%CHOICE%"=="1" goto NICE
goto MENU

REM ================= OPTION 1 =================
:NICE
echo   Installing (first time only, about 2 minutes)...
python -m pip install --quiet --upgrade edge-tts requests
echo   [ok] Ready
echo.
echo   Pick a voice:
echo     [1] Woman, American      (Aria)
echo     [2] Man, American        (Guy)
echo     [3] Woman, Indian        (Neerja)
echo     [4] Man, Indian          (Prabhat)
echo     [5] Woman, Hindi         (Swara)
echo.
set /p V=   Type 1-5 then Enter:
if "%V%"=="1" (set VOICE=en-US-AriaNeural& set VNAME=aria)
if "%V%"=="2" (set VOICE=en-US-GuyNeural& set VNAME=guy)
if "%V%"=="3" (set VOICE=en-IN-NeerjaNeural& set VNAME=neerja)
if "%V%"=="4" (set VOICE=en-IN-PrabhatNeural& set VNAME=prabhat)
if "%V%"=="5" (set VOICE=hi-IN-SwaraNeural& set VNAME=swara)
if "%VOICE%"=="" goto NICE
echo.
call :EXPORT
echo   Making the voice files. Leave this window open.
echo   You can use your PC normally.
echo.
python "%~dp0generate.py" --engine edge --voice %VOICE% --name %VNAME% --rate -8%%
goto DONE

REM ================= OPTION 2 =================
:CLONE
if not exist "%~dp0sample.wav" (
  color 0E
  echo   I need a recording of your voice first.
  echo.
  echo   1. Press the Windows key, type "Sound Recorder", open it.
  echo   2. Hit record. Read this out loud, slowly, twice:
  echo.
  echo      "The sun is a star. It gives us light and keeps us warm.
  echo       Plants use sunshine to grow big and strong."
  echo.
  echo   3. Stop. Right-click the recording, Open file location.
  echo   4. Copy that file into this folder:
  echo      %~dp0
  echo   5. Rename it to exactly:  sample
  echo.
  echo   Then run this file again and pick 2.
  echo.
  start "" "%~dp0"
  pause
  exit /b
)
echo   [ok] Found your recording
echo.
echo   Installing the voice cloner. This is a big download,
echo   about 2 GB, first time only. Go make a coffee.
echo.
python -m pip install --quiet --upgrade chatterbox-tts requests
echo   [ok] Ready
echo.
set /p VNAME=   Name this voice (e.g. dad):
if "%VNAME%"=="" set VNAME=dad
echo.
call :EXPORT
echo   Making the story pages in your voice.
echo   Leave this window open. It can take hours.
echo   Safe to stop with Ctrl+C and rerun later.
echo.
python "%~dp0generate.py" --engine chatterbox --sample "%~dp0sample.wav" --name %VNAME% --only page,extras,video,phrase
goto DONE

REM ================= OPTION 3 =================
:TEST
python -m pip install --quiet --upgrade edge-tts requests
call :EXPORT
echo   Making 5 test clips...
echo.
python "%~dp0generate.py" --engine edge --voice en-US-AriaNeural --name aria --only page --limit 5
echo.
echo   ============================================
echo   Now open the app on your phone:
echo     Parent area  -  Narrator  -  "Your own voice, free"
echo     Type:  aria
echo     Tap Check, then Use library
echo     Open any Science lesson
echo   ============================================
echo.
echo   If the first page sounds good, run this file
echo   again and pick 1 to do all of them.
echo.
pause
exit /b

REM ================= HELPERS =================
:EXPORT
where node >nul 2>&1
if errorlevel 1 (
  echo   Note: Node not found, using the existing word list.
  echo.
  goto :eof
)
node "%~dp0export-content.js" >nul 2>&1
goto :eof

:DONE
echo.
color 0A
echo   ============================================
echo      DONE
echo   ============================================
echo.
echo   Now on your phone or tablet:
echo     Parent area  -  Narrator  -  "Your own voice, free"
echo     Type:  %VNAME%
echo     Tap Check, then Use library
echo.
echo   Any lesson line not made yet still uses the old
echo   robot voice. Run this again any time to add more.
echo.
pause
