import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Gauge, ArrowLeft, Wifi, Zap, Activity } from "lucide-react";
import SpeedtestEmbed from "@/components/sections/speedtest-embed";

export const metadata: Metadata = {
  title: "Uji Kecepatan Internet Tridata — Speedtest Gratis",
  description:
    "Cek kecepatan internet Anda secara gratis dengan Speedtest Tridata. Uji ping, download, dan upload koneksi WiFi Anda sekarang — layanan dari Trisari Data Indonusa (Tridata).",
  keywords: [
    "speedtest tridata",
    "uji kecepatan internet",
    "cek kecepatan wifi tridata",
    "internet speed test madiun",
    "tes kecepatan internet ponorogo",
    "cek kecepatan internet samarinda",
    "speedtest gratis",
    "uji ping internet",
    "cek download upload internet",
    "tridata speedtest",
  ],
  alternates: {
    canonical: "/speedtest",
  },
  openGraph: {
    title: "Uji Kecepatan Internet Tridata — Speedtest Gratis",
    description:
      "Cek kecepatan internet Anda secara gratis. Uji ping, download, dan upload koneksi WiFi Tridata sekarang.",
    url: "https://tridata.co.id/speedtest",
    siteName: "Tridata",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Speedtest Tridata",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uji Kecepatan Internet Tridata — Speedtest Gratis",
    description:
      "Cek kecepatan internet Anda secara gratis dengan Speedtest Tridata.",
    images: ["/logo.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Uji Kecepatan Internet Tridata",
  description:
    "Halaman uji kecepatan internet (speedtest) layanan Tridata — Trisari Data Indonusa.",
  url: "https://tridata.co.id/speedtest",
  isPartOf: {
    "@type": "WebSite",
    name: "Tridata",
    url: "https://tridata.co.id",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: "https://tridata.co.id",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Uji Kecepatan Internet",
        item: "https://tridata.co.id/speedtest",
      },
    ],
  },
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Speedtest Tridata",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "All",
  url: "https://tridata.co.id/speedtest",
  description:
    "Alat uji kecepatan internet gratis dari Tridata untuk mengukur ping, download, dan upload koneksi Anda.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "IDR",
  },
  provider: {
    "@type": "Organization",
    name: "PT Trisari Data Indonusa",
    url: "https://tridata.co.id",
  },
};

export default function SpeedtestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />

      <div className="min-h-screen flex flex-col bg-background">
        {/* Header */}
        <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.jpg"
                alt="Logo Tridata"
                width={32}
                height={32}
                className="rounded object-cover"
              />
              <span className="text-xl font-bold tracking-tight">Tridata</span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Beranda
            </Link>
          </div>
        </header>

        <main className="flex-1">
          {/* Speedtest embed — full screen below header */}
          <section className="px-4 pt-4 pb-2">
            <div className="mx-auto max-w-5xl">
              <div className="rounded-2xl border shadow-lg overflow-hidden">
                <SpeedtestEmbed />
              </div>
              <p className="mt-2 text-center text-xs text-muted-foreground">
                Didukung oleh infrastruktur{" "}
                <a
                  href="https://speedtest.antofisalia.my.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  speedtest.antofisalia.my.id
                </a>
              </p>
            </div>
          </section>

          {/* Hero / SEO content — below the fold */}
          <section className="bg-gradient-to-b from-primary/5 to-background py-10 px-4 text-center mt-4">
            <div className="mx-auto max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Layanan Gratis dari Tridata
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl mb-3">
                Uji Kecepatan Internet
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
                Cek kecepatan koneksi internet Anda secara real-time. Ukur
                <strong> ping</strong>, <strong>download</strong>, dan{" "}
                <strong>upload</strong> dengan mudah dan akurat.
              </p>
            </div>
          </section>

          {/* Info cards */}
          <section className="px-4 pb-12">
            <div className="mx-auto max-w-5xl">
              <h2 className="text-center text-xl font-bold mb-6">
                Apa yang Diukur Speedtest?
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border bg-card p-5 flex flex-col gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                    <Activity className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">Ping (Latensi)</h3>
                  <p className="text-sm text-muted-foreground">
                    Waktu respons koneksi ke server dalam milidetik (ms). Makin
                    kecil ping, makin responsif koneksi Anda untuk gaming dan
                    video call.
                  </p>
                </div>
                <div className="rounded-xl border bg-card p-5 flex flex-col gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                    <Wifi className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">Download</h3>
                  <p className="text-sm text-muted-foreground">
                    Kecepatan mengunduh data dari internet (Mbps). Menentukan
                    seberapa cepat Anda bisa streaming, browsing, dan mengunduh
                    file.
                  </p>
                </div>
                <div className="rounded-xl border bg-card p-5 flex flex-col gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">Upload</h3>
                  <p className="text-sm text-muted-foreground">
                    Kecepatan mengunggah data ke internet (Mbps). Penting untuk
                    video call, mengirim file besar, dan live streaming.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="border-t bg-primary/5 px-4 py-10 text-center">
            <div className="mx-auto max-w-xl">
              <Gauge className="mx-auto h-10 w-10 text-primary mb-3" />
              <h2 className="text-xl font-bold mb-2">
                Ingin Internet Lebih Cepat?
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                Dapatkan layanan internet tanpa batas kuota (FUP) dari Tridata
                di area Madiun, Ponorogo, Pacitan, dan Samarinda.
              </p>
              <Link
                href="/#section-pricing"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow hover:opacity-90 transition-opacity"
              >
                Lihat Paket Internet
              </Link>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t py-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" className="font-medium hover:text-foreground transition-colors">
              PT Trisari Data Indonusa (Tridata)
            </Link>{" "}
            — Provider Internet Madiun, Samarinda, Ponorogo &amp; Pacitan
          </p>
        </footer>
      </div>
    </>
  );
}
