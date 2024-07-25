import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/main.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Billing Software",
  description: "This is a billing software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Tailwind CSS CDN */}
        <script src="https://cdn.tailwindcss.com"></script>
        {/* Boxicons CDN */}
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
        {/* Animate CSS CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
