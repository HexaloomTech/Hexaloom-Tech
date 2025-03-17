import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Blog />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
