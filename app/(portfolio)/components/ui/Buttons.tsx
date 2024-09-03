"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FilledButtonProps {
    onClick?: () => void,
    className?: string,
    variant?: 'filled' | 'empty',
    children: React.ReactNode
}

export default function Button({ children, onClick, className, variant }: FilledButtonProps) {
    const [isHovered, setIsHovered] = useState(false);
    const duration = 0.5;
    const gap = 40

    return (
        <div className={cn('p-4 border-[0.5px] border-orangeColor rounded-xl', variant == 'filled' && 'bg-orangeColor')}>
            <motion.button
                className={cn("relative overflow-hidden text-white rounded", className , variant !== 'filled' && 'text-orangeColor')}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={onClick}
            >
                <motion.span
                    className="inline-block"
                    initial={{ y: 0 }}
                    animate={{ y: isHovered ? -gap : 0 }}
                    transition={{ duration }}
                >
                    {children}
                </motion.span>
                <motion.span
                    className="absolute left-0 right-0"
                    initial={{ y: gap }}
                    animate={{ y: isHovered ? 0 : gap }}
                    transition={{ duration }}
                >
                    {children}
                </motion.span>
            </motion.button>
        </div>

    );
};