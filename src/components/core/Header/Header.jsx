import {Link} from "react-router-dom";
import add from '../../../assets/img/add.svg'
import home from '../../../assets/img/home.svg'
import logo from '../../../assets/img/logo.svg'

import s from "./Header.module.css"

export function Header() {
  return (
    <header className={s.header}>
      <img className={s.logo} src={logo} alt="Logo of Site"/>
      <nav className={s.nav}>
        <Link to="/" title={"Home"}>
          <img className={s.button} src={home} alt="Logo home Link" title={"Homepage"}/>
        </Link>
        <Link to="/add" title={"Add New User"}>
          <img className={s.button} src={add} alt="Logo add new user link" title={'add new user'}/>
        </Link>
      </nav>
    </header>
  )

}
