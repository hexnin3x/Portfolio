import { Shield, Code, Cloud, Cpu, ChevronRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import '../styles/Skills.css';

const skillCategories = [
    {
        title: 'Offensive Security',
        icon: <Shield size={20} />,
        accent: 'violet',
        skills: ['Burp Suite Professional', 'Metasploit Framework', 'Sqlmap & Nikto', 'BeEF & Hydra', 'John the Ripper', 'Nmap Scanning']
    },
    {
        title: 'Security Operations',
        icon: <Cpu size={20} />,
        accent: 'cyan',
        skills: ['Splunk (SIEM)', 'Snort (IDS/IPS)', 'Wireshark', 'Nessus', 'BloodHound (AD)', 'Mimikatz & OSINT']
    },
    {
        title: 'Cloud & DevOps',
        icon: <Cloud size={20} />,
        accent: 'pink',
        skills: ['AWS (IAM, VPC, S3)', 'Docker', 'Linux (Kali, Ubuntu, RHEL)', 'Bash Scripting', 'Git/GitHub']
    },
    {
        title: 'Programming',
        icon: <Code size={20} />,
        accent: 'amber',
        skills: ['Python (Security Automation)', 'SQL (Injection & Extraction)', 'C++ & JavaScript', 'React & Flask']
    }
];

const Skills = () => {
    const [headerRef, headerVisible] = useIntersectionObserver();
    const [gridRef, gridVisible] = useIntersectionObserver();

    return (
        <div className="skills-page">
            <div className="mesh-gradient"></div>
            <div className="grain-overlay"></div>

            <section className="section">
                <div className="container">
                    <div ref={headerRef} className="section-header">
                        <div className={`section-eyebrow animate-in ${headerVisible ? 'visible' : ''}`}>CAPABILITIES</div>
                        <h1 className={`section-title animate-in stagger-1 ${headerVisible ? 'visible' : ''}`}>
                            Technical Arsenal
                        </h1>
                        <p className={`section-desc animate-in stagger-2 ${headerVisible ? 'visible' : ''}`}>
                            Tools and technologies I use to identify, exploit, and remediate security vulnerabilities.
                        </p>
                    </div>

                    <div ref={gridRef} className="skills-grid">
                        {skillCategories.map((cat, idx) => (
                            <div key={cat.title}
                                 className={`skill-card glass-card animate-in stagger-${idx + 1} ${gridVisible ? 'visible' : ''}`}>
                                <div className="corner-mark tl"></div>
                                <div className="corner-mark tr"></div>
                                <div className="corner-mark bl"></div>
                                <div className="corner-mark br"></div>
                                <div className={`skill-card-header accent-${cat.accent}`}>
                                    <div className="skill-icon">{cat.icon}</div>
                                    <h3 className="skill-category-title">{cat.title}</h3>
                                </div>
                                <ul className="skill-list">
                                    {cat.skills.map(skill => (
                                        <li key={skill} className="skill-item">
                                            <ChevronRight size={12} className="skill-bullet" />
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;
