"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/fade-in";
import { Check } from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_CONFIG } from "@/lib/constants";

import { branches, packagesByBranch, type Branch } from "@/data/pricing";

function formatPrice(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function HomePrice() {
  const [branch, setBranch] = useState<Branch>("Madiun");

  return (
    <section id="section-pricing" className="relative py-24 md:py-32">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-muted/10" />
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <header className="mx-auto max-w-3xl space-y-6 text-center mb-16">
          <FadeIn>
             <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Harga Spesial
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Pilih paket sesuai <br className="hidden md:block"/> kebutuhan Anda
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base text-muted-foreground md:text-lg">
              Semua paket mendukung koneksi Tanpa FUP dengan kuota tidak terbatas dan dukungan teknis 24/7.
            </p>
          </FadeIn>

          {/* Branch Toggle */}
          <FadeIn delay={0.3}>
            <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-1 rounded-xl bg-muted/80 p-1 shadow-inner backdrop-blur-md">
              {branches.map((b) => (
                <button
                  key={b}
                  onClick={() => setBranch(b)}
                  className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-300",
                    branch === b
                      ? "bg-background text-foreground shadow-md scale-100"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground scale-95",
                  )}
                >
                  {b}
                </button>
              ))}
            </div>
          </FadeIn>
        </header>

        {/* Grid cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packagesByBranch[branch].map((pkg, index) => {
            const isFeatured = pkg.badge === "Premium" || pkg.badge === "Terlaris";

            return (
              <FadeIn key={pkg.name} delay={index * 0.1}>
                <Card className={cn(
                  "relative h-full overflow-hidden transition-all duration-500 hover:-translate-y-2",
                  isFeatured 
                    ? "border-primary shadow-2xl shadow-primary/10 scale-[1.02] bg-linear-to-b from-background to-primary/5" 
                    : "border-muted-foreground/20 bg-background/50 hover:shadow-xl hover:border-primary/50"
                )}>
                  {/* Decorative popular ribbon */}
                  {isFeatured && (
                    <div className="absolute top-0 right-0 rounded-bl-3xl bg-primary px-6 py-2 text-xs font-bold text-primary-foreground shadow-md">
                      {pkg.badge}
                    </div>
                  )}

                  <CardContent className="flex h-full flex-col p-8">
                    <div className="flex items-center justify-between gap-2 mb-2">
                       <h3 className="text-xl font-bold">{pkg.label}</h3>
                       {!isFeatured && pkg.badge && (
                         <Badge variant="secondary" className="text-xs">
                           {pkg.badge}
                         </Badge>
                       )}
                    </div>

                    <p className="inline-block rounded-md bg-muted px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground w-fit mb-6">
                      Tanpa FUP · Tidak Terbatas
                    </p>

                    <div className="mb-2">
                      <p className="text-sm font-medium text-muted-foreground">
                        Kecepatan hingga
                      </p>
                      <p className="text-4xl font-extrabold tracking-tight">
                        {pkg.speed}{" "}
                        <span className="text-lg font-semibold text-muted-foreground">Mbps</span>
                      </p>
                    </div>

                    <div className="mb-8">
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        Harga per bulan
                      </p>
                      <p className="text-3xl font-extrabold text-primary">
                        {formatPrice(pkg.price)}
                      </p>
                    </div>

                    <ul className="mb-8 space-y-3 text-sm text-foreground/80 grow">
                      <li className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {branch === "Samarinda" ? (
                          <span>Pemasangan Rp 100.000 <br/><span className="text-xs text-primary font-medium">(Promo s/d Agustus 2025)</span></span>
                        ) : (
                          <span>Instalasi mudah oleh teknisi kami</span>
                        )}
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>Dukungan gangguan teknisi 24/7</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>Cocok untuk {pkg.suitableFor}</span>
                      </li>
                    </ul>

                    <Button 
                      asChild 
                      size="lg"
                      variant={isFeatured ? "default" : "outline"}
                      className={cn(
                        "w-full mt-auto rounded-xl font-bold tracking-wide transition-all h-12",
                        isFeatured && "shadow-lg shadow-primary/25 hover:shadow-primary/40"
                      )}
                    >
                      <a href={getWhatsAppUrl(branch === "Pacitan" ? WHATSAPP_CONFIG.pacitanPhoneNumber : undefined)} target="_blank" rel="noreferrer">
                        Pilih {pkg.speed} Mbps
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
