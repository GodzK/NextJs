import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoimg from '/assets/logo.png'
import Classes from './main-header.module.css'
import MainHeaderBackground from '../components/main-header-background'
function MainHeader() {
  return (
    <> 
    <MainHeaderBackground/>
    <header className={Classes.header} >
    <Link className={Classes.logo} href="/">
        <Image src={logoimg} alt ="ชามที่มีข้าว" priority/>
        Nextlevel food
    </Link>
    <nav className={Classes.nav}>
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
    </>
  
  )
}

export default MainHeader
