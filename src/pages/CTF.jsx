import { useState } from 'react';
import { Target, Server, Cloud, Cpu } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import '../styles/CTF.css';

const platforms = [
    { name: 'Hack The Box', rank: 'Pro Hacker', percentile: 'Global Rank', points: 'Owned Systems', color: 'violet' },
    { name: 'TryHackMe', rank: 'Top 0.5%', percentile: 'God Mode', points: 'Red Teamer', color: 'pink' },
    { name: 'PortSwigger', rank: 'Practitioner', percentile: 'Advanced', points: 'Web Security', color: 'cyan' }
];

const achievements = [
    { title: 'Enterprise Active Directory Exploitation', result: 'Simulated breach of 500+ node forest. Performed Kerberoasting, DCSync, and Golden Ticket attacks.', icon: <Server size={22} />, color: 'violet' },
    { title: 'Multi-Cloud Red Teaming', result: 'Compromised hybrid AWS/Azure environment via misconfigured IAM roles and lateral movement.', icon: <Cloud size={22} />, color: 'cyan' },
    { title: 'Advanced Web Exploitation', result: 'Custom chaining of Insecure Deserialization & SSTI to achieve RCE on hardened targets.', icon: <Cpu size={22} />, color: 'pink' },
    { title: 'Hardened Network Traversal', result: 'Pivoting through 3+ segregated subnets using double SSH tunneling and custom proxies.', icon: <Target size={22} />, color: 'amber' }
];

const CTF = () => {
    const [headerRef, headerVisible] = useIntersectionObserver();
    const [platformRef, platformVisible] = useIntersectionObserver();
    const [achieveRef, achieveVisible] = useIntersectionObserver();

    const v = (vis) => vis ? 'visible' : '';

    return (
        <div className="ctf-page">
            <div className="grain-overlay"></div>
            
            <div className="container section" style={{ paddingTop: 'calc(var(--nav-height) + 80px)' }}>
                <div ref={headerRef} className="section-header center">
                    <div className={`section-eyebrow animate-in ${v(headerVisible)}`}>OPERATIONS</div>
                    <h1 className={`display-xl animate-in stagger-1 ${v(headerVisible)}`}>
                        CTFs & <span className="text-gradient-hero">Achievements</span>
                    </h1>
                    <p className={`section-desc animate-in stagger-2 ${v(headerVisible)}`}>
                        Proven track record in pro-labs, competitive platforms, and global rankings.
                    </p>
                </div>

                <div ref={platformRef} className="platforms-grid">
                    {platforms.map((p, i) => (
                        <div key={p.name} className={`platform-card glass-card animate-in stagger-${i + 1} ${v(platformVisible)}`}>
                            <div className="corner-mark tl"></div>
                            <div className="corner-mark tr"></div>
                            <div className="corner-mark bl"></div>
                            <div className="corner-mark br"></div>
                            
                            <div className="platform-header">
                                <h3 className={`glow-text ${p.color}`}>{p.name}</h3>
                                <span className="platform-percentile">{p.percentile}</span>
                            </div>
                            
                            <div className="platform-rank">
                                <span className="rank-label">Rank</span>
                                <span className="rank-value">{p.rank}</span>
                            </div>
                            
                            <div className="platform-points">{p.points}</div>
                        </div>
                    ))}
                </div>

                <div ref={achieveRef} style={{ marginTop: '100px' }}>
                    <div className="section-header">
                        <div className="section-eyebrow">TACTICAL</div>
                        <h2 className={`display-lg animate-in ${v(achieveVisible)}`}>
                            Advanced <span className="text-dim-part">Simulations</span>
                        </h2>
                    </div>
                    
                    <div className="achievements-grid">
                        {achievements.map((a, i) => (
                            <div key={i} className={`achievement-card glass-card animate-in stagger-${i + 1} ${v(achieveVisible)}`}>
                                <div className="corner-mark tl"></div>
                                <div className="corner-mark bl"></div>
                                
                                <div className={`achievement-icon ${a.color}`}>
                                    {a.icon}
                                </div>
                                <div className="achievement-body">
                                    <h3>{a.title}</h3>
                                    <p>{a.result}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTF;
