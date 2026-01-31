
import { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/Terminal.css';

const TerminalMode = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'system', content: 'INITIALIZING SECURE SHELL...' },
        { type: 'system', content: 'CONNECTED TO: SUJAL_KUMAR_SRIVASTAVA [THE_CYBER_SEC_BUD]' },
        { type: 'system', content: 'Type "help" to list available commands.' },
    ]);
    const bottomRef = useRef(null);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
        inputRef.current?.focus();
    }, [history]);

    const handleCommand = (cmd) => {
        const args = cmd.trim().toLowerCase().split(' ');
        const command = args[0];

        let output = null;

        switch (command) {
            case 'help':
                output = (
                    <div className="help-grid">
                        <div><span className="cmd">about</span>    - View professional profile</div>
                        <div><span className="cmd">projects</span> - List featured projects</div>
                        <div><span className="cmd">skills</span>   - Display technical arsenal</div>
                        <div><span className="cmd">contact</span>  - Get contact details</div>
                        <div><span className="cmd">clear</span>    - Clear terminal</div>
                        <div><span className="cmd">exit</span>     - Return to GUI mode</div>
                    </div>
                );
                break;

            case 'about':
                output = (
                    <div className="info-block">
                        <div className="info-header">USER: Sujal Kumar Srivastava</div>
                        <div>ROLE: Cybersecurity Associate | Red Teamer</div>
                        <div>EDUCATION: B.Tech CS & Data Science (SRMCEM)</div>
                        <br />
                        <div>SUMMARY:</div>
                        <div>Specialist in Offensive Security and Multi-Cloud Red Teaming.</div>
                        <div>Focused on engineering Python-based security workflows reducing manual audit overhead by 60%.</div>
                    </div>
                );
                break;

            case 'projects':
                output = (
                    <div className="info-block">
                        <div>1. <span className="highlight">HexDetector</span> - ML-Powered Network Anomaly Classifier (98.4% Accuracy)</div>
                        <div>2. <span className="highlight">CloudAudit</span> - Automated AWS Security Auditor using Boto3</div>
                        <div>3. <span className="highlight">Ezio</span> - Secure AI Command Interface (AES-256)</div>
                    </div>
                );
                break;

            case 'skills':
                output = (
                    <div className="info-block">
                        <div>[OFFENSIVE] Burp Suite, Metasploit, Nmap, Sqlmap, Hydra</div>
                        <div>[DEFENSIVE] Splunk, Snort, Wireshark, Nessus</div>
                        <div>[CLOUD] AWS (IAM, VPC, S3), Docker, Azure, GCP</div>
                        <div>[CODE] Python, Bash, SQL, C++, JavaScript</div>
                    </div>
                );
                break;

            case 'contact':
                output = (
                    <div className="info-block">
                        <div>EMAIL: thesjlhexa@gmail.com</div>
                        <div>LINKEDIN: linkedin.com/in/hexodius</div>
                        <div>GITHUB: github.com/hexnin3x</div>
                        <div>LOC: Lucknow, UP, India</div>
                    </div>
                );
                break;

            case 'clear':
                setHistory([]);
                return;

            case 'exit':
                navigate('/');
                return;

            case '':
                return;

            default:
                output = `Command not found: ${command}. Type "help" for valid commands.`;
        }

        setHistory(prev => [
            ...prev,
            { type: 'command', content: cmd },
            { type: 'output', content: output }
        ]);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };

    return (
        <div className="terminal-container">
            <div className="terminal-window">
                <div className="terminal-header">
                    <div className="terminal-title">
                        <Shield size={16} />
                        <span>ROOT@THE_CYBER_SEC_BUD:~</span>
                    </div>
                    <button className="close-btn" onClick={() => navigate('/')}>
                        <X size={18} />
                    </button>
                </div>

                <div className="terminal-body" onClick={() => inputRef.current?.focus()}>
                    {history.map((entry, i) => (
                        <div key={i} className={`line ${entry.type}`}>
                            {entry.type === 'command' && <span className="prompt">root@cybersec:~$</span>}
                            <div className="content">{entry.content}</div>
                        </div>
                    ))}

                    <div className="input-line">
                        <span className="prompt">root@cybersec:~$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            autoComplete="off"
                            autoFocus
                        />
                    </div>
                    <div ref={bottomRef} />
                </div>
            </div>
        </div>
    );
};

export default TerminalMode;
