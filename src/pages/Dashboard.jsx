import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-indigo-800 mb-8">Your Study Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Study Progress</h2>
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-indigo-700">Weekly Goals</span>
                  <span className="text-sm font-medium text-indigo-700">66%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-indigo-600 h-2.5 rounded-full w-2/3"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-indigo-800 mb-2">12</h3>
                  <p className="text-sm text-gray-600">Hours Studied</p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-indigo-800 mb-2">42</h3>
                  <p className="text-sm text-gray-600">Flashcards Reviewed</p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-indigo-800 mb-2">3</h3>
                  <p className="text-sm text-gray-600">Quizzes Completed</p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-indigo-800 mb-2">3</h3>
                  <p className="text-sm text-gray-600">ties fucked</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">Recent Flashcards</h2>
                  <Link to="/flashcards" className="text-sm text-indigo-600 hover:text-indigo-800">View all</Link>
                </div>
                <ul className="space-y-3">
                  <li className="p-3 bg-gray-50 rounded-lg">Mathematics - Calculus</li>
                  <li className="p-3 bg-gray-50 rounded-lg">Physics - Newton's Laws</li>
                  <li className="p-3 bg-gray-50 rounded-lg">Biology - Cell Structure</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">Upcoming Quizzes</h2>
                  <Link to="/quizzes" className="text-sm text-indigo-600 hover:text-indigo-800">View all</Link>
                </div>
                <ul className="space-y-3">
                  <li className="p-3 bg-gray-50 rounded-lg">Chemistry Quiz - Friday</li>
                  <li className="p-3 bg-gray-50 rounded-lg">History Quiz - Next Monday</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Study Plan</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-indigo-500 pl-3">
                  <p className="text-sm text-gray-500">Today</p>
                  <p className="font-medium">Review Physics Chapter 4</p>
                </div>
                <div className="border-l-4 border-gray-300 pl-3">
                  <p className="text-sm text-gray-500">Tomorrow</p>
                  <p className="font-medium">Math Practice Problems</p>
                </div>
                <div className="border-l-4 border-gray-300 pl-3">
                  <p className="text-sm text-gray-500">Wednesday</p>
                  <p className="font-medium">Chemistry Lab Preparation</p>
                </div>
              </div>
              <button className="mt-4 text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                View full schedule →
              </button>
            </div>
            
            <div className="bg-indigo-600 rounded-xl shadow-md p-6 text-white">
              <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
              <p className="mb-4">Ask our AI tutor any question about your studies.</p>
              <Link 
                to="/ai-tutor" 
                className="inline-block bg-white text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-lg font-medium"
              >
                Chat with AI Tutor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
