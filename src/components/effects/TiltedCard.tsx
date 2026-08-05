// Adapted from react-bits (Components/TiltedCard). The original hardcodes an
// <img> as the tilted surface; this site's project cards are a browser-chrome
// mockup wrapping an image (or an NDA placeholder), so this version tilts
// arbitrary children instead.
import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const springValues = { damping: 30, stiffness: 100, mass: 2 };

interface TiltedCardProps {
  children: React.ReactNode;
  rotateAmplitude?: number;
  scaleOnHover?: number;
}

export default function TiltedCard({ children, rotateAmplitude = 8, scaleOnHover = 1.02 }: TiltedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const [enabled] = useState(() => typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    rotateX.set((offsetY / (rect.height / 2)) * -rotateAmplitude);
    rotateY.set((offsetX / (rect.width / 2)) * rotateAmplitude);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  if (!enabled) return <div className="w-full h-full">{children}</div>;

  return (
    <div
      ref={ref}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div style={{ rotateX, rotateY, scale, transformStyle: 'preserve-3d' }}>{children}</motion.div>
    </div>
  );
}
