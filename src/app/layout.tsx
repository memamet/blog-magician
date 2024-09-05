import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "blog-magician 🧙‍♂️",
  description: "A magical blog experience",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex justify-center">
        <div className="w-full lg:w-[1000px] px-4">
          {children}
        </div>
      </body>
    </html>
  );
}
