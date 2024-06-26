import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Header";
import { ThemeProvider } from "@/components/Providers/ThemeProvider";
import { QueryProvider } from "@/lib/react-query/QueryProvider";
import { NextUIProvider } from "@nextui-org/system";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anya-chan",
  description: "Stream your favorite anime",
  icons: {
    icon: "/Designer.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <NextUIProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              storageKey="app-theme"
            >
              <Navbar />
              {children}
            </ThemeProvider>
          </NextUIProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
