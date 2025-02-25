import React from 'react';
import './privacy.css'; // We'll need to create this CSS file

const PrivacyPolicy: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-AU');

  return (
    <div className="privacy-policy-container">
      <h1 className="policy-title">Privacy Policy for Zoe</h1>
      <p className="policy-date"><strong>Effective Date:</strong> {currentDate}</p>
      <p className="policy-date"><strong>Last Updated:</strong> {currentDate}</p>

      <div className="policy-sections">
        <section className="policy-section">
          <h2 className="section-title">1. Introduction</h2>
          <p>Welcome to Zoe, an AI-powered chatbot designed for users aged 10-15. Your privacy is our priority, and we are committed to protecting your personal data. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.</p>
          <p>If you are under 13 years old, parental consent is required to use Zoe. Parents can review, manage, or delete their child's data at any time.</p>
          <p><strong>Note:</strong> Zoe is currently only available in Australia.</p>
        </section>

        <section className="policy-section">
          <h2 className="section-title">2. Information We Collect</h2>
          <p>We collect only the minimum necessary information to provide and improve Zoe's experience.</p>

          <h3 className="section-subtitle">2.1 Information You Provide</h3>
          <ul className="policy-list">
            <li><strong>Messages & Conversations:</strong> We temporarily store messages to maintain short-term context for better conversations. These messages are automatically deleted after 10 days and are not user-identifiable.</li>
            <li><strong>Parental Consent Information:</strong> If required, we collect parental contact details to verify consent.</li>
          </ul>

          <h3 className="section-subtitle">2.2 Information Stored on Your Device (Client-Side)</h3>
          <ul className="policy-list">
            <li><strong>User Preferences & Personal Info:</strong> Any preferences or personalization data (e.g., favorite topics, chat settings) are stored only on your device and are not stored on our backend.</li>
            <li>If you delete the app or change your phone, this information is lost.</li>
            <li>During a session, this data is passed temporarily to help customize responses, but it is never stored permanently on our servers.</li>
          </ul>

          <h3 className="section-subtitle">2.3 Information Collected Automatically</h3>
          <ul className="policy-list">
            <li><strong>Device Information:</strong> Device type, operating system, and app version.</li>
            <li><strong>Usage Data:</strong> Interaction patterns for app performance monitoring.</li>
            <li><strong>IP Address & Location (Limited Use):</strong> Used only for compliance (e.g., detecting underage users in certain regions).</li>
          </ul>

          <h3 className="section-subtitle">2.4 Premium Plan Features & Summaries</h3>
          <p>If a parent subscribes to our premium plan for weekly summaries, the following applies:</p>
          <ul className="policy-list">
            <li>Summaries of conversations (not full chats) are stored for 30 days to help track trends.</li>
            <li>These summaries are linked to the user's private data.</li>
            <li>Original conversations are never stored beyond 10 days.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="section-title">3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="policy-list">
            <li>Enable Zoe's responses and maintain short-term conversation history.</li>
            <li>Ensure compliance with child safety regulations.</li>
            <li>Provide weekly summaries (if enabled by a parent).</li>
            <li>Respond to legal requests or enforce our Terms of Service.</li>
            <li>Comply with Australian privacy laws, including the Privacy Act 1988.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="section-title">4. No AI Training on User Data</h2>
          <p>Zoe does not use your conversations for AI model training. We only store short-term history to restart conversations in subsequent sessions.</p>
          <p>If a user submits a complaint, they may attach their conversation history to help us diagnose issues and improve safety guardrails.</p>
        </section>

        <section className="policy-section">
          <h2 className="section-title">5. How We Protect Your Data</h2>
          <p>We use end-to-end encryption, secure cloud storage, and strict access controls to protect your information. We do not sell or share your data with advertisers or third-party marketers.</p>
        </section>

        <section className="policy-section">
          <h2 className="section-title">6. Data Retention & Deletion</h2>
          <ul className="policy-list">
            <li>Messages are automatically deleted after 10 days.</li>
            <li>If you delete your account, all associated data is immediately purged.</li>
            <li>Weekly summaries (if enabled) are stored for 30 days before being deleted.</li>
            <li>Any personal preferences or settings are stored only on your device and are lost if you delete the app or switch devices.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="section-title">7. Parental Rights & Controls</h2>
          <p>For users under 13, parental consent is required. Parents can:</p>
          <ul className="policy-list">
            <li>Request access to their child's data.</li>
            <li>Request deletion of stored data.</li>
            <li>Withdraw consent at any time by contacting us at hi@zoelovesyou.com.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="section-title">8. Changes to This Privacy Policy</h2>
          <p>We may update this policy periodically. If changes affect how we handle children's data, we will notify users and obtain new parental consent if necessary.</p>
        </section>

        <section className="policy-section">
          <h2 className="section-title">9. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p>📧 Email: hi@zoelovesyou.com</p>
          <p>🌍 Website: zoelovesyou.com</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 