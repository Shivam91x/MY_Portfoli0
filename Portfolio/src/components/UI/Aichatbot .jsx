import { useState, useRef, useEffect } from "react";
import React from "react";

const SYSTEM_PROMPT = `You are Shivam Yadav's portfolio AI assistant. Answer questions about Shivam concisely and professionally.

About Shivam:
- Frontend Developer based in Indore, India
- Skills: HTML, CSS, JavaScript, React, Tailwind CSS, MUI
- Projects: Medicef, Employee Management System, eLogbook
- Internship: 4 months at Vidyagxp
- Looking for frontend roles

Keep answers short (2-4 sentences). Be confident and helpful.`;

const SUGGESTIONS = [
  "Show projects",
  "Skills?",
  "Available for hire?",
  "Internship details",
];

export default function AIChatbot() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hey 👋 I'm Shivam's AI assistant. Ask about projects, skills, or experience!",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if (!userText || loading) return;

    const newMessages = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            temperature: 0.2,
            max_tokens: 300,
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              ...newMessages,
            ],
          }),
        }
      );

      const data = await response.json();

      const reply =
        data?.choices?.[0]?.message?.content ||
        "Something went wrong. Try again.";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: reply },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error occurred. Try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white text-xl transition-all hover:scale-110"
        style={{
          background:
            "linear-gradient(135deg, var(--primary), var(--secondary))",
          boxShadow: "0 0 20px rgba(99,102,241,0.5)",
        }}
      >
        {isOpen ? "✕" : "💬"}
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl overflow-hidden flex flex-col"
          style={{
            background: "rgba(15,15,19,0.6)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)",
            height: "500px",
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
              SY
            </div>
            <div>
              <p className="text-white text-sm font-medium">Shivam Yadav</p>
              <p className="text-xs text-green-400">● AI Assistant Online</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className="max-w-[80%] text-sm px-4 py-2"
                  style={{
                    borderRadius:
                      msg.role === "user"
                        ? "16px 4px 16px 16px"
                        : "4px 16px 16px 16px",
                    background:
                      msg.role === "user"
                        ? "linear-gradient(135deg, var(--primary), var(--secondary))"
                        : "rgba(255,255,255,0.05)",
                    color: "white",
                    boxShadow:
                      msg.role === "user"
                        ? "0 4px 20px rgba(99,102,241,0.3)"
                        : "none",
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="px-4 py-2 bg-white/10 rounded-lg animate-pulse text-sm">
                  Typing...
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          {messages.length <= 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {SUGGESTIONS.map((s, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(s)}
                  className="text-xs px-3 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 hover:scale-105 transition"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-3 py-3 border-t border-white/10">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask about Shivam..."
                className="flex-1 bg-transparent outline-none text-sm text-white"
              />
              <button
                onClick={() => sendMessage()}   
                disabled={!input.trim()}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-white"
                style={{
                  background:
                    "linear-gradient(135deg, var(--primary), var(--secondary))",
                }}
              >
                ➤
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}