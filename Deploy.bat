@echo off
set "PROJECT_DIR=C:\inetpub\wwwroot\Nested-Website"
set "APP_PORT=3001"

if not exist "%PROJECT_DIR%\package.json" (
    echo [ERROR] Project folder or package.json not found:
    echo %PROJECT_DIR%
    pause
    exit /b 1
)

cd /d "%PROJECT_DIR%"
if errorlevel 1 (
    echo [ERROR] Failed to change directory to:
    echo %PROJECT_DIR%
    pause
    exit /b 1
)

echo [1/6] Stopping PM2 process...
call pm2 stop nested-website 2>nul
call pm2 delete nested-website 2>nul

echo [2/6] Installing dependencies...
call npm install --legacy-peer-deps
if errorlevel 1 (
    echo [ERROR] npm install failed.
    pause
    exit /b 1
)

echo [3/6] Running npm run build...
call npm run build
if errorlevel 1 (
    echo [ERROR] Build failed! Aborting deployment.
    pause
    exit /b 1
)

if not exist "%PROJECT_DIR%\.next\standalone\server.js" (
    echo [ERROR] server.js not found in standalone output.
    echo Make sure next.config has output: "standalone"
    pause
    exit /b 1
)

echo [4/6] Copying static files to standalone...
xcopy /E /I /Y "%PROJECT_DIR%\.next\static" "%PROJECT_DIR%\.next\standalone\.next\static"

echo [5/6] Copying public folder to standalone...
xcopy /E /I /Y "%PROJECT_DIR%\public" "%PROJECT_DIR%\.next\standalone\public"

echo [6/6] Restarting PM2 process on port %APP_PORT%...
set PORT=%APP_PORT%
call pm2 start node --name "nested-website" -- "%PROJECT_DIR%\.next\standalone\server.js"
call pm2 save

echo Deployment Complete!
pause
