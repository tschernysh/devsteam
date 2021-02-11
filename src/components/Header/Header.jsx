import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return(
        <header>
            <NavLink className={s.nav__btns} activeClassName={s.activeBtn} to='photoList'>List of photos</NavLink>
            <NavLink className={s.nav__btns} activeClassName={s.activeBtn} to='singlePhoto'>Single photo</NavLink>
        </header>
    )
}

export default Header;