"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/fade-in";

interface Package {
  name: string;
  label: string;
  speed: number;
  priceMadiun: number;
  priceSamarinda: number;
  suitableFor: string;
  badge: string;
}

const packages: Package[] = [
  {
    name: "super-hemat-35",
    label: "Super Hemat 35 Mbps",
    speed: 35,
    priceMadiun: 100_000,
    priceSamarinda: 125_000,
    suitableFor: "penggunaan harian ringan",
    badge: "New!",
  },
  {
    name: "hemat-40",
    label: "Hemat 40 Mbps",
    speed: 40,
    priceMadiun: 110_000,
    priceSamarinda: 135_000,
    suitableFor: "penggunaan harian ringan",
    badge: "",
  },
  {
    name: "hemat-45",
    label: "Hemat 45 Mbps",
    speed: 45,
    priceMadiun: 125_000,
    priceSamarinda: 150_000,
    suitableFor: "streaming & WFH",
    badge: "",
  },
  {
    name: "hemat-50",
    label: "Hemat 50 Mbps",
    speed: 50,
    priceMadiun: 135_000,
    priceSamarinda: 165_000,
    suitableFor: "streaming & WFH",
    badge: "",
  },
  {
    name: "hemat-55",
    label: "Hemat 55 Mbps",
    speed: 55,
    priceMadiun: 150_000,
    priceSamarinda: 185_000,
    suitableFor: "streaming & WFH",
    badge: "",
  },
  {
    name: "premium-75",
    label: "Premium 75 Mbps",
    speed: 75,
    priceMadiun: 165_000,
    priceSamarinda: 210_000,
    suitableFor: "rumah dengan banyak perangkat",
    badge: "Premium",
  },
  {
    name: "premium-95",
    label: "Premium 95 Mbps",
    speed: 95,
    priceMadiun: 210_000,
    priceSamarinda: 260_000,
    suitableFor: "rumah dengan banyak perangkat",
    badge: "Premium",
  },
  {
    name: "premium-110",
    label: "Premium 110 Mbps",
    speed: 110,
    priceMadiun: 250_000,
    priceSamarinda: 310_000,
    suitableFor: "rumah dengan banyak perangkat",
    badge: "Premium",
  },
];

function formatPrice(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function HomePrice() {
  const [branch, setBranch] = useState<"Madiun" | "Samarinda">("Madiun");

  return (
    <section id="section-pricing">
      <div className="mx-auto max-w-6xl space-y-10 px-6 py-16">
        {/* Heading */}
        <header className="space-y-6 text-center">
          <FadeIn>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                Paket internet
              </p>
              <h2 className="text-3xl font-extrabold md:text-4xl">
                Pilih paket sesuai kebutuhan Anda
              </h2>
              <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
                Semua paket Non FUP dengan kuota tanpa batas dan dukungan teknis
                24/7.
              </p>
            </div>
          </FadeIn>

          {/* Branch Toggle */}
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center justify-center rounded-lg bg-muted p-1">
              <button
                onClick={() => setBranch("Madiun")}
                className={cn(
                  "inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-2.5 text-sm font-medium transition-all",
                  branch === "Madiun" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:bg-muted/50"
                )}
              >
                Madiun
              </button>
              <button
                onClick={() => setBranch("Samarinda")}
                className={cn(
                  "inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-2.5 text-sm font-medium transition-all",
                  branch === "Samarinda" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:bg-muted/50"
                )}
              >
                Samarinda
              </button>
            </div>
          </FadeIn>
        </header>

        {/* Grid cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg, index) => (
            <FadeIn key={pkg.name} delay={index * 0.1}>
              <Card className="h-full">
                <CardContent className="space-y-4 p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold">{pkg.label}</h3>
                    {pkg.badge && (
                      <Badge variant="default" className="text-xs">
                        {pkg.badge}
                      </Badge>
                    )}
                  </div>

                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    Non FUP · Unlimited
                  </p>

                  <div className="mt-2">
                    <p className="text-xs text-muted-foreground">
                      Kecepatan hingga
                    </p>
                    <p className="text-3xl font-extrabold">
                      {pkg.speed}{" "}
                      <span className="text-base font-semibold">Mbps</span>
                    </p>
                  </div>

                  <div className="mt-2">
                    <p className="text-xs text-muted-foreground">
                      Harga per bulan ({branch})
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      {formatPrice(branch === "Madiun" ? pkg.priceMadiun : pkg.priceSamarinda)}
                    </p>
                  </div>

                  <ul className="space-y-1 text-xs text-muted-foreground mt-4 mb-6 grow">
                    <li>✓ Instalasi mudah oleh teknisi kami</li>
                    <li>✓ Dukungan gangguan 24/7</li>
                    <li>✓ Cocok untuk {pkg.suitableFor}</li>
                  </ul>

                  <Button asChild className="w-full mt-auto">
                    <a
                      href="https://wa.me/6285136506354"
                      target="_blank"
                    >
                      Pilih paket {pkg.speed} Mbps
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
