"use client";

import { scrollToSection } from "@/lib/scroll-to-section";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomeFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t bg-background overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Top CTA Banner */}
      <div className="border-b bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Siap menikmati internet tanpa batas?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Bergabunglah dengan ribuan pelanggan kami yang sudah merasakan konektivitas andal setiap hari.
            </p>
          </div>
          <div className="flex gap-3">
            <Button asChild size="lg" className="rounded-full shadow-lg transition-transform hover:-translate-y-1 hover:shadow-primary/20">
              <a href="https://wa.me/628113396171" target="_blank" rel="noreferrer" className="flex items-center">
                Daftar Sekarang
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12 md:py-16">
        {/* Main grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent w-max">
              Trisari Data Indonusa
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Penyedia layanan internet rumahan dan bisnis dengan koneksi stabil
              dan dukungan teknis yang responsif di wilayah Madiun, Ponorogo, Pacitan, dan Samarinda.
            </p>
          </div>

          {/* Kontak */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Hubungi Kami
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  className="group flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                  href="https://maps.app.goo.gl/nf2znbnbP4G9mHJt5"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1" />
                  <span className="leading-relaxed">Perum Bumi Mas 1 Blok P No.1, Mojorejo, Taman, Madiun</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/628113396171"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110" />
                  <span>+62 811-3396-171</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@tridata.co.id"
                  className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110" />
                  <span>admin@tridata.co.id</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Tautan Langsung
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => scrollToSection("section-home")}
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => scrollToSection("section-service")}
                >
                  Layanan Kami
                </button>
              </li>
              <li>
                <button
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => scrollToSection("section-pricing")}
                >
                  Paket Internet
                </button>
              </li>
              <li>
                <button
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => scrollToSection("section-installation")}
                >
                  Cara Pemesanan
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom: copyright */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 text-center text-xs text-muted-foreground md:flex-row md:text-left">
          <p>© {year} PT Trisari Data Indonusa. Hak Cipta Dilindungi.</p>
          <p className="flex items-center gap-1 opacity-80">
            Dibuat dengan shadcn/ui & Tailwind · Dikelola oleh Pendiri Kami
          </p>
        </div>
      </div>
    </footer>
  );
}
