import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight, ChevronDown, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIntersectionObserver, useScrollProgress, useMagnetic } from '../hooks/useIntersectionObserver';
import '../styles/Home.css';

/* ============ Animated Counter ============ */
const Counter = ({ target, suffix = '', prefix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !started) {
                setStarted(true);
                let current = 0;
                const step = target / 50;
                const interval = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        setCount(target);
                        clearInterval(interval);
                    } else {
                        setCount(Math.floor(current));
                    }
                }, 25);
            }
        }, { threshold: 0.5 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target, started]);

    return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

/* ============ Live Clock ============ */
const LiveClock = () => {
    const [time, setTime] = useState('');
    useEffect(() => {
        const tick = () => {
            const now = new Date();
            const h = now.getHours().toString().padStart(2, '0');
            const m = now.getMinutes().toString().padStart(2, '0');
            const s = now.getSeconds().toString().padStart(2, '0');
            setTime(`${h}:${m}:${s}`);
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);
    return <span className="live-clock">{time}</span>;
};

/* ============ Cursor Follower Gradient ============ */
const CursorGlow = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, []);
    return (
        <div className="cursor-glow" style={{
            left: pos.x,
            top: pos.y,
        }} />
    );
};

/* ============ Magnetic Button Wrapper ============ */
const MagneticBtn = ({ children, className, to, href, target, rel }) => {
    const magRef = useMagnetic(40);
    const innerRef = useMagnetic(15);
    
    if (to) {
        return (
            <Link to={to} ref={magRef} className={`magnetic-wrap ${className}`}>
                <span ref={innerRef} className="magnetic-inner">{children}</span>
            </Link>
        );
    }
    return (
        <a href={href} target={target} rel={rel} ref={magRef} className={`magnetic-wrap ${className}`}>
            <span ref={innerRef} className="magnetic-inner">{children}</span>
        </a>
    );
};

const Home = () => {
    const [heroRef, heroVisible] = useIntersectionObserver();
    
    // Multi-parallax elements driven purely by scroll (so when user "swipes", things move dynamically)
    const [pageRef, scrollProg] = useScrollProgress();
    const [storyRef, storyProg] = useScrollProgress();
    const [bentoRef, bentoProg] = useScrollProgress();

    const v = (visible) => visible ? 'visible' : '';

    return (
        <div className="home-page" ref={pageRef}>
            {/* Global layers */}
            <div className="mesh-gradient" style={{ transform: `translateY(${scrollProg * 300}px)` }}></div>
            <div className="grain-overlay"></div>
            <CursorGlow />

            {/* ============ HERO — Parallax Reactive ============ */}
            <section ref={heroRef} className="hero-section" style={{
                transform: `translateY(${scrollProg * 400}px)`,
                opacity: 1 - (scrollProg * 1.5) // Fades out much slower to keep brightness
            }}>
                <div className="hero-floating">
                    <div className={`floating-label fl-left animate-in stagger-4 ${v(heroVisible)}`}>
                        <span className="label-sm">LOCATION</span>
                        <span>INDIA / IST</span>
                    </div>
                    <div className={`floating-label fl-right animate-in stagger-4 ${v(heroVisible)}`}>
                        <span className="label-sm">LOCAL TIME</span>
                        <LiveClock />
                    </div>
                </div>

                <div className="container hero-content">
                    <div className={`hero-eyebrow animate-in stagger-1 ${v(heroVisible)}`}>
                        <div className="status-indicator">
                            <span className="status-dot"></span>
                            <span>AVAILABLE FOR WEB & OFFENSIVE SECURITY</span>
                        </div>
                    </div>

                    <h1 className={`display-hero animate-in stagger-2 ${v(heroVisible)}`}>
                        Security engineer<br/>
                        <span className="text-gradient-hero">who breaks things</span><br/>
                        to make them safer<span className="hero-period">.</span>
                    </h1>

                    <p className={`hero-subtitle animate-in stagger-3 ${v(heroVisible)}`}>
                        Specializing in Web Security and Offensive Security operations — actively identifying vulnerabilities, engineering exploits, and building the defense layer between your systems and the threat landscape.
                    </p>

                    <div className={`hero-actions animate-in stagger-4 ${v(heroVisible)}`}>
                        <MagneticBtn to="/projects" className="btn btn-primary magnetic-btn-primary">
                            View Work <ArrowRight size={16} />
                        </MagneticBtn>
                        <MagneticBtn to="/contact" className="btn btn-ghost magnetic-btn-ghost">
                            Get in touch <ArrowUpRight size={14} />
                        </MagneticBtn>
                    </div>
                </div>

                <div className={`scroll-indicator animate-in stagger-6 ${v(heroVisible)}`}>
                    <ChevronDown size={20} />
                </div>
            </section>

            {/* ============ Kinetic Scrub Marquee ============ */}
            {/* The horizontal track directly maps to the user's vertical scroll position, giving an ultra-responsive "swipe/scrub" feel */}
            <div className="kinetic-marquee-wrap">
                <div className="marquee-strip dynamic-scrub" style={{
                    transform: `translateX(-${scrollProg * 100}%) skewX(${scrollProg * -10}deg)`
                }}>
                    <div className="marquee-track">
                        {[...Array(6)].map((_, i) => (
                            <span key={i}>
                                VAPT <span className="dot"></span>
                                RED TEAMING <span className="dot"></span>
                                ZERO TRUST <span className="dot"></span>
                                CLOUD SECURITY <span className="dot"></span>
                                MALWARE ANALYSIS <span className="dot"></span>
                                INCIDENT RESPONSE <span className="dot"></span>
                                SOC OPERATIONS <span className="dot"></span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* ============ Scrolling Statement (IYO style text reveal) ============ */}
            <section className="statement-section section" ref={storyRef}>
                <div className="container-narrow">
                    {/* Parallax moving text based on local scroll tracking */}
                    <div className="parallax-text-wrap" style={{ transform: `translateY(${(0.5 - storyProg) * -150}px)` }}>
                        <p className="statement-text">
                            {/* Text opacity is mapped dynamically to scroll position to create a reveal effect */}
                            <span className="text-dim-part dynamic-reveal" style={{ opacity: Math.max(0.2, storyProg * 2) }}>In a world where every system is a target, </span>
                            <span className="text-highlight" style={{ transform: `scale(${1 + storyProg * 0.05})`, display: 'inline-block', transition: 'transform 0.1s' }}>I architect the defenses that keep organizations resilient.</span>
                            <br/><span className="text-dim-part dynamic-reveal" style={{ opacity: Math.max(0.2, (storyProg - 0.3) * 2) }}> From whitebox code audits to infrastructure hardening — </span>
                            every vulnerability discovered is a breach prevented.
                        </p>
                    </div>
                </div>
            </section>

            {/* ============ STATS — Floating / Reactive ============ */}
            <section className="stats-section">
                <div className="container">
                    <div className="shimmer-line"></div>
                    {/* The stats grid scales in dynamically as user scrolls down */}
                    <div className="stats-grid" style={{
                        transform: `scale(${0.9 + scrollProg * 0.1}) translateY(${(0.5 - scrollProg) * 50}px)`,
                        opacity: scrollProg * 3
                    }}>
                        <div className="stat-block">
                            <span className="stat-number"><Counter target={7} suffix="+" /></span>
                            <span className="stat-label">Pro Certifications</span>
                        </div>
                        <div className="stat-block">
                            <span className="stat-number"><Counter target={98} suffix="%" /></span>
                            <span className="stat-label">ML Detection Stats</span>
                        </div>
                        <div className="stat-block">
                            <span className="stat-number"><Counter target={15} suffix="+" /></span>
                            <span className="stat-label">Web Apps Secured</span>
                        </div>
                        <div className="stat-block">
                            <span className="stat-number"><Counter target={500} suffix="+" /></span>
                            <span className="stat-label">Trainees Mentored</span>
                        </div>
                    </div>
                    <div className="shimmer-line"></div>
                </div>
            </section>

            {/* ============ KINETIC BENTO GRID ============ */}
            <section className="section work-section" ref={bentoRef}>
                <div className="container">
                    <div className="section-header kinetic-header" style={{
                        transform: `translateY(${(0.6 - bentoProg) * -100}px)`
                    }}>
                        <div className="section-eyebrow">FEATURED ARSENAL</div>
                        <h2 className="section-title">Critical Projects</h2>
                        <p className="section-desc">
                            Security research, tooling, and automation — engineered for offensive operations and robust defense.
                        </p>
                    </div>

                    <div className="project-grid">
                        {/* Dynamic parallax applied to cards. The left side moves down while right side moves up creating a floating effect on scroll. */}
                        <a href="https://controled-sandbox.onrender.com/" target="_blank" rel="noopener noreferrer"
                            className="project-card glass-card kinetic-card"
                            style={{ transform: `translateY(${(0.6 - bentoProg) * 120}px)` }}>
                            <div className="corner-mark tl"></div>
                            <div className="corner-mark tr"></div>
                            <div className="corner-mark bl"></div>
                            <div className="corner-mark br"></div>
                            <div className="project-card-header">
                                <div className="project-number">01</div>
                                <div className="project-live-badge">
                                    <span className="status-dot"></span>
                                    LIVE
                                </div>
                                <ArrowUpRight size={20} className="project-arrow" />
                            </div>
                            <div className="project-card-body">
                                <h3 className="project-title">Controlled Execution Sandbox</h3>
                                <p className="project-desc">
                                    Enterprise-grade secure sandbox with AST analysis, strict command whitelisting, and a zero-trust dual-mode UI.
                                </p>
                            </div>
                            <div className="project-card-footer">
                                <div className="project-tags">
                                    <span className="tag">Python</span>
                                    <span className="tag">AST Security</span>
                                    <span className="tag">OWASP Core</span>
                                </div>
                            </div>
                        </a>

                        <div className="project-card glass-card kinetic-card"
                             style={{ transform: `translateY(${(0.6 - bentoProg) * -80}px)` }}>
                            <div className="corner-mark tl"></div>
                            <div className="corner-mark bl"></div>
                            <div className="project-card-header">
                                <div className="project-number">02</div>
                                <ArrowUpRight size={18} className="project-arrow" />
                            </div>
                            <div className="project-card-body">
                                <h3 className="project-title">HexDetector ML</h3>
                                <p className="project-desc">
                                    AI-driven network anomaly classifier processing PCAP data in real-time to detect DDoS and rapid port scanning.
                                </p>
                                <div className="project-metric">
                                    <span className="metric-number">98.4%</span>
                                    <span className="metric-label">Precision</span>
                                </div>
                            </div>
                            <div className="project-card-footer">
                                <div className="project-tags">
                                    <span className="tag">Scikit-Learn</span>
                                    <span className="tag">Traffic Analysis</span>
                                </div>
                            </div>
                        </div>

                        <div className="project-card glass-card kinetic-card delay-magic"
                             style={{ transform: `translateY(${(0.6 - bentoProg) * -40}px)` }}>
                            <div className="corner-mark tr"></div>
                            <div className="corner-mark br"></div>
                            <div className="project-card-header">
                                <div className="project-number">03</div>
                                <ArrowUpRight size={18} className="project-arrow" />
                            </div>
                            <div className="project-card-body">
                                <h3 className="project-title">CloudAudit Core</h3>
                                <p className="project-desc">
                                    Automated AWS security scanner tracking exposed buckets and privileged IAM vectors.
                                </p>
                            </div>
                            <div className="project-card-footer">
                                <div className="project-tags">
                                    <span className="tag">AWS Security</span>
                                    <span className="tag">Boto3</span>
                                </div>
                            </div>
                        </div>

                        <div className="project-card project-wide glass-card kinetic-card"
                             style={{ transform: `translateY(${(0.6 - bentoProg) * 60}px) scale(${0.98 + bentoProg * 0.05})` }}>
                            <div className="corner-mark tl"></div>
                            <div className="corner-mark tr"></div>
                            <div className="project-wide-inner">
                                <div className="project-card-header">
                                    <div className="project-number">04</div>
                                </div>
                                <div className="project-card-body" style={{ flex: 1 }}>
                                    <h3 className="project-title">Ezio AI Interface</h3>
                                    <p className="project-desc" style={{ marginBottom: 0 }}>
                                        AES-256 encrypted local bridging for secure voice-activated command architecture.
                                    </p>
                                </div>
                                <div className="project-tags" style={{ flexShrink: 0 }}>
                                    <span className="tag">Cryptography</span>
                                    <span className="tag">Voice AI</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="view-all-row" style={{ marginTop: '100px' }}>
                        <MagneticBtn to="/projects" className="btn btn-secondary magnetic-btn-secondary">
                            Engage All Projects <ArrowRight size={16} />
                        </MagneticBtn>
                    </div>
                </div>
            </section>

            {/* ============ HUGE CTA ============ */}
            <section className="cta-section section">
                <div className="container-narrow">
                    <div className="cta-inner kinetic-cta" style={{
                        transform: `scale(${1.2 - (1-bentoProg)*0.3})`,
                        opacity: bentoProg * 1.5
                    }}>
                        <h2 className="display-lg">
                            Let's build something<br/>
                            <span className="text-gradient-hero">unbreakable.</span>
                        </h2>
                        <div className="cta-actions" style={{ marginTop: '50px' }}>
                            <MagneticBtn to="/contact" className="btn btn-primary">
                                Terminate Connection <ArrowRight size={16} />
                            </MagneticBtn>
                            <MagneticBtn href="https://github.com/hexnin3x" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                GitHub Matrix <ExternalLink size={14} />
                            </MagneticBtn>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
