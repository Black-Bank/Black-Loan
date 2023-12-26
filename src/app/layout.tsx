"use client";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={
          (cn("min-h-screen bg-background font-sans antialiased"),
          poppins.className)
        }
      >
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
