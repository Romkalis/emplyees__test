export function addFormattedPhone (phone) {
      return `+7 (${phone.slice(0, 3)})-${phone.slice(3, 6)}-${phone.slice(6)}`;
}
