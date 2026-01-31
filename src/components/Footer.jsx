
import { Github, Linkedin, Mail } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h3>THE CYBER SEC <span className="accent">BUD</span></h3>
                        <p className="footer-desc">
                            Securing systems, analyzing threats, and building resilient infrastructure.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4>Connect</h4>
                        <div className="social-icons">
                            <a href="https://github.com/hexnin3x" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com/in/hexodius" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:thesjlhexa@gmail.com" aria-label="Email">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Sujal Srivastava. Built with focus on performance, security, and clarity.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
