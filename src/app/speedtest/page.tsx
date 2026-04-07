import type { Metadata } from "next";
import AppNavbar from "@/components/sections/app-navbar";
import HomeFooter from "@/components/sections/home-footer";

export const metadata: Metadata = {
  title: "Speedtest Tridata — Uji Kecepatan Internet Anda",
  description:
    "Uji kecepatan internet Tridata secara langsung. Cek ping, download, dan upload koneksi WiFi Anda dari provider Trisari Data Indonusa di Madiun, Ponorogo, Pacitan, dan Samarinda.",
  keywords: [
    "speedtest tridata",
    "uji kecepatan internet tridata",
    "tes kecepatan wifi tridata",
    "speedtest madiun",
    "speedtest samarinda",
    "cek kecepatan internet",
    "trisari data indonusa speedtest",
  ],
  alternates: {
    canonical: "/speedtest",
  },
  openGraph: {
    title: "Speedtest Tridata — Uji Kecepatan Internet Anda",
    description:
      "Uji kecepatan internet Tridata secara langsung. Cek ping, download, dan upload koneksi WiFi Anda.",
    url: "https://tridata.co.id/speedtest",
    siteName: "Tridata",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Tridata Speedtest",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Speedtest Tridata — Uji Kecepatan Internet",
    description:
      "Cek ping, download, dan upload koneksi internet Tridata Anda.",
    images: ["/logo.jpg"],
  },
};

export default function SpeedtestPage() {
  return (
    <main>
      <AppNavbar />
      <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-16">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Speedtest Tridata
        </h1>
        <p className="text-muted-foreground text-center mb-8 max-w-md">
          Uji kecepatan internet Anda langsung dari jaringan Tridata. Cek ping,
          download, dan upload koneksi WiFi Anda.
        </p>
        {/* Embed speedtest tool di sini */}
      </section>
      <HomeFooter />
    </main>
  );
}
