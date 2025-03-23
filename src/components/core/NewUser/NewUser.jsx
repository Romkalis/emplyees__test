
import {useDispatch} from "react-redux";
import {addUser} from "../../../store/employeesSlice.js";
import {useNavigate} from "react-router-dom";

import {useState} from "react";
import {validateNewUserForm} from "../../../utils/validateNewUserForm.js";

import s from "./NewUser.module.css"


export function NewUser() {

  const [user, setUser] = useState({})
  const [isError, setIsError] = useState({
    name: false,
    phone: false,
    birthday: false,
    role: false
  });

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleInput = (e) => {
    const {name, value} = e.target
    setIsError( prev => ({...prev, [name]: validateNewUserForm(e)}))
    setUser(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newUser = {...user, id: user.phone + Date.now()}
    dispatch(addUser(newUser))
    // navigate('/')
  }



  return (
    <>
      <h1 className={s.newUser__title}>Данные нового работника</h1>

      <form onSubmit={handleSubmit} action="" className={s.newUser}>

        <label className={s.newUser__label}>
          <span className={s.newUser__labelTitle}> Введите имя и фамилию</span>
          <input onChange={handleInput}
                 onBlur={validateNewUserForm}
                 type="text"
                 className={s.newUser__input}
                 placeholder={"Иван Инванов"}
                 required={true}
                 name={"name"}/>
        </label>

        <label className={s.newUser__label}><span className={s.newUser__labelTitle}></span>
          <span className={s.newUser__labelTitle}> Введите телефон</span>
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
          <span className={s.newUser__labelTitle}> Введите дату рождения</span>
          <input
            onChange={handleInput}
            onBlur={validateNewUserForm}
            type="date"
            className={s.newUser__input}
            required={true}
            name={"birthday"}/>
        </label>

        <label className={s.newUser__label}>
          <span className={s.newUser__labelTitle}>Выберите специальность</span>
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
          disabled={!Object.values(isError).every( el => el === true)}
        >Добавить работника</button>
      </form>

    </>
  )
}
