import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { Space_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import SessionProviderWrapper from "@/lib/SessionProviderWrapper";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "@/lib/apollo";
import { ApolloWrapper } from "@/http/client";

export const metadata: Metadata = {
  title: "WaveChat",
  description: "A chat application",
};

const fontHeading = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDarkMode = true;
  return (
    <html lang="en" className={isDarkMode ? "dark" : ""}>
      <body
        className={cn(
          "antialiased",
          fontHeading.variable,
          fontBody.variable,
          isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-black"
        )}
      >
        <SessionProviderWrapper> <ApolloWrapper>{children}</ApolloWrapper></SessionProviderWrapper>
      </body>
    </html>
  );
}
