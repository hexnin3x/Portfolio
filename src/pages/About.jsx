import { useState, useEffect } from 'react';
import { ArrowUpRight, Terminal, Cpu, Database, Cloud, Shield, Hash, Zap } from 'lucide-react';
import { useIntersectionObserver, useScrollProgress, useMagnetic } from '../hooks/useIntersectionObserver';
import '../styles/About.css';

const MagneticWrap = ({ children }) => {
    const magRef = useMagnetic(25);
    return <div ref={magRef} style={{ display: 'inline-block' }}>{children}</div>;
};

const experienceData = [
    {
        role: "Technical Lead",
        company: "Computer Society Of India (SRMCEM)",
        duration: "Sep 2025 — Present",
        description: "Orchestrated 3+ campus-wide Capture The Flag (CTF) events for 100+ participants, authored 7+ custom challenges covering Web Exploitation, Reverse Engineering, and Cryptography. Built a web-based portal for event management with rate limiting.",
        color: "violet"
    },
    {
        role: "Technical Team Member",
        company: "GeeksforGeeks (SRMCEM)",
        duration: "Sep 2024 — May 2025",
        description: "Curated a repository of 50+ technical documentations on Cyber Security. Conducted specialized labs on Linux Privilege Escalation and Network Sniffing using Wireshark, improving student lab completion rates by 50%.",
        color: "cyan"
    },
    {
        role: "Cyber Security Intern",
        company: "Confidential Security Firm",
        duration: "Mar 2024 — Aug 2024",
        description: "Conducted VAPT on 15+ web applications discovering 12+ critical vulnerabilities (BAC, Security Misconfigs). Developed an automated Python scanner saving 120+ hours, and executed advanced AWS Security Audits focusing on IAM least-privilege.",
        color: "pink"
    }
];

const About = () => {
    const [heroRef, heroVisible] = useIntersectionObserver();
    const [scrollRef, scrollProg] = useScrollProgress();
    const [expRef, expVisible] = useIntersectionObserver();
    
    // Auto-play Terminal State
    const [terminalOutput, setTerminalOutput] = useState([
        { type: 'cmd', text: 'whoami' },
        { type: 'out', text: 'sujal_srivastava' },
        { type: 'cmd', text: 'cat /etc/skills' },
    ]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTerminalOutput(prev => [
                ...prev,
                { type: 'out', text: '[OK] Offensive Security Operations loaded.' },
                { type: 'out', text: '[OK] Cloud Penetration Testing initialized.' },
                { type: 'out', text: '[OK] Vulnerability Research active.' },
                { type: 'cmd', text: './execute_payload.sh --stealth' },
                { type: 'alert', text: 'System breach simulation successful.' }
            ]);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const v = (vis) => vis ? 'visible' : '';

    return (
        <div className="about-page" ref={scrollRef}>
            <div className="mesh-gradient" style={{ transform: `translateY(${scrollProg * 250}px)` }}></div>
            <div className="grain-overlay"></div>

            {/* ===================== HERO SECTION ===================== */}
            <section className="section" style={{ paddingTop: 'calc(var(--nav-height) + 80px)' }}>
                <div className="container">
                    <div ref={heroRef} className="section-header">
                        <div className={`section-eyebrow animate-in ${v(heroVisible)}`}>ORIGIN STORY</div>
                        <h1 className={`display-xl animate-in stagger-1 ${v(heroVisible)}`} style={{ transform: `translateY(${scrollProg * 100}px)` }}>
                            System Architect <br/>
                            <span className="text-dim-part">turned</span> <span className="text-gradient-hero">Attacker.</span>
                        </h1>
                    </div>

                    <div className="about-grid">
                        {/* Auto-play Terminal Block */}
                        <div className={`terminal-block glass-card animate-in stagger-2 ${v(heroVisible)}`} style={{ transform: `translateY(${(scrollProg) * -50}px)` }}>
                            <div className="terminal-header">
                                <div className="term-dots">
                                    <span></span><span></span><span></span>
                                </div>
                                <div className="term-title">root@hexodius:~</div>
                            </div>
                            <div className="terminal-body about-term-body">
                                {terminalOutput.map((line, idx) => (
                                    <div key={idx} className={`term-line ${line.type}`}>
                                        {line.type === 'cmd' && <span className="prompt">$&gt;</span>}
                                        {line.text}
                                    </div>
                                ))}
                                <div className="term-line cmd cursor-blink"><span className="prompt">$&gt;</span> _</div>
                            </div>
                        </div>

                        {/* Story Summary Block */}
                        <div className={`about-text-block animate-in stagger-3 ${v(heroVisible)}`} style={{ transform: `translateY(${(scrollProg) * 50}px)` }}>
                            <p className="lead-text">
                                I don't just secure infrastructure; I engineer the specialized exploits required to test its Absolute Limits. 
                            </p>
                            <p className="secondary-text">
                                Based in India, I specialize in Cloud Penetration Testing, Application Security (AppSec), and Threat Intelligence. I reverse-engineer systems, automate audits using Python and cloud SDKs, and build the defense mechanisms that 99% of developers miss.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================== EXPERIENCE TIMELINE ===================== */}
            <section className="section experience-section" ref={expRef}>
                <div className="container-narrow">
                    <h2 className={`section-title animate-in center ${v(expVisible)}`} style={{ marginBottom: '80px' }}>Previous Experience</h2>
                    
                    <div className="timeline-wrapper">
                        <div className="timeline-line"></div>
                        {experienceData.map((exp, i) => (
                            <div key={i} className={`timeline-item animate-in stagger-${i+1} ${v(expVisible)}`}>
                                <div className={`timeline-dot ${exp.color}`}></div>
                                <div className="timeline-content glass-card">
                                    <div className="corner-mark tl"></div>
                                    <div className="corner-mark br"></div>
                                    <span className="timeline-date">{exp.duration}</span>
                                    <h3 className="timeline-role">{exp.role}</h3>
                                    <h4 className={`timeline-company text-${exp.color}`}>{exp.company}</h4>
                                    <p className="timeline-desc">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===================== KINETIC SKILL RADAR ===================== */}
            <section className="section radar-section">
                <div className="container">
                    <h2 className="section-title center" style={{ marginBottom: '60px' }}>Tactical Arsenal</h2>
                    
                    <div className="radar-grid">
                        <MagneticWrap>
                            <div className="radar-card" style={{ transform: `translateY(${(0.5 - scrollProg) * 100}px)` }}>
                                <Shield className="radar-icon violet" />
                                <h3>Offensive Ops</h3>
                                <p>Burp Suite Pro, Metasploit, Nmap, BloodHound</p>
                                <div className="skill-meter"><div className="fill violet" style={{ width: '95%' }}></div></div>
                            </div>
                        </MagneticWrap>

                        <MagneticWrap>
                            <div className="radar-card" style={{ transform: `translateY(${(0.5 - scrollProg) * -50}px)` }}>
                                <Cloud className="radar-icon cyan" />
                                <h3>Cloud Warfare</h3>
                                <p>AWS IAM Audits, S3 Exploits, Azure Pivot</p>
                                <div className="skill-meter"><div className="fill cyan" style={{ width: '90%' }}></div></div>
                            </div>
                        </MagneticWrap>

                        <MagneticWrap>
                            <div className="radar-card" style={{ transform: `translateY(${(0.5 - scrollProg) * 80}px)` }}>
                                <Cpu className="radar-icon pink" />
                                <h3>Malware & RE</h3>
                                <p>x64 Assembly, Ghidra, Wireshark Analysis</p>
                                <div className="skill-meter"><div className="fill pink" style={{ width: '85%' }}></div></div>
                            </div>
                        </MagneticWrap>

                        <MagneticWrap>
                            <div className="radar-card" style={{ transform: `translateY(${(0.5 - scrollProg) * -120}px)` }}>
                                <Terminal className="radar-icon amber" />
                                <h3>Automation</h3>
                                <p>Python Blackhat Tools, Bash, Linux Kernel</p>
                                <div className="skill-meter"><div className="fill amber" style={{ width: '98%' }}></div></div>
                            </div>
                        </MagneticWrap>
                    </div>
                </div>
            </section>

            {/* ===================== KINETIC HORIZONTAL MARQUEE ===================== */}
            <div className="marquee-strip dynamic-scrub" style={{ transform: `translateX(${(scrollProg - 0.5) * 100}%)`, marginTop: '100px' }}>
                <div className="marquee-track reverse">
                    {[...Array(5)].map((_, i) => (
                        <span key={i}>
                            REVERSE ENGINEERING <span className="dot"></span>
                            AWS CLOUD <span className="dot"></span>
                            THREAT HUNTING <span className="dot"></span>
                            ACTIVE DIRECTORY <span className="dot"></span>
                            OWASP TOP 10 <span className="dot"></span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
