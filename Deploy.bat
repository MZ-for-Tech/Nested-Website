@echo off
set "PROJECT_DIR=C:\inetpub\wwwroot\Nested Website"
cd /d "%PROJECT_DIR%"

echo [1/6] Stopping PM2 processes...
call pm2 stop nested-website 2>nul
call pm2 delete nested-website 2>nul

echo [2/6] Installing dependencies...
call npm install --legacy-peer-deps

echo [3/6] Running npm run build...
call npm run build
if %errorlevel% neq 0 (
    echo [ERROR] Build failed! Aborting deployment.
    pause
    exit /b 1
)

echo [4/6] Copying static files to standalone...
xcopy /E /I /Y "%PROJECT_DIR%\.next\static" "%PROJECT_DIR%\.next\standalone\.next\static"

echo [5/6] Copying public folder to standalone...
xcopy /E /I /Y "%PROJECT_DIR%\public" "%PROJECT_DIR%\.next\standalone\public"

echo [6/6] Restarting PM2 process...
call pm2 start node --name "nested-website" -- "%PROJECT_DIR%\.next\standalone\server.js"
call pm2 save

echo Deployment Complete!
pause