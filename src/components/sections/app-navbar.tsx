"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { scrollToSection } from "@/lib/scroll-to-section";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

interface MenuItem {
  label: string;
  targetId: string;
}

const menus: MenuItem[] = [
  { label: "Home", targetId: "section-home" },
  { label: "Service", targetId: "section-service" },
  { label: "About", targetId: "section-about" },
  { label: "Installation", targetId: "section-installation" },
  { label: "Pricing", targetId: "section-pricing" },
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
          className="text-2xl font-bold tracking-tight cursor-pointer"
        >
          Tridata
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
            <a href="https://wa.me/6285136506354" target="_blank">
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

            <SheetContent side="left" className="w-64">
              <div className="flex items-center justify-between">
                <SheetTitle className="text-xl font-bold">Tridata</SheetTitle>
                <ModeToggle />
              </div>

              <nav className="mt-6 flex flex-col gap-1">
                {menus.map((menu) => (
                  <Button
                    key={menu.label + "-mobile"}
                    variant="ghost"
                    className="justify-start"
                    onClick={() => handleNav(menu.targetId)}
                  >
                    {menu.label}
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
