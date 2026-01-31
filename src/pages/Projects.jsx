
import { useState } from 'react';
import { ExternalLink, Github, Layers, Lock, Search, Shield, Terminal, BookOpen, Activity, Cloud, Mic } from 'lucide-react';
import Card from '../components/ui/Card';
import '../styles/Projects.css';

const projectsData = [
    {
        id: 1,
        title: 'HexDetector',
        description: 'ML-Powered Network Anomaly Classifier built using Scikit-Learn to detect DDoS and Port Scan signatures with 98.4% accuracy. Processed 10GB+ of PCAP data using Pandas and Matplotlib for threat visualization.',
        tags: ['Python', 'Scikit-Learn', 'Pandas', 'Machine Learning'],
        category: 'Security Research',
        github: 'https://github.com/hexnin3x',
        demo: null,
        highlight: '98.4% Detection Accuracy'
    },
    {
        id: 2,
        title: 'CloudAudit',
        description: 'Automated AWS Security Auditor tool using Boto3 to automatically scan AWS environments for publicly exposed S3 buckets and over-privileged IAM users. Generates automated PDF reports for compliance checks.',
        tags: ['AWS', 'Python', 'Boto3', 'Cloud Security'],
        category: 'Automation',
        github: 'https://github.com/hexnin3x',
        demo: null,
        highlight: 'Automated Compliance Reporting'
    },
    {
        id: 3,
        title: 'Ezio',
        description: 'Secure AI Command Interface integrating OpenAI APIs with a Python backend for voice control. Implemented AES-256 encryption for local database storage and secure voice-command processing.',
        tags: ['Python', 'OpenAI API', 'AES-256', 'Voice AI'],
        category: 'Development',
        github: 'https://github.com/hexnin3x',
        demo: null,
        highlight: 'AES-256 Encrypted Storage'
    }
];

const categories = ['All', 'Security Research', 'Automation', 'Development'];

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects = projectsData.filter(project =>
        filter === 'All' || project.category === filter
    );

    return (
        <div className="container section">
            <div className="header-center">
                <h1 className="section-title">Projects & Tools</h1>
                <p className="section-desc">
                    Building tools to break, secure, and monitor digital infrastructure.
                </p>
            </div>

            {/* Filter Tabs */}
            <div className="filter-container">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`filter-btn ${filter === cat ? 'active' : ''}`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="projects-grid">
                {filteredProjects.map((project) => (
                    <Card key={project.id} className="project-card">
                        <div className="project-header">
                            <div className="project-icon-top">
                                <Layers size={24} />
                            </div>
                            <div className="project-links">
                                {project.github && (
                                    <a href={project.github} className="icon-link" aria-label="GitHub"><Github size={20} /></a>
                                )}
                                {project.demo && (
                                    <a href={project.demo} className="icon-link" aria-label="Live Demo"><ExternalLink size={20} /></a>
                                )}
                            </div>
                        </div>

                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-desc">{project.description}</p>

                        <div className="project-highlight">
                            <Lock size={14} className="highlight-icon" />
                            <span>{project.highlight}</span>
                        </div>

                        <div className="project-tags">
                            {project.tags.map(tag => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Projects;
