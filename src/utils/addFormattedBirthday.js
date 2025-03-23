export function addFormattedBirthday (date) {
  const [year, month, day] = date.split('-');

  return `${day}.${month}.${year}`;
}
