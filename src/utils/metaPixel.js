export const META_DATASET_ID = '1463655781460579';
export const META_CAPI_TOKEN =
  'EAARcFJu7ARcBTHMul9o9U2ZAgAuTntu4XjcQxilrzWrCaGbRDq5cMG4DYyTKwZBMmBCPNPcModtMFttnYnWHN9zzDPaG8tsUtPbB021AukAeUa8HpKJYygfHqxnuMK3P0LMoqrkLb01ZAaHkpTN3wlAU0vXFfzcp6yjCMS2LuxRzUjmwFLLvxZCrdyNyPQL4qAZDZD';

/**
 * SHA-256 hashing using Web Crypto API for client-side Conversions API matching.
 */
async function hashValue(str) {
  if (!str) return null;
  try {
    const cleaned = str.trim().toLowerCase();
    if (typeof window !== 'undefined' && window.crypto && window.crypto.subtle) {
      const encoder = new TextEncoder();
      const data = encoder.encode(cleaned);
      const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
    }
  } catch (e) {
    console.warn('Meta hashing failed:', e);
  }
  return null;
}

/**
 * Normalizes phone number to numbers only (adds India country code 91 if 10 digits).
 */
function normalizePhone(phone) {
  if (!phone) return '';
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10) return `91${digits}`;
  return digits;
}

/**
 * Track standard or custom events with both Browser Pixel and Meta Conversions API (CAPI).
 * Deduplication is handled via unique event_id.
 */
export async function trackMetaEvent(eventName, customData = {}, rawUserData = {}) {
  const eventId = `evt_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  // 1. Client-Side Browser Pixel (fbq)
  if (typeof window !== 'undefined' && window.fbq) {
    try {
      window.fbq('track', eventName, customData, { eventID: eventId });
    } catch (err) {
      console.warn('fbq track error:', err);
    }
  }

  // 2. Server-side / Direct Meta Conversions API (CAPI)
  try {
    const userData = {
      client_user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
    };

    if (rawUserData.email) {
      const hashedEmail = await hashValue(rawUserData.email);
      if (hashedEmail) userData.em = [hashedEmail];
    }

    if (rawUserData.phone) {
      const cleanPhone = normalizePhone(rawUserData.phone);
      const hashedPhone = await hashValue(cleanPhone);
      if (hashedPhone) userData.ph = [hashedPhone];
    }

    if (rawUserData.name) {
      const nameParts = rawUserData.name.trim().split(/\s+/);
      const firstName = nameParts[0];
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
      if (firstName) {
        const hashedFn = await hashValue(firstName);
        if (hashedFn) userData.fn = [hashedFn];
      }
      if (lastName) {
        const hashedLn = await hashValue(lastName);
        if (hashedLn) userData.ln = [hashedLn];
      }
    }

    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          event_source_url: currentUrl,
          action_source: 'website',
          user_data: userData,
          custom_data: customData,
        },
      ],
    };

    const endpoint = `https://graph.facebook.com/v19.0/${META_DATASET_ID}/events?access_token=${META_CAPI_TOKEN}`;

    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {
      // Background network fallback, ignore errors silently
    });
  } catch (err) {
    console.warn('Meta CAPI error:', err);
  }

  return eventId;
}

/**
 * Tracks a completed Lead form submission across Pixel + CAPI.
 */
export async function trackMetaLead(formData) {
  return trackMetaEvent(
    'Lead',
    {
      content_name: 'D2C Strategy Call Application',
      content_category: 'Consultation',
      currency: 'INR',
      monthly_revenue: formData.revenue || '',
      monthly_ad_spend: formData.adSpend || '',
      bottleneck: formData.problem || '',
      website: formData.website || '',
    },
    {
      name: formData.name || '',
      email: formData.email || '',
      phone: formData.phone || '',
    }
  );
}

/**
 * Tracks CTA button clicks (Contact/Schedule intent).
 */
export function trackMetaCtaClick(buttonName = 'Book Strategy Call') {
  if (typeof window !== 'undefined' && window.fbq) {
    try {
      window.fbq('track', 'Contact', { content_name: buttonName });
    } catch (e) {
      // Ignore
    }
  }
}
