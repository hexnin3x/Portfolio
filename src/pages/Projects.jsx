import { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import '../styles/Projects.css';

const projectsData = [
    {
        id: 1,
        title: 'Controlled Execution Sandbox',
        description: 'OWASP-aligned secure sandbox with AST analysis, command whitelisting, and dual-mode terminal UI for safe code execution.',
        tags: ['Python', 'React', 'AST', 'OWASP', 'Flask'],
        category: 'Security Research',
        github: 'https://github.com/hexnin3x/controled-sandbox',
        demo: 'https://controled-sandbox.onrender.com/',
        highlight: 'OWASP-Aligned Hardening',
        number: '01'
    },
    {
        id: 2,
        title: 'HexDetector',
        description: 'ML-Powered Network Anomaly Classifier using Scikit-Learn to detect DDoS and Port Scan signatures with 98.4% accuracy.',
        tags: ['Python', 'Scikit-Learn', 'Pandas', 'ML'],
        category: 'Security Research',
        github: 'https://github.com/hexnin3x',
        demo: null,
        highlight: '98.4% Detection Accuracy',
        number: '02'
    },
    {
        id: 3,
        title: 'CloudAudit',
        description: 'Automated AWS Security Auditor scanning for exposed S3 buckets and over-privileged IAM users with PDF compliance reports.',
        tags: ['AWS', 'Python', 'Boto3', 'Cloud Security'],
        category: 'Automation',
        github: 'https://github.com/hexnin3x',
        demo: null,
        highlight: 'Automated Compliance',
        number: '03'
    },
    {
        id: 4,
        title: 'Ezio',
        description: 'Secure AI Command Interface with OpenAI APIs, voice control, and AES-256 encrypted local database storage.',
        tags: ['Python', 'OpenAI API', 'AES-256', 'Voice AI'],
        category: 'Development',
        github: 'https://github.com/hexnin3x',
        demo: null,
        highlight: 'AES-256 Encrypted',
        number: '04'
    }
];

const categories = ['All', 'Security Research', 'Automation', 'Development'];

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [headerRef, headerVisible] = useIntersectionObserver();
    const [gridRef, gridVisible] = useIntersectionObserver();

    const filteredProjects = projectsData.filter(project =>
        filter === 'All' || project.category === filter
    );

    return (
        <div className="projects-page">
            <div className="mesh-gradient"></div>
            <div className="grain-overlay"></div>

            <div className="container section" style={{ paddingTop: 'calc(var(--nav-height) + 80px)' }}>
                <div ref={headerRef} className="section-header">
                    <div className={`section-eyebrow animate-in ${headerVisible ? 'visible' : ''}`}>PORTFOLIO</div>
                    <h1 className={`section-title animate-in stagger-1 ${headerVisible ? 'visible' : ''}`}>
                        All Projects
                    </h1>
                    <p className={`section-desc animate-in stagger-2 ${headerVisible ? 'visible' : ''}`}>
                        Security tools, research platforms, and automation pipelines.
                    </p>
                </div>

                <div className={`filter-bar animate-in stagger-3 ${headerVisible ? 'visible' : ''}`}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-chip ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div ref={gridRef} className="projects-list">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`project-row glass-card animate-in stagger-${Math.min(index + 1, 6)} ${gridVisible ? 'visible' : ''}`}
                        >
                            <div className="corner-mark tl"></div>
                            <div className="corner-mark br"></div>
                            <div className="project-row-left">
                                <span className="project-num">{project.number}</span>
                                <div>
                                    <h3 className="project-row-title">{project.title}</h3>
                                    <p className="project-row-desc">{project.description}</p>
                                    <div className="project-row-tags">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="project-row-right">
                                <span className="project-row-highlight">{project.highlight}</span>
                                <div className="project-row-links">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-action-link" aria-label="GitHub">
                                            <Github size={16} /> Code
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-action-link live" aria-label="Live Demo">
                                            <ExternalLink size={16} /> Live
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
