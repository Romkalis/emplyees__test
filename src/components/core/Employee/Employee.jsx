import {getProfession} from "../../../utils/getProfession.js";
import {useDispatch} from "react-redux";
import {isArchive} from "../../../store/employeesSlice.js";

export function Employee({entity, styles}) {

  const dispatch = useDispatch()



  const inputHandler = () => {
    dispatch(isArchive(entity.id))
  }


  return (
    <li className={styles.employee__item}>
      <div className={styles.employee__field}>
        <p className="">{entity.name}</p>
        <p className="">{entity.birthday}</p>
      </div>
      <p className={styles.employee__field}>{getProfession(entity.role)}</p>
      <p className={styles.employee__field}>{entity.phone}</p>
      <input onChange={inputHandler} type={'checkbox'} className={styles.employee__check} checked={entity.isArchive}/>
    </li>
  )
}
