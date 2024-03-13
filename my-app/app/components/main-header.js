import React from 'react'
import Link from 'next/link'
import logoimg from '/assets/logo.png'
import classes from '../components/main-header-module.css'
function MainHeader() {
  return (
   <header className={classes.header} >
    <Link className={classes.logo} href="/">
        <img src={logoimg.src} alt ="ชามที่มีข้าว"></img>
        Nextlevel food
    </Link>
    <nav className={classes.nav}>
        <ul>
            <li>
                <Link href="/meals">Browse Meal</Link>
            </li>
            <li>
                <Link href="/meals">Foodies Community</Link>
            </li>
        </ul>
    </nav>
   </header>
  )
}

export default MainHeader
