"use client";

import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll-to-section";

export default function HomeHero() {
  return (
    <section
      id="section-home"
      className="relative flex min-h-screen items-center justify-center"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg_hero.jpg')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-md px-6 text-center text-white">
        <h1 className="mb-5 text-4xl font-bold leading-tight sm:text-5xl">
          Internet <span className="text-primary-foreground/90 underline decoration-primary underline-offset-4">Cepat</span> &{" "}
          <span className="text-primary-foreground/90 underline decoration-primary underline-offset-4">Stabil</span>,
          <br />
          di Mana Pun Anda Berada
        </h1>

        <p className="mb-8 text-sm leading-relaxed text-white/80 sm:text-base">
          Nikmati layanan Wi-Fi berkualitas dengan jangkauan luas dan koneksi
          yang cepat dan stabil — di mana pun Anda berada.
        </p>

        <Button
          size="lg"
          className="w-full max-w-xs"
          onClick={() => scrollToSection("section-pricing")}
        >
          Lihat Paket Internet
        </Button>
      </div>
    </section>
  );
}
