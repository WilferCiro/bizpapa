import type React from "react";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diccionario de Acrónimos de Negocios",
  icons: {
    icon: "/favicon.png",
  },
  description:
    "Descifra la jerga empresarial con nuestro completo diccionario de acrónimos",
  keywords:
    "Glosario de negocios, términos empresariales, jerga corporativa, vocabulario empresarial, diccionario de negocios, términos de startups, términos financieros, expresiones de oficina, memes de trabajo, chistes de negocios.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </NextThemesProvider>
      </body>
    </html>
  );
}
