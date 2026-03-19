import AppNavbar from "@/components/sections/app-navbar";
import HomeHero from "@/components/sections/home-hero";
import HomeService from "@/components/sections/home-service";
import HomeAbout from "@/components/sections/home-about";
import HomeInstallation from "@/components/sections/home-installation";
import HomePrice from "@/components/sections/home-price";
import HomeFooter from "@/components/sections/home-footer";

export default function AppPage() {
  return (
    <main>
      <AppNavbar />
      <HomeHero />
      <HomeService />
      <HomeAbout />
      <HomeInstallation />
      <HomePrice />
      <HomeFooter />
    </main>
  );
}
