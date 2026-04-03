import { Mail, MapPin, Send, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import '../styles/Contact.css';

const Contact = () => {
    const [headerRef, headerVisible] = useIntersectionObserver();
    const [formRef, formVisible] = useIntersectionObserver();

    return (
        <div className="contact-page">
            <div className="mesh-gradient"></div>
            <div className="grain-overlay"></div>

            <div className="container section" style={{ paddingTop: 'calc(var(--nav-height) + 80px)' }}>
                <div ref={headerRef} className="contact-hero">
                    <div className={`section-eyebrow animate-in ${headerVisible ? 'visible' : ''}`}>LIAISON</div>
                    <h1 className={`display-lg animate-in stagger-1 ${headerVisible ? 'visible' : ''}`}>
                        Let's work <span className="text-gradient">together.</span>
                    </h1>
                    <p className={`contact-intro animate-in stagger-2 ${headerVisible ? 'visible' : ''}`}>
                        Open to security roles, research collaborations, and freelance pentesting.
                    </p>
                </div>

                <div ref={formRef} className="contact-grid">
                    <div className={`contact-info animate-in ${formVisible ? 'visible' : ''}`}>
                        <div className="contact-card glass-card">
                            <div className="corner-mark tl"></div>
                            <div className="corner-mark br"></div>
                            <Mail size={18} className="contact-icon" />
                            <div>
                                <h3>Email</h3>
                                <a href="mailto:thesjlhexa@gmail.com">thesjlhexa@gmail.com</a>
                            </div>
                        </div>
                        <div className="contact-card glass-card">
                            <div className="corner-mark tl"></div>
                            <div className="corner-mark br"></div>
                            <MapPin size={18} className="contact-icon" />
                            <div>
                                <h3>Location</h3>
                                <p>Lucknow, Uttar Pradesh</p>
                            </div>
                        </div>
                        <div className="contact-socials">
                            <a href="https://github.com/hexnin3x" target="_blank" rel="noopener noreferrer" className="social-link btn btn-secondary">
                                <Github size={16} /> GitHub <ArrowUpRight size={12} />
                            </a>
                            <a href="https://linkedin.com/in/hexodius" target="_blank" rel="noopener noreferrer" className="social-link btn btn-secondary">
                                <Linkedin size={16} /> LinkedIn <ArrowUpRight size={12} />
                            </a>
                        </div>
                    </div>

                    <div className={`contact-form-wrap glass-card animate-in stagger-2 ${formVisible ? 'visible' : ''}`}>
                        <div className="corner-mark tl"></div>
                        <div className="corner-mark tr"></div>
                        <div className="corner-mark bl"></div>
                        <div className="corner-mark br"></div>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Your name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="you@example.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows="5" placeholder="What's on your mind?"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                Send Message <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
