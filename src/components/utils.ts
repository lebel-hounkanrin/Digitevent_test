export const formatDate = (date: Date): string => {
  const pad = (n) => n.toString().padStart(2, '0');

  const day = pad(date.getDate());
  const month = pad(date.getMonth() + 1);
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());

  return `${day}-${month}:${hours}:${minutes}`;
}
