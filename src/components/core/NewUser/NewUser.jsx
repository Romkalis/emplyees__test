import s from "./NewUser.module.css"

export function NewUser() {
  return (
    <>
      <h1 className={s.newUser__title}>Данные нового работника</h1>

      <form action="" className={s.newUser}>

        <label htmlFor="" className={s.newUser__label}>
          <span className={s.newUser__labelTitle}> Введите имя и фамилию</span>
          <input type="text" className={s.newUser__input} placeholder={"Иван Инванов"} required={true}/>
        </label>

        <label htmlFor="" className={s.newUser__label}><span className={s.newUser__labelTitle}></span>
          <span className={s.newUser__labelTitle}> Введите телефон</span>
          <div className={s.newUser__telWrapper}>
            <input type="tel" className={`${s.newUser__input} ${s.newUser__tel}`} placeholder={"922-111-22-33"} required={true}/>
          </div>
        </label>


        <label htmlFor="" className={s.newUser__label}>
          <span className={s.newUser__labelTitle}> Введите дату рождения</span>
          <input type="date" className={s.newUser__input} required={true}/>
        </label>

        <label htmlFor="" className={s.newUser__label}>
          <span className={s.newUser__labelTitle}>Выберите специальность</span>
          <select className={s.newUser__select} name="position" id="position">
            <option value="all">Должность:</option>
            <option value="cook">Повар</option>
            <option value="driver">Водитель</option>
            <option value="waiter">Официант</option>
          </select>
        </label>


        <button className={s.newUser__button}>Добавить работника</button>
      </form>

    </>
  )
}
