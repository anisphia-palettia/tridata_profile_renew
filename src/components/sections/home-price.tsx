import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Package {
  name: string;
  label: string;
  speed: number;
  price: number;
  suitableFor: string;
  badge: string;
}

const packages: Package[] = [
  {
    name: "super-hemat-15",
    label: "Super Hemat 15 Mbps",
    speed: 15,
    price: 100_000,
    suitableFor: "penggunaan harian ringan",
    badge: "Favorit",
  },
  {
    name: "hemat-20",
    label: "Hemat 20 Mbps",
    speed: 20,
    price: 110_000,
    suitableFor: "penggunaan harian ringan",
    badge: "",
  },
  {
    name: "hemat-25",
    label: "Hemat 25 Mbps",
    speed: 25,
    price: 125_000,
    suitableFor: "streaming & WFH",
    badge: "",
  },
  {
    name: "hemat-30",
    label: "Hemat 30 Mbps",
    speed: 30,
    price: 135_000,
    suitableFor: "streaming & WFH",
    badge: "",
  },
  {
    name: "hemat-35",
    label: "Hemat 35 Mbps",
    speed: 35,
    price: 150_000,
    suitableFor: "streaming & WFH",
    badge: "",
  },
  {
    name: "premium-55",
    label: "Premium 55 Mbps",
    speed: 55,
    price: 165_000,
    suitableFor: "rumah dengan banyak perangkat",
    badge: "Premium",
  },
  {
    name: "premium-75",
    label: "Premium 75 Mbps",
    speed: 75,
    price: 210_000,
    suitableFor: "rumah dengan banyak perangkat",
    badge: "Premium",
  },
  {
    name: "premium-90",
    label: "Premium 90 Mbps",
    speed: 90,
    price: 250_000,
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
  return (
    <section id="section-pricing">
      <div className="mx-auto max-w-6xl space-y-10 px-6 py-16">
        {/* Heading */}
        <header className="space-y-3 text-center">
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
        </header>

        {/* Grid cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <Card key={pkg.name}>
              <CardContent className="space-y-4 p-6">
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

                <div>
                  <p className="text-xs text-muted-foreground">
                    Kecepatan hingga
                  </p>
                  <p className="text-3xl font-extrabold">
                    {pkg.speed}{" "}
                    <span className="text-base font-semibold">Mbps</span>
                  </p>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">
                    Harga per bulan
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    {formatPrice(pkg.price)}
                  </p>
                </div>

                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>Instalasi mudah oleh teknisi kami</li>
                  <li>Dukungan gangguan 24/7</li>
                  <li>Cocok untuk {pkg.suitableFor}</li>
                </ul>

                <Button asChild className="w-full">
                  <a
                    href="https://wa.me/6285136506354"
                    target="_blank"
                  >
                    Pilih paket {pkg.speed} Mbps
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
