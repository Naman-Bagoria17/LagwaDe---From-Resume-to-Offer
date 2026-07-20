# LagwaDe

> **From Resume to Offer.**

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/React-19-61DAFB.svg?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933.svg?logo=node.js)
![Gemini AI](https://img.shields.io/badge/AI-Google_Gemini-4285F4.svg?logo=google)

**LagwaDe** is a modern, AI-driven interview preparation platform designed to help job seekers transition seamlessly **from resume submission to securing job offers**. By analyzing target job descriptions alongside candidate resumes or self-descriptions, LagwaDe generates personalized, actionable interview strategies complete with technical questions, behavioral preparation, matching scores, skill gap analysis, and tailored preparation roadmaps.

---

## 🚀 Live Demo

🌐 **Deployed Application:** [https://lagwade.vercel.app](https://lagwade.vercel.app)

---

## ✨ Features

- 🎯 **Targeted Strategy Generation**: Custom-built interview strategy tailored to any job description.
- 📄 **Flexible Input Support**: Generate strategies using your PDF resume, a self-description, or both.
- 🧠 **AI-Powered Insights**: Powered by Google Gemini AI for highly relevant, position-specific questions & model answers.
- 📊 **Match Score & Skill Gap Analysis**: Immediate feedback on candidate-to-role alignment with high/medium/low severity tagging.
- 🗺️ **Multi-Day Preparation Roadmap**: Step-by-step day-by-day action plan to prepare effectively.
- 📥 **PDF Export & Download**: Export complete strategy reports as PDF documents.
- 🔐 **Secure User Authentication**: Full JWT-based session security with HTTP-only cookie protection.
- 🌙 **Dark Minimal SaaS Design**: Sleek, modern, high-contrast dark theme centered around `#023E7D` brand aesthetics.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 (Vite)
- **Routing**: React Router v7
- **Styling**: SCSS (Vanilla SASS with Dark Minimal Theme tokens)
- **HTTP Client**: Axios (with credentials)

### Backend
- **Runtime**: Node.js & Express.js (v5)
- **Database**: MongoDB with Mongoose
- **AI Service**: `@google/genai` (Google Gemini 2.5 Flash)
- **File Processing**: Multer & `pdf-parse`
- **PDF Generation**: Puppeteer
- **Authentication**: JSON Web Tokens (JWT) & bcryptjs

---

## 📁 Repository Structure

```text
interview-ai-yt-main/
├── Backend/
│   ├── src/
│   │   ├── config/          # Database connection
│   │   ├── controllers/     # Auth & Interview report logic
│   │   ├── middlewares/     # JWT authentication & Multer upload
│   │   ├── models/          # Mongoose user & report schemas
│   │   ├── routes/          # Express API route endpoints
│   │   ├── services/        # Gemini AI & Puppeteer PDF generators
│   │   └── app.js           # Express app setup & CORS config
│   ├── package.json
│   └── server.js            # Server initialization
│
├── Frontend/
│   ├── src/
│   │   ├── components/      # Common UI components (Loader, etc.)
│   │   ├── features/        # Auth & Interview feature modules
│   │   │   ├── auth/        # Auth forms, hooks, & context
│   │   │   └── interview/   # Home, Interview report views, API, & SCSS
│   │   ├── style/           # Global styles, button SCSS, loader SCSS
│   │   ├── App.jsx          # Root component
│   │   ├── app.routes.jsx   # Route definitions
│   │   ├── main.jsx         # React application entry point
│   │   └── style.scss       # Global CSS variables & reset
│   ├── index.html           # HTML entry point with metadata
│   ├── package.json
│   └── vite.config.js       # Vite configuration
│
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.x or higher
- **MongoDB**: Local instance or MongoDB Atlas Connection URI
- **Google Gemini API Key**: Obtainable via [Google AI Studio](https://aistudio.google.com/)

---

### Environment Variables Setup

Create a `.env` file inside the `Backend/` directory:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/lagwade
JWT_SECRET=your_jwt_secret_key_here
GEMINI_API_KEY=your_gemini_api_key_here
```

---

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/lagwade.git
   cd lagwade
   ```

2. **Install Backend Dependencies**
   ```bash
   cd Backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../Frontend
   npm install
   ```

---

### Running Locally

1. **Start Backend Server**
   ```bash
   cd Backend
   npm run dev
   ```
   The backend server runs on `http://localhost:3000`.

2. **Start Frontend Development Server**
   ```bash
   cd Frontend
   npm run dev
   ```
   The application will be accessible at `http://localhost:5173`.

---

## 🏗️ Build Commands

### Frontend Production Build
```bash
cd Frontend
npm run build
```
Output will be placed in `Frontend/dist/`.

---

## 🔮 Future Improvements

- 🎙️ **Interactive AI Audio Mock Interviews**: Real-time voice-based mock interview practice with AI feedback.
- 📈 **Performance Dashboard**: Progress tracking across multiple interview applications and strategy reports.
- 🤝 **Peer Practice & Mentor Reviews**: Community features to share strategies and receive peer feedback.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for details.

---

<p align="center">Made with ❤️ for Job Seekers worldwide - <strong>LagwaDe: From Resume to Offer.</strong></p>
