import {dateToIso} from "./dateToIso.js";
import {convertPhone} from "./convertPhone.js";


export function sortingCallback( payload ) {

  return (a, b) => {

    if (payload.includes('name')) {
      return payload.includes('up')
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name)
    }

    else if (payload.includes('age')) {
      return payload.includes('up')
        ? new Date(dateToIso(a.birthday)) - new Date(dateToIso(b.birthday))
        : new Date(dateToIso(b.birthday)) - new Date(dateToIso(a.birthday))
    }

    else if (payload.includes( 'phone')) {
      return payload.includes('up')
        ? convertPhone(a.phone) - convertPhone(b.phone)
        : convertPhone(b.phone) - convertPhone(a.phone)
    }
  }

}
