"use client";

import { Handshake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { getWhatsAppUrl, WHATSAPP_CONFIG } from "@/lib/constants";

export default function HomeMitra() {
  const waUrl = getWhatsAppUrl(
    WHATSAPP_CONFIG.mitraPhoneNumber,
    WHATSAPP_CONFIG.mitraMessage
  );

  return (
    <section id="section-mitra" className="relative py-24 md:py-32 overflow-hidden bg-primary/5">
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-primary/10 -z-10" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 -z-10 pointer-events-none" />
      
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl bg-background/80 backdrop-blur-xl border border-primary/20 shadow-2xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                <Handshake className="w-4 h-4" />
                <span>Peluang Bisnis</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
                Jadilah Mitra Tridata
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Kembangkan bisnis Anda bersama kami. Kami membuka peluang kemitraan dengan keuntungan maksimal untuk wilayah <strong className="text-foreground">Madiun dan sekitarnya</strong>. 
                Dapatkan dukungan penuh dari tim teknis dan pemasaran kami.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <Button asChild size="lg" className="h-14 px-8 rounded-xl font-bold text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
                  <a href={waUrl} target="_blank" rel="noreferrer">
                    Gabung Sekarang
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </FadeIn>
          </div>
          
          <div className="flex-1 w-full max-w-sm relative">
            <FadeIn delay={0.2} className="relative aspect-square">
              <div className="absolute inset-0 bg-linear-to-tr from-primary/30 to-blue-500/30 rounded-[3rem] rotate-6 scale-95 transition-transform hover:rotate-12 duration-500" />
              <div className="absolute inset-0 bg-background rounded-[3rem] border shadow-xl flex flex-col items-center justify-center p-8 text-center rotate-0 transition-transform hover:-translate-y-2 duration-500">
                <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 shadow-inner">
                  <Handshake className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">Konsultasi Mitra</h3>
                <p className="text-muted-foreground mb-6 text-sm">Hubungi tim kemitraan kami secara langsung via WhatsApp.</p>
                <div className="text-xl font-extrabold text-primary tracking-wide bg-primary/5 px-4 py-2 rounded-lg">
                  +62 813-3195-6171
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
