@echo off
echo Stopping any running servers...
taskkill /f /im node.exe 2>nul
timeout /t 2 /nobreak >nul

echo Starting Backend Server...
start "Backend Server" cmd /k "cd /d %~dp0..\..\Backend && npm start"

echo Waiting for backend to start...
timeout /t 5 /nobreak >nul

echo Starting Frontend Server...
start "Frontend Server" cmd /k "cd /d %~dp0 && npm run dev"

echo.
echo Both servers are starting up...
echo Backend: http://localhost:4000
echo Frontend: http://localhost:5173
echo.
echo Press any key to exit...
pause >nul












