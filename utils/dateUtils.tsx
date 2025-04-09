export function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-');
  const date = new Date(`${year}-${month}-${day}T00:00:00`);
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const weekday = weekdays[date.getDay()];
  return `${weekday}, ${month}/${day}`;
}
