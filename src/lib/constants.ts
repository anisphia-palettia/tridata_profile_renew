export const WHATSAPP_CONFIG = {
  phoneNumber: "628113396171",
  pacitanPhoneNumber: "6282141975226",
  mitraPhoneNumber: "6281331956171", // +62 813-3195-6171
  message: "Halo Admin, saya tertarik untuk melakukan pemesanan. Berikut adalah detail informasi saya:\n\nNama: \nAlamat: \nNo Telp: \n\nMohon informasi selanjutnya mengenai proses pembayaran dan pengiriman. Terima kasih!",
  mitraMessage: "Halo Admin, saya tertarik untuk menjadi Mitra Tridata di wilayah Madiun dan sekitarnya. Mohon informasi lebih lanjut tentang syarat dan ketentuannya. Terima kasih!",
};

export const getWhatsAppUrl = (customPhoneNumber?: string, customMessage?: string) => {
  const targetNumber = customPhoneNumber || WHATSAPP_CONFIG.phoneNumber;
  const message = customMessage || WHATSAPP_CONFIG.message;
  return `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
};
