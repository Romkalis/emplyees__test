import s from "../components/core/NewUser/NewUser.module.css";

export function validateNewUserForm (e) {
  const {name, value} = e.target

  const targetParent = e.target.closest('label')

  switch (name) {
    case 'name': {
      let name = value.trim()

      if(name.length < 2 || name.split(' ').length < 2) {
        targetParent.classList.add(s.error)
        return false
      }
        targetParent.classList.remove(s.error)
        return true
    }

    case 'phone': {
      const phoneDigits = value.replace(/\D/g, '');
      const isLength = phoneDigits.length !== 10;

      if(isLength) {
        targetParent.classList.add(s.error)
        return false
      }

      targetParent.classList.remove(s.error)
      return true
    }
    case 'birthday': {
      if(value.length < 1) {
        targetParent.classList.add(s.error)
        return false
      }
      targetParent.classList.remove(s.error)
      return true
    }
    case 'role': {
      if(value === 'all') {
        targetParent.classList.add(s.error)
        return false
      }
      targetParent.classList.remove(s.error)
      return true
    }
    default: console.warn('Wrong case')
  }

}
