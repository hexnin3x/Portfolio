import { Award, Calendar, CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import '../styles/Certifications.css';

const certificationsData = [
    { id: 1, name: 'Certified AppSec Practitioner (CAP)', org: 'The SecOps Group', date: 'Aug 2024', id_code: '8971023', skills: 'Web Application Security · Burp Suite' },
    { id: 2, name: 'Certified Network Security Practitioner (CNSP)', org: 'The SecOps Group', date: 'Jun 2024', id_code: '8842037', skills: 'Network Security · Analysis' },
    { id: 3, name: 'Multi-Cloud Red Team Analyst (MCRTA)', org: 'CyberWarFare Labs', date: 'Jun 2024', id_code: '6664c95f', skills: 'AWS · Azure · GCP · Red Teaming' },
    { id: 4, name: 'Certified Purple Team Analyst V2', org: 'CyberWarFare Labs', date: 'Nov 2023', id_code: '665e19b6', skills: 'Purple Teaming · Incident Response' },
    { id: 5, name: 'Cyber Security Analyst (C3SA)', org: 'CyberWarFare Labs', date: 'Sep 2023', id_code: 'ad7c92e5', skills: 'Security Awareness · Penetration Testing' },
    { id: 6, name: '(ISC)² Certified in Cybersecurity', org: 'ISC2', date: 'Jun 2023', id_code: 'Verified', skills: 'Security Principles · Networking' },
    { id: 7, name: 'NSE 1 & 2 Network Security Associate', org: 'Fortinet', date: 'May 2020', id_code: '26KZtTnkkK', skills: 'Network Security' }
];

const Certifications = () => {
    const [headerRef, headerVisible] = useIntersectionObserver();
    const [gridRef, gridVisible] = useIntersectionObserver();

    return (
        <div className="certs-page">
            <div className="mesh-gradient"></div>
            <div className="grain-overlay"></div>

            <div className="container section" style={{ paddingTop: 'calc(var(--nav-height) + 80px)' }}>
                <div ref={headerRef} className="section-header">
                    <div className={`section-eyebrow animate-in ${headerVisible ? 'visible' : ''}`}>CREDENTIALS</div>
                    <h1 className={`section-title animate-in stagger-1 ${headerVisible ? 'visible' : ''}`}>
                        Certifications
                    </h1>
                    <p className={`section-desc animate-in stagger-2 ${headerVisible ? 'visible' : ''}`}>
                        Validated expertise across offensive security, cloud, and application security.
                    </p>
                </div>

                <div ref={gridRef} className="certs-list">
                    {certificationsData.map((cert, i) => (
                        <div key={cert.id} className={`cert-row glass-card animate-in stagger-${Math.min(i + 1, 6)} ${gridVisible ? 'visible' : ''}`}>
                            <div className="corner-mark tl"></div>
                            <div className="corner-mark br"></div>
                            <div className="cert-row-left">
                                <div className="cert-badge">
                                    <Award size={20} />
                                </div>
                                <div>
                                    <h3 className="cert-name">{cert.name}</h3>
                                    <p className="cert-org">{cert.org}</p>
                                </div>
                            </div>
                            <div className="cert-row-right">
                                <span className="cert-date"><Calendar size={12} /> {cert.date}</span>
                                <span className="cert-id"><CheckCircle size={12} /> {cert.id_code}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certifications;
