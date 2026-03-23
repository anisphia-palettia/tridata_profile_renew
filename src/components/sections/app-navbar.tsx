"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { scrollToSection } from "@/lib/scroll-to-section";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { getWhatsAppUrl } from "@/lib/constants";

interface MenuItem {
  label: string;
  targetId: string;
}

const menus: MenuItem[] = [
  { label: "Beranda", targetId: "section-home" },
  { label: "Layanan", targetId: "section-service" },
  { label: "Tentang", targetId: "section-about" },
  { label: "Pemasangan", targetId: "section-installation" },
  { label: "Paket Internet", targetId: "section-pricing" },
];

export default function AppNavbar() {
  const [open, setOpen] = useState(false);

  const handleNav = (targetId: string) => {
    setOpen(false);
    // small delay so the sheet closes before scroll
    setTimeout(() => scrollToSection(targetId), 150);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Brand */}
        <button
          onClick={() => scrollToSection("section-home")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Image src="/logo.jpg" alt="Logo Tridata" width={32} height={32} className="rounded object-cover" />
          <span className="text-xl font-bold tracking-tight">Tridata</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-1 lg:flex">
          {menus.map((menu) => (
            <Button
              key={menu.label}
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(menu.targetId)}
            >
              {menu.label}
            </Button>
          ))}
          <Button asChild size="sm" className="ml-2">
            <a href={getWhatsAppUrl()} target="_blank">
              Hubungi
            </a>
          </Button>
          <div className="ml-2">
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Button */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-[85vw] sm:w-[350px] p-6 flex flex-col">
              <SheetHeader className="text-left mt-2">
                <SheetTitle className="flex items-center gap-3 text-2xl font-bold">
                  <Image src="/logo.jpg" alt="Logo Tridata" width={32} height={32} className="rounded object-cover" />
                  Tridata
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Navigasi menu utama
                </SheetDescription>
              </SheetHeader>

              <nav className="mt-8 flex flex-col gap-2 flex-1">
                {menus.map((menu) => (
                  <Button
                    key={menu.label + "-mobile"}
                    variant="ghost"
                    size="lg"
                    className="justify-start text-base font-medium"
                    onClick={() => handleNav(menu.targetId)}
                  >
                    {menu.label}
                  </Button>
                ))}
              </nav>

              <div className="flex flex-col gap-6 border-t pt-6 mt-auto">
                <div className="flex items-center justify-between px-2">
                  <span className="text-sm font-medium text-muted-foreground">Mode Tampilan</span>
                  <ModeToggle />
                </div>
                <Button asChild size="lg" className="w-full h-14 bg-primary text-primary-foreground hover:opacity-90 rounded-xl">
                  <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                    Hubungi via WhatsApp
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
