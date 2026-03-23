export const WHATSAPP_CONFIG = {
  phoneNumber: "628113396171",
  message: "Halo Admin, saya tertarik untuk melakukan pemesanan. Berikut adalah detail informasi saya:\n\nNama: \nAlamat: \nNo Telp: \n\nMohon informasi selanjutnya mengenai proses pembayaran dan pengiriman. Terima kasih!",
};

export const getWhatsAppUrl = () => {
  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(WHATSAPP_CONFIG.message)}`;
};
