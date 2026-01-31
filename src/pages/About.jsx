import { Briefcase, GraduationCap, Server, Shield, Code, Terminal } from 'lucide-react';
import Card from '../components/ui/Card';
import '../styles/About.css';

const About = () => {
    return (
        <div className="container section">
            <div className="about-grid">
                {/* Left Column: Bio */}
                <div className="about-bio">
                    <h1 className="section-title">About Me</h1>
                    <p className="bio-text">
                        I am a cybersecurity practitioner with a strong interest in offensive security, defensive monitoring, and system-level security. I focus on learning through hands-on environments, CTF challenges, and controlled attack simulations rather than purely theoretical study.
                    </p>
                    <p className="bio-text">
                        My approach to security is grounded in understanding attacker behavior, common misconfigurations, and real-world exploitation patterns, followed by applying defensive controls and mitigation strategies.
                    </p>
                    <p className="bio-text">
                        I am particularly interested in web security, network exploitation, Linux systems, and automating repetitive security tasks using Python.
                    </p>

                    <div className="skills-matrix">
                        <h3 className="matrix-title">Areas of Interest</h3>
                        <div className="matrix-grid">
                            <div className="matrix-item">
                                <Shield className="matrix-icon" size={20} />
                                <h4>Offensive Security</h4>
                                <p>Web Exploitation, Network Attacks, Privilege Escalation</p>
                            </div>
                            <div className="matrix-item">
                                <Terminal className="matrix-icon" size={20} />
                                <h4>System Security</h4>
                                <p>Linux Hardening, Bash Scripting, Access Controls</p>
                            </div>
                            <div className="matrix-item">
                                <Code className="matrix-icon" size={20} />
                                <h4>Automation</h4>
                                <p>Python Scripting for Security Tasks</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Timeline */}
                <div className="about-timeline">
                    <h2 className="timeline-header">Experience & Education</h2>

                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-marker"><Briefcase size={16} /></div>
                            <div className="timeline-content">
                                <span className="timeline-date">Sep 2025 - Present</span>
                                <h3>Technical Lead</h3>
                                <span className="timeline-org">Computer Society Of India (SRMCEM)</span>
                                <p>Orchestrated 3+ campus-wide CTF events, authored 20+ custom challenges, and standardized secure coding workshops.</p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-marker"><Briefcase size={16} /></div>
                            <div className="timeline-content">
                                <span className="timeline-date">Sep 2024 - May 2025</span>
                                <h3>Technical Team Member</h3>
                                <span className="timeline-org">GeeksforGeeks (SRMCEM)</span>
                                <p>Conducted specialized labs on Linux Privilege Escalation and Network Sniffing. Curated security documentation for 500+ students.</p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-marker"><Briefcase size={16} /></div>
                            <div className="timeline-content">
                                <span className="timeline-date">Mar 2024 - Aug 2024</span>
                                <h3>Cyber Security Intern</h3>
                                <span className="timeline-org">Security Firm</span>
                                <p>Conducted VAPT on 15+ web apps, developed automated Python scanners, and executed AWS Security Audits.</p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-marker"><GraduationCap size={16} /></div>
                            <div className="timeline-content">
                                <span className="timeline-date">Expected Sep 2027</span>
                                <h3>B.Tech in Computer Science & Data Science</h3>
                                <span className="timeline-org">Shri Ramswaroop Memorial College (SRMCEM)</span>
                                <p>Coursework: Network Security, DBMS, Cryptography, Operating Systems.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
