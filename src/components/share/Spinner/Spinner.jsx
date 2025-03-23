import spinner from '../../../assets/img/spinner.svg';
import s from './Spinner.module.css'

export function Spinner () {
  return (
    <div className={s.spinner__wrap}>
      <img src={spinner} alt="spinner logo" className={s.spinner__img}/>
    </div>
  )
}
