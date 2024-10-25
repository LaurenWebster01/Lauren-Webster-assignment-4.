import { Link } from 'react-scroll';
import styles from './Navigation.module.css';

function Navigation() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li>
                    <Link to="Profile" smooth={true} duration={500} className={styles.navLink}>
                        About Me
                    </Link>
                </li>
                <li>
                    <Link to="Projects" smooth={true} duration={500} className={styles.navLink}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="Experience" smooth={true} duration={500} className={styles.navLink}>
                        Experience
                    </Link>
                </li>
                <li>
                    <Link to="Contact" smooth={true} duration={500} className={styles.navLink}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
