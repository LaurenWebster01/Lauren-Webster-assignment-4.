import styles from './Experience.module.css';

const experiences = [
    {
        jobTitle: 'Mobile Application Developer Intern',
        companyName: 'Vivify Solutions',
        duration: 'October 2023 - Present',
        responsibilities: [
            'Collaborated with the development team to contribute to the design and implementation of multiple mobile applications, utilizing frameworks such as React Native and Expo for cross-platform development on both iOS and Android platforms. ',
            'Worked alongside cross-functions, to include but not limited to, UI/UX design & implementation team utilizing Figma Design.',
        'Assisted the Product Management team with integrating features and ensuring proficient functionality following Agile practices such as scrum calls, sprint planning, and backlog grooming. '        ]
    },
    {
        jobTitle: 'Brand Partnerships & Content Creation',
        companyName: 'Ms. Lauren',
        duration: 'August 2021 - Present',
        responsibilities: [
            'Cultivated and managed strategic partnerships with brands, resulting in mutually beneficial collaborations and increased visibility.',
            'Developed and executed creative partnership campaigns, seamlessly integrating brand messaging to align with the personal brand’s identity.',
            'Applied advanced analytic tools to actively monitor and decipher performance metrics on TikTok and Instagram, enabling real-time refinement of strategies to optimize content engagement, reach, and conversion rates.',
            'Initiated, crafted, and produced concise video content for TikTok, leading to a remarkable 200% surge in follower growth within a span of 6 months.'                ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className={styles.experience}>
            <h2>Experience</h2>
            {experiences.map((experience, index) => (
                <div key={index} className={styles.job}>
                    <h3>{experience.jobTitle}</h3>
                    <p><strong>{experience.companyName}</strong> | {experience.duration}</p>
                    <ul>
                        {experience.responsibilities.map((responsibility, i) => (
                            <li key={i}>{responsibility}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};

export default Experience;
