// components/PageTransition.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -1000 }} // Exit animation
        transition={{ 
          duration: 0.4, 
          ease: [0.4, 0, 0.2, 1],
          opacity: { duration: 0.2 }
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}