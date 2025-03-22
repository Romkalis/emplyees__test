export function convertPhone(str) {
  if (str.startsWith('+7')) {
    str = str.slice(2)
  } else if (str.startsWith('8')) {
    str = str.slice(1)
  } else {
    throw new Error('ConvertPhone: wrong telephone number')
  }

  // chatGPT предложил регулярку return str.replace(/[()\-\s]/g, '');

  return str.split('')
            .filter( el =>
              el !== '('
              && el !== ')'
              && el !== '-'
              && el !== ' ')
            .join('')
}
