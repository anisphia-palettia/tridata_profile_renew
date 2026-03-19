"use client";

import { scrollToSection } from "@/lib/scroll-to-section";

export default function HomeFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Top: 3 columns */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-extrabold tracking-tight">
              Trisari Data Indonusa
            </h2>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              Penyedia layanan internet rumahan dan bisnis dengan koneksi stabil
              dan dukungan teknis yang responsif di wilayah Madiun dan
              sekitarnya.
            </p>
          </div>

          {/* Kontak */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Kontak
            </h3>
            <a
              className="block text-sm text-muted-foreground hover:text-foreground hover:underline"
              href="https://maps.app.goo.gl/nf2znbnbP4G9mHJt5"
              target="_blank"
            >
              Perum Bumi Mas 1 Blok P No.1, Mojorejo, Kec. Taman, Kota Madiun
            </a>
            <a
              href="https://wa.me/6285136506354"
              target="_blank"
              className="block text-sm text-muted-foreground hover:text-foreground hover:underline"
            >
              0811-3396-105
            </a>
            <a
              href="mailto:admin@tridata.co.id"
              className="block text-sm text-muted-foreground hover:text-foreground hover:underline"
            >
              admin@tridata.co.id
            </a>
          </div>

          {/* Navigation */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Navigasi
            </h3>
            <button
              className="block text-left text-sm text-muted-foreground hover:text-foreground hover:underline"
              onClick={() => scrollToSection("section-home")}
            >
              Beranda
            </button>
            <button
              className="block text-left text-sm text-muted-foreground hover:text-foreground hover:underline"
              onClick={() => scrollToSection("section-pricing")}
            >
              Paket Internet
            </button>
            <button
              className="block text-left text-sm text-muted-foreground hover:text-foreground hover:underline"
              onClick={() => scrollToSection("section-installation")}
            >
              Cara Order
            </button>
            <a
              href="https://wa.me/6285136506354"
              target="_blank"
              className="block text-sm text-muted-foreground hover:text-foreground hover:underline"
            >
              Bantuan
            </a>
          </div>
        </div>

        {/* Bottom: copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t pt-4 text-xs text-muted-foreground md:flex-row">
          <p>© {year} PT Trisari Data Indonusa. All rights reserved.</p>
          <p className="text-[11px]">
            Crafted with shadcn/ui & Tailwind · Maintained by Our Founder
          </p>
        </div>
      </div>
    </footer>
  );
}
