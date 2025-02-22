"use client";

import { motion } from 'framer-motion';

export default function FAQ() {
  const handleBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setTimeout(() => {
      window.location.href = '/';
    }, 300);
  };
  return (
    <div className="page">
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px 20px',
        color: '#FFF',
        fontFamily: 'var(--font-khula)',
      }}>
        <a
          href="/"
          onClick={handleBack}
          style={{
            display: 'inline-block',
            marginBottom: '20px',
            color: '#FFF',
            textDecoration: 'none',
            fontFamily: 'var(--font-khula)',
            fontSize: '16px',
          }}
        >
          ← Back
        </a>
        <h1 style={{ 
          fontSize: '48px', 
          marginBottom: '40px',
          fontWeight: 700,
        }}>
          Frequently Asked Questions
        </h1>

        <section style={{ fontSize: '16px', lineHeight: 1.6 }}>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              marginBottom: '16px',
              fontWeight: 700,
            }}>
              What is Zoe?
            </h2>
            <p>
              Zoe is your AI companion designed to help you navigate life's challenges
              with empathy and understanding.
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              marginBottom: '16px',
              fontWeight: 700,
            }}>
              How does Zoe work?
            </h2>
            <p>
              Using advanced AI technology, Zoe learns from your interactions to provide
              personalized support and guidance.
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              marginBottom: '16px',
              fontWeight: 700,
            }}>
              Is my data secure?
            </h2>
            <p>
              Yes, we use industry-standard encryption and security measures to protect
              your data. Your privacy is our top priority.
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              marginBottom: '16px',
              fontWeight: 700,
            }}>
              Can I use Zoe offline?
            </h2>
            <p>
              While some features require an internet connection, basic functionality
              is available offline.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
