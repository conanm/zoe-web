"use client";

import React from 'react';
import './faq.css';

const FAQPage: React.FC = () => {
  return (
    <div className="faq-container">
      <h1 className="faq-title">FAQs – Zoe</h1>

      <div className="faq-sections">
        <section className="faq-section">
          <h2 className="faq-question">1. What exactly is Zoe?</h2>
          <p>Zoe is a friendly AI chatbot designed for teens aged 13-15. Think of it as a mix between a big sister, a diary, and a fun chat companion. Zoe listens, chats, and keeps conversations engaging, but always in a safe and supportive way.</p>
        </section>

        <section className="faq-section">
          <h2 className="faq-question">2. Is Zoe safe for my child?</h2>
          <p>Yes! Safety is our top priority. Zoe is not a random chatbot—it has built-in safeguards to keep conversations age-appropriate and prevent anything harmful. If your child says something really concerning (like talking about self-harm or serious distress), we may flag it for review. But in most cases, Zoe simply provides gentle insights about your child's mood so you can better support them.</p>
        </section>

        <section className="faq-section">
          <h2 className="faq-question">3. Can my child become addicted to chatting with Zoe?</h2>
          <p>No, Zoe is designed to encourage healthy use. Conversations are limited to around 20 messages per session, and your child can only have a few sessions per day. This ensures that Zoe is a fun, light-touch companion, not something they rely on too much.</p>
        </section>

        <section className="faq-section">
          <h2 className="faq-question">4. Can I see everything my child talks about?</h2>
          <p>We respect your child's privacy while also keeping you informed. You won't see full conversations, but if you choose to receive weekly summaries, you'll get gentle hints about their mood, struggles, or little things they might appreciate you asking about.</p>
          <p>For example, you might get a summary like this:</p>
          <p className="faq-example">"Lately, [your child] seems a bit overwhelmed with school but really enjoyed talking about music. Maybe they'd love to chat about their favorite songs over dinner?"</p>
          <p>This gives you a natural way to connect without invading their privacy.</p>
        </section>

        <section className="faq-section">
          <h2 className="faq-question">5. What if Zoe detects something serious?</h2>
          <p>If Zoe notices a really worrying message, it may flag it for review. This doesn't happen often, but if it does, we recommend checking in with your child in a gentle, supportive way.</p>
        </section>

        <section className="faq-section">
          <h2 className="faq-question">6. Does Zoe remember everything my child says?</h2>
          <p>No. Messages are only stored for 10 days to help keep conversations flowing, then they are automatically deleted. Zoe doesn't build a long-term memory, and we don't train AI models on personal data.</p>
        </section>

        <section className="faq-section">
          <h2 className="faq-question">7. Where is my child's data stored?</h2>
          <p>Most of their personal preferences (like topics they enjoy) are stored only on their device. This means:</p>
          <ul>
            <li>If they delete the app or change phones, that information is lost.</li>
            <li>We do not store personal profiles on our servers.</li>
            <li>Conversations are deleted after 10 days automatically.</li>
          </ul>
        </section>

        <section className="faq-section">
          <h2 className="faq-question">8. Can strangers talk to my child through Zoe?</h2>
          <p>Absolutely not. Zoe is not a social network—it's a closed, private chat. Your child only interacts with Zoe, and no other users or strangers can send messages.</p>
        </section>

        <section className="faq-section">
          <h2 className="faq-question">9. How do updates and summaries work?</h2>
          <p>If you opt for the weekly summaries, Zoe will provide gentle nudges about your child's general mood, struggles, or things they're excited about. It's not intrusive—just a subtle way to help you stay connected.</p>
        </section>
      </div>
    </div>
  );
};

export default FAQPage;
