import React from "react";
import hexalogo from "/Hexa-logo.png"

const Footer = () => {
  const getDate = new Date().getFullYear();



  return (
    <footer className=" text-white flex justify-center items-center m-5">
      <div className="flex ">
      <p className="flex">© {getDate} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
