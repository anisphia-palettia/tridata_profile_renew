"use client";

import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll-to-section";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight, Quote, Zap, Clock, MapPin } from "lucide-react";

export default function HomeAbout() {
  return (
    <section
      id="section-about"
      className="relative overflow-hidden bg-background"
    >
      {/* Subtle blur background element */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[800px] w-[800px] -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 lg:grid-cols-[1fr_1.2fr]">
        {/* Left quote */}
        <aside className="relative">
          <FadeIn direction="right">
            <div className="relative z-10 space-y-6 rounded-3xl border border-primary/10 bg-background/60 p-8 shadow-2xl backdrop-blur-xl md:p-10 transition-transform hover:-translate-y-1">
              <Quote className="h-12 w-12 text-primary/40" />
              <p className="text-xl font-medium leading-relaxed text-foreground/90 md:text-2xl">
                Kami di Trisari Data Indonusa berkomitmen menyediakan internet
                cepat, stabil, dan terjangkau untuk menghubungkan Indonesia ke
                dunia digital.
              </p>
              <div className="flex items-center gap-4 border-t border-border/50 pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-600 p-[2px]">
                  <div className="h-full w-full rounded-full bg-background" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Pendiri</p>
                  <p className="text-sm text-muted-foreground">
                    PT Trisari Data Indonusa
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative element styling */}
            <div className="absolute -left-6 -top-6 -z-10 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
            <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-full bg-blue-500/20 blur-2xl" />
          </FadeIn>
        </aside>

        {/* Right content */}
        <article className="space-y-6">
          <FadeIn delay={0.1} direction="left">
            <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Tentang Perusahaan
            </div>
            <h2 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl">
              Dedikasi Kami Untuk{" "}
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Konektivitas
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} direction="left">
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Berlokasi di Mojorejo, Kecamatan Taman, Madiun, PT Trisari Data
                Indonusa hadir sebagai penyedia layanan internet yang fokus pada
                koneksi stabil dengan harga yang bersahabat untuk semua
                kalangan.
              </p>
              <p>
                Layanan kami mencakup paket hingga 110 Mbps tanpa batasan FUP,
                didesain khusus untuk memenuhi kebutuhan digital rumah tangga,
                pelaku usaha, hingga institusi yang bekerja tak kenal waktu.
              </p>
            </div>
          </FadeIn>

          {/* Stats Cards */}
          <FadeIn delay={0.3} direction="left">
            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div className="group rounded-2xl border bg-card p-5 transition-colors hover:border-primary/50 hover:bg-primary/5">
                <Zap className="mb-3 h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                <p className="text-2xl font-bold">110 Mbps</p>
                <p className="mt-1 text-xs font-medium text-muted-foreground">
                  Tanpa FUP (Unlimited)
                </p>
              </div>
              <div className="group rounded-2xl border bg-card p-5 transition-colors hover:border-blue-500/50 hover:bg-blue-500/5">
                <Clock className="mb-3 h-8 w-8 text-blue-500 transition-transform group-hover:scale-110" />
                <p className="text-2xl font-bold">24/7</p>
                <p className="mt-1 text-xs font-medium text-muted-foreground">
                  Teknisi Siap Bantu
                </p>
              </div>
              <div className="group rounded-2xl border bg-card p-5 transition-colors hover:border-emerald-500/50 hover:bg-emerald-500/5">
                <MapPin className="mb-3 h-8 w-8 text-emerald-500 transition-transform group-hover:scale-110" />
                <p className="text-2xl font-bold">4 Area</p>
                <p className="mt-1 text-xs font-medium text-muted-foreground">
                  Madiun & Sekitarnya
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Button
                size="lg"
                className="rounded-full shadow-lg hover:-translate-y-1 transition-transform hover:shadow-primary/20"
                onClick={() => scrollToSection("section-pricing")}
              >
                Jelajahi Paket Kami
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </FadeIn>
        </article>
      </div>
    </section>
  );
}
