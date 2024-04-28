import React from "react";

const Footer = ({ isBorked }) => {
  return (
    <footer className="container bg-darkBlue white radiusSm textCenter pt2 pb2">
      {isBorked
        ? "Mede-a vit ❤️ by Ilyssa Mershell"
        : "❤️ by Alyssa Michelle"}
    </footer>
  );
};

export default Footer;
