
import {useDispatch} from "react-redux";
import {addUser} from "../../../store/employeesSlice.js";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {validateNewUserForm} from "../../../utils/validateNewUserForm.js";
import s from "./NewUser.module.css"
import {addFormattedPhone} from "../../../utils/addFormattedPhone.js";
import {addFormattedBirthday} from "../../../utils/addFormattedBirthday.js";




export function NewUser() {

  const [user, setUser] = useState({})
  const [isError, setIsError] = useState({
    name: '',
    phone: '',
    birthday: '',
    role: ''
  });

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleInput = (e) => {
    const {name, value} = e.target
    setIsError( prev => ({...prev, [name]: validateNewUserForm(e, s)}))
    setUser(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newUser = {
      ...user,
      id: user.phone + Date.now(),
      phone: addFormattedPhone(user.phone),
      birthday: addFormattedBirthday(user.birthday),
      isArchive: false
    }

    dispatch(addUser(newUser))
    navigate('/')
  }

  return (
    <>
      <h1 className={s.newUser__title}>Данные нового работника</h1>

      <form onSubmit={handleSubmit} action="" className={s.newUser}>

        <label className={s.newUser__label}>
          <span className={s.newUser__labelTitle}>
            {isError.name === '' ? 'Введите имя и фамилию' : isError.name}
          </span>
          <input onChange={handleInput}
                 onBlur={validateNewUserForm}
                 type="text"
                 className={s.newUser__input}
                 placeholder={"Иван Иванов"}
                 required={true}
                 name={"name"}/>
        </label>

        <label className={s.newUser__label}><span className={s.newUser__labelTitle}></span>
          <span className={s.newUser__labelTitle}>
            {isError.phone === '' ? 'Введите телефон' : isError.phone}
          </span>
          <div className={s.newUser__telWrapper}>
            <input onChange={handleInput}
                   onBlur={validateNewUserForm}
                   type="number"
                   className={`${s.newUser__input} ${s.newUser__tel}`}
                   placeholder={"922-111-22-33"}
                   required={true}
                   name={"phone"}
                   maxLength={10}/>
          </div>
        </label>


        <label className={s.newUser__label}>
          <span className={s.newUser__labelTitle}>
            {isError.birthday === '' ? 'Введите дату рождения' : isError.birthday}
          </span>
          <input
            onChange={handleInput}
            onBlur={validateNewUserForm}
            type="date"
            className={s.newUser__input}
            required={true}
            name={"birthday"}/>
        </label>

        <label className={s.newUser__label}>
          <span className={s.newUser__labelTitle}>
            {isError.role === '' ? 'Выберите специальность' : isError.role}
          </span>
          <select
            onChange={handleInput}
            className={s.newUser__select}
            onBlur={validateNewUserForm}
            name="role">
            <option value="all">Должность:</option>
            <option value="cook">Повар</option>
            <option value="driver">Водитель</option>
            <option value="waiter">Официант</option>
          </select>
        </label>


        <button
          className={s.newUser__button}
          disabled={!Object.values(isError).every( el => el === '')}
        >Добавить работника</button>
      </form>

    </>
  )
}



// export function NewUser() {
//   const [user, setUser] = useState({});
//   const [errors, setErrors] = useState({
//     name: '',
//     phone: '',
//     birthday: '',
//     role: '',
//   });
//
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//
//   const validateField = (name, value) => {
//     switch (name) {
//       case 'name':
//         if (value.trim().length < 2 || value.trim().split(' ').length < 2) {
//           return 'Имя и фамилия должны содержать минимум 2 слова';
//         }
//         return '';
//       case 'phone':
//         if (value.replace(/\D/g, '').length !== 10) {
//           return 'Телефон должен содержать 10 цифр';
//         }
//         return '';
//       case 'birthday':
//         if (value.trim().length === 0) {
//           return 'Дата рождения обязательна';
//         }
//         return '';
//       case 'role':
//         if (value === 'all') {
//           return 'Выберите должность из списка';
//         }
//         return '';
//       default:
//         return '';
//     }
//   };
//
//   const handleInput = (e) => {
//     const { name, value } = e.target;
//
//     // Валидация поля
//     const errorMessage = validateField(name, value);
//
//     // Обновляем ошибки и данные пользователя
//     setErrors((prev) => ({ ...prev, [name]: errorMessage }));
//     setUser((prev) => ({ ...prev, [name]: value }));
//   };
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//
//     // Проверка перед отправкой
//     const hasErrors = Object.values(errors).some((error) => error !== '');
//     if (hasErrors) return;
//
//     const newUser = { ...user, id: user.phone + Date.now() };
//     dispatch(addUser(newUser));
//     navigate('/');
//   };
//
//   return (
//     <>
//       <h1 className={s.newUser__title}>Данные нового работника</h1>
//
//       <form onSubmit={handleSubmit} className={s.newUser}>
//         <label className={`${s.newUser__label} ${errors.name ? s.error : ''}`}>
//           <span className={s.newUser__labelTitle}>Введите имя и фамилию</span>
//           <input
//             onChange={handleInput}
//             type="text"
//             className={s.newUser__input}
//             placeholder="Иван Иванов"
//             name="name"
//           />
//           {errors.name && <p className={s.errorMessage}>{errors.name}</p>}
//         </label>
//
//         <label className={`${s.newUser__label} ${errors.phone ? s.error : ''}`}>
//           <span className={s.newUser__labelTitle}>Введите телефон</span>
//           <input
//             onChange={handleInput}
//             type="tel"
//             className={s.newUser__input}
//             placeholder="922-111-22-33"
//             name="phone"
//           />
//           {errors.phone && <p className={s.errorMessage}>{errors.phone}</p>}
//         </label>
//
//         <label className={`${s.newUser__label} ${errors.birthday ? s.error : ''}`}>
//           <span className={s.newUser__labelTitle}>Введите дату рождения</span>
//           <input
//             onChange={handleInput}
//             type="date"
//             className={s.newUser__input}
//             name="birthday"
//           />
//           {errors.birthday && <p className={s.errorMessage}>{errors.birthday}</p>}
//         </label>
//
//         <label className={`${s.newUser__label} ${errors.role ? s.error : ''}`}>
//           <span className={s.newUser__labelTitle}>Выберите специальность</span>
//           <select
//             onChange={handleInput}
//             className={s.newUser__select}
//             name="role"
//           >
//             <option value="all">Должность:</option>
//             <option value="cook">Повар</option>
//             <option value="driver">Водитель</option>
//             <option value="waiter">Официант</option>
//           </select>
//           {errors.role && <p className={s.errorMessage}>{errors.role}</p>}
//         </label>
//
//         <button
//           className={s.newUser__button}
//           disabled={Object.values(errors).some((error) => error !== '')}
//         >
//           Добавить работника
//         </button>
//       </form>
//     </>
//   );
// }
