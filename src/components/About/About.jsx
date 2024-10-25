import styles from './About.module.css';
import profileImage from '../About/IMG_9238.jpg';

function About(){
    return(
        <section id="About" className={styles.section}>
        <h2>About Me</h2>
        <img src={profileImage} alt="Profile Picture" className={styles.profileImage} />
        <p>My name is Lauren Webster. I am a senior information science & technology major (IST) at Temple University. I am an aspiring software engineer open to work.</p>
        </section>
    );
};
export default About;