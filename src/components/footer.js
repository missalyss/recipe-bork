import React from 'react';

const Footer = ({isBorked}) => {
  return (
    <footer className="container bg-dark-blue text-cream">
      { isBorked ? "Mede-a vit ❤️ by Ilyssa Helgesun" : "Made with ❤️ by Alyssa Helgason" }
    </footer>
  );
}

export default Footer;
