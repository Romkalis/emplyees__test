import {useDispatch} from "react-redux";
import {filterBy, sortBy, findBy} from '../../../store/employeesSlice.js'
import s from './FilterBlock.module.css'

export function FilterBlock() {

  const dispatch = useDispatch()

  const handleFindInput = (e) => {
    dispatch(findBy(e.target.value))
  }

  const handleSortChange = (e) => {
    if ( e.target.classList.value.includes('button') ) {
      const btnDataset = e.target.dataset.name

      dispatch( sortBy( btnDataset ) )
    }
  }
  const handleFilterChange = (e) => {
    dispatch( filterBy(e.target.value) )
  }

  return (
    <>
      <section onClick={handleSortChange} className={s.filter__wrapper}>


        <div className={s.filter__sort}>
          <p>По имени:</p>
          <button data-name={'name-up'} className={s.filter__buttonUp}></button>
          <button data-name={'name-down'} className={s.filter__buttonDown}></button>
        </div>

        <div className={s.filter__sort}>
          <p>По дате рождения:</p>
          <button data-name={'age-up'} className={s.filter__buttonUp}></button>
          <button data-name={'age-down'} className={s.filter__buttonDown}></button>
        </div>

        <div className={s.filter__sort}>
          <p>По телефону:</p>
          <button data-name={'phone-up'} className={s.filter__buttonUp}></button>
          <button data-name={'phone-down'} className={s.filter__buttonDown}></button>
        </div>

        <div className={s.filter__sort}>
          <form onChange={handleFilterChange} className={s.filter__radio}>
            <label className={s.filter__label}>
              <input
                type="radio"
                name="employeeFilter"
                value="all"
                defaultChecked
              />
              Все
            </label>

            <label className={s.filter__label}>
              <input
                type="radio"
                name="employeeFilter"
                value="outArchive"
              />
              Работает
            </label>

            <label className={s.filter__label}>
              <input
                type="radio"
                name="employeeFilter"
                value="inArchive"
              />
              Архив
            </label>
          </form>
        </div>

        <div className={s.filter__finder}>
          <input onChange={handleFindInput} type="text" placeholder="Поиск..."/>
        </div>

      </section>
    </>)
}
