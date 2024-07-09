"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ChatWindow from "@/components/ChatWindow";

export default function HomePage() {
  const { data: session } = useSession();
  const [pinnedMessage, setPinnedMessage] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const messages = [
    {
      id: 1,
      text: "Hey, how's it going?",
      timestamp: "2:34 PM",
      isSent: false,
    },
    {
      id: 2,
      text: "I'm doing great, thanks for asking!",
      timestamp: "2:35 PM",
      isSent: true,
    },
    {
      id: 3,
      text: "Did you see the new design?",
      timestamp: "2:36 PM",
      isSent: false,
    },
    {
      id: 4,
      text: "Yes, I love it! Great work.",
      timestamp: "2:37 PM",
      isSent: true,
    },
  ];

  const handlePinMessage = (message) => {
    setPinnedMessage(message);
  };

  const handleUnpinMessage = () => {
    setPinnedMessage(null);
  };

  const handleDarkModeToggle = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <div
      className={`flex h-screen w-full flex-col ${
        isDarkMode
          ? "bg-foreground text-background"
          : "bg-background text-foreground"
      }`}
    >
      <Header
        isDarkMode={isDarkMode}
        handleDarkModeToggle={handleDarkModeToggle}
      />
      <div className="flex h-full">
        <Sidebar isDarkMode={isDarkMode} />
        <ChatWindow
          pinnedMessage={pinnedMessage}
          messages={messages}
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
}
