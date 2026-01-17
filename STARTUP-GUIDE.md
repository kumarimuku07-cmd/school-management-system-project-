# School Sphere - Startup Guide

## 🚀 Quick Start

### Method 1: Using PowerShell Scripts (Recommended)

1. **Start Backend Server:**
   ```powershell
   .\start-backend.ps1
   ```

2. **Start Frontend Server (in a new terminal):**
   ```powershell
   .\start-frontend.ps1
   ```

### Method 2: Manual Commands

1. **Start Backend Server:**
   ```powershell
   cd "D:\Main Project\Backend"
   npm run dev
   ```

2. **Start Frontend Server (in a new terminal):**
   ```powershell
   cd "D:\Main Project\Frontend\demo-ss"
   npm run dev
   ```

### Method 3: Using Batch File

1. **Double-click `start-servers.bat`**

## 🌐 Access URLs

- **Frontend:** http://localhost:5174
- **Backend API:** http://localhost:4000
- **Backend Health Check:** http://localhost:4000/

## 🔧 Troubleshooting

### CORS Issues Fixed
- Backend now accepts requests from both ports 5173 and 5174
- Added proper CORS headers and preflight handling
- Enhanced API request configuration

### If Backend Won't Start
1. Make sure MongoDB is running
2. Check if port 4000 is available
3. Verify Node.js and npm are installed

### If Frontend Won't Start
1. Check if port 5174 is available
2. Try clearing node_modules and reinstalling:
   ```powershell
   cd "D:\Main Project\Frontend\demo-ss"
   Remove-Item -Recurse -Force node_modules
   npm install
   ```

## 📝 Environment Setup

### Backend Environment
Create `Backend/.env` file with:
```
PORT=4000
NODE_ENV=development
MONGODB_URI=mongodb://127.0.0.1:27017/schoolsphere
JWT_SECRET=your_jwt_secret_key_here_make_it_long_and_secure_school_sphere_2024
ADMIN_EMAIL=admin@schoolsphere.edu
ADMIN_PASSWORD=admin123
FRONTEND_URL=http://localhost:5174
```

## ✅ Features Working

- ✅ Slider on home page with real images
- ✅ Student login and registration
- ✅ Admin dashboard
- ✅ Admission form saves to database
- ✅ Contact form saves enquiries
- ✅ Fee structure in Indian Rupees
- ✅ Avatar images for testimonials
- ✅ Interactive map in contact page
- ✅ All URLs and navigation working

## 🎯 Test the Application

1. **Home Page:** http://localhost:5174
2. **Admission Form:** http://localhost:5174/admission
3. **Student Login:** http://localhost:5174/student/login
4. **Admin Login:** http://localhost:5174/admin

## 📞 Support

If you encounter any issues:
1. Check the browser console for errors
2. Check the terminal output for server errors
3. Ensure both servers are running
4. Verify MongoDB is running
