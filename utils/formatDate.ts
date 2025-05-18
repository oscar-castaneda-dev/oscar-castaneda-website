export function formatDate(rawDate: string) {
  const date = new Date(rawDate);

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
