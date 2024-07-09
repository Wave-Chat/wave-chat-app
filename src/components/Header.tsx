import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, MenuIcon, SearchIcon } from "@/components/ui/icons";

const Header = ({ isDarkMode, handleDarkModeToggle }) => {
  const { data: session } = useSession();

  return (
    <header
      className={`flex items-center justify-between px-6 py-4 ${
        isDarkMode
          ? "bg-gray-800 text-gray-100"
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
        {session ? (
          <>
            <p>{session.user?.name}</p>
            <Button variant="ghost" size="icon" onClick={() => signOut()}>
              Sign out
            </Button>
          </>
        ) : (
          <Button variant="ghost" size="icon" onClick={() => signIn()}>
            Sign in
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
