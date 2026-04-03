import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h3 className="footer-logo">SUJAL<span className="footer-dot">.</span></h3>
                        <p className="footer-tagline">
                            Securing systems, analyzing threats, and building resilient infrastructure.
                        </p>
                    </div>

                    <div className="footer-nav">
                        <h4>Navigate</h4>
                        <div className="footer-links">
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>

                    <div className="footer-social">
                        <h4>Connect</h4>
                        <div className="footer-social-links">
                            <a href="https://github.com/hexnin3x" target="_blank" rel="noopener noreferrer">
                                <Github size={18} /> GitHub <ArrowUpRight size={14} />
                            </a>
                            <a href="https://linkedin.com/in/hexodius" target="_blank" rel="noopener noreferrer">
                                <Linkedin size={18} /> LinkedIn <ArrowUpRight size={14} />
                            </a>
                            <a href="mailto:thesjlhexa@gmail.com">
                                <Mail size={18} /> Email <ArrowUpRight size={14} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Sujal Srivastava. Built with precision and purpose.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
