import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { MessageSquare, Map, PlugZap, Headset } from "lucide-react";

interface Step {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Ajukan Pemasangan",
    description:
      "Hubungi tim kami via WhatsApp. Siapkan data dasar seperti nama dan lokasi alamat Anda.",
  },
  {
    number: 2,
    icon: <Map className="h-8 w-8" />,
    title: "Survey Lokasi",
    description:
      "Teknisi kami terjun ke lokasi untuk memastikan jalur kabel dan jangkauan tiang terdekat.",
  },
  {
    number: 3,
    icon: <PlugZap className="h-8 w-8" />,
    title: "Proses Instalasi",
    description:
      "Tim memasang perangkat modem. Koneksi internet Anda akan langsung aktif hari itu juga.",
  },
  {
    number: 4,
    icon: <Headset className="h-8 w-8" />,
    title: "Dukungan Gratis",
    description:
      "Nikmati internetan tanpa batas dengan tim dukungan yang siap bantu setiap saat.",
  },
];

export default function HomeInstallation() {
  return (
    <section
      id="section-installation"
      className="relative overflow-hidden border-t bg-muted/40"
    >
      {/* Decorative background lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        {/* Heading */}
        <header className="mx-auto max-w-3xl space-y-4 text-center mb-16 lg:mb-24">
          <FadeIn>
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Cara Pemasangan
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              Langkah Mudah Memasang <br className="hidden md:block" /> Layanan
              Internet
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Tidak perlu repot datang ke kantor. Semua bisa dikoordinasikan
              secara online, dan teknisi kami siap meluncur ke lokasi Anda.
            </p>
          </FadeIn>
        </header>

        {/* Steps grid */}
        <div className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Subtle connecting line for desktop */}
          <div className="absolute top-[4.5rem] left-[15%] hidden w-[70%] border-t-2 border-dashed border-primary/30 lg:block" />

          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.15}>
              <Card className="relative h-full overflow-visible border-none bg-transparent shadow-none">
                <CardContent className="group flex flex-col items-center text-center p-0">
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-background shadow-xl border border-primary/20 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-primary/20 group-hover:border-primary/50">
                    <div className="text-primary transition-transform duration-500 group-hover:scale-110">
                      {step.icon}
                    </div>
                    <div className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground shadow-md">
                      {step.number}
                    </div>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <h3 className="mb-3 text-xl font-bold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground p-2">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
