import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { PlusIcon, CheckIcon, BellIcon } from "@/components/ui/icons";

const Sidebar = ({ isDarkMode }:any) => {
  return (
    <div
      className={`border-r p-4 ${
        isDarkMode
          ? "bg-gray-800 text-gray-200 border-gray-700"
          : "bg-white text-black border-gray-200"
      }`}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="font-medium">Chats</div>
        <Button variant="ghost" size="icon" className="rounded-full">
          <PlusIcon className="h-5 w-5" />
          <span className="sr-only">New chat</span>
        </Button>
      </div>
      <ScrollArea className="h-[calc(100vh_-_120px)]">
        <div className="space-y-2">
          <Link
            href="#"
            className={`flex items-center gap-4 rounded-md p-3 hover:bg-muted/20 ${
              isDarkMode
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            prefetch={false}
          >
            <Avatar
              className={`border-2 ${
                isDarkMode ? "border-gray-600" : "border-primary"
              }`}
            >
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="font-medium">John Doe</div>
              <div
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Hey, how&apos;s it going?
              </div>
            </div>
            <div
              className={`text-xs ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              2:34 PM
            </div>
            <CheckIcon
              className={`h-3 w-3 ml-2 ${
                isDarkMode ? "text-green-400" : "text-green-600"
              }`}
            />
            <Button variant="ghost" size="icon" className="rounded-full">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Ping conversation</span>
            </Button>
          </Link>
          <Link
            href="#"
            className={`flex items-center gap-4 rounded-md p-3 hover:bg-muted/20 ${
              isDarkMode
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            prefetch={false}
          >
            <Avatar
              className={`border-2 ${
                isDarkMode ? "border-gray-600" : "border-primary"
              }`}
            >
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="font-medium">Jane Doe</div>
              <div
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Did you see the new design?
              </div>
            </div>
            <div
              className={`text-xs ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              11:22 AM
            </div>
            <CheckIcon
              className={`h-3 w-3 ml-2 ${
                isDarkMode ? "text-green-400" : "text-green-600"
              }`}
            />
          </Link>
          <Link
            href="#"
            className={`flex items-center gap-4 rounded-md p-3 hover:bg-muted/20 ${
              isDarkMode
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            prefetch={false}
          >
            <Avatar
              className={`border-2 ${
                isDarkMode ? "border-gray-600" : "border-primary"
              }`}
            >
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="font-medium">Bob Smith</div>
            </div>
            <div
              className={`text-xs ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Yesterday
            </div>
            <CheckIcon
              className={`h-3 w-3 ml-2 ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
          </Link>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Sidebar;
