import React from 'react';
import { motion } from 'framer-motion';
import { Cursor, WhatsAppWidget } from '../components';
import Email from './Email';
import Footer from './Footer';
import Navbar from './Navbar';
import Social from './Social';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className = '' }: Props) => {
  return (
    <>
      <Cursor />
      <WhatsAppWidget />
      
      {/* Dynamic Glows */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-bg pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent/20 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -40, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/20 blur-[120px]"
        />
      </div>

      <Navbar />
      <main
        className={`mx-auto px-4 sm:px-8 max-w-7xl pt-24 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-4 md:gap-6 ${className}`}
      >
        {children}
      </main>
      <Footer />
      <Social />
      <Email />
    </>
  );
};

export default Layout;
