# Professional Portfolio

A modern, high-performance, and visually stunning full-stack portfolio application. This project showcases my skills, projects, and achievements with a focus on immersive user experience and clean code.

## 🚀 Features

- **Dynamic 3D Elements**: Built with Three.js (React Three Fiber/Drei) for engaging visual components.
- **Smooth Animations**: Powered by Framer Motion for fluid transitions and interactive elements.
- **Responsive Design**: Fully optimized for all devices using Tailwind CSS.
- **Contact Form**: Integrated backend for seamless email communication via Nodemailer and Resend.
- **Clean UI**: Modern aesthetic with a focus on typography and readability.

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Icons**: React Icons

### Backend
- **Server**: Node.js, Express
- **Email Service**: Nodemailer, Resend
- **Environment Management**: Dotenv
- **CORS**: Configured for secure frontend-backend communication

## 📦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/BHAGAVATHIRAJA26/Portfolio.git
   cd Portfolio
   ```

2. **Frontend Setup:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **Backend Setup:**
   ```bash
   cd ../backend
   npm install
   node index.js
   ```

### Environment Variables

Create a `.env` file in the `backend` directory and add the following:
```env
PORT=5000
RESEND_API_KEY=your_resend_api_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

Create a `.env` file in the `frontend` directory:
```env
VITE_API_URL=http://localhost:5000
```

## 🌐 Deployment

- **Frontend**: Recommended deployment on [Vercel](https://vercel.com).
- **Backend**: Recommended deployment on [Render](https://render.com).

## 📄 License

This project is licensed under the ISC License.

---
Developed by [BHAGAVATHIRAJA](https://github.com/BHAGAVATHIRAJA26)
