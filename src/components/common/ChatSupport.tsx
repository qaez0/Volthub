"use client";

import { useState, useRef, useEffect } from "react";
import { RiCloseLine, RiImageLine, RiSendPlaneFill, RiCustomerService2Fill } from "react-icons/ri";
import { cn } from "@/lib/utils";

const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<{ id: number; text: string; sender: "user" | "support" }>>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: message, sender: "user" },
      ]);
      setMessage("");
      
      // Simulate auto-reply after a short delay
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            text: "Thank you for your message. Our support team will get back to you shortly.",
            sender: "support",
          },
        ]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Service Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 md:bottom-24 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gray-800 hover:bg-gray-700 text-white flex flex-col items-center justify-center gap-1 shadow-lg hover:shadow-xl transition-all duration-300",
          isOpen && "hidden"
        )}
        aria-label="Open customer service chat"
      >
        <RiCustomerService2Fill className="text-xl md:text-2xl" />
        <span className="text-[10px] md:text-xs font-semibold">Service</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-24 md:right-6 z-50 w-full h-full md:w-96 md:h-[600px] bg-white md:rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 fade-in-0 duration-300">
          {/* Header */}
          <div className="bg-green-500 text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              {/* Avatar */}
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/30">
                <svg
                  className="w-6 h-6 md:w-8 md:h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="8" r="4" fill="currentColor" opacity="0.9" />
                  <path
                    d="M6 21c0-3.314 2.686-6 6-6s6 2.686 6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.9"
                  />
                  <circle cx="10" cy="7" r="1" fill="white" />
                  <circle cx="14" cy="7" r="1" fill="white" />
                  <path
                    d="M10 10c0.5 0.5 1.5 0.5 2 0"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="font-semibold text-xs md:text-sm">Online Customer Service</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 md:p-1.5 hover:bg-white/20 rounded transition-colors"
                aria-label="Close chat"
              >
                <RiCloseLine className="text-base md:text-lg" />
              </button>
            </div>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-400 text-sm">No more messages</p>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={cn(
                      "flex",
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[80%] rounded-lg px-4 py-2 text-sm",
                        msg.sender === "user"
                          ? "bg-green-500 text-white"
                          : "bg-white text-gray-800 shadow-sm"
                      )}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-2 md:p-3 bg-white">
            <div className="flex items-center gap-1.5 md:gap-2">
              {/* Action Icons */}
              <div className="flex items-center gap-1 md:gap-2">
                <button
                  className="p-1.5 md:p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors"
                  aria-label="Attach image"
                >
                  <RiImageLine className="text-base md:text-lg" />
                </button>
              </div>
              
              {/* Text Input */}
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-2 md:px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              />
              
              {/* Send Button */}
              <button
                onClick={handleSend}
                disabled={!message.trim()}
                className={cn(
                  "px-3 md:px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center",
                  message.trim() && "hover:scale-105"
                )}
                aria-label="Send message"
              >
                <RiSendPlaneFill className="text-base md:text-lg" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatSupport;

