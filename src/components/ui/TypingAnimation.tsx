"use client";

import { useState, useEffect } from "react";

interface TypingAnimationProps {
  text: string | string[];
  speed?: number;
  delay?: number;
  loop?: boolean;
  className?: string;
  cursor?: boolean;
  onComplete?: () => void;
}

export const TypingAnimation = ({
  text,
  speed = 50,
  delay = 0,
  loop = false,
  className = "",
  cursor = true,
  onComplete,
}: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentStringIndex, setCurrentStringIndex] = useState(0);

  const texts = Array.isArray(text) ? text : [text];
  const currentText = texts[currentStringIndex];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const startTyping = () => {
      if (isDeleting) {
        if (currentIndex > 0) {
          timeout = setTimeout(() => {
            setDisplayedText(currentText.substring(0, currentIndex - 1));
            setCurrentIndex(currentIndex - 1);
          }, speed / 2);
        } else {
          setIsDeleting(false);
          if (texts.length > 1) {
            setCurrentStringIndex((prev) => (prev + 1) % texts.length);
          } else if (!loop) {
            onComplete?.();
            return;
          }
        }
      } else {
        if (currentIndex < currentText.length) {
          timeout = setTimeout(() => {
            setDisplayedText(currentText.substring(0, currentIndex + 1));
            setCurrentIndex(currentIndex + 1);
          }, speed);
        } else {
          if (texts.length > 1 || loop) {
            timeout = setTimeout(() => {
              setIsDeleting(true);
            }, 1000);
          } else {
            onComplete?.();
          }
        }
      }
    };

    const initialTimeout = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(timeout);
      clearTimeout(initialTimeout);
    };
  }, [
    currentIndex,
    isDeleting,
    currentText,
    speed,
    delay,
    loop,
    texts.length,
    currentStringIndex,
    onComplete,
  ]);

  return (
    <span className={`inline-block ${className}`}>
      {displayedText}
      {cursor && <span className="animate-blink ml-1 text-primary">|</span>}
    </span>
  );
};

interface CodeTypingProps {
  code: string;
  language?: "javascript" | "python" | "html" | "css" | "terminal";
  speed?: number;
  className?: string;
  showLineNumbers?: boolean;
}

export const CodeTyping = ({
  code,
  language = "javascript",
  speed = 30,
  className = "",
  showLineNumbers = false,
}: CodeTypingProps) => {
  const [displayedCode, setDisplayedCode] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < code.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode(code.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, code, speed]);

  const getLanguageClass = () => {
    switch (language) {
      case "javascript":
        return "text-yellow-400";
      case "python":
        return "text-blue-400";
      case "html":
        return "text-orange-400";
      case "css":
        return "text-green-400";
      case "terminal":
        return "text-orange-bright";
      default:
        return "text-gray-300";
    }
  };

  const lines = displayedCode.split("\n");

  return (
    <div className={`font-mono text-sm ${className}`}>
      <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-400 text-xs ml-2">{language}</span>
        </div>
        <div className={`${getLanguageClass()} whitespace-pre-wrap`}>
          {lines.map((line, index) => (
            <div key={index} className="flex">
              {showLineNumbers && (
                <span className="text-gray-500 mr-4 select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
              )}
              <span>{line}</span>
            </div>
          ))}
          <span className="animate-blink text-orange-bright">_</span>
        </div>
      </div>
    </div>
  );
};

interface AIConsoleProps {
  messages: Array<{
    type: "input" | "output" | "error" | "success";
    content: string;
    delay?: number;
  }>;
  speed?: number;
  className?: string;
}

export const AIConsole = ({
  messages,
  speed = 40,
  className = "",
}: AIConsoleProps) => {
  const [displayedMessages, setDisplayedMessages] = useState<
    Array<{ type: string; content: string; completed: boolean }>
  >([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentMessageIndex >= messages.length) return;

    const currentMessage = messages[currentMessageIndex];
    const currentDisplayed = displayedMessages[currentMessageIndex];

    if (!currentDisplayed) {
      setDisplayedMessages((prev) => [
        ...prev,
        { type: currentMessage.type, content: "", completed: false },
      ]);
      return;
    }

    if (currentCharIndex < currentMessage.content.length) {
      const timeout = setTimeout(() => {
        setDisplayedMessages((prev) =>
          prev.map((msg, index) =>
            index === currentMessageIndex
              ? {
                  ...msg,
                  content: currentMessage.content.substring(
                    0,
                    currentCharIndex + 1
                  ),
                }
              : msg
          )
        );
        setCurrentCharIndex(currentCharIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      // Message completed
      setDisplayedMessages((prev) =>
        prev.map((msg, index) =>
          index === currentMessageIndex ? { ...msg, completed: true } : msg
        )
      );

      const delay = currentMessage.delay || 500;
      const timeout = setTimeout(() => {
        setCurrentMessageIndex(currentMessageIndex + 1);
        setCurrentCharIndex(0);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [
    currentMessageIndex,
    currentCharIndex,
    messages,
    displayedMessages,
    speed,
  ]);

  const getMessageClass = (type: string) => {
    switch (type) {
      case "input":
        return "text-orange-bright";
      case "output":
        return "text-white";
      case "error":
        return "text-red-400";
      case "success":
        return "text-orange-light";
      default:
        return "text-gray-300";
    }
  };

  const getPrefix = (type: string) => {
    switch (type) {
      case "input":
        return "$ ";
      case "output":
        return "> ";
      case "error":
        return "! ";
      case "success":
        return "✓ ";
      default:
        return "  ";
    }
  };

  return (
    <div className={`font-mono text-sm ${className}`}>
      <div className="bg-black rounded-lg p-4 border border-gray-700">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-400 text-xs ml-2">AI Terminal</span>
        </div>
        <div className="space-y-1">
          {displayedMessages.map((message, index) => (
            <div
              key={index}
              className={`flex ${getMessageClass(message.type)}`}
            >
              <span className="text-gray-500 mr-2">
                {getPrefix(message.type)}
              </span>
              <span className="whitespace-pre-wrap">{message.content}</span>
              {index === currentMessageIndex && !message.completed && (
                <span className="animate-blink text-orange-bright ml-1">_</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
