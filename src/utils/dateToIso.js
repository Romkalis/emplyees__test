
export function dateToIso(str) {
  const [day, month, year] = str.split('.')
  return [year, month, day].join('.')
}
