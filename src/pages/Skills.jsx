
import { Shield, Terminal, Code, Cloud, Layers, Wrench } from 'lucide-react';
import Card from '../components/ui/Card';
import '../styles/Skills.css';

const Skills = () => {
    return (
        <div className="container section">
            <div className="header-center">
                <h1 className="section-title">Technical Skills</h1>
                <p className="section-desc">
                    A toolkit built for offensive assessments, defensive hardening, and automation.
                </p>
            </div>

            <div className="skills-grid">
                {/* Security */}
                <Card className="skill-card">
                    <div className="skill-header">
                        <Shield size={24} className="skill-icon" />
                        <h3>Offensive Security</h3>
                    </div>
                    <ul className="skill-list">
                        <li>Burp Suite Professional</li>
                        <li>Metasploit Framework</li>
                        <li>Sqlmap & Nikto</li>
                        <li>BeEF & Hydra</li>
                        <li>John the Ripper</li>
                        <li>Nmap Network Scanning</li>
                    </ul>
                </Card>

                {/* Operations */}
                <Card className="skill-card">
                    <div className="skill-header">
                        <Layers size={24} className="skill-icon" />
                        <h3>Security Operations</h3>
                    </div>
                    <ul className="skill-list">
                        <li>Splunk (SIEM)</li>
                        <li>Snort (IDS/IPS)</li>
                        <li>Wireshark (Traffic Analysis)</li>
                        <li>Nessus (Vulnerability Scanning)</li>
                        <li>BloodHound (AD Security)</li>
                        <li>Mimikatz & OSINT Framework</li>
                    </ul>
                </Card>

                {/* Cloud & DevOps */}
                <Card className="skill-card">
                    <div className="skill-header">
                        <Cloud size={24} className="skill-icon" />
                        <h3>Cloud & DevOps</h3>
                    </div>
                    <ul className="skill-list">
                        <li>AWS (IAM, VPC, S3)</li>
                        <li>Docker Containerization</li>
                        <li>Linux (Kali, Ubuntu, RHEL)</li>
                        <li>Bash Scripting</li>
                        <li>Git/GitHub Version Control</li>
                    </ul>
                </Card>

                {/* Programming */}
                <Card className="skill-card">
                    <div className="skill-header">
                        <Code size={24} className="skill-icon" />
                        <h3>Programming</h3>
                    </div>
                    <ul className="skill-list">
                        <li>Python (Security Automation)</li>
                        <li>SQL (Injection & Extraction)</li>
                        <li>C++ & JavaScript</li>
                    </ul>
                </Card>
            </div>
        </div>
    );
};

export default Skills;
