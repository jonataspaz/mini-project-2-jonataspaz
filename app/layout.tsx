import "./globals.css";
import { Navbar, Footer } from "@/components";

export const metadata = {
  title: "E-Vroom Rentals",
  description: "Best electric car rental service in the world",
  icons: {
    icon: "/favicon22.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon22.png" sizes="" />
      </head>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
