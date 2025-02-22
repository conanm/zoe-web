"use client";

export default function PrivacyPolicy() {
  const handleBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setTimeout(() => {
      window.location.href = "/";
    }, 400); // Matches exit animation duration
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
          Privacy Policy
        </h1>
        
        <section style={{ fontSize: '16px', lineHeight: 1.6 }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px', fontWeight: 700 }}>
            Our Commitment to Privacy
          </h2>
          <p style={{ marginBottom: '20px' }}>
            At Zoe, we take your privacy seriously. This policy outlines how we collect,
            use, and protect your personal information.
          </p>

          <h2 style={{ fontSize: '24px', marginBottom: '20px', marginTop: '40px', fontWeight: 700 }}>
            Information We Collect
          </h2>
          <p style={{ marginBottom: '20px' }}>
            We collect information that you provide directly to us, including:
          </p>
          <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
            <li style={{ marginBottom: '10px' }}>Personal information (name, email)</li>
            <li style={{ marginBottom: '10px' }}>Usage data</li>
            <li style={{ marginBottom: '10px' }}>Device information</li>
          </ul>

          <h2 style={{ fontSize: '24px', marginBottom: '20px', marginTop: '40px', fontWeight: 700 }}>
            How We Use Your Information
          </h2>
          <p style={{ marginBottom: '20px' }}>
            Your information helps us provide and improve our services, communicate
            with you, and ensure the security of our platform.
          </p>
        </section>
      </div>
    </div>
  );
}
