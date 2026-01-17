#!/bin/bash

echo "Starting School Sphere MERN Stack Application..."
echo

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if MongoDB is running
if ! command -v mongod &> /dev/null; then
    echo "WARNING: MongoDB might not be installed or not in PATH."
    echo "Please make sure MongoDB is installed and running."
    echo
fi

echo "Setting up Backend..."
cd Backend

# Install backend dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "Installing backend dependencies..."
    npm install
fi

echo
echo "Setting up Frontend..."
cd ../Frontend/demo-ss

# Install frontend dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "Installing frontend dependencies..."
    npm install
fi

echo
echo "Starting the application..."
echo
echo "Backend will start on: http://localhost:4000"
echo "Frontend will start on: http://localhost:5173"
echo

# Start backend server in background
cd ../../Backend
npm run dev &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 3

# Start frontend server in background
cd ../Frontend/demo-ss
npm run dev &
FRONTEND_PID=$!

echo
echo "Application is starting up..."
echo "Please wait for both servers to start completely."
echo
echo "Press Ctrl+C to stop both servers..."

# Function to cleanup background processes
cleanup() {
    echo
    echo "Stopping servers..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    echo "Servers stopped."
    exit 0
}

# Set trap to cleanup on script exit
trap cleanup SIGINT SIGTERM

# Wait for user to stop
wait












