// Class merger helper utility
// Simplifies combining class strings conditionally

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function isPlaceholderLink(url) {
  if (!url) return true;
  const normalized = url.trim().toLowerCase();
  return (
    normalized === "#" ||
    normalized === "" ||
    normalized.includes("coming soon") ||
    normalized.includes("example.com") ||
    normalized.includes("repo link") ||
    normalized.includes("play store link")
  );
}
