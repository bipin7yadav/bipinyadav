import { ReactNode, HTMLAttributes, ElementType, useRef } from 'react';
import { motion, MotionProps, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

interface Props extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  id?: string;
  animate?: boolean;
}

const Wrapper = ({
  children,
  as = 'section',
  className = '',
  id = '',
  animate = true,
  ...rest
}: Props & MotionProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const background = useMotionTemplate`radial-gradient(400px circle at ${smoothMouseX}px ${smoothMouseY}px, rgba(34, 211, 238, 0.1), transparent 80%)`;

  const baseStyle = `bg-bg-secondary/20 backdrop-blur-2xl border border-white/5 rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-xl relative overflow-hidden group/wrapper hover:border-white/10 transition-colors duration-700 ${className}`;

  const renderContent = () => (
    <>
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover/wrapper:opacity-100 transition-opacity duration-500"
        style={{ background }}
      />
      {children}
    </>
  );

  if (animate) {
    const MotionTag = motion(as);

    return (
      <MotionTag
        ref={containerRef as any}
        onMouseMove={handleMouseMove}
        id={id}
        className={baseStyle}
        {...rest}
      >
        {renderContent()}
      </MotionTag>
    );
  }

  const CustomTag = `${as}` as ElementType;

  return (
    <CustomTag
      ref={containerRef}
      onMouseMove={handleMouseMove}
      id={id}
      className={baseStyle}
      {...rest}
    >
      {renderContent()}
    </CustomTag>
  );
};

export default Wrapper;
