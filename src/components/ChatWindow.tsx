import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import  {Input}  from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckIcon, SendIcon, ImageIcon, XIcon } from "@/components/ui/icons";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
import ChatInput from "./ChatInput";
import { CREATE_MESSAGE} from "@/http/chat";
import { useMutation } from "@apollo/client";

const ChatWindow = ({ pinnedMessage, messages, isDarkMode }:any) => {
  
  const [sendMessage] = useMutation(CREATE_MESSAGE);
  return (
    <div className={`flex-1 ${isDarkMode ? " text-gray-100" : " bg-white text-black"}`}>
      <div className="flex h-full flex-col">
        <div
          className={`border-b border-gray-700 p-2 ${
            isDarkMode ? "bg-gray-800 text-gray-200" : "bg-gray-100"
          }`}
        />
        <div className="flex items-center gap-4 p-4">
          <Avatar className="border-2 border-primary">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">John Doe</div>
            <div className="text-sm text-gray-400">Online</div>
          </div>
        </div>
        <ScrollArea className="flex-1 p-4 space-y-4">
          <div className="grid gap-4">
            {messages.map((message: { id: Key | null | undefined; text: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; timestamp: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }, index: number) => (
              <div
                key={message.id}
                className={`flex w-max max-w-[80%] flex-col gap-1 rounded-2xl border px-4 py-2 text-sm ${
                  isDarkMode
                    ? "border-gray-600 bg-gray-800 text-gray-200"
                    : "border-gray-200 bg-gray-100"
                } ${index % 2 === 0 ? "" : "ml-auto max-w-[65%]"}`}
              >
                <div>{message.text}</div>
                <div className="text-xs text-gray-400">{message.timestamp}</div>
                <div className="flex items-center justify-end gap-2">
                  <CheckIcon
                    className={`h-3 w-3 ${
                      isDarkMode ? "text-green-400" : "text-green-600"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <ChatInput sendMessage={(message: string) => sendMessage({ variables: { roomId:"", message } })}  isDarkMode={isDarkMode}/>
      </div>
    </div>
  );
};

export default ChatWindow;
