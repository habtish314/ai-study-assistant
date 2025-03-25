import React, { useState } from 'react';

function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  
  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
  ];

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-indigo-800 mb-8">Quiz</h1>
        
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          {showScore ? (
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold text-indigo-700 mb-4">
                You scored {score} out of {questions.length}
              </h2>
              <div className="w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-indigo-600">{Math.round((score / questions.length) * 100)}%</span>
              </div>
              <p className="mb-6 text-gray-600">
                {score === questions.length 
                  ? "Perfect! You got all the questions right!" 
                  : `You got ${score} questions right.`}
              </p>
              <button 
                onClick={restartQuiz}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg"
              >
                Restart Quiz
              </button>
            </div>
          ) : (
            <div className="p-8">
              <div className="flex justify-between mb-6">
                <span className="text-gray-500">Question {currentQuestion + 1}/{questions.length}</span>
                <span className="text-gray-500">Score: {score}</span>
              </div>
              
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                {questions[currentQuestion].questionText}
              </h2>
              
              <div className="space-y-3">
                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
                    className="w-full text-left p-4 border border-gray-300 rounded-lg hover:bg-indigo-50 transition duration-150"
                  >
                    {answerOption.answerText}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="max-w-2xl mx-auto mt-8 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Other Quizzes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-indigo-50 cursor-pointer">
              <h3 className="font-medium">Mathematics Quiz</h3>
              <p className="text-sm text-gray-500">10 questions</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-indigo-50 cursor-pointer">
              <h3 className="font-medium">Physics Quiz</h3>
              <p className="text-sm text-gray-500">8 questions</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-indigo-50 cursor-pointer">
              <h3 className="font-medium">Biology Quiz</h3>
              <p className="text-sm text-gray-500">12 questions</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-indigo-50 cursor-pointer">
              <h3 className="font-medium">Chemistry Quiz</h3>
              <p className="text-sm text-gray-500">15 questions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
