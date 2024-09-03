'use client';
import React, { useEffect, useState, useRef, RefObject } from 'react';
import {
  motion,
  SpringOptions,
  useMotionValue,
  useSpring,
  AnimatePresence,
  Transition,
  Variant,
} from 'framer-motion';
import { cn } from '@/lib/utils';
import { PlusIcon } from 'lucide-react';

type CursorElementProps = {
  children: React.ReactNode;
  className?: string;
  springConfig?: SpringOptions;
  attachToParent?: boolean;
  transition?: Transition;
  variants?: {
    initial: Variant;
    animate: Variant;
    exit: Variant;
  };
  onPositionChange?: (x: number, y: number) => void;
};

export function CursorElement({
  children,
  className,
  springConfig,
  attachToParent,
  variants,
  transition,
  onPositionChange,
}: CursorElementProps) {
  const cursorX = useMotionValue(
    typeof window !== 'undefined' ? window.innerWidth / 2 : 0
  );
  const cursorY = useMotionValue(
    typeof window !== 'undefined' ? window.innerHeight / 2 : 0
  );
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(!attachToParent);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      onPositionChange?.(e.clientX, e.clientY);
    };

    document.addEventListener('mousemove', updatePosition);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
    };
  }, [cursorX, cursorY, onPositionChange]);

  const cursorXSpring = useSpring(cursorX, springConfig || { duration: 0 });
  const cursorYSpring = useSpring(cursorY, springConfig || { duration: 0 });

  useEffect(() => {
    const handleVisibilityChange = (visible: boolean) => {
      setIsVisible(visible);
    };

    if (attachToParent && cursorRef.current) {
      const parent = cursorRef.current.parentElement;
      if (parent) {
        parent.addEventListener('mouseenter', () => {
          //   parent.style.cursor = 'none';
          handleVisibilityChange(true);
        });
        parent.addEventListener('mouseleave', () => {
          //   parent.style.cursor = 'auto';
          handleVisibilityChange(false);
        });
      }
    }

    return () => {
      if (attachToParent && cursorRef.current) {
        const parent = cursorRef.current.parentElement;
        if (parent) {
          parent.removeEventListener('mouseenter', () => {
            // parent.style.cursor = 'none';
            handleVisibilityChange(true);
          });
          parent.removeEventListener('mouseleave', () => {
            // parent.style.cursor = 'auto';
            handleVisibilityChange(false);
          });
        }
      }
    };
  }, [attachToParent]);

  return (
    <motion.div
      ref={cursorRef}
      className={cn('pointer-events-none fixed left-0 top-0 z-50', className)}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial='initial'
            animate='animate'
            exit='exit'
            variants={variants}
            transition={transition}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface CursorProps {
  cursorClassName?: string
  text : string,
  isHoveringClassName? : string
}
export default function Cursor({  cursorClassName , isHoveringClassName , text}: CursorProps) {

  const [isHovering, setIsHovering] = useState(false);
  // const targetRefs = useRef<HTMLDivElement>(null);


  const handlePositionChange = (x: number, y: number) => {
    const refs = document.querySelectorAll('.target-refs');
    for( const ref of Array.from(refs)) {
        const rect = ref.getBoundingClientRect();
        const isInside =
          x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
        setIsHovering(isInside);
        if (isInside == true) return;
    }
  };

  return (
    <CursorElement
      attachToParent
      variants={{
        initial: { scale: 0.3, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.3, opacity: 0 },
      }}
      springConfig={{
        bounce: 0.001,
      }}
      transition={{
        ease: 'easeInOut',
        duration: 0.15,
      }}
      onPositionChange={handlePositionChange}
    >
      <motion.div
        animate={{
          width: isHovering ? 140 : 16,
          height: isHovering ? 40 : 16,
        }}
        className={cn(' flex items-center justify-center rounded-[24px] bg-gray-500/40 backdrop-blur-md dark:bg-gray-300/40', cursorClassName , isHovering && isHoveringClassName)}
      >
        <AnimatePresence>
          {isHovering ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className='inline-flex w-full items-center justify-center'
            >
              <div className='inline-flex items-center  text-white'>
                {text}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </CursorElement>
  )

}