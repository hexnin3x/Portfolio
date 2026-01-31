
import { Mail, MapPin, Send } from 'lucide-react';
import Card from '../components/ui/Card';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div className="container section contact-section">
            <div className="contact-grid">
                <div className="contact-info">
                    <h1 className="section-title">Get In Touch</h1>
                    <p className="contact-desc">
                        I’m open to internships, entry-level roles, and collaborative security projects. If you’re interested in my work or want to discuss cybersecurity, feel free to reach out.
                    </p>

                    <div className="contact-details">
                        <div className="detail-item">
                            <Mail className="detail-icon" size={24} />
                            <div>
                                <h3>Email</h3>
                                <a href="mailto:thesjlhexa@gmail.com">thesjlhexa@gmail.com</a>
                            </div>
                        </div>

                        <div className="detail-item">
                            <MapPin className="detail-icon" size={24} />
                            <div>
                                <h3>Location</h3>
                                <p>Lucknow, Uttar Pradesh</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Card className="contact-form-card">
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Hacker" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="hacker@hacker.hack" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Your message..."></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default Contact;
