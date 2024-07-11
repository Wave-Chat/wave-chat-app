import { Button } from "@/components/ui/button";
import  {Input}  from "@/components/ui/input";
import { SendIcon, ImageIcon, XIcon } from "@/components/icons";

interface ChatInputProps {
  sendMessage: (message: string) => void;
  isDarkMode: boolean
}

export default function ChatInput({ sendMessage, isDarkMode }:ChatInputProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = e.currentTarget.message;
    if (message.value.trim() === "") return;
    if (message) {
      sendMessage(message.value);
      message.value = "";
    }
  };
  return (
    <div
      className={`border-t border-muted/20 p-4 ${
        isDarkMode
          ? "bg-muted border-muted text-muted-foreground"
          : "bg-muted/10"
      }`}
    >
      <form onSubmit={handleSubmit}  className="flex w-full items-center space-x-2">
        <Input
          id="message"
          placeholder="Type your message..."
          className="flex-1"
          autoComplete="off"
        />
        <Button type="submit" size="icon">
          <span className="sr-only">Send</span>
          <SendIcon className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <ImageIcon className="h-5 w-5" />
          <span className="sr-only">Send Image</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <XIcon />
        </Button>
      </form>
    </div>
  );
}
