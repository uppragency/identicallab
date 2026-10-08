const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/\r\n/g, "\n").trim().slice(0, max);
}

export function isEmail(value: string): boolean {
  return value.length >= 5 && value.length <= 254 && EMAIL_RE.test(value);
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
