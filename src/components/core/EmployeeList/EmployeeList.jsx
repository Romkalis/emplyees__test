import {Employee} from "../Employee/Employee.jsx";
import {FilterByRole} from "../../share/FilterByRole/FilterByRole.jsx";
import s from './EmployeeList.module.css'

export function EmployeeList({data}) {


  return (
    <section>
      <h2>Список сотрудников</h2>
      <ul className={s.employee__list}>

        {/*heading*/}

        <li className={`${s.employee__item}  ${s.employee__itemTop}`}>
          <p className={s.employee__field}>Имя / Дата:</p>
          <FilterByRole />
          <p className={s.employee__field}>Номер телефона:</p>
          <p className={s.employee__field}>
            Архив
          </p>
        </li>


        {
          data.map(entity => <Employee key={entity.id} entity={entity} styles={s}/>)
        }
      </ul>
    </section>
  );
}
