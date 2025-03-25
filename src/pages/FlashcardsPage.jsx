import React, { useState } from 'react';

function FlashcardsPage() {
  const [flashcards, setFlashcards] = useState([
    { id: 1, question: "What is React?", answer: "A JavaScript library for building user interfaces", flipped: false },
    { id: 2, question: "What is JSX?", answer: "A syntax extension for JavaScript that looks similar to HTML", flipped: false },
    { id: 3, question: "What is a component?", answer: "A reusable piece of code that returns a React element", flipped: false }
  ]);
  
  const [activeCategory, setActiveCategory] = useState('All');
  
  const flipCard = (id) => {
    setFlashcards(flashcards.map(card => 
      card.id === id ? { ...card, flipped: !card.flipped } : card
    ));
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-800 mb-4 md:mb-0">Flashcards</h1>
          
          <div className="flex space-x-2">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">
              Create Flashcard
            </button>
            <button className="bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-lg">
              Generate with AI
            </button>
          </div>
        </div>
        
        <div className="mb-8">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {['All', 'Mathematics', 'Physics', 'Biology', 'Chemistry', 'History'].map(category => (
              <button 
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  activeCategory === category 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flashcards.map(card => (
            <div 
              key={card.id} 
              className={`bg-white rounded-xl shadow-md cursor-pointer transform transition-all duration-300 ${
                card.flipped ? 'bg-indigo-50' : ''
              }`}
              onClick={() => flipCard(card.id)}
            >
              <div className="p-6 h-48 flex items-center justify-center">
                <div className="text-center">
                  <h3 className={`text-xl ${card.flipped ? 'text-indigo-700' : 'text-gray-800'}`}>
                    {card.flipped ? card.answer : card.question}
                  </h3>
                  <p className="text-sm text-gray-500 mt-4">
                    {card.flipped ? "Click to see question" : "Click to see answer"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlashcardsPage;
