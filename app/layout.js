import "./globals.css";
import { Besley } from "next/font/google";
import Navbar from "./components/Navbar";

const besley = Besley({ subsets: ["latin"] });

export const metadata = {
  title: "Protótipo",
  description: "Protótipo de Projeto Integrado para prova de conceitos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={(besley.className)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
