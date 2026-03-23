"use client";

import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll-to-section";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight, ChevronDown, Zap, ShieldCheck, Wifi } from "lucide-react";

export default function HomeHero() {
  return (
    <section
      id="section-home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image & gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-105"
        style={{ backgroundImage: "url('/bg_hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/60 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Floating Elements (Visible on lg) */}
      <div className="hidden lg:block">
        <FadeIn delay={0.4} direction="up" className="absolute left-[10%] top-[25%] z-20">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-white backdrop-blur-md shadow-2xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold">Kecepatan Tinggi</p>
              <p className="text-xs text-white/70">Hingga 110 Mbps</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.6} direction="down" className="absolute right-[10%] bottom-[30%] z-20">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-white backdrop-blur-md shadow-2xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold">Dukungan 24/7</p>
              <p className="text-xs text-white/70">Teknisi Siap Sedia</p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white mt-16 lg:mt-0">
        <FadeIn delay={0.1}>
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm backdrop-blur-md">
            <Wifi className="h-4 w-4 text-primary" />
            <span className="font-medium text-white/90">Koneksi Tanpa Batas Kuota</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Internet {" "}
            <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-pulse">
              Cepat & Stabil
            </span>
            <br />
            Untuk Aktivitas Anda
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Nikmati layanan Wi-Fi berkualitas dari Tridata dengan jangkauan luas. Cocok untuk kebutuhan rumah tangga maupun bisnis dengan harga yang terjangkau.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="h-14 w-full rounded-full px-8 text-base shadow-xl sm:w-auto transition-all hover:scale-105 hover:shadow-primary/25"
              onClick={() => scrollToSection("section-pricing")}
            >
              Lihat Paket Internet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 w-full rounded-full border-white/30 bg-white/5 px-8 text-base text-white backdrop-blur-md hover:bg-white/10 hover:text-white sm:w-auto transition-transform hover:scale-105"
              onClick={() => scrollToSection("section-installation")}
            >
              Cara Pemasangan
            </Button>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-70 hover:opacity-100 hidden sm:block z-20" 
        onClick={() => scrollToSection("section-pricing")}
      >
        <ChevronDown className="h-8 w-8 text-white" />
      </div>
    </section>
  );
}
