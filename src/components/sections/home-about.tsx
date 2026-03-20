"use client";

import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll-to-section";
import { FadeIn } from "@/components/ui/fade-in";

export default function HomeAbout() {
  return (
    <section id="section-about">
      <div className="mx-auto grid max-w-5xl items-start gap-12 px-6 py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)]">
        {/* Left quote */}
        <aside className="space-y-4">
          <FadeIn direction="right">
            <div className="rounded-2xl border bg-muted/60 p-6 shadow-sm md:p-7">
              <p className="text-lg font-semibold leading-relaxed md:text-xl">
                &quot;Kami di Trisari Data Indonusa berkomitmen menyediakan internet
                cepat, stabil, dan terjangkau untuk menghubungkan Indonesia ke
                dunia digital.&quot;
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Founder · PT Trisari Data Indonusa
              </p>
            </div>
          </FadeIn>
        </aside>

        {/* Right content */}
        <article className="space-y-5">
          <FadeIn delay={0.1} direction="left">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              Tentang
            </p>
            <h2 className="text-3xl font-extrabold md:text-4xl">
              PT Trisari Data
              <br />
              <span className="underline decoration-primary underline-offset-4">
                Indonusa
              </span>
            </h2>

            <div className="h-1 w-12 rounded-full bg-primary mt-4" />
          </FadeIn>

          <FadeIn delay={0.2} direction="left">
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base mt-5">
              Berlokasi di Mojorejo, Kecamatan Taman, Madiun, PT Trisari Data
              Indonusa hadir sebagai penyedia layanan internet yang fokus pada
              koneksi stabil dengan harga yang tetap ramah di kantong.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base mt-2">
              Layanan yang ditawarkan mencakup paket hingga 110 Mbps dengan kuota
              tak terbatas, melayani kebutuhan rumah tangga, pelaku usaha, hingga
              institusi yang mengandalkan internet setiap hari.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base mt-2">
              Dengan memperluas jangkauan ke area yang sebelumnya minim akses,
              Trisari Data Indonusa berupaya mengurangi kesenjangan konektivitas
              dan menjadi mitra terpercaya untuk transformasi digital daerah.
            </p>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.3} direction="left">
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="min-w-[200px] flex-1 rounded-2xl bg-muted/60 px-6 py-4 text-left md:text-center">
                <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                  Kecepatan hingga
                </p>
                <p className="text-xl font-semibold md:text-2xl">110 Mbps</p>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  Paket tanpa batas kuota
                </p>
              </div>
              <div className="min-w-[200px] flex-1 rounded-2xl bg-muted/60 px-6 py-4 text-left md:text-center">
                <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                  Dukungan
                </p>
                <p className="text-xl font-semibold md:text-2xl">24/7</p>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  Tim siap bantu setiap saat
                </p>
              </div>
              <div className="min-w-[200px] flex-1 rounded-2xl bg-muted/60 px-6 py-4 text-left md:text-center">
                <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                  Fokus wilayah
                </p>
                <p className="text-xl font-semibold md:text-2xl">Madiun</p>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  Melayani kota &amp; sekitarnya
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-3">
              <Button onClick={() => scrollToSection("section-pricing")}>
                Lihat paket internet
              </Button>
            </div>
          </FadeIn>
        </article>
      </div>
    </section>
  );
}
