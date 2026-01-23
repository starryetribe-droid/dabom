import React from 'react';
import { motion } from 'framer-motion';

interface ShapeProps {
  className?: string;
  color?: string;
  opacity?: number;
}

// 4-leaf Clover shape based on the image (Orange, Yellow, Green circles)
export const Clover = ({ className, color = "#E4621D", opacity = 1 }: ShapeProps) => (
  <svg viewBox="0 0 140 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <circle cx="35" cy="35" r="35" fill={color} />
    <circle cx="105" cy="35" r="35" fill={color} />
    <circle cx="35" cy="105" r="35" fill={color} />
    <circle cx="105" cy="105" r="35" fill={color} />
  </svg>
);

// Broad Petal/Leaf shape (Beige, Green variants)
export const Petal = ({ className, color = "#E0E3DC", opacity = 1 }: ShapeProps) => (
  <svg viewBox="0 0 100 85" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    {/* Heart-like leaf shape */}
    <path d="M50 85C20 85 0 55 0 30C0 10 15 0 35 0C45 0 50 10 50 10C50 10 55 0 65 0C85 0 100 10 100 30C100 55 80 85 50 85Z" fill={color} />
  </svg>
);

// Wrapper for floating animation
export const FloatingDecor = ({ 
  children, 
  delay = 0, 
  duration = 6, 
  x = 15, 
  y = 15,
  rotate = 5
}: { 
  children?: React.ReactNode; 
  delay?: number; 
  duration?: number;
  x?: number;
  y?: number;
  rotate?: number;
}) => (
  <motion.div
    animate={{ 
      y: [0, -y, 0],
      x: [0, x, 0],
      rotate: [-rotate, rotate, -rotate]
    }}
    transition={{ 
      duration: duration, 
      repeat: Infinity, 
      delay: delay,
      ease: "easeInOut" 
    }}
  >
    {children}
  </motion.div>
);