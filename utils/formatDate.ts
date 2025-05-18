export function formatDate(currentDate: string) {
  const date = new Date(currentDate);

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
