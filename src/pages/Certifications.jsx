import { Award, Calendar, CheckCircle, Book, Shield, Lock } from 'lucide-react';
import Card from '../components/ui/Card';
import '../styles/Certifications.css';

const certificationsData = [
    {
        id: 1,
        name: 'Certified AppSec Practitioner (CAP)',
        org: 'The SecOps Group',
        date: 'Issued Aug 2024',
        id_code: '8971023',
        skills: 'Web Application Security · Burp Suite'
    },
    {
        id: 2,
        name: 'Certified Network Security Practitioner (CNSP)',
        org: 'The SecOps Group',
        date: 'Issued Jun 2024',
        id_code: '8842037',
        skills: 'Network Security · Analysis'
    },
    {
        id: 3,
        name: 'Multi-Cloud Red Team Analyst (MCRTA)',
        org: 'CyberWarFare Labs',
        date: 'Issued Jun 2024',
        id_code: '6664c95f7ebbe5a156545dd9',
        skills: 'AWS · Azure · GCP · Red Teaming'
    },
    {
        id: 4,
        name: 'Certified Purple Team Analyst V2',
        org: 'CyberWarFare Labs',
        date: 'Issued Nov 2023',
        id_code: '665e19b6',
        skills: 'Purple Teaming · Incident Response'
    },
    {
        id: 5,
        name: 'Cyber Security Analyst (C3SA)',
        org: 'CyberWarFare Labs',
        date: 'Issued Sep 2023',
        id_code: 'ad7c92e5',
        skills: 'Security Awareness · Penetration Testing'
    },
    {
        id: 6,
        name: '(ISC)² Certified in Cybersecurity',
        org: 'ISC2',
        date: 'Issued Jun 2023',
        id_code: 'Verified',
        skills: 'Security Principles · Networking'
    },
    {
        id: 7,
        name: 'NSE 1 & 2 Network Security Associate',
        org: 'Fortinet',
        date: 'Issued May 2020',
        id_code: '26KZtTnkkK',
        skills: 'Network Security'
    }
];

const Certifications = () => {
    return (
        <div className="container section">
            <div className="header-center">
                <h1 className="section-title">Certifications & Credentials</h1>
                <p className="section-desc">
                    Validated expertise across Offensive Security, Cloud, and AppSec.
                </p>
            </div>

            <div className="certs-grid">
                {certificationsData.map((cert) => (
                    <Card key={cert.id} className="cert-card">
                        <div className="cert-icon">
                            <Award size={32} />
                        </div>
                        <div className="cert-content">
                            <h3 className="cert-title">{cert.name}</h3>
                            <p className="cert-org">{cert.org}</p>

                            <div className="cert-meta">
                                <div className="meta-item">
                                    <Calendar size={14} />
                                    <span>{cert.date}</span>
                                </div>
                                <div className="meta-item">
                                    <CheckCircle size={14} />
                                    <span>ID: {cert.id_code}</span>
                                </div>
                            </div>
                            <div className="cert-skills">
                                <Shield size={14} className="skills-icon" />
                                <span>{cert.skills}</span>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
