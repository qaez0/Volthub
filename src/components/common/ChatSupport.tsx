"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { RiCloseLine, RiImageLine, RiSendPlaneFill, RiCustomerService2Fill, RiMailSendLine } from "react-icons/ri";
import { cn } from "@/lib/utils";
import { generateAIResponse, generateContactLink } from "@/lib/chatbot";
import { getProductById } from "@/app/products/components/productData";

const ChatSupport = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<{ id: number; text: string; sender: "user" | "support" }>>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentProductId, setCurrentProductId] = useState<string | null>(null);
  const [lastUserMessage, setLastUserMessage] = useState<string>("");
  const [mounted, setMounted] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Ensure component is mounted (client-side only)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Detect if we're on a product page
  useEffect(() => {
    if (!pathname) return;
    const productMatch = pathname.match(/^\/products\/(.+)$/);
    if (productMatch) {
      const productId = productMatch[1];
      const product = getProductById(productId);
      if (product) {
        setCurrentProductId(productId);
      } else {
        setCurrentProductId(null);
      }
    } else {
      setCurrentProductId(null);
    }
  }, [pathname]);

  useEffect(() => {
    if (isOpen && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  // Add welcome message when chat opens and reset when closed
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      let welcomeMessage = "Hello! I'm VoltHub's AI customer support assistant. ";
      
      if (currentProductId) {
        const product = getProductById(currentProductId);
        if (product) {
          welcomeMessage += `I see you're viewing **${product.name}**. I can help you with questions about this product, including specifications, features, pricing, installation, and warranty. What would you like to know?`;
        } else {
          welcomeMessage += "I can help you with information about our products, services, and company. What would you like to know?";
        }
      } else {
        welcomeMessage += "I can help you with information about our products, services, and company. What would you like to know?";
      }
      
      setMessages([
        {
          id: 1,
          text: welcomeMessage,
          sender: "support",
        },
      ]);
    }
    if (!isOpen) {
      setMessages([]);
    }
  }, [isOpen, currentProductId]);

  const handleSend = () => {
    if (message.trim()) {
      const userMessage = message.trim();
      setLastUserMessage(userMessage);
      setMessages((prev) => [
        ...prev,
        { id: prev.length + 1, text: userMessage, sender: "user" },
      ]);
      setMessage("");
      setIsTyping(true);
      
      // Generate AI response with product context
      setTimeout(() => {
        const aiResponse = generateAIResponse(userMessage, currentProductId);
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            text: aiResponse,
            sender: "support",
          },
        ]);
      }, 800 + Math.random() * 400); // Simulate thinking time
    }
  };

  const handleContactRedirect = () => {
    if (lastUserMessage) {
      const contactLink = generateContactLink(lastUserMessage, currentProductId);
      window.location.href = contactLink;
    } else {
      window.location.href = '/contact';
    }
    setIsOpen(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Floating Service Button - Always visible on all pages */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 99999,
            width: '64px',
            height: '64px',
            borderRadius: '12px',
            backgroundColor: '#16a34a',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            border: '2px solid white',
            cursor: 'pointer',
            visibility: 'visible',
            opacity: 1,
            pointerEvents: 'auto',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#15803d';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#16a34a';
          }}
          aria-label="Open customer service chat"
        >
          <RiCustomerService2Fill style={{ fontSize: '24px' }} />
          <span style={{ fontSize: '10px', fontWeight: '600' }}>Service</span>
          {currentProductId && (
            <div
              style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                width: '24px',
                height: '24px',
                backgroundColor: '#ef4444',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                border: '2px solid white',
                zIndex: 10,
              }}
            >
              <span style={{ color: 'white', fontSize: '12px', fontWeight: 'bold' }}>!</span>
            </div>
          )}
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-24 md:right-6 z-[100] w-full h-full md:w-96 md:h-[600px] bg-white md:rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 fade-in-0 duration-300">
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
              <span className="font-semibold text-xs md:text-sm">AI Customer Support</span>
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
            <div className="space-y-4">
              {messages.map((msg) => {
                const isContactRequired = msg.sender === "support" && msg.text.includes("__CONTACT_REQUIRED__");
                const displayText = isContactRequired 
                  ? msg.text.replace("__CONTACT_REQUIRED__:", "").trim()
                  : msg.text;
                
                return (
                  <div key={msg.id} className="space-y-2">
                    <div
                      className={cn(
                        "flex",
                        msg.sender === "user" ? "justify-end" : "justify-start"
                      )}
                    >
                      <div
                        className={cn(
                          "max-w-[80%] rounded-lg px-4 py-2 text-sm whitespace-pre-wrap",
                          msg.sender === "user"
                            ? "bg-green-500 text-white"
                            : "bg-white text-gray-800 shadow-sm"
                        )}
                      >
                        {displayText.split('\n').map((line, idx, arr) => {
                          // Handle bold text (**text**)
                          const parts = line.split(/(\*\*[^*]+\*\*)/g);
                          return (
                            <div key={idx}>
                              {parts.map((part, partIdx) => {
                                if (part.startsWith('**') && part.endsWith('**')) {
                                  return (
                                    <strong key={partIdx} className={msg.sender === "user" ? "text-white" : "text-gray-900"}>
                                      {part.replace(/\*\*/g, '')}
                                    </strong>
                                  );
                                }
                                return <span key={partIdx}>{part}</span>;
                              })}
                              {idx < arr.length - 1 && <br />}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    {isContactRequired && (
                      <div className="flex justify-start">
                        <button
                          onClick={handleContactRedirect}
                          className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-semibold transition-colors shadow-md"
                        >
                          <RiMailSendLine className="text-base" />
                          <span>Contact Our Team</span>
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-800 shadow-sm rounded-lg px-4 py-2 text-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
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

