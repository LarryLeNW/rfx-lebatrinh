import { useEffect, useState } from 'react';
import { cn } from '../../lib/utils';

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className={cn(
                'fixed bottom-12 right-6 z-50 rounded-full bg-[#113D48] text-white shadow-lg transition-opacity duration-300 animate-bounce',
                isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            )}
            aria-label="Scroll to Top"
        >
            <img src='scroll-image.png' className="w-10 h-10 cursor-pointer" />
        </button>
    );
}
