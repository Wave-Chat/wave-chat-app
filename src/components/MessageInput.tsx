import { Button } from "@/components/ui/button";
import  {Input}  from "@/components/ui/input";
import { SendIcon, ImageIcon, XIcon } from "@/components/icons";

export default function MessageInput({ isDarkMode }:any) {
  return (
    <div
      className={`border-t border-muted/20 p-4 ${
        isDarkMode
          ? "bg-muted border-muted text-muted-foreground"
          : "bg-muted/10"
      }`}
    >
      <form className="flex w-full items-center space-x-2">
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
