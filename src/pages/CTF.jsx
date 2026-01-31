
import { Flag, Target, Trophy, Award, Shield, Terminal, Cloud, Server, Cpu } from 'lucide-react';
import Card from '../components/ui/Card';
import '../styles/CTF.css';

const platforms = [
    {
        name: 'Hack The Box',
        rank: 'Pro Hacker',
        percentile: 'Top Global Rank',
        points: 'Owned Systems',
        color: '#9fef00' // HTB Greenish
    },
    {
        name: 'TryHackMe',
        rank: 'Top 0.5%',
        percentile: 'God Mode',
        points: 'Red Teamer',
        color: '#D83133' // THM Red
    },
    {
        name: 'PortSwigger',
        rank: 'Practitioner',
        percentile: 'Advanced',
        points: 'Web Security',
        color: '#ff6633' // Orange
    }
];

const achievements = [
    {
        title: 'Enterprise Active Directory Exploitation',
        result: 'Simulated breach of 500+ node forest. Performed Kerberoasting, DCSync, and Golden Ticket attacks.',
        icon: <Server size={24} />
    },
    {
        title: 'Multi-Cloud Red Teaming',
        result: 'Compromised hybrid AWS/Azure environment via misconfigured IAM roles and lateral movement.',
        icon: <Cloud size={24} />
    },
    {
        title: 'Advanced Web Exploitation',
        result: 'Custom chaining of Insecure Deserialization & SSTI to achieve RCE on hardened targets.',
        icon: <Cpu size={24} />
    },
    {
        title: 'Hardened Network Traversal',
        result: 'Pivoting through 3+ segregated subnets using double SSH tunneling and custom proxies.',
        icon: <Target size={24} />
    }
];

const CTF = () => {
    return (
        <div className="container section">
            <div className="header-center">
                <h1 className="section-title">Operations & Achievements</h1>
                <p className="section-desc">
                    Proven track record in high-stakes environments, advanced pro-labs, and competitive global rankings.
                </p>
            </div>

            <div className="ctf-dashboard">
                {/* Platforms */}
                <h2 className="subsection-title">Platform & Global Rankings</h2>
                <div className="platforms-grid">
                    {platforms.map((p) => (
                        <Card key={p.name} className="platform-card" style={{ borderTop: `4px solid ${p.color}` }}>
                            <div className="platform-header">
                                <h3>{p.name}</h3>
                                <span className="percentile" style={{ color: p.color }}>{p.percentile}</span>
                            </div>
                            <div className="rank-display">
                                <span className="rank-label">Rank</span>
                                <span className="rank-value">{p.rank}</span>
                            </div>
                            <div className="points-display">
                                <span>{p.points}</span>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="achievements-section" style={{ marginTop: '60px' }}>
                <h2 className="section-subtitle">Advanced Simulations & Pro Labs</h2>
                <div className="achievements-grid">
                    {achievements.map((achievement, index) => (
                        <Card key={index} className="achievement-card">
                            <div className="achievement-icon">
                                {achievement.icon}
                            </div>
                            <div className="achievement-content">
                                <h3>{achievement.title}</h3>
                                <p>{achievement.result}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CTF;
