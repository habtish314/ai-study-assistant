import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import FlashcardsPage from './pages/FlashcardsPage';
import QuizPage from './pages/QuizPage';
import AITutorPage from './pages/AITutorPage';
import LoginPage from './pages/LoginPage';

function App() {
  const isAuthenticated = !!localStorage.getItem('token');
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/dashboard" 
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/flashcards" 
            element={isAuthenticated ? <FlashcardsPage /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/quizzes" 
            element={isAuthenticated ? <QuizPage /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/ai-tutor" 
            element={isAuthenticated ? <AITutorPage /> : <Navigate to="/login" />} 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
