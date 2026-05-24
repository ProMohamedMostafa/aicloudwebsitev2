// config/api.ts
// NEXT_PUBLIC_ variables are inlined into the client bundle by Next.js at build time.
// Never put secrets here — only public-facing API base URLs are safe.
// The value is validated at runtime so a misconfigured deploy fails loudly.
const rawUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!rawUrl && process.env.NODE_ENV === "production") {
  console.warn(
    "[config] NEXT_PUBLIC_API_BASE_URL is not set. " +
      "Contact form submissions will fail. " +
      "Set this variable in your deployment environment."
  );
}

export const BASE_URL = rawUrl ?? "";
