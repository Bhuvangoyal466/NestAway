# 🏠 NestAway - Full-Stack Accommodation Booking Platform

## 📋 Overview

**NestAway** is a comprehensive full-stack web application inspired by Airbnb, built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It provides a seamless platform for users to discover, book, and manage accommodations while offering property owners the ability to list and manage their properties efficiently.

This modern web application features a beautiful glassmorphism UI design with smooth animations, responsive layouts, and an intuitive user experience across all devices.

---

## ✨ Key Features

### 🔐 **Authentication & User Management**
- **Secure Registration & Login**: Password hashing with bcryptjs for enhanced security
- **Google OAuth Integration**: One-click login using Google accounts via @react-oauth/google
- **JWT Authentication**: Secure session management with JSON Web Tokens
- **User Profile Management**: Complete profile editing capabilities with avatar support
- **Password Protection**: Secure password validation and encrypted storage

### 🏠 **Property Management**
- **Property Listings**: Complete CRUD operations for accommodation listings
- **Photo Management**: Multiple photo uploads with Cloudinary integration
- **Property Details**: Comprehensive property information including amenities, pricing, and descriptions
- **Property Gallery**: Interactive photo galleries with lightbox functionality
- **Location Management**: Address integration with mapping capabilities

### 🔍 **Search & Discovery**
- **Advanced Search**: Filter properties by location, price range, and amenities
- **Real-time Search**: Dynamic search functionality with instant results
- **Property Cards**: Beautiful card-based layout with property previews
- **Interactive UI**: Vanilla-tilt effects and smooth animations for enhanced user experience

### 📅 **Booking System**
- **Date Range Selection**: Intuitive calendar-based date picker for check-in/check-out
- **Real-time Availability**: Dynamic pricing and availability checking
- **Booking Management**: Complete booking lifecycle management
- **Booking History**: Detailed booking records with status tracking
- **Price Calculation**: Automatic total price calculation based on dates and guest count

### 🎨 **Modern UI/UX Design**
- **Glassmorphism Design**: Modern glass-effect UI components
- **Responsive Layout**: Fully responsive design optimized for all devices
- **Dark Theme**: Beautiful dark-themed interface with gradient backgrounds
- **Smooth Animations**: Framer Motion animations and transitions
- **Component Library**: Custom UI components built with Radix UI and Tailwind CSS

### 📱 **Responsive Features**
- **Mobile-First Design**: Optimized for mobile devices with progressive enhancement
- **Cross-Browser Compatibility**: Works seamlessly across all modern browsers
- **Touch-Friendly Interface**: Optimized for touch interactions
- **Adaptive Layout**: Dynamic layout adjustments based on screen size

---

## 🛠 Technology Stack

### **Backend Technologies**
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework for Node.js
- **MongoDB**: NoSQL database for data storage
- **Mongoose**: MongoDB object modeling for Node.js
- **JWT**: JSON Web Tokens for authentication
- **bcryptjs**: Password hashing library
- **Cloudinary**: Cloud-based image and video management
- **Multer**: Middleware for handling file uploads
- **CORS**: Cross-Origin Resource Sharing middleware
- **Cookie Parser**: Cookie parsing middleware

### **Frontend Technologies**
- **React.js**: Frontend JavaScript library
- **React Router DOM**: Client-side routing for React
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Tailwind CSS Animate**: Animation utilities for Tailwind
- **Framer Motion**: Animation library for React
- **Radix UI**: Unstyled, accessible UI components
- **Lucide React**: Beautiful icon library
- **React Day Picker**: Date picker component
- **Axios**: HTTP client for API requests

### **UI/UX Libraries & Components**
- **Shadcn/ui**: High-quality UI components built on Radix UI
- **Class Variance Authority**: CSS-in-JS variant API
- **clsx**: Utility for constructing className strings
- **Tailwind Merge**: Utility for merging Tailwind CSS classes
- **React Toastify**: Toast notifications for React
- **Vanilla Tilt**: 3D tilt effect library
- **React Loader Spinner**: Loading spinners for React

### **Development Tools**
- **ESLint**: Code linting and quality assurance
- **Prettier**: Code formatting
- **PostCSS**: CSS post-processor
- **Autoprefixer**: CSS vendor prefixing

---

## 🏗 Project Structure

```
NestAway/
├── api/                          # Backend server
│   ├── config/
│   │   └── db.js                # Database configuration
│   ├── controllers/             # API route controllers
│   │   ├── bookingController.js # Booking operations
│   │   ├── placeController.js   # Property operations
│   │   └── userController.js    # User operations
│   ├── middlewares/
│   │   └── user.js              # Authentication middleware
│   ├── models/                  # Database models
│   │   ├── Booking.js           # Booking schema
│   │   ├── Place.js             # Property schema
│   │   └── User.js              # User schema
│   ├── routes/                  # API routes
│   │   ├── booking.js           # Booking routes
│   │   ├── place.js             # Property routes
│   │   └── user.js              # User routes
│   ├── utils/                   # Utility functions
│   │   ├── cookieToken.js       # JWT token management
│   │   └── customError.js       # Error handling
│   ├── index.js                 # Server entry point
│   └── package.json             # Backend dependencies
├── client/                      # Frontend application
│   ├── public/                  # Static assets
│   │   ├── logo.png             # Application logo
│   │   └── assets/              # Image assets
│   ├── src/
│   │   ├── components/ui/       # Reusable UI components
│   │   │   ├── Header.jsx       # Navigation header
│   │   │   ├── Footer.jsx       # Application footer
│   │   │   ├── Layout.jsx       # Page layout wrapper
│   │   │   ├── PlaceCard.jsx    # Property card component
│   │   │   ├── BookingWidget.jsx# Booking form widget
│   │   │   ├── SearchBar.jsx    # Search functionality
│   │   │   └── ...              # Other UI components
│   │   ├── pages/               # Application pages
│   │   │   ├── IndexPage.jsx    # Home page
│   │   │   ├── LoginPage.jsx    # Login page
│   │   │   ├── RegisterPage.jsx # Registration page
│   │   │   ├── ProfilePage.jsx  # User profile
│   │   │   ├── PlacesPage.jsx   # Property management
│   │   │   ├── BookingsPage.jsx # Booking management
│   │   │   └── ...              # Other pages
│   │   ├── providers/           # Context providers
│   │   │   ├── UserProvider.jsx # User context
│   │   │   └── PlaceProvider.jsx# Place context
│   │   ├── utils/               # Utility functions
│   │   │   ├── axios.js         # API client configuration
│   │   │   └── index.js         # Utility exports
│   │   ├── styles/              # Global styles
│   │   │   └── index.css        # Main stylesheet
│   │   ├── App.jsx              # Main application component
│   │   └── main.jsx             # Application entry point
│   ├── index.html               # HTML template
│   ├── package.json             # Frontend dependencies
│   ├── tailwind.config.cjs      # Tailwind configuration
│   ├── vite.config.js           # Vite configuration
│   └── components.json          # Shadcn components config
├── migrate.js                   # Database migration script
├── package.json                 # Root dependencies
└── README.md                    # Project documentation
```

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Cloudinary account (for image hosting)
- Google OAuth credentials (for Google login)

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bhuvangoyal466/NestAway.git
   cd NestAway
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd api
   npm install
   ```

4. **Install frontend dependencies**
   ```bash
   cd ../client
   npm install
   ```

5. **Environment Configuration**
   
   Create `.env` file in the `api` directory:
   ```env
   # Database
   MONGODB_URL=your_mongodb_connection_string
   
   # JWT Configuration
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRY=7d
   
   # Cloudinary Configuration
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   
   # Google OAuth
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   
   # Server Configuration
   PORT=4000
   CLIENT_URL=http://localhost:5173
   ```

   Create `.env` file in the `client` directory:
   ```env
   VITE_API_BASE_URL=http://localhost:4000
   VITE_GOOGLE_CLIENT_ID=your_google_client_id
   ```

### **Running the Application**

1. **Start the backend server**
   ```bash
   cd api
   npm start
   ```

2. **Start the frontend development server**
   ```bash
   cd client
   npm run dev
   ```

3. **Access the application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:4000`

---

## 📋 API Endpoints

### **Authentication**
- `POST /api/register` - User registration
- `POST /api/login` - User login
- `POST /api/google-login` - Google OAuth login
- `POST /api/logout` - User logout
- `GET /api/profile` - Get user profile

### **Places**
- `GET /api/places` - Get all places
- `GET /api/places/:id` - Get specific place
- `POST /api/places` - Create new place
- `PUT /api/places/:id` - Update place
- `DELETE /api/places/:id` - Delete place
- `GET /api/places/user-places` - Get user's places

### **Bookings**
- `GET /api/bookings` - Get user bookings
- `GET /api/bookings/:id` - Get specific booking
- `POST /api/bookings` - Create new booking
- `PUT /api/bookings/:id` - Update booking
- `DELETE /api/bookings/:id` - Cancel booking

### **File Upload**
- `POST /api/upload` - Upload images to Cloudinary

---

## 🎨 Design Features

### **Glassmorphism UI**
- Semi-transparent components with backdrop blur effects
- Subtle borders and shadows for depth
- Modern glass-like appearance throughout the interface

### **Responsive Design**
- Mobile-first approach with progressive enhancement
- Flexible grid layouts using CSS Grid and Flexbox
- Optimized for devices from 320px to 4K displays

### **Interactive Elements**
- Smooth hover effects and transitions
- 3D tilt effects on cards using Vanilla Tilt
- Smooth scrolling and parallax effects
- Loading states and skeleton screens

### **Color Scheme**
- Dark theme with gradient backgrounds
- Purple to blue gradient overlays
- High contrast text for accessibility
- Consistent color palette throughout

---

## 🔒 Security Features

- **Password Encryption**: bcryptjs hashing with salt rounds
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Server-side validation for all inputs
- **CORS Protection**: Configured for specific origins
- **Environment Variables**: Sensitive data stored in environment files
- **Cookie Security**: Secure cookie configuration
- **Error Handling**: Comprehensive error handling and logging

---

## 📱 Mobile Optimization

- **Touch-Friendly Interface**: Large touch targets and gesture support
- **Responsive Images**: Optimized image loading for mobile devices
- **Fast Loading**: Optimized bundle sizes and lazy loading
- **Offline Support**: Service worker for basic offline functionality
- **Mobile Navigation**: Collapsible navigation for small screens

---

## 🤝 Contributing

This repository is private and intended for personal use and demonstration purposes. However, if you'd like to contribute or suggest improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request with detailed description

---

## 📝 License

This project is private and proprietary. All rights reserved.

---

## 👤 Author

**Bhuvan Goyal**
- GitHub: [@Bhuvangoyal466](https://github.com/Bhuvangoyal466)
- LinkedIn: [Bhuvan Goyal](https://www.linkedin.com/in/bhuvan-goyal/)

---

## 🙏 Acknowledgments

- **React Team** for the amazing React library
- **Tailwind CSS** for the utility-first CSS framework
- **Radix UI** for accessible component primitives
- **Cloudinary** for image hosting and optimization
- **MongoDB** for the flexible NoSQL database
- **Vercel** for deployment and hosting solutions

---

## 📊 Project Status

**Status**: ✅ Complete and Production Ready
**Version**: 1.0.0
**Last Updated**: August 2025

---

*This project serves as a demonstration of full-stack web development skills using modern technologies and best practices. It showcases the ability to build scalable, secure, and user-friendly web applications.*
