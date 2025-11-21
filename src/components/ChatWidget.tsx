import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      content: "Hi! I'm DarviBot, your AI assistant. How can I help you today? You can ask me about our services, pricing, or schedule a consultation.",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickReplies = [
    'Tell me about your services',
    'What are your rates?',
    'Schedule a consultation',
    'View case studies',
  ];

  const handleSend = async (message: string) => {
    if (!message.trim()) return;

    // Add user message
    const userMessage: Message = {
      role: 'user',
      content: message,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let botResponse = '';

      if (message.toLowerCase().includes('service')) {
        botResponse = "We offer comprehensive software development services including Custom Development, Cloud Solutions, AI/ML, Mobile Apps, and more. Would you like to know more about a specific service?";
      } else if (message.toLowerCase().includes('rate') || message.toLowerCase().includes('price') || message.toLowerCase().includes('cost')) {
        botResponse = "Our rates range from $30-50/hour, offering 50-60% savings compared to US/EU agencies. For a detailed quote, I can connect you with our team. Would you like to use our AI Project Estimator?";
      } else if (message.toLowerCase().includes('schedule') || message.toLowerCase().includes('consult')) {
        botResponse = "Great! I'd be happy to schedule a consultation. Please provide your email, and our team will reach out within 24 hours to set up a meeting at your convenience.";
      } else if (message.toLowerCase().includes('case') || message.toLowerCase().includes('portfolio')) {
        botResponse = "We've delivered 200+ projects across Financial Services, Healthcare, E-commerce, and more. Some highlights include a 70% cost reduction for FinTech Global and 150% revenue increase for RetailTech Corp. Check our Case Studies section above!";
      } else {
        botResponse = "That's a great question! For detailed information, I recommend connecting with our team directly. Would you like to schedule a call or send us a message?";
      }

      const botMessage: Message = {
        role: 'bot',
        content: botResponse,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              size="lg"
              onClick={() => setIsOpen(true)}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all"
            >
              <MessageCircle size={28} />
            </Button>
            
            {/* Notification Pulse */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)]"
          >
            <Card className="bg-neutral-900 border-neutral-800 shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                    <Bot size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white">DarviBot</div>
                    <div className="text-xs text-blue-100 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      Online
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/10 rounded-lg p-2 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Messages */}
              <CardContent className="p-0">
                <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-neutral-950">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} gap-2`}
                    >
                      {message.role === 'bot' && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                          <Bot size={16} className="text-white" />
                        </div>
                      )}
                      <div
                        className={`max-w-[75%] rounded-lg p-3 ${
                          message.role === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-neutral-800 text-neutral-200'
                        }`}
                      >
                        <div className="text-sm">{message.content}</div>
                        <div className="text-xs opacity-50 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                      {message.role === 'user' && (
                        <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center flex-shrink-0">
                          <User size={16} className="text-neutral-300" />
                        </div>
                      )}
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                        <Bot size={16} className="text-white" />
                      </div>
                      <div className="bg-neutral-800 rounded-lg p-3">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <div className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <div className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Quick Replies */}
                {messages.length === 1 && (
                  <div className="p-4 bg-neutral-900 border-t border-neutral-800">
                    <div className="text-xs text-neutral-400 mb-2">Quick questions:</div>
                    <div className="flex flex-wrap gap-2">
                      {quickReplies.map((reply, index) => (
                        <button
                          key={index}
                          onClick={() => handleSend(reply)}
                          className="text-xs px-3 py-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className="p-4 bg-neutral-900 border-t border-neutral-800">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSend(inputValue);
                    }}
                    className="flex gap-2"
                  >
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Type your message..."
                      className="bg-neutral-950 border-neutral-800 text-white flex-1"
                    />
                    <Button
                      type="submit"
                      size="sm"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      disabled={!inputValue.trim()}
                    >
                      <Send size={16} />
                    </Button>
                  </form>
                  <div className="text-xs text-neutral-500 mt-2 text-center">
                    Powered by DarviLab AI
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
