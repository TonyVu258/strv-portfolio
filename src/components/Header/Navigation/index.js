'use client'
import Link from 'next/link'
import styles from '../header.module.scss'
import { useState, useEffect } from 'react'
import MenuItem from '../MenuItem';
import MenuMobile from '../MenuItem/MenuMobile';
import CopyRight from '../MenuItem/CopyRight';


function Navigation({position}) {
  const [isOpen, setIsOpen] = useState(false);

  const navOpen = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() =>{
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.querySelector(`.${styles.navigationMenuDetail} span`).style.display = 'none';
      document.querySelectorAll(`.${styles.nav_link}`).forEach(e => {
        e.classList.add(`${styles.isOpen}`);
      });
      document.querySelector(`.${styles.navMenuOpen}`).style.display = 'grid';

    } else {
      document.body.style.overflow = 'unset';
      document.querySelector(`.${styles.navigationMenuDetail} span`).style.display = 'block';
      document.querySelectorAll(`.${styles.nav_link}`).forEach(e => {
        e.classList.remove(`${styles.isOpen}`);
      document.querySelector(`.${styles.navMenuOpen}`).style.display = 'none';
      });
    }
    return () => {
        document.body.style.overflow = 'unset';
    };
  },[isOpen]);

  return (
    <>
      {position == 'left' ? (
      <div className={`${styles.item} ${styles.navigation}`}>
        <span className={styles.desktop}>
            <div className={styles.navigationItem}>
                <Link href='/' className={styles.navigationSign}>HELLO@STRV.COM</Link>
                <span className={styles.nav_span}>/</span>
                <Link href='/' className={styles.nav_link}>facebook</Link>
                <Link href='/' className={styles.nav_link}>linkedin</Link>
                <Link href='/' className={styles.nav_link}>github</Link>
                <Link href='/' className={styles.nav_link}>my team</Link>
            </div>
        </span>
        <span className={styles.mobile}>
          <Link href='/' className={styles.mobileLink}>
            <span role='img' aria-label='Wave Hand' className={styles.waveHand}>👋🏻</span>
            <span>LET&apos;S TALK</span>
          </Link>
        </span>
      </div>
    ):(
      <div className={`${styles.item} ${styles.navigationMenu}`}>
        <div className={styles.navigationMenuBar}>
          <div className={styles.navigationMenuDetail} >
            <span>
              <div className={styles.navigationMenuItem}>
                <Link href='/' className={styles.nav_link}>About Me</Link>
                <Link href='/' className={styles.nav_link}>Project</Link>
                <Link href='/' className={styles.nav_link}>Services</Link>
                <Link href='/' className={styles.nav_link_red}><div className={styles.nav_center_btn}>Let&apos;s Talk</div></Link>
              </div>
            </span>
            <button aria-label='Open Navigation' className={styles.nav_open_btn} onClick={navOpen}>
              <div className={styles.nav_center_btn}>
                <div className={styles.nav_menu_btn}>
                  <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
                  <path d="M16 5H0v2h16V5Zm0 4H0v2h16V9Z" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
            </button>
          </div>
          <nav className={styles.navMenuOpen} style={{backgroundSize: '100% 100%'}}>
            <div className={styles.navMenu_title}>
              <div className={styles.navMenu_home}>
                <div className={styles.navMenu_home_position}>
                  <Link href='/' data-text="Home" className={styles.navMenu_home_link}>
                    <div className={styles.navMenu_home_link_isActive}>
                      Home
                    </div>
                  </Link>
                </div>
              </div>
              <MenuItem index={1}/>
              <MenuItem index={2}/>
              <MenuItem index={3}/>
            </div>
            <MenuMobile />
            <div className={styles.copyRight}>
              <CopyRight type='navigation'/>
            </div>
          </nav>
        </div>
      </div>
    )}
    </>
  )
}

export default Navigation