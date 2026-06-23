import { useState, useRef, useEffect, useCallback } from "react";
import { X, Send, Bot, Sparkles, ChevronDown } from "lucide-react";
import { sendChatMessage } from "@/lib/chat";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const GREETING: Message = {
  id: "greeting",
  role: "assistant",
  content:
    "Hey there! I'm the Aruba Bob assistant. Ask me anything - tour prices, what's included, how to book, or which tour is right for you. I'm here to help!",
};

function TypingDots() {
  return (
    <div className="flex items-center gap-1 py-1">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-2 h-2 rounded-full bg-primary animate-bounce"
          style={{ animationDelay: `${i * 0.18}s`, animationDuration: "0.75s" }}
        />
      ))}
    </div>
  );
}

function MessageBubble({ msg }: { msg: Message }) {
  const isUser = msg.role === "user";
  return (
    <div className={`flex items-end gap-2 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      {!isUser && (
        <div
          className="w-7 h-7 rounded-full flex-shrink-0 grid place-items-center mb-0.5"
          style={{ background: "var(--gradient-ocean)" }}
        >
          <Bot className="w-3.5 h-3.5 text-white" />
        </div>
      )}
      <div
        className={`max-w-[78%] px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
          isUser
            ? "text-white rounded-2xl rounded-br-sm"
            : "bg-card border border-border text-foreground rounded-2xl rounded-bl-sm"
        }`}
        style={isUser ? { background: "var(--gradient-ocean)" } : undefined}
      >
        {msg.content}
      </div>
    </div>
  );
}

export function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading, scrollToBottom]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { id: `u-${Date.now()}`, role: "user", content: text };
    const history = [...messages, userMsg]
      .filter((m) => m.id !== "greeting")
      .map(({ role, content }) => ({ role, content }));

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const { content } = await sendChatMessage({ data: { messages: history } });
      setMessages((prev) => [
        ...prev,
        { id: `a-${Date.now()}`, role: "assistant", content },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          role: "assistant",
          content:
            "Sorry, something went wrong. Please try again or reach us directly at info@arubabob.com or WhatsApp +297-585-2742.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-[152px] right-5 z-50 w-[360px] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-border animate-in fade-in slide-in-from-bottom-3 duration-200"
          style={{ maxHeight: "calc(100vh - 180px)", background: "var(--background)" }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3.5 flex-shrink-0"
            style={{ background: "var(--gradient-ocean)" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 border border-white/30 grid place-items-center flex-shrink-0">
                <Bot className="w-4.5 h-4.5 text-white" />
              </div>
              <div>
                <div className="font-display font-semibold text-white text-sm leading-tight">
                  Aruba Bob Assistant
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_4px_rgba(52,211,153,0.8)]" />
                  <span className="text-white/80 text-xs">Online · ask me anything</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="w-7 h-7 rounded-full hover:bg-white/20 grid place-items-center text-white/80 hover:text-white transition-colors"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ background: "var(--secondary)" }}>
            {messages.map((msg) => (
              <MessageBubble key={msg.id} msg={msg} />
            ))}

            {loading && (
              <div className="flex items-end gap-2">
                <div
                  className="w-7 h-7 rounded-full flex-shrink-0 grid place-items-center mb-0.5"
                  style={{ background: "var(--gradient-ocean)" }}
                >
                  <Bot className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="bg-card border border-border px-4 py-2.5 rounded-2xl rounded-bl-sm">
                  <TypingDots />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested prompts - only shown at start */}
          {messages.length === 1 && (
            <div className="px-3 pb-2 flex flex-wrap gap-1.5" style={{ background: "var(--secondary)" }}>
              {[
                "What tours do you offer?",
                "How much does snorkeling cost?",
                "Do I need experience?",
                "How do I book?",
              ].map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => {
                    setInput(prompt);
                    setTimeout(() => inputRef.current?.focus(), 0);
                  }}
                  className="text-xs px-3 py-1.5 rounded-full border border-border bg-card hover:border-primary/50 hover:text-primary transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Input bar */}
          <div className="px-3 py-3 border-t border-border bg-card flex-shrink-0">
            <div className="flex items-center gap-2 bg-secondary rounded-xl px-3.5 py-2.5 border border-border focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/20 transition-all">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask about tours, pricing, booking…"
                disabled={loading}
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:opacity-50"
              />
              <button
                onClick={send}
                disabled={!input.trim() || loading}
                aria-label="Send message"
                className="w-8 h-8 rounded-lg grid place-items-center text-white transition-opacity disabled:opacity-30 hover:opacity-90 flex-shrink-0"
                style={{ background: "var(--gradient-ocean)" }}
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-center text-[10px] text-muted-foreground mt-2 leading-tight">
              Powered by AI · For bookings contact{" "}
              <a
                href="https://wa.me/2975852742"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                WhatsApp
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Floating trigger button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close AI assistant" : "Chat with AI assistant"}
        className="fixed bottom-[82px] right-5 z-50 w-14 h-14 rounded-full grid place-items-center text-white shadow-xl hover:scale-105 active:scale-95 transition-transform"
        style={{ background: "var(--gradient-ocean)" }}
      >
        {open ? (
          <X className="w-6 h-6" />
        ) : (
          <div className="relative">
            <Sparkles className="w-6 h-6" />
            <span className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white shadow-sm" />
          </div>
        )}
      </button>
    </>
  );
}
