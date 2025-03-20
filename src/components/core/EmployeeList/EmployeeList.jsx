import {Employee} from "../Employee/Employee.jsx";
import {SortByPosition} from "../../share/SortByPosition/SortByPosition.jsx";
import s from './EmployeeList.module.css'

export function EmployeeList({data}) {
  return (
    <ul className={s.employee__list}>
      <li className={`${s.employee__item}  ${s.employee__itemTop}`}>
        <p className={s.employee__field}>Имя / Дата:</p>
        <SortByPosition />
        <p className={s.employee__field}>Номер телефона:</p>
        <p className={s.employee__checked}>В архиве:</p>
      </li>
      {
        data.map(entity => <Employee key={entity.id} entity={entity} styles={s}/>)
      }
    </ul>
  );
}
