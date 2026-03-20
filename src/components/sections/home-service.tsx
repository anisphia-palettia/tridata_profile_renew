import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";

interface ServiceItem {
  icon: string;
  badge: string;
  badgeVariant: "default" | "secondary" | "outline" | "destructive";
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: "🌐",
    badge: "Coverage",
    badgeVariant: "outline",
    title: "Jangkauan fleksibel",
    description:
      "Tersedia di area perkotaan hingga lingkungan padat penduduk, dengan opsi paket yang bisa disesuaikan kebutuhan lokasi Anda.",
  },
  {
    icon: "📶",
    badge: "Performance",
    badgeVariant: "outline",
    title: "Stabil untuk semua aktivitas",
    description:
      "Streaming, meeting, dan gaming tetap lancar berkat latency yang rendah dan monitoring jaringan yang berjalan sepanjang waktu.",
  },
  {
    icon: "💰",
    badge: "Value",
    badgeVariant: "outline",
    title: "Paket transparan & terjangkau",
    description:
      "Struktur harga jelas tanpa biaya tersembunyi, sehingga mudah diprediksi dan aman untuk perencanaan anggaran bulanan.",
  },
  {
    icon: "💬",
    badge: "Support",
    badgeVariant: "outline",
    title: "Bantuan 24/7 multi-channel",
    description:
      "Tim siap merespon lewat WhatsApp, telepon, dan tiket sistem kapan pun terjadi gangguan pada koneksi Anda.",
  },
  {
    icon: "🔒",
    badge: "Security",
    badgeVariant: "outline",
    title: "Keamanan terpantau",
    description:
      "Sistem proteksi terhadap serangan umum dan akses tidak sah untuk menjaga jaringan internal Anda tetap aman.",
  },
  {
    icon: "📈",
    badge: "Growth",
    badgeVariant: "outline",
    title: "Siap tumbuh bersama",
    description:
      "Upgrade bandwidth dan layanan tambahan bisa dilakukan tanpa migrasi rumit saat kebutuhan koneksi Anda meningkat.",
  },
];

export default function HomeService() {
  return (
    <section id="section-service" className="min-h-screen">
      <div className="mx-auto max-w-6xl space-y-12 px-6 py-32">
        {/* Heading */}
        <header className="space-y-4 text-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              Service
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl font-extrabold md:text-5xl">
              Internet yang{" "}
              <span className="underline decoration-primary underline-offset-4">
                lebih siap
              </span>{" "}
              untuk aktivitas Anda
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
              Dirancang untuk bisnis kecil hingga pengguna rumahan yang butuh
              koneksi cepat, stabil, dan dukungan yang responsif setiap saat.
            </p>
          </FadeIn>
        </header>

        {/* Feature cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <Card className="h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="space-y-3 p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-xl">
                      {service.icon}
                    </span>
                    <Badge variant={service.badgeVariant} className="text-[0.7rem]">
                      {service.badge}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
