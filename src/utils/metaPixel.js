export const META_DATASET_ID = '1463655781460579';
export const META_CAPI_TOKEN =
  'EAARcFJu7ARcBTHMul9o9U2ZAgAuTntu4XjcQxilrzWrCaGbRDq5cMG4DYyTKwZBMmBCPNPcModtMFttnYnWHN9zzDPaG8tsUtPbB021AukAeUa8HpKJYygfHqxnuMK3P0LMoqrkLb01ZAaHkpTN3wlAU0vXFfzcp6yjCMS2LuxRzUjmwFLLvxZCrdyNyPQL4qAZDZD';

// ─────────────────────────────────────────────
// SHA-256 Hashing (Web Crypto API)
// ─────────────────────────────────────────────
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

// ─────────────────────────────────────────────
// Phone Normalizer (India: 91XXXXXXXXXX)
// ─────────────────────────────────────────────
function normalizePhone(phone) {
  if (!phone) return '';
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10) return `91${digits}`;
  return digits;
}

// ─────────────────────────────────────────────
// Auto-capture FBC (Facebook Click ID)
// Reads _fbc cookie set by Meta Pixel on ad click
// ─────────────────────────────────────────────
function getFbc() {
  try {
    // Try cookie first
    const match = document.cookie.match(/_fbc=([^;]+)/);
    if (match) return match[1];

    // Fallback: build fbc from fbclid URL param (if ad click just happened)
    const urlParams = new URLSearchParams(window.location.search);
    const fbclid = urlParams.get('fbclid');
    if (fbclid) {
      const ts = Math.floor(Date.now() / 1000);
      return `fb.1.${ts}.${fbclid}`;
    }
  } catch (e) {
    // ignore
  }
  return null;
}

// ─────────────────────────────────────────────
// Auto-capture FBP (Facebook Browser ID)
// Reads _fbp cookie set by Meta Pixel on page load
// ─────────────────────────────────────────────
function getFbp() {
  try {
    const match = document.cookie.match(/_fbp=([^;]+)/);
    if (match) return match[1];
  } catch (e) {
    // ignore
  }
  return null;
}

// ─────────────────────────────────────────────
// Fetch Client IP Address via public API
// (browser cannot get real IP directly)
// ─────────────────────────────────────────────
async function getClientIp() {
  try {
    const res = await fetch('https://api.ipify.org?format=json', {
      signal: AbortSignal.timeout(3000),
    });
    if (res.ok) {
      const json = await res.json();
      return json.ip || null;
    }
  } catch (e) {
    // Network or timeout — skip silently
  }
  return null;
}

// ─────────────────────────────────────────────
// Core Event Tracker — Pixel + CAPI with Dedup
// ─────────────────────────────────────────────
export async function trackMetaEvent(eventName, customData = {}, rawUserData = {}) {
  const eventId = `evt_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '';

  // 1. Browser Pixel (client-side) — dedup via eventID
  if (typeof window !== 'undefined' && window.fbq) {
    try {
      window.fbq('track', eventName, customData, { eventID: eventId });
    } catch (err) {
      console.warn('fbq track error:', err);
    }
  }

  // 2. Meta Conversions API (server-side) — dedup via same eventID
  try {
    // Auto-capture signals (no extra form fields needed)
    const fbc = getFbc();
    const fbp = getFbp();
    const clientIp = await getClientIp();

    // Build user_data with all available signals
    const userData = {
      client_user_agent: userAgent,
    };

    // FBC — improves match quality by +33%
    if (fbc) userData.fbc = fbc;

    // FBP — improves match quality by +25%
    if (fbp) userData.fbp = fbp;

    // Client IP — improves match quality by +33%
    if (clientIp) userData.client_ip_address = clientIp;

    // Hashed Email — improves match quality by +35%
    if (rawUserData.email) {
      const hashedEmail = await hashValue(rawUserData.email);
      if (hashedEmail) userData.em = [hashedEmail];
    }

    // Hashed Phone — improves match quality significantly
    if (rawUserData.phone) {
      const cleanPhone = normalizePhone(rawUserData.phone);
      const hashedPhone = await hashValue(cleanPhone);
      if (hashedPhone) userData.ph = [hashedPhone];
    }

    // Hashed First + Last Name
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
          event_id: eventId,              // Deduplication key (matches fbq eventID above)
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
      // Silent fail — background fire
    });
  } catch (err) {
    console.warn('Meta CAPI error:', err);
  }

  return eventId;
}

// ─────────────────────────────────────────────
// Lead Event — form submit
// ─────────────────────────────────────────────
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

// ─────────────────────────────────────────────
// CRM Status → Meta Event Mapping
// New Lead → Lead | Qualified → QualifiedLead | Purchase → Purchase
// Junk/Not Qualified → DO NOT send
// ─────────────────────────────────────────────
export async function trackCrmStatusChange(crmStatus, leadData = {}) {
  const CRM_EVENT_MAP = {
    'new_lead':   'Lead',
    'qualified':  'QualifiedLead',
    'purchase':   'Purchase',
    // 'junk'     → intentionally not mapped
    // 'not_qualified' → intentionally not mapped
  };

  const eventName = CRM_EVENT_MAP[crmStatus?.toLowerCase()];
  if (!eventName) {
    console.log(`[Meta CAPI] CRM status "${crmStatus}" — no event sent (intentional).`);
    return null;
  }

  return trackMetaEvent(
    eventName,
    {
      content_name: 'D2C Strategy Call',
      content_category: 'Consultation',
      currency: 'INR',
      value: leadData.value || 0,
    },
    {
      name: leadData.name || '',
      email: leadData.email || '',
      phone: leadData.phone || '',
    }
  );
}

// ─────────────────────────────────────────────
// CTA Click Tracker (Contact intent)
// ─────────────────────────────────────────────
export function trackMetaCtaClick(buttonName = 'Book Strategy Call') {
  if (typeof window !== 'undefined' && window.fbq) {
    try {
      window.fbq('track', 'Contact', { content_name: buttonName });
    } catch (e) {
      // Ignore
    }
  }
}
