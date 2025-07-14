'use client';

import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [displayChildren, setDisplayChildren] = useState(children);
    const [transitionStage, setTransitionStage] = useState<'fadeOut' | 'fadeIn'>('fadeIn');

    useEffect(() => {
        setTransitionStage('fadeOut');

        const timeout = setTimeout(() => {
            setDisplayChildren(children);
            setTransitionStage('fadeIn');
        }, 500); // durasi fade out sebelum render children baru

        return () => clearTimeout(timeout);
    }, [pathname, children]);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: transitionStage === 'fadeIn' ? 1 : 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                onAnimationComplete={() => {
                    if (transitionStage === 'fadeOut') {
                        setDisplayChildren(children);
                        setTransitionStage('fadeIn');
                    }
                }}
                className="min-h-screen"
            >
                {displayChildren}
            </motion.div>

        </AnimatePresence>
    );
}
