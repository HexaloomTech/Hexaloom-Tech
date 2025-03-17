import React from "react";
import hexalogo from "/Hexa-logo.png"

const Footer = () => {
  return (
    <footer className=" text-white flex justify-center items-center m-5">
      <div className="flex ">
      <p className="flex">© 2025 <img src={hexalogo} alt="logo" className="w-30" /> All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
