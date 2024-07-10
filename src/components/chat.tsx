"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export function Chat() {
  const [pinnedMessage, setPinnedMessage] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handlePinMessage = (message: string) => {
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
      className={`flex h-screen w-full flex-col ${isDarkMode ? "dark" : ""}`}
    >
      <header
        className={`flex items-center justify-between px-6 py-4 ${
          isDarkMode
            ? "bg-muted text-muted-foreground"
            : "bg-primary text-primary-foreground"
        }`}
      >
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold">WaveChat</div>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={handleDarkModeToggle}
          >
            {isDarkMode ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle Dark Mode</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <SearchIcon className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </header>
      <div className="flex h-full">
        <div
          className={`border-r border-muted/20 p-4 ${
            isDarkMode ? "bg-muted text-muted-foreground" : "bg-muted/10"
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
                  isDarkMode ? "bg-muted hover:bg-muted/20" : "bg-muted/10"
                }`}
                prefetch={false}
              >
                <Avatar
                  className={`border-2 ${
                    isDarkMode ? "border-muted" : "border-primary"
                  }`}
                >
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <BellIcon className="h-4 w-4" />
                    <span className="sr-only">Ping conversation</span>
                  </Button>
                </Avatar>
                <div className="flex-1">
                  <div className="font-medium">John Doe</div>
                  <div
                    className={`text-sm ${
                      isDarkMode ? "text-muted-foreground" : "text-foreground"
                    }`}
                  >
                    Hey, how&apos;s it going?
                  </div>
                </div>
                <div
                  className={`text-xs ${
                    isDarkMode ? "text-muted-foreground" : "text-foreground"
                  }`}
                >
                  2:34 PM
                </div>
                <CheckIcon
                  className={`h-3 w-3 ml-2 ${
                    isDarkMode ? "text-accent" : "text-accent"
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
                  isDarkMode ? "bg-muted hover:bg-muted/20" : "bg-muted/10"
                }`}
                prefetch={false}
              >
                <Avatar
                  className={`border-2 ${
                    isDarkMode ? "border-muted" : "border-primary"
                  }`}
                >
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-medium">Jane Doe</div>
                  <div
                    className={`text-sm ${
                      isDarkMode ? "text-muted-foreground" : "text-foreground"
                    }`}
                  >
                    Did you see the new design?
                  </div>
                </div>
                <div
                  className={`text-xs ${
                    isDarkMode ? "text-muted-foreground" : "text-foreground"
                  }`}
                >
                  11:22 AM
                </div>
                <CheckIcon
                  className={`h-3 w-3 ml-2 ${
                    isDarkMode ? "text-accent" : "text-accent"
                  }`}
                />
              </Link>
              <Link
                href="#"
                className={`flex items-center gap-4 rounded-md p-3 hover:bg-muted/20 ${
                  isDarkMode ? "bg-muted hover:bg-muted/20" : "bg-muted/10"
                }`}
                prefetch={false}
              >
                <Avatar
                  className={`border-2 ${
                    isDarkMode ? "border-muted" : "border-primary"
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
                    isDarkMode ? "text-muted-foreground" : "text-foreground"
                  }`}
                >
                  Yesterday
                </div>
                <CheckIcon
                  className={`h-3 w-3 ml-2 ${
                    isDarkMode ? "text-muted-foreground" : "text-foreground"
                  }`}
                />
              </Link>
            </div>
          </ScrollArea>
        </div>
        <div
          className={`flex-1 ${
            isDarkMode ? "bg-background text-foreground" : ""
          }`}
        >
          <div className="flex h-full flex-col">
            <div
              className={`border-b border-muted/20 p-2 ${
                isDarkMode ? "bg-muted text-muted-foreground" : "bg-muted/10"
              }`}
            />
            <div className="flex items-center gap-4 p-4">
              <Avatar className="border-2 border-primary">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">John Doe</div>
                <div className="text-sm text-muted-foreground">Online</div>
              </div>
            </div>
            <ScrollArea className="flex-1 p-4 space-y-4">
              {" "}
              {/*  space-y-4 pr espacer les Message */}
              <div className="grid gap-4">
                <div
                  className={`flex w-max max-w-[80%] flex-col gap-1 rounded-2xl border px-4 py-2 text-sm ${
                    isDarkMode
                      ? "border-muted bg-secondary text-muted-foreground"
                      : "border-muted/10 bg-secondary/20"
                  }`}
                >
                  <div>Hey, how&apos;s it going?</div>
                  <div className="text-xs text-muted-foreground">2:34 PM</div>
                  <div className="flex items-center justify-end gap-2">
                    <CheckIcon
                      className={`h-3 w-3 ${
                        isDarkMode ? "text-accent" : "text-accent"
                      }`}
                    />
                  </div>
                </div>
                <div
                  className={`flex w-max max-w-[65%] justify-end flex-col ml-auto gap-1 rounded-2xl border px-4 py-2 text-sm ${
                    isDarkMode
                      ? "border-muted bg-muted text-white"
                      : "border-primary bg-primary text-primary-foreground"
                  }`}
                >
                  <div>I&apos;m doing great, thanks for asking!</div>
                  <div
                    className={`text-xs ${
                      isDarkMode
                        ? "text-white/80"
                        : "text-primary-foreground/80"
                    }`}
                  >
                    2:35 PM
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <CheckIcon
                      className={`h-3 w-3 ${
                        isDarkMode ? "text-accent" : "text-accent"
                      }`}
                    />
                  </div>
                </div>
                <div
                  className={`flex w-max max-w-[80%] flex-col gap-1 rounded-2xl border px-4 py-2 text-sm ${
                    isDarkMode
                      ? "border-muted bg-secondary text-muted-foreground"
                      : "border-muted/10 bg-secondary/20"
                  }`}
                >
                  <div>Did you see the new design?</div>
                  <div className="text-xs text-muted-foreground">2:36 PM</div>
                  <div className="flex items-center justify-end gap-2">
                    <CheckIcon
                      className={`h-3 w-3 ${
                        isDarkMode ? "text-accent" : "text-accent"
                      }`}
                    />
                  </div>
                </div>
                <div
                  className={`flex w-max max-w-[65%] justify-end flex-col ml-auto gap-1 rounded-2xl border px-4 py-2 text-sm ${
                    isDarkMode
                      ? "border-muted bg-muted text-white"
                      : "border-primary bg-primary text-primary-foreground"
                  }`}
                >
                  <div>Yes, I love it! Great work.</div>
                  <div
                    className={`text-xs ${
                      isDarkMode
                        ? "text-white/80"
                        : "text-primary-foreground/80"
                    }`}
                  >
                    2:37 PM
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <CheckIcon
                      className={`h-3 w-3 ${
                        isDarkMode ? "text-accent" : "text-accent"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </ScrollArea>
            <div
              className={`border-t border-muted/20 p-4 ${
                isDarkMode ? "bg-muted text-muted-foreground" : "bg-muted/10"
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
          </div>
        </div>
      </div>
    </div>
  );
}

function BellIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ImageIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MoonIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function SendIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function SunIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
