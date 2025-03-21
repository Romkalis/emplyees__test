import s from './FilterBlock.module.css'

export function FilterBlock() {


  const handleFilterChange = () => {
    console.log('ch')
  }

  return (
    <>
      <section className={s.filter__wrapper}>


        <div className={s.filter__sort}>
          <p>По имени:</p>
          <button className={s.filter__buttonUp}></button>
          <button className={s.filter__buttonDown}></button>
        </div>

        <div className={s.filter__sort}>
          <p>По дате рождения:</p>
          <button className={s.filter__buttonUp}></button>
          <button className={s.filter__buttonDown}></button>
        </div>

        <div className={s.filter__sort}>
          <p>По телефону:</p>
          <button className={s.filter__buttonUp}></button>
          <button className={s.filter__buttonDown}></button>
        </div>

        <div className={s.filter__sort}>
          <div className={s.filter__radio}>
            <label className={s.filter__label}>
              <input type="radio" name="employeeFilter"
                     value="all"
                     onChange={handleFilterChange}
                     defaultChecked
              />
              Все
            </label>

            <label className={s.filter__label}>
              <input
                type="radio"
                name="employeeFilter"
                value="outArchive"
                onChange={handleFilterChange}
              />
              Работает
            </label>

            <label className={s.filter__label}>
              <input
                type="radio"
                name="employeeFilter"
                value="inArchive"
                onChange={handleFilterChange}
              />
              Архив
            </label>
          </div>
        </div>


        <div className={s.filter__finder}>
          <p>Поиск:</p>
          <input type="text" placeholder="Поиск..."/>
        </div>

      </section>
    </>)
}
