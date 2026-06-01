import React from 'react';

export default function Footer() {
  return (
    <footer className="main-footer">
      <h3 className="footer-contact">Connect Securely</h3>
      <p className="footer-email">support@nexus-ecosystem.io</p>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} NEXUS Labs. All protocols reserved.
      </div>
    </footer>
  );
}