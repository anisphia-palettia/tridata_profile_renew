import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://tridata.co.id"),
  title: "Tridata — Internet Murah Madiun, Samarinda, Ponorogo & Pacitan",
  description:
    "Trisari Data Indonusa (Tridata) — Provider penyedia layanan paket internet murah, WiFi cepat, stabil, dan tanpa batasan kuota (FUP) di area Madiun, Ponorogo, Pacitan, dan Samarinda.",
  keywords: [
    "internet murah madiun",
    "internet murah samarinda",
    "internet murah ponorogo",
    "internet murah pacitan",
    "pasang wifi madiun",
    "provider internet cepat",
    "wifi tanpa fup",
    "trisari data indonusa"
  ],
  authors: [{ name: "PT Trisari Data Indonusa" }],
  creator: "PT Trisari Data Indonusa",
  publisher: "PT Trisari Data Indonusa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tridata — Internet Murah Madiun, Samarinda, Ponorogo & Pacitan",
    description: "Provider penyedia layanan paket internet murah, WiFi cepat, stabil, dan tanpa batasan kuota (FUP) di area Madiun, Ponorogo, Pacitan, dan Samarinda.",
    url: "https://tridata.co.id",
    siteName: "Tridata",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Tridata Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tridata — Internet Murah",
    description: "Layanan paket internet murah, WiFi cepat, stabil, dan tanpa FUP di Madiun, Ponorogo, Pacitan, dan Samarinda.",
    images: ["/logo.jpg"],
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={cn("h-full antialiased", inter.variable)}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <FloatingWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  );
}
