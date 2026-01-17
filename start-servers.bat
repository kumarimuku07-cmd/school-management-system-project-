@echo off
echo Starting School Sphere Application...

echo.
echo Starting Backend Server...
start "Backend Server" cmd /k "cd /d D:\Main Project\Backend && npm run dev"

echo.
echo Starting Frontend Server...
start "Frontend Server" cmd /k "cd /d D:\Main Project\Frontend\demo-ss && npm run dev"

echo.
echo Both servers are starting...
echo Backend will run on: http://localhost:4000
echo Frontend will run on: http://localhost:5174
echo.
echo Press any key to exit...
pause > nul
