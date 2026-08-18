export const WHATSAPP_PHONE = "553171749738";

export function getWhatsAppUrl(message = "Olá, gostaria de solicitar um orçamento.") {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppUrl(message = "Olá, gostaria de solicitar um orçamento.") {
  return getWhatsAppUrl(message);
}

export function openWhatsApp(message = "Olá, gostaria de solicitar um orçamento.") {
  if (typeof window === "undefined") {
    return getWhatsAppUrl(message);
  }

  const url = getWhatsAppUrl(message);
  const isIOS =
    /iPad|iPhone|iPod/.test(window.navigator.userAgent) ||
    (window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);

  if (isIOS) {
    window.location.href = url;
    return url;
  }

  window.open(url, "_blank", "noopener,noreferrer");
  return url;
}
