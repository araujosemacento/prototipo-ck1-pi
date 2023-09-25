"use client";
import "./globals.css";
import { Besley } from "next/font/google";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";

const besley = Besley({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Protótipo</title>
        <meta
          name="description"
          content="Protótipo de Projeto Integrado para prova de conceitos"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </head>
      <body className={besley.className}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
