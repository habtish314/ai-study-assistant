import React, { useState } from 'react';

function AITutorPage() {
  const [question, setQuestion] = useState('');
  const [conversation, setConversation] = useState([
    { role: 'assistant', content: 'Hello! I\'m your AI study assistant. How can I help you today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!question.trim()) return;
    
    // Add user message to conversation
    setConversation([
      ...conversation,
      { role: 'user', content: question }
    ]);
    
    // Simulate AI response (in a real app, this would call an API)
    setIsLoading(true);
    setTimeout(() => {
      let response;
      
      // Simple pattern matching for demonstration
      if (question.toLowerCase().includes('math')) {
        response = "I'd be happy to help with math! What specific topic are you studying?";
      } else if (question.toLowerCase().includes('science')) {
        response = "Science is a fascinating subject! Are you interested in biology, chemistry, physics, or another branch?";
      } else if (question.toLowerCase().includes('history')) {
        response = "History helps us understand our past and present. Which historical period or event are you studying?";
      } else {
        response = "That's an interesting question! Could you provide more details so I can help you better?";
      }
      
      setConversation(prev => [
        ...prev,
        { role: 'assistant', content: response }
      ]);
      
      setIsLoading(false);
      setQuestion('');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-indigo-800 mb-6">AI Tutor</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-4 h-96 overflow-y-auto" id="chat-messages">
                {conversation.map((message, index) => (
                  <div 
                    key={index} 
                    className={`mb-4 ${message.role === 'user' ? 'text-right' : ''}`}
                  >
                    <div 
                      className={`inline-block p-3 rounded-lg max-w-xs md:max-w-md ${
                        message.role === 'user' 
                          ? 'bg-indigo-600 text-white' 
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex items-center space-x-2 text-gray-500 p-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                )}
              </div>
              
              <div className="border-t p-4">
                <form onSubmit={handleSubmit} className="flex space-x-2">
                  <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ask me anything about your studies..."
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg transition duration-150"
                    disabled={isLoading}
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Suggested Topics</h2>
              <div className="space-y-3">
                <button 
                  onClick={() => setQuestion("Help me understand photosynthesis")}
                  className="w-full p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 text-left transition duration-150"
                >
                  Help me understand photosynthesis
                </button>
                <button 
                  onClick={() => setQuestion("Explain Newton's laws of motion")}
                  className="w-full p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 text-left transition duration-150"
                >
                  Explain Newton's laws of motion
                </button>
                <button 
                  onClick={() => setQuestion("How do I solve quadratic equations?")}
                  className="w-full p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 text-left transition duration-150"
                >
                  How do I solve quadratic equations?
                </button>
              </div>
            </div>
            
            <div className="bg-indigo-600 rounded-xl shadow-md p-6 text-white">
              <h2 className="text-xl font-semibold mb-4">Study Tips</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Break your study sessions into 25-minute intervals with 5-minute breaks.</li>
                <li>Review your notes within 24 hours of taking them to improve retention.</li>
                <li>Teach concepts to someone else to deepen your understanding.</li>
                <li>Use mnemonic devices for memorizing complex information.</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Sessions</h2>
              <div className="space-y-3">
                <div className="p-3 border border-gray-200 rounded-lg">
                  <p className="font-medium">Mathematics - Calculus</p>
                  <p className="text-sm text-gray-500">Yesterday</p>
                </div>
                <div className="p-3 border border-gray-200 rounded-lg">
                  <p className="font-medium">Physics - Electromagnetism</p>
                  <p className="text-sm text-gray-500">3 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AITutorPage;

