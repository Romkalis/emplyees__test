import {useDispatch} from "react-redux";
import {sortBy} from "../../../store/employeesSlice.js";


export function SortByPosition () {

  const dispatch = useDispatch()

  const handleSelect = (e) => {
    dispatch(sortBy(e.target.value))
  }


  return (
    <select onChange={handleSelect} name="position" id="position">
      <option value="all">Должность:</option>
      <option value="cook">Повар</option>
      <option value="driver">Водитель</option>
      <option value="waiter">Официант</option>
    </select>
  )
}
