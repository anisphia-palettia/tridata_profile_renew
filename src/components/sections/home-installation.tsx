import { Card, CardContent } from "@/components/ui/card";

interface Step {
  number: number;
  icon: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    icon: "💬",
    title: "Request pemasangan",
    description:
      "Hubungi tim kami untuk mengajukan permintaan pemasangan. Data dasar seperti nama, alamat, dan kontak akan dicatat.",
  },
  {
    number: 2,
    icon: "🔍",
    title: "Survey lokasi",
    description:
      "Teknisi melakukan survey untuk menentukan jalur kabel, kebutuhan perangkat, dan estimasi biaya instalasi jika diperlukan.",
  },
  {
    number: 3,
    icon: "🛠️",
    title: "Pemasangan modem",
    description:
      "Setelah ada kesepakatan, tim akan melakukan instalasi modem dan konfigurasi jaringan hingga koneksi siap digunakan.",
  },
  {
    number: 4,
    icon: "💬",
    title: "Gratis support",
    description:
      "Selama berlangganan, Anda mendapatkan dukungan teknis 24 jam untuk membantu ketika terjadi gangguan layanan.",
  },
];

export default function HomeInstallation() {
  return (
    <section id="section-installation">
      <div className="mx-auto max-w-6xl space-y-10 px-6 py-16">
        {/* Heading */}
        <header className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            Cara order pemasangan
          </p>
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Langkah mudah memasang layanan internet
          </h2>
          <div className="mx-auto h-1 w-14 rounded-full bg-primary" />
        </header>

        {/* Steps grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
                <div className="flex items-center justify-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground">
                    {step.number}
                  </span>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
