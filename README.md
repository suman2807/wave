# Wave - Video Calling & Language Exchange

🌐 Real-time video calling and chat platform for language learners to connect with native speakers worldwide.

## ✨ Features

- 📹 **Video Calls**: 1-on-1 and group video calls with screen sharing
- 💬 **Real-time Chat**: Messaging with typing indicators and reactions
- 👥 **Friend System**: Send and manage friend requests
- 🎨 **32 UI Themes**: Customizable interface themes
- 🔐 **Secure Auth**: JWT-based authentication
- 🌍 **Language Exchange**: Connect based on language preferences

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- MongoDB
- Stream API account ([getstream.io](https://getstream.io/))

### Installation

1. **Clone and install**
   ```bash
   git clone https://github.com/suman2807/wave.git
   cd wave
   
   # Backend
   cd backend && npm install
   
   # Frontend
   cd ../frontend && npm install
   ```

2. **Environment Setup**
   
   **Backend** (`/backend/.env`):
   ```env
   PORT=5001
   MONGO_URI=mongodb://localhost:27017/wave
   JWT_SECRET_KEY=your_jwt_secret
   STREAM_API_KEY=your_stream_api_key
   STREAM_API_SECRET=your_stream_api_secret
   NODE_ENV=development
   ```
   
   **Frontend** (`/frontend/.env`):
   ```env
   VITE_STREAM_API_KEY=your_stream_api_key
   ```

3. **Run the application**
   ```bash
   # Start backend (from /backend)
   npm run dev
   
   # Start frontend (from /frontend)
   npm run dev
   ```

4. **Access the app**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:5001

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, TailwindCSS, Zustand
- **Backend**: Express.js, MongoDB, JWT
- **Real-time**: Stream API for video calls and chat

## 📁 Project Structure

```
├── frontend/          # React frontend
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom hooks
│   │   └── store/         # State management
├── backend/           # Express.js backend
│   └── src/
│       ├── controllers/   # Route handlers
│       ├── models/        # Database models
│       ├── routes/        # API routes
│       └── middleware/    # Auth middleware
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**Made with ❤️ by Suman for the language learning community**
