@echo off
echo Starting School Sphere MERN Stack Application...
echo.

echo Checking if Node.js is installed...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

echo Checking if MongoDB is running...
mongod --version >nul 2>&1
if %errorlevel% neq 0 (
    echo WARNING: MongoDB might not be installed or not in PATH.
    echo Please make sure MongoDB is installed and running.
    echo.
)

echo Setting up Backend...
cd Backend
if not exist node_modules (
    echo Installing backend dependencies...
    npm install
)

echo.
echo Setting up Frontend...
cd ..\Frontend\demo-ss
if not exist node_modules (
    echo Installing frontend dependencies...
    npm install
)

echo.
echo Starting the application...
echo.
echo Backend will start on: http://localhost:4000
echo Frontend will start on: http://localhost:5173
echo.

start "Backend Server" cmd /k "cd /d %~dp0Backend && npm run dev"
timeout /t 3 /nobreak >nul
start "Frontend Server" cmd /k "cd /d %~dp0Frontend\demo-ss && npm run dev"

echo.
echo Application is starting up...
echo Please wait for both servers to start completely.
echo.
echo Press any key to exit this window...
pause >nul
