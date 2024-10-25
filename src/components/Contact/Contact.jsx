import styles from './Contact.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return(
        <section id="Contact">
        <h2>Contact Me</h2>

        <div>
        <a href="https://github.com/your-LaurenWebster01" target="_blank" rel="noopener noreferrer">
        <FaGithub className={styles.icon} /> GitHub
    </a>
    <a href="https://www.linkedin.com/in/mslaurenwebster/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className={styles.icon} /> LinkedIn
    </a>
    <a href="mailto:Lauren.Webster@temple.edu">
        <FaEnvelope className={styles.icon} /> Email
    </a>


        </div>
        </section>
    )
}
export default Contact;