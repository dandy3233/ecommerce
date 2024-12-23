import { useState, useEffect, useRef } from "react";


const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); // To toggle the chatbot widget
  const [messages, setMessages] = useState([
    { id: 1, text: "Welcome to our service! How can I assist you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll to the bottom of the chatbox on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Simulate AI Response
  const simulateAIResponse = (userInput) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`I'm an AI! You said: "${userInput}". How else may I assist?`);
      }, 1000); // Simulate 1-second delay
    });
  };

  // Handle user message submission
  const handleSendMessage = async () => {
    if (input.trim() !== "") {
      const userMessage = { id: messages.length + 1, text: input, sender: "user" };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");

      // Simulate AI response
      const aiResponse = await simulateAIResponse(input);
      setMessages((prev) => [
        ...prev,
        { id: prev.length + 1, text: aiResponse, sender: "bot" },
      ]);
    }
  };

  return (
    <div className="fixed bottom-9 right-5 z-50">
      {/* Chatbot Toggle Button */}
      <button
       onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-900 text-white p-3 rounded-full w-16 h-16 flex items-center justify-center 
              shadow-lg hover:bg-cyan-500 transform hover:scale-110 transition-transform duration-300 ease-in-out 
                    animate-shadow-cycle"
      >
          {isOpen ? "X" : "Help"}
        </button>
      {/* Chatbot Widget */}
      {isOpen && (
        <div className="flex flex-col h-96 w-80 bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden mt-3">
          {/* Header */}
          <div className="bg-cyan-400 text-center p-4 text-lg font-bold">
            Chat with us
            <p className="text-sm font-light">How can we help you?</p>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto bg-white p-4 space-y-3 text-black">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`p-3 rounded-lg max-w-xs ${
                  message.sender === "bot" ? "bg-gray-100" : "bg-blue-200 ml-auto"
                }`}
              >
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Field */}
          <div className="flex items-center p-4 bg-white border-t">
          <input
  type="text"
  className="flex-1 p-2 rounded-l-lg border bg-white text-black focus:outline-none"
  placeholder="Type a message..."
  value={input}
  onChange={(e) => setInput(e.target.value)}
  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
/>

            <button
              className="bg-cyan-400 text-white px-4 py-2 rounded-r-lg hover:bg-cyan-500"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
