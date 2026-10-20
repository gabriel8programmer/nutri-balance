import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "NutriBalance | Acompanhamento Nutricional Personalizado",
  description:
    "Acompanhamento nutricional personalizado para construir uma alimentação equilibrada, prática e sustentável no dia a dia com a Dra. Camila Ribeiro.",
  keywords: [
    "nutricionista",
    "nutrição comportamental",
    "reeducação alimentar",
    "emagrecimento sustentável",
    "acompanhamento nutricional",
    "alimentação saudável",
    "saúde e bem-estar",
  ],
  authors: [{ name: "Dra. Camila Ribeiro - NutriBalance" }],
  creator: "NutriBalance",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://nutribalance.com.br",
    title: "NutriBalance | Acompanhamento Nutricional Personalizado",
    description:
      "Acompanhamento nutricional personalizado para construir uma alimentação equilibrada, prática e sustentável no dia a dia.",
    siteName: "NutriBalance",
    images: [
      {
        url: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "NutriBalance - Alimentação equilibrada e sustentável",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NutriBalance | Acompanhamento Nutricional Personalizado",
    description:
      "Acompanhamento nutricional personalizado para construir uma alimentação equilibrada, prática e sustentável no dia a dia.",
    images: ["https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-brand-cream text-brand-brown antialiased selection:bg-brand-linen selection:text-brand-brown">
        {children}
      </body>
    </html>
  );
}
