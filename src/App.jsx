import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero"
import About from "./pages/About";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
