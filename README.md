# School Sphere - MERN Stack Educational Platform

A comprehensive educational management system built with the MERN stack (MongoDB, Express.js, React, Node.js). This platform provides a complete solution for school management, course enrollment, and student engagement.

## 🚀 Features

### Frontend Features
- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Student Portal**: Course browsing, enrollment, and profile management
- **Admin Dashboard**: Complete school management system
- **Responsive Design**: Works perfectly on all devices
- **Interactive Components**: Dynamic forms, modals, and navigation

### Backend Features
- **RESTful API**: Well-structured API endpoints
- **Authentication**: JWT-based authentication system
- **Database Models**: User, Course, Enquiry, and Announcement models
- **Role-based Access**: Admin, Teacher, Student, and Parent roles
- **Data Validation**: Input validation and error handling

### Database Features
- **MongoDB Integration**: NoSQL database for flexible data storage
- **User Management**: Complete user registration and authentication
- **Course Management**: Course creation, enrollment, and tracking
- **Enquiry System**: Contact form and enquiry management
- **Announcements**: School-wide announcement system

## 🛠️ Technology Stack

### Frontend
- **React 19.1.1**: Modern React with hooks
- **React Router DOM**: Client-side routing
- **React Bootstrap**: UI component library
- **CSS3**: Custom styling with CSS variables
- **Font Awesome**: Icon library
- **Vite**: Fast build tool and dev server

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **JWT**: JSON Web Tokens for authentication
- **bcryptjs**: Password hashing
- **express-validator**: Input validation

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **MongoDB** (v4.4 or higher)
- **npm** or **yarn** package manager

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Main\ Project
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd Backend

# Install dependencies
npm install

# Create environment file
# Create a .env file in the Backend directory with the following content:
PORT=4000
MONGODB_URI=mongodb://127.0.0.1:27017/schoolsphere
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key_here
ADMIN_EMAIL=admin@schoolsphere.edu
ADMIN_PASSWORD=admin123
FRONTEND_URL=http://localhost:5173

# Start the backend server
npm run dev
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory (in a new terminal)
cd Frontend/demo-ss

# Install dependencies
npm install

# Start the development server
npm run dev
```

### 4. Database Setup

Make sure MongoDB is running on your system:

```bash
# Start MongoDB service (Windows)
net start MongoDB

# Or start MongoDB daemon (Linux/Mac)
sudo systemctl start mongod
```

## 🌐 Accessing the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:4000
- **API Documentation**: http://localhost:4000 (check console for available endpoints)

## 📁 Project Structure

```
Main Project/
├── Backend/
│   ├── src/
│   │   ├── models/          # Database models
│   │   │   ├── User.js
│   │   │   ├── Course.js
│   │   │   ├── Enquiry.js
│   │   │   └── Announcement.js
│   │   ├── routes/          # API routes
│   │   │   ├── auth.js
│   │   │   ├── courses.js
│   │   │   ├── enquiries.js
│   │   │   └── announcements.js
│   │   ├── middleware/      # Custom middleware
│   │   │   └── auth.js
│   │   └── server.js        # Main server file
│   ├── package.json
│   └── .env                 # Environment variables
├── Frontend/
│   └── demo-ss/
│       ├── src/
│       │   ├── components/  # React components
│       │   │   ├── admin/   # Admin components
│       │   │   ├── general/ # General components
│       │   │   └── shared/  # Shared components
│       │   ├── assets/      # Images and icons
│       │   ├── services/    # API services
│       │   ├── styles/      # Global styles
│       │   └── App.jsx      # Main app component
│       └── package.json
└── README.md
```

## 🔐 Authentication & Roles

### User Roles
- **Admin**: Full system access, user management, course management
- **Teacher**: Course creation, student management, announcements
- **Student**: Course enrollment, profile management
- **Parent**: Student progress tracking, communication

### Default Admin Credentials
- **Email**: admin@schoolsphere.edu
- **Password**: admin123

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get single course
- `POST /api/courses` - Create course (teacher/admin)
- `PUT /api/courses/:id` - Update course (instructor/admin)
- `POST /api/courses/:id/enroll` - Enroll in course
- `GET /api/courses/user/enrolled` - Get enrolled courses

### Enquiries
- `POST /api/enquiries` - Create enquiry
- `GET /api/enquiries` - Get all enquiries (admin)

### Announcements
- `GET /api/announcements` - Get all announcements
- `GET /api/announcements/:id` - Get single announcement
- `POST /api/announcements` - Create announcement (teacher/admin)
- `PUT /api/announcements/:id` - Update announcement
- `DELETE /api/announcements/:id` - Delete announcement

## 🎨 Styling & Design

The application uses a modern design system with:

- **CSS Variables**: Consistent color scheme and spacing
- **Responsive Design**: Mobile-first approach
- **Smooth Animations**: CSS transitions and transforms
- **Modern Typography**: Inter font family
- **Icon System**: Font Awesome icons
- **Component Library**: React Bootstrap components

### Color Palette
- **Primary**: #3a5a78 (Blue)
- **Secondary**: #f8d62b (Yellow)
- **Accent**: #2c4660 (Dark Blue)
- **Text**: #343a40 (Dark Gray)
- **Background**: #f8f9fa (Light Gray)

## 🚀 Deployment

### Backend Deployment
1. Set up a MongoDB Atlas cluster or use a cloud MongoDB service
2. Update the MONGODB_URI in your environment variables
3. Deploy to platforms like Heroku, Railway, or DigitalOcean
4. Set up environment variables on your hosting platform

### Frontend Deployment
1. Build the production version: `npm run build`
2. Deploy the `dist` folder to platforms like Netlify, Vercel, or GitHub Pages
3. Update API endpoints to point to your deployed backend

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the console for error messages
2. Ensure MongoDB is running
3. Verify all environment variables are set correctly
4. Check that all dependencies are installed

## 🔄 Future Enhancements

- [ ] Real-time notifications
- [ ] File upload system
- [ ] Email notifications
- [ ] Advanced reporting
- [ ] Mobile app development
- [ ] Video conferencing integration
- [ ] Grade management system
- [ ] Parent-teacher communication portal

---

**Built with ❤️ using the MERN stack**












