import type { Metadata } from "next";
import "./globals.css";
import ToasterContext from "./context/ToasterContext";
import AuthContext from "./context/AuthContext";
import ActiveStatus from './components/ActiveStatus'

export const metadata: Metadata = {
  title: "ChatApp",
  description: "ChatApp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus/>
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
