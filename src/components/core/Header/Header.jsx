import {Link} from "react-router-dom";
import add from '../../../adds/img/add.svg'
import home from '../../../adds/img/home.svg'
import logo from '../../../adds/img/logo.svg'

import s from "./Header.module.css"

export function Header() {
  return (
    <header className={s.header}>
      <img className={s.logo} src={logo} alt="Logo"/>
      <nav className={s.nav}>
        <Link to="/" title={"Home"}>
          <img className={s.button} src={home} alt="Logo"/>
        </Link>
        <Link to="/add" title={"Add New User"}>
          <img className={s.button} src={add} alt="Logo"/>
        </Link>
      </nav>
    </header>
  )

}
