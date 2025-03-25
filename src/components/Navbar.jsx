import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-indigo-600 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-white">
              Study Assistant
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-indigo-200 transition duration-150">
              Home
            </Link>
            <Link to="/dashboard" className="text-white hover:text-indigo-200 transition duration-150">
              Dashboard
            </Link>
            <Link to="/flashcards" className="text-white hover:text-indigo-200 transition duration-150">
              Flashcards
            </Link>
            <Link to="/quizzes" className="text-white hover:text-indigo-200 transition duration-150">
              Quizzes
            </Link>
            <Link to="/ai-tutor" className="text-white hover:text-indigo-200 transition duration-150">
              AI Tutor
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          <div className="hidden md:block">
            <Link to="/sign-in" className="bg-white text-indigo-600 hover:bg-indigo-100 px-4 py-2 rounded-lg font-medium transition duration-150">
              Sign In
            </Link>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link to="/" className="block text-white hover:text-indigo-200 py-2">
              Home
            </Link>
            <Link to="/dashboard" className="block text-white hover:text-indigo-200 py-2">
              Dashboard
            </Link>
            <Link to="/flashcards" className="block text-white hover:text-indigo-200 py-2">
              Flashcards
            </Link>
            <Link to="/quizzes" className="block text-white hover:text-indigo-200 py-2">
              Quizzes
            </Link>
            <Link to="/ai-tutor" className="block text-white hover:text-indigo-200 py-2">
              AI Tutor
            </Link>
            <Link to="/sign-in" className="block bg-white text-indigo-600 hover:bg-indigo-100 px-4 py-2 rounded-lg font-medium mt-4 inline-block">
              Sign In
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
