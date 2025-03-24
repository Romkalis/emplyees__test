export function validateNewUserForm(e, s) {
  const {name, value} = e.target


  const targetParent = e.target.closest('label')
  switch (name) {
    case 'name': {
      let name = value.trim()

      if (name.length < 2 || name.split(' ').length < 2) {
        targetParent.classList.add(s.error)
        return 'Поле должно содержать 2 слова'
      }
      targetParent.classList.remove(s.error)
      return ''
    }

    case 'phone': {
      const phoneDigits = value.replace(/\D/g, '');
      const isLength = phoneDigits.length !== 10;

      if (isLength) {
        targetParent.classList.add(s.error)
        return ' Введите номер без (+7), 10 цифр'
      }

      targetParent.classList.remove(s.error)
      return ''
    }

    case 'birthday': {

      if (value.length < 1) {
        targetParent.classList.add(s.error);
        return 'Введите корректную дату';
      }
      const birthDate = new Date(value);
      const today = new Date();

      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      // Проверка границ
      if (age < 18) {
        targetParent.classList.add(s.error);
        return 'Не может быть меньше 18 лет';
      } else if (age > 90) {
        targetParent.classList.add(s.error);
        return 'Не может быть больше 90 лет';
      } else {
        targetParent.classList.remove(s.error);
        return '';
      }
    }

    case 'role': {
      if (value === 'all') {
        targetParent.classList.add(s.error)
        return 'Выберите профессию'

      }
      targetParent.classList.remove(s.error)
      return ''

    }
    default: return ''
  }

}
