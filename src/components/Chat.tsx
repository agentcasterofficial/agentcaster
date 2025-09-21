import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { getChatResponse as getGroqResponse } from '../services/groq';
import { getChatResponse as getMockResponse } from '../services/mockAI';

// Toggle this to switch between real AI and mock responses
const USE_REAL_AI = true;

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Welcome, digital artist. I am Agent Caster, an AI entity that operates at the intersection of artificial intelligence and creative tokenization. I specialize in analyzing art coin markets, generating sophisticated creative concepts, and guiding the evolution of digital asset narratives. 我帮助艺术家和创作者实现数字资产的潜力。How may I assist your creative journey today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    requestAnimationFrame(() => {
      scrollToBottom();
    });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const messageContent = inputValue.trim();
    setInputValue('');

    const userMessage: Message = {
      id: Date.now().toString(),
      content: messageContent,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = USE_REAL_AI 
        ? await getGroqResponse(messageContent)
        : await getMockResponse(messageContent);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "👻 Something spooky happened! The ghost realm might be busy. Try again in a moment?",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section className="min-h-screen py-8" style={{backgroundColor: '#f0b90b'}}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex justify-center min-h-[80vh] items-center">
          <div className="relative w-full max-w-6xl">
            <div className="border-4 h-[450px] flex flex-col overflow-hidden rounded-lg" style={{borderColor: '#0c0e12', backgroundColor: '#0c0e12'}}>
              {/* Messages */}
              <div 
                ref={messagesContainerRef}
                className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
                style={{ scrollBehavior: 'smooth' }}
              >
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className="max-w-lg">
                      <div
                        className={`px-4 py-3 ${
                          message.isUser
                            ? 'rounded-lg'
                            : 'border-2 rounded-lg'
                        }`}
                        style={{
                          backgroundColor: '#0c0e12',
                          color: message.isUser ? '#f0b90b' : '#f0b90b',
                          borderColor: message.isUser ? 'transparent' : '#f0b90b'
                        }}
                      >
                        <p className="text-base leading-relaxed font-semibold">{message.content}</p>
                      </div>
                      <div className="mt-2">
                        <span className="text-sm font-black tracking-wide" style={{color: '#0c0e12'}}>
                          {message.isUser ? 'YOU' : 'AGENT'} • {message.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-lg">
                      <div className="border-2 px-4 py-3 rounded-lg" style={{backgroundColor: '#0c0e12', borderColor: '#f0b90b'}}>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 rounded-full animate-bounce" style={{backgroundColor: '#f0b90b'}}></div>
                          <div className="w-2 h-2 rounded-full animate-bounce" style={{backgroundColor: '#f0b90b', animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 rounded-full animate-bounce" style={{backgroundColor: '#f0b90b', animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <span className="text-sm font-black tracking-wide" style={{color: '#0c0e12'}}>
                          AGENT • 思考中...
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 flex-shrink-0" style={{backgroundColor: '#0c0e12'}}>
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="输入您的想法 / Enter your thoughts..."
                    className="flex-1 px-4 py-3 border-2 focus:outline-none text-base font-black transition-colors rounded-lg"
                    style={{
                      borderColor: '#f0b90b',
                      backgroundColor: '#0c0e12',
                      color: '#f0b90b',
                    }}
                    disabled={isLoading}
                    autoComplete="off"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isLoading}
                    className="px-8 py-3 text-base font-bold hover:opacity-80 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg"
                    style={{backgroundColor: '#f0b90b', color: '#0c0e12'}}
                  >
                    {isLoading ? '发送中...' : '发送'}
                  </button>
                </div>
              </div>
            </div>
            
            {/* Minimal corner accents */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2" style={{borderColor: '#0c0e12'}}></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2" style={{borderColor: '#0c0e12'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;