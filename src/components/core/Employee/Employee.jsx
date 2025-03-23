import {getProfession} from "../../../utils/getProfession.js";
import {useState} from "react";
import {EmployeeEdit} from "../EmployeeEdit/EmployeeEdit.jsx";

export function Employee({entity, styles}) {

  const [isEdit, setIsEdit] = useState(false)

  const handleChange = () => {
    const employeeId = entity.id
    console.log(employeeId)
    setIsEdit(true)
  }

  const handleCloseModal = () => {
    setIsEdit(false)
  }

  return (
    <>
      {isEdit && <EmployeeEdit id={entity.id} onClose={handleCloseModal}/>}

      <li onClick={handleChange} className={styles.employee__item}>
        <div className={styles.employee__field}>
          <p className="">{entity.name}</p>
          <p className="">{entity.birthday}</p>
        </div>
        <p className={styles.employee__field}>{getProfession(entity.role)}</p>
        <p className={styles.employee__field}>{entity.phone}</p>
        <input onChange={() => {}} type={'checkbox'} className={styles.employee__check} checked={entity.isArchive}/>
      </li>
    </>
  )
}
