function sendWhatsAppMessage() {
  let phoneNumber = "6281239731812";
  let defaultMessage =
    "Halo kak, kami tertarik dan ingin pesan pasir di *Sampurna Abadi Makmur*. Bisa tolong dibantu?";
  let whatsappLink =
    "https://wa.me/" +
    phoneNumber +
    "?text=" +
    encodeURIComponent(defaultMessage);
  window.open(whatsappLink, "_blank");
}
