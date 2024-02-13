export function formatDate(rawDate: string): string {
  const date = new Date(rawDate);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Mexico_City",
  };

  return date.toLocaleDateString("en-US", options);
}
