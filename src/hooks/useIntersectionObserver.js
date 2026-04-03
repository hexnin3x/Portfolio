import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Custom hook for scroll-triggered animations.
 * Returns [ref, isVisible] — attach ref to the element you want to observe.
 */
export const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px',
    ...options
  };

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(currentElement);
      }
    }, defaultOptions);

    observer.observe(currentElement);
    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  return [elementRef, isVisible];
};

/**
 * Custom hook for smooth mouse-tracking on elements.
 * Returns [ref, position] where position = { x, y } relative to element center.
 */
export const useMouseTracker = () => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setPosition({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  return [ref, position, { onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave }];
};

/**
 * Custom hook for dynamic scroll progress & parallax tracking.
 * Maps scroll position to a 0-1 progress value for the target ref.
 */
export const useScrollProgress = (offset = ['start end', 'end start']) => {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element has moved through the viewport
      const totalScrollableDistance = windowHeight + rect.height;
      const scrolledDistance = windowHeight - rect.top;
      
      let currentProgress = scrolledDistance / totalScrollableDistance;
      // Clamp between 0 and 1
      currentProgress = Math.max(0, Math.min(1, currentProgress));
      
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress(); // Initial check
    
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return [ref, progress];
};

/**
 * A hook for magnetic button effects (Lando Norris style)
 */
export const useMagnetic = (strength = 30) => {
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const hX = rect.left + rect.width / 2;
      const hY = rect.top + rect.height / 2;
      
      const x = ((e.clientX - hX) / rect.width) * strength;
      const y = ((e.clientY - hY) / rect.height) * strength;
      
      element.style.transform = `translate(${x}px, ${y}px)`;
    };
    
    const handleMouseLeave = () => {
      element.style.transform = 'translate(0px, 0px)';
    };
    
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);
  
  return ref;
};
