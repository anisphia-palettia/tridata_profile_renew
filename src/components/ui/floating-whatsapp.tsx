import Image from "next/image";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/628113396171"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl dark:bg-[#25D366] dark:text-white"
      aria-label="Hubungi kami via WhatsApp"
    >
      <Image src="/whatsapp.png" alt="WhatsApp" width={50} height={50}/>
    </a>
  );
}
