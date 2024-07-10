import { CheckIcon } from "@/components/icons";

export default function ChatMessage({ message, isDarkMode }:any) {
  return (
    <div
      className={`flex w-max max-w-[80%] flex-col gap-1 rounded-2xl border px-4 py-2 text-sm ${
        isDarkMode
          ? "border-muted bg-muted text-muted-foreground"
          : "border-muted/10 bg-muted/10"
      }`}
    >
      <div>{message.text}</div>
      <div
        className={`text-xs ${
          isDarkMode ? "text-muted-foreground" : "text-foreground"
        }`}
      >
        {message.timestamp}
      </div>
      <div className="flex items-center justify-end gap-2">
        <CheckIcon
          className={`h-3 w-3 ${isDarkMode ? "text-accent" : "text-accent"}`}
        />
      </div>
    </div>
  );
}
