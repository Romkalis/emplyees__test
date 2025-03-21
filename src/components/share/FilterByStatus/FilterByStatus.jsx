import {useDispatch} from "react-redux";
import {filterBy} from '../../../store/employeesSlice.js'

export function FilterByStatus({classStyle}) {

  const dispatch = useDispatch()

  const handleArchiveSort = (e) => {
    const checked = e.target.checked
    dispatch(filterBy( checked ? 'inArchive' : 'outArchive'))
  }
  return (
    <div className={classStyle}>
      Архив
      <input onChange={handleArchiveSort} type="checkbox" className="type"/>
    </div>
  )
}
