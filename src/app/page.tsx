"use client";

import styles from "./page.module.css";
import { motion } from 'framer-motion';

export default function Home() {
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    // Wait for the exit animation to complete
    setTimeout(() => {
      window.location.href = href;
    }, 300);
  };

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
            zIndex: 2
          }}
        />
        <div style={{
          position: 'absolute',
          bottom: '20vh',
          display: 'flex',
          gap: '20px',
          zIndex: 3,
        }}>
          <motion.a
            href="https://apps.apple.com/app/zoe"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <img
              src="/badges/app-store-badge.svg"
              alt="Download on the App Store"
              style={{ height: '48px', width: 'auto' }}
            />
          </motion.a>
          <motion.a
            href="https://play.google.com/store/apps/details?id=com.zoe"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <img
              src="/badges/play-store-badge.svg"
              alt="Get it on Google Play"
              style={{ height: '48px', width: 'auto' }}
            />
          </motion.a>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            position: 'absolute',
            bottom: '24px',
            right: '24px',
            display: 'flex',
            gap: '24px',
            fontSize: '14px',
            color: '#FFF',
            zIndex: 3,
            fontFamily: 'var(--font-khula)',
            fontWeight: 700,
          }}
        >
          <a
            href="/privacy"
            onClick={handleNavigation}
            style={{
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            Privacy Policy
          </a>
          <span>•</span>
          <a
            href="/faq"
            onClick={handleNavigation}
            style={{
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            FAQ
          </a>
        </motion.div>
      </div>
    </div>
  );
}
