import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import { Globe2, Activity, CreditCard, Headset, ShieldCheck, TrendingUp } from "lucide-react";

interface ServiceItem {
  icon: React.ReactNode;
  badge: string;
  badgeVariant: "default" | "secondary" | "outline" | "destructive";
  title: string;
  description: string;
  colorClass: string;
}

const services: ServiceItem[] = [
  {
    icon: <Globe2 className="h-6 w-6" />,
    badge: "Jangkauan",
    badgeVariant: "outline",
    title: "Jangkauan fleksibel",
    description:
      "Tersedia di area perkotaan hingga lingkungan padat penduduk, dengan opsi paket yang bisa disesuaikan kebutuhan lokasi Anda.",
    colorClass: "text-blue-500 bg-blue-500/10",
  },
  {
    icon: <Activity className="h-6 w-6" />,
    badge: "Performa",
    badgeVariant: "outline",
    title: "Stabil untuk semua aktivitas",
    description:
      "Streaming, meeting, dan gaming tetap lancar berkat latency yang rendah dan monitoring jaringan yang berjalan sepanjang waktu.",
    colorClass: "text-emerald-500 bg-emerald-500/10",
  },
  {
    icon: <CreditCard className="h-6 w-6" />,
    badge: "Harga",
    badgeVariant: "outline",
    title: "Paket transparan & terjangkau",
    description:
      "Struktur harga jelas tanpa biaya tersembunyi, sehingga mudah diprediksi dan aman untuk perencanaan anggaran bulanan.",
    colorClass: "text-orange-500 bg-orange-500/10",
  },
  {
    icon: <Headset className="h-6 w-6" />,
    badge: "Dukungan",
    badgeVariant: "outline",
    title: "Bantuan 24/7 multi-channel",
    description:
      "Tim siap merespon lewat WhatsApp, telepon, dan tiket sistem kapan pun terjadi gangguan pada koneksi Anda.",
    colorClass: "text-purple-500 bg-purple-500/10",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    badge: "Keamanan",
    badgeVariant: "outline",
    title: "Keamanan terpantau",
    description:
      "Sistem proteksi terhadap serangan umum dan akses tidak sah untuk menjaga jaringan internal Anda tetap aman.",
    colorClass: "text-rose-500 bg-rose-500/10",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    badge: "Pertumbuhan",
    badgeVariant: "outline",
    title: "Siap tumbuh bersama",
    description:
      "Upgrade bandwidth dan layanan tambahan bisa dilakukan tanpa migrasi rumit saat kebutuhan koneksi Anda meningkat.",
    colorClass: "text-indigo-500 bg-indigo-500/10",
  },
];

export default function HomeService() {
  return (
    <section id="section-service" className="relative min-h-screen border-b bg-muted/20">
      {/* Decorative background blob */}
      <div className="pointer-events-none absolute left-0 top-0 hidden h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px] lg:block" />

      <div className="relative mx-auto max-w-6xl space-y-16 px-6 py-32">
        {/* Heading */}
        <header className="space-y-4 text-center">
          <FadeIn>
            <div className="mx-auto mb-4 inline-flex items-center rounded-full border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary shadow-sm">
              Layanan Unggulan
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              Internet yang{" "}
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                lebih siap
              </span>{" "}
              <br className="hidden md:block"/> untuk aktivitas Anda
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Dirancang untuk bisnis kecil hingga pengguna rumahan yang butuh
              koneksi cepat, stabil, dan dukungan yang responsif setiap saat.
            </p>
          </FadeIn>
        </header>

        {/* Feature cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <Card className="group relative h-full overflow-hidden border-muted-foreground/10 bg-background/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <CardContent className="relative space-y-5 p-8">
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${service.colorClass} shadow-inner transition-transform group-hover:scale-110`}>
                      {service.icon}
                    </span>
                    <Badge variant={service.badgeVariant} className="bg-background shadow-xs text-[0.7rem]">
                      {service.badge}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold tracking-tight transition-colors group-hover:text-primary">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
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
