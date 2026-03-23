import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WifiOff, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center text-center px-6 overflow-hidden bg-background">
      {/* Decorative Gradients */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="relative z-10 space-y-8 flex flex-col items-center max-w-2xl mt-12 mb-24">
        {/* Themed Icon */}
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary shadow-inner border border-primary/20 animate-pulse">
          <WifiOff className="h-12 w-12" />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-7xl font-extrabold tracking-tight md:text-9xl bg-linear-to-br from-foreground to-foreground/50 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground">
            Sinyal Hilang!
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
            Sepertinya Anda tersesat. Halaman yang Anda cari sudah dihapus atau tidak pernah ada di server kami.
          </p>
        </div>
        
        <div className="pt-8">
          <Button asChild size="lg" className="rounded-full shadow-lg transition-transform hover:-translate-y-1 hover:shadow-primary/25 h-14 px-8 text-base font-semibold group border border-primary/20">
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-5 w-5 transition-transform group-hover:scale-110" />
              Kembali ke Beranda
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
