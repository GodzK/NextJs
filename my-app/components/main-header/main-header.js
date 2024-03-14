
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoimg from '/assets/logo.png'
import classes from './main-header.module.css'
import MainHeaderBackground from './main-header-background'
import NavLink from './nav-link';

function MainHeader() {
  return (
    <> 
    <MainHeaderBackground/>
    <header className={classes.header} >
    <Link className={classes.logo} href="/">
        <Image src={logoimg} alt ="ชามที่มีข้าว" priority/>
        Nextlevel food
    </Link>
    <nav className={classes.nav}>
        <ul>
            <li>
           <NavLink href='/meals'>Browse Meals</NavLink >
            </li>
            <li>
            <NavLink href='/community'>Foodies Community</NavLink>
            </li>
        </ul>
    </nav>
   </header>
    </>
  
  )
}

export default MainHeader
