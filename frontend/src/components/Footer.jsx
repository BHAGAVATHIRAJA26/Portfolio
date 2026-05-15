import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 bg-dark-bg/90 backdrop-blur-md border-t border-accent-cyan/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-primary/60 text-sm">
            © 2026 Bhagavathi Raja S. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#home" className="text-text-primary/60 hover:text-accent-cyan transition-colors text-sm">
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
