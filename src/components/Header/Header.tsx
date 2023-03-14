import React from 'react';
import styles from "./Header.module.scss";
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <div>
            <nav>
                <ul className={styles.header}>
                    <li>
                       Ballina
                    </li>
                    <li>
                        Per ne
                    </li>
                    <li>
                        Galeria
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;
