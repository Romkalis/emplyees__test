import {validateNewUserForm} from "../../../utils/validateNewUserForm.js";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {changeUser} from "../../../store/employeesSlice.js";

import {convertPhone} from "../../../utils/convertPhone.js";
import {dateToIso} from "../../../utils/dateToIso.js";
import {addFormattedPhone} from "../../../utils/addFormattedPhone.js";
import {addFormattedBirthday} from "../../../utils/addFormattedBirthday.js";

import s from "./EmployeeEdit.module.css";



export function EmployeeEdit({id, onClose}) {

  const [user, setUser] = useState(useSelector(state => {
    const user = state.employees.employees.find(el => el.id === id)
    return {
      ...user, birthday: dateToIso(user.birthday), phone: convertPhone(user.phone)
    }
  }))
  const [isError, setIsError] = useState({
    name: '',
    phone: '',
    role: '',
    birthday: '',

  })

  const dispatch = useDispatch()

  const handleChangeValue = (e) => {
    const {name, value} = e.target
    setIsError(prev => ({...prev, [name]: validateNewUserForm(e, s)}))
    setUser(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newUser = {
      ...user,
      name: user.name,
      phone: addFormattedPhone(user.phone),
      birthday: addFormattedBirthday(user.birthday),

    }
    dispatch(changeUser(newUser))
    onClose()
  }

  const handleClose = (e) => {

    if (e.target.classList.contains(s.edit__wrapper)) {
    onClose()
    }
  }

  return (

    <div onClick={handleClose} className={s.edit__wrapper}>

    <form onSubmit={handleSubmit} className={s.edit__form}
    >
      <fieldset>
        <legend>Редактировать данные: {user.name}</legend>
        <label>
            <span>
              {isError.name === '' ? 'Ф.И.' : isError.name}
            </span>
          <input
            onBlur={validateNewUserForm}
            onChange={handleChangeValue}
            type="text"
            required={true}
            name={"name"}
            value={user.name}
          />
        </label>

        <label>
            <span>
              {isError.phone === '' ? 'Телефон' : isError.phone}
            </span>
          <div>
            <input
              onBlur={validateNewUserForm}
              onChange={handleChangeValue}
              type="number"
              placeholder={"922-111-22-33"}
              required={true}
              name={"phone"}
              value={user.phone}
              maxLength={10}/>
          </div>
        </label>


        <label>
            <span>

              {isError.role === '' ? 'Должность:' : isError.role}
            </span>
          <select
            onChange={handleChangeValue}
            onBlur={validateNewUserForm}
            name="role"
            value={user.role}>
            <option value="all">Должность:</option>
            <option value="cook">Повар</option>
            <option value="driver">Водитель</option>
            <option value="waiter">Официант</option>
          </select>
        </label>

        <label>
            <span>
              {isError.birthday === '' ? 'Дата рождения' : isError.birthday}

            </span>
          <div>
            <input
              onChange={handleChangeValue}
              onBlur={validateNewUserForm}
              type="date"
              required={true}
              name={"birthday"}
              value={user.birthday}
            />
          </div>
        </label>

        <label>
          <span>В архиве</span>
          <input
            onChange={handleChangeValue}
            onBlur={validateNewUserForm}
            type="checkbox"
            name={"isArchive"}
            value={user.isArchive}
          />
        </label>

      </fieldset>
      <button
        disabled={!Object.values(isError).every(el => el === '')}
      >Изменить данные
      </button>
    </form>
  </div>)

}
