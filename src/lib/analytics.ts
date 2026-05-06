declare global {
  interface Window {
    plausible?: (
      eventName: string,
      options?: { props?: Record<string, string | number | boolean>; callback?: () => void }
    ) => void;
  }
}

export function track(eventName: string, props?: Record<string, string | number | boolean>) {
  if (typeof window === 'undefined') return;
  if (typeof window.plausible !== 'function') return;
  try {
    window.plausible(eventName, props ? { props } : undefined);
  } catch {
    // Silent fail — Analytics darf nie die UX brechen
  }
}

export const Events = {
  DEMO_MODAL_OPENED: 'Demo Modal Geöffnet',
  DEMO_PRODUKT_GEWAEHLT: 'Demo Produkt Gewählt',
  KONTAKT_FORM_SUBMITTED: 'Kontaktformular Gesendet',
  ANRUFEN_KLICK: 'Anrufen Klick',
  WHATSAPP_KLICK: 'WhatsApp Klick',
} as const;
