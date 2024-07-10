import ChatMessage from "@/components/ChatMessage";

export default function MessageList({ messages, isDarkMode }:any) {
  return (
    <div className="grid gap-4">
      {messages.map((message: { id: any; }) => (
        <ChatMessage
          key={message.id}
          message={message}
          isDarkMode={isDarkMode}
        />
      ))}
    </div>
  );
}
