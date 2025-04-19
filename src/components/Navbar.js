import React, { useState } from 'react';
import styles from './Navbar.module.css';
import menuIcon from './menuIcon.png'; // Correct path
import closemenu from './closemenu.svg';

const Navbar = () => {
    const [openmenu, setmenuopen] = useState(false);

    const handlemenubutton = () => {
        setmenuopen(!openmenu);
    }

    return (
        <nav className={styles.navbar}>
           <a href="/" className={styles.heading}>My Portfolio</a>

            <div className={styles.menu}>
                <img 
                    className={styles.menubutton} 
                    src={openmenu ? closemenu : menuIcon} 
                    alt='Menu-icon'
                    height={30}
                    onClick={handlemenubutton}
                />
                <ul className={`${styles.list} ${openmenu ? styles.open : ''}`}>
                    <li><a href='/' onClick={handlemenubutton}>Home</a></li> {/* Added Home */}
                    <li><a href='#about' onClick={handlemenubutton}>About</a></li>
                    <li><a href='#skills' onClick={handlemenubutton}>Skills</a></li>
                    <li><a href='#projects' onClick={handlemenubutton}>Projects</a></li>
                    <li><a href='#contact' onClick={handlemenubutton}>Collaborate</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
