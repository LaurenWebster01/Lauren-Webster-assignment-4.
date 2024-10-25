import styles from './Projects.module.css';

const projects = [
    {
        name: 'Flip App',
        description: 'An app that connects users within a 50 mile radius based on their hobbies.',
        techStack: ['React', 'CSS', 'JavaScript'],
        // githubLink: 'https://github.com/your-github-username/portfolio-website'
    },
    {
        name: 'Business Builderz App',
        description: 'An app to help business owners, potential or established, connect with the appropriate business consultant for their needs..',
        techStack: ['React', 'JavaScript'],
        // githubLink: 'https://github.com/your-github-username/task-manager'
    }
];

const Projects = () => {
    return (
        <section id="projects" className={styles.projects}>
            <h2>Projects</h2>
            <div className={styles.projectList}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.projectCard}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.button}>
                            View on GitHub
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
