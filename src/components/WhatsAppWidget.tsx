import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const WhatsAppWidget = () => {
  // Added +91 country code assuming India context for '8928042884'
  const PHONE_NUMBER = '918928042884';
  const MESSAGE = encodeURIComponent("Hi Bipin! I saw your portfolio and would like to connect.");
  const whastappUrl = `https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${MESSAGE}`;

  return (
    <motion.a
      href={whastappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 2 }}
      className="fixed bottom-6 right-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-xl shadow-green-500/30 hover:shadow-green-500/50"
      aria-label="Contact me on WhatsApp"
    >
      <Icon icon="mdi:whatsapp" width={32} height={32} className="text-white" />
    </motion.a>
  );
};

export default WhatsAppWidget;
