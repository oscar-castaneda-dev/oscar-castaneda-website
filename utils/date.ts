export function formatDate(rawDate: string): string {
  const date = new Date(rawDate);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  };

  return date.toLocaleDateString("en-US", options);
}
