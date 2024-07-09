import ChatMessage from "@/components/ChatMessage";

export default function MessageList({ messages, isDarkMode }) {
  return (
    <div className="grid gap-4">
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          message={message}
          isDarkMode={isDarkMode}
        />
      ))}
    </div>
  );
}
