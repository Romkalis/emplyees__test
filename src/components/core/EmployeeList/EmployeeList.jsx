import {Employee} from "../Employee/Employee.jsx";
import {FilterByPosition} from "../../share/FilterByPosition/FilterByPosition.jsx";
import s from './EmployeeList.module.css'

export function EmployeeList({data}) {



  return (
    <ul className={s.employee__list}>

      {/*heading*/}

      <li className={`${s.employee__item}  ${s.employee__itemTop}`}>
        <p className={s.employee__field}>Имя / Дата:</p>
        <FilterByPosition />
        <p className={s.employee__field}>Номер телефона:</p>
        <p className={s.employee__field}>
          Архив
        </p>
      </li>


      {
        data.map(entity => <Employee key={entity.id} entity={entity} styles={s}/>)
      }
    </ul>
  );
}
