import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WA Manager — The WhatsApp Automation Platform for Serious Businesses",
  description: "Send personalised campaigns to thousands, build intelligent chatbots, manage multiple WhatsApp numbers — all from one dashboard. No coding required.",
  keywords: "WhatsApp automation, WhatsApp marketing, WhatsApp chatbot, WhatsApp bulk messaging, Nigeria WhatsApp marketing",
  openGraph: {
    title: "WA Manager — WhatsApp Automation Platform",
    description: "Turn WhatsApp into your most powerful sales & marketing engine.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
