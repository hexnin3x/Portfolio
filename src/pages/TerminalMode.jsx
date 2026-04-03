import { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Shield, FastForward } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/Terminal.css';

const TerminalMode = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'system', content: 'INITIALIZING SECURE SHELL...' },
        { type: 'system', content: 'CONNECTED TO: ROOT@HEXODIUS' },
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
                        <div><span className="cmd">projects</span> - List featured arsenal</div>
                        <div><span className="cmd">skills</span>   - Display technical capabilities</div>
                        <div><span className="cmd">experience</span>- Display operational history</div>
                        <div><span className="cmd">contact</span>  - Get contact details</div>
                        <div><span className="cmd">clear</span>    - Clear terminal</div>
                        <div><span className="cmd">gui</span>      - Return to visual mode</div>
                    </div>
                );
                break;

            case 'about':
                output = (
                    <div className="info-block">
                        <div className="info-header">USER: Sujal Kumar Srivastava</div>
                        <div>ROLE: Web Security & Offensive Security Specialist</div>
                        <div>LOC: India / IST</div>
                        <br />
                        <div>SUMMARY:</div>
                        <div>I engineer the specialized exploits required to test infrastructure at its limits.</div>
                        <div>Specializing in VAPT, Cloud Security, and automation of offensive operations.</div>
                    </div>
                );
                break;

            case 'experience':
                output = (
                    <div className="info-block">
                        <div><span className="highlight">[ Sep 2025 - Present ]</span> Technical Lead @ Computer Society Of India</div>
                        <div>- Orchestrated 3+ campus-wide CTFs, built web portals with rate limiting.</div>
                        <br/>
                        <div><span className="highlight">[ Sep 2024 - May 2025 ]</span> Technical Team Member @ GeeksforGeeks</div>
                        <div>- Conducted labs on Linux PrivEsc and Network Sniffing.</div>
                        <br/>
                        <div><span className="highlight">[ Mar 2024 - Aug 2024 ]</span> Cyber Security Intern @ Confidential Firm</div>
                        <div>- Conducted VAPT on 15+ apps spotting BAC/Misconfigs. Built Python scanners.</div>
                    </div>
                );
                break;

            case 'projects':
                output = (
                    <div className="info-block">
                        <div>1. <span className="highlight">Controlled Execution Sandbox</span> - AST analyzed enterprise sandbox</div>
                        <div>2. <span className="highlight">HexDetector ML</span> - ML-Powered Network Anomaly Classifier (98.4% Acc)</div>
                        <div>3. <span className="highlight">CloudAudit Core</span> - Automated AWS Security Auditor via Boto3</div>
                    </div>
                );
                break;

            case 'skills':
                output = (
                    <div className="info-block">
                        <div>[ OFFENSIVE OPS ] Burp Suite Pro, Metasploit, Nmap, BloodHound</div>
                        <div>[ CLOUD WARFARE ] AWS IAM Audits, S3 Exploits, Azure Pivoting</div>
                        <div>[ MALWARE & RE ] x64 Assembly, Ghidra, Wireshark</div>
                        <div>[ AUTOMATION ] Python Blackhat routines, Bash scripting</div>
                    </div>
                );
                break;

            case 'contact':
                output = (
                    <div className="info-block">
                        <div>EMAIL: thesjlhexa@gmail.com</div>
                        <div>GITHUB: github.com/hexnin3x</div>
                    </div>
                );
                break;

            case 'clear':
                setHistory([]);
                return;

            case 'gui':
            case 'exit':
                navigate('/');
                return;

            case '':
                return;

            default:
                output = `bash: command not found: ${command}. Type "help" for valid commands.`;
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
        <div className="terminal-page">
            <div className="mesh-gradient"></div>
            <div className="grain-overlay"></div>
            
            <div className="terminal-container">
                <div className="terminal-window glass-card">
                    <div className="corner-mark tl"></div>
                    <div className="corner-mark tr"></div>
                    <div className="corner-mark bl"></div>
                    <div className="corner-mark br"></div>
                    
                    <div className="terminal-header">
                        <div className="terminal-title">
                            <Shield size={16} className="text-violet" />
                            <span>ROOT@HEXODIUS:~ Interactive Interface</span>
                        </div>
                        <button className="terminal-action-btn" onClick={() => navigate('/')}>
                            GUI MODE <FastForward size={14} />
                        </button>
                    </div>

                    <div className="terminal-body" onClick={() => inputRef.current?.focus()}>
                        {history.map((entry, i) => (
                            <div key={i} className={`line ${entry.type}`}>
                                {entry.type === 'command' && <span className="prompt">$&gt;</span>}
                                <div className="content">{entry.content}</div>
                            </div>
                        ))}

                        <div className="input-line">
                            <span className="prompt">$&gt;</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                autoComplete="off"
                                autoFocus
                                spellCheck="false"
                            />
                        </div>
                        <div ref={bottomRef} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TerminalMode;
