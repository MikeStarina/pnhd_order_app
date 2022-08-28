import React from "react";
import styles from './progress-bar.module.css'
import { Link, NavLink } from 'react-router-dom';





export default function Progressbar() {


    return (
        <div className={styles.sidebar}>
            <Link to='/' className={styles.link} disabled>
                О ЗАКАЗЕ
            </Link>
            <p className={styles.link}>&rarr;</p>
            <Link to='/textile' className={styles.link}>
                ТЕКСТИЛЬ
            </Link>
            <p className={styles.link}>&rarr;</p>
            <Link to='/' className={styles.link}>
                НАНЕСЕНИЯ
            </Link>

            <p className={styles.link}>&rarr;</p>
            <Link to='/' className={styles.link}>
                УПАКОВКА
            </Link>
        </div>
    );
}