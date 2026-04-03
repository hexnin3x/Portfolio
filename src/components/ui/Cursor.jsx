import { useEffect, useState } from 'react';
import '../../styles/Cursor.css';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            // Check if element is clickable
            const target = e.target;
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('magnetic')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateCursor);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateCursor);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <div 
                className={`custom-cursor-dot ${isHovering ? 'hover' : ''}`}
                style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
            />
            <div 
                className={`custom-cursor-ring ${isHovering ? 'hover' : ''}`}
                style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
            />
        </>
    );
};

export default Cursor;
