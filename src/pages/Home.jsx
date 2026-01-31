
import { ArrowRight, Shield, Globe, Lock, Terminal, Cpu, Bug } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="pulsing-dot"></span>
                        Building secure systems by understanding how they break.
                    </div>
                    <h1 className="hero-title">
                        Cybersecurity Portfolio of <br />
                        <span className="text-gradient">Sujal Srivastava</span>
                    </h1>
                    <p className="hero-subtitle">
                        Focused on vulnerability assessment, defensive security, and hands-on problem solving through real-world labs and CTFs.
                    </p>
                    <div className="hero-cta">
                        <Link to="/projects" className="btn btn-primary">
                            View Projects <ArrowRight size={18} />
                        </Link>
                        <Link to="/contact" className="btn btn-secondary">
                            Contact Me
                        </Link>
                    </div>
                </div>

                {/* Abstract Background Elements */}
                <div className="hero-bg-glow"></div>
            </section>

            {/* Focus Areas */}
            <section className="container section">
                <div className="section-header">
                    <h2 className="section-title">Focus Areas</h2>
                    <p className="section-desc">Specialized in offensive assessments and defensive system hardening.</p>
                </div>

                <div className="grid-3">
                    <Card className="feature-card">
                        <div className="card-icon"><Bug size={32} /></div>
                        <h3>VAPT</h3>
                        <p>Vulnerability Assessment & Penetration Testing using industry-standard methodologies.</p>
                    </Card>

                    <Card className="feature-card">
                        <div className="card-icon"><Globe size={32} /></div>
                        <h3>Web & Network Security</h3>
                        <p>Securing web applications and network infrastructure against common attacks.</p>
                    </Card>

                    <Card className="feature-card">
                        <div className="card-icon"><Shield size={32} /></div>
                        <h3>SOC & Incident Analysis</h3>
                        <p>Foundational knowledge of monitoring, logging, and analyzing security incidents.</p>
                    </Card>

                    <Card className="feature-card">
                        <div className="card-icon"><Terminal size={32} /></div>
                        <h3>Linux & System Internals</h3>
                        <p>Deep understanding of Linux systems, permissions, and kernel security.</p>
                    </Card>

                    <Card className="feature-card">
                        <div className="card-icon"><Cpu size={32} /></div>
                        <h3>Security Automation</h3>
                        <p>Automating repetitive security tasks and scans using Python scripts.</p>
                    </Card>

                    <Card className="feature-card">
                        <div className="card-icon"><Lock size={32} /></div>
                        <h3>CTFs & Security Labs</h3>
                        <p>Continuous learning through practical challenges on HTB and TryHackMe.</p>
                    </Card>
                </div>
            </section>

            {/* Featured Projects Preview */}
            <section className="container section">
                <div className="section-header flex-header">
                    <div>
                        <h2 className="section-title">Featured Projects</h2>
                        <p className="section-desc">Recent security tools and research.</p>
                    </div>
                    <Link to="/projects" className="link-hover">View All Projects <ArrowRight size={16} /></Link>
                </div>

                <div className="grid-2">
                    <Card className="project-preview-card">
                        <div className="project-icon"><Cpu size={40} /></div>
                        <div className="project-content">
                            <h3>Automated Threat Scanner</h3>
                            <p>Python-based CLI tool for rapid vulnerability scanning and port enumeration using rustscan and custom scripts.</p>
                            <div className="tags">
                                <span>Python</span><span>Rust</span><span>Docker</span>
                            </div>
                        </div>
                    </Card>

                    <Card className="project-preview-card">
                        <div className="project-icon"><Globe size={40} /></div>
                        <div className="project-content">
                            <h3>Secure Cloud Vault</h3>
                            <p>End-to-end encrypted file storage solution implementing modern crypto standards and zero-knowledge architecture.</p>
                            <div className="tags">
                                <span>React</span><span>Node.js</span><span>AWS</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default Home;
