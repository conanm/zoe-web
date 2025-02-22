"use client";

import styles from "./page.module.css";
import { motion } from 'framer-motion';

// Main app colors
export const MainColors = {
  purple: '#BD50BD',
  yellow: '#FBC120',
  red: '#F16A67',
};

export const Gradients = {
  purple: {
    start: '#D15DD2',
    end: '#A43FA5',
  },
  yellow: {
    start: '#F1C343',
    end: '#FEBB00',
  },
  red: {
    start: '#F77F7C',
    end: '#F16A67',
  },
} as const;

export default function Home() {
  return (
    <div className={styles.main} style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <motion.img
          src="/zoe_hi.svg"
          alt="Zoe Hi"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          style={{
            position: 'absolute',
            maxHeight: '80vh',
            maxWidth: '90vw',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
        <motion.img
          src="/zoe_logo.svg"
          alt="Zoe Logo"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delay: 0.2
          }}
          style={{
            position: 'absolute',
            width: '35vh',
            zIndex: 2,
          }}
        />
      </div>
    </div>
  );
}
