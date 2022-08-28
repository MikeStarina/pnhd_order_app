import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';



export default function Header() {


    return (
        <header className={styles.header}>
            <Link to='/' className={styles.link}>
                <h1 className={styles.header_title}>O—R / APP.</h1>
            </Link>
            <nav className={styles.header_menu}>
                
                    <a href="https://pnhd.ru" target="blank" className={styles.header_menu_link}>PNHD</a>
                    <a href="https://pnhd.ru" target="blank" className={styles.header_menu_link}>PNHD.STUDIO</a>
                    <a href="/" className={styles.header_menu_link}>ABOUT</a>
                    <a href="/" className={styles.header_menu_link}>WIKI</a>
                
            </nav>
        </header>
    );
}