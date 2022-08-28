import React from "react";
import styles from './footer.module.css';









export default function Footer() {


    return (
        <footer className={styles.footer}>
       
        <nav className={styles.footer_menu}>
            
                <a href="https://pnhd.ru" target="blank" className={styles.footer_menu_link}>PNHD</a>
                <a href="https://pnhd.ru" target="blank" className={styles.footer_menu_link}>PNHD.STUDIO</a>
                <a href="/" className={styles.footer_menu_link}>ABOUT</a>
                <a href="/" className={styles.footer_menu_link}>WIKI</a>
            
        </nav>
    </footer>
    )
}