import React, { useState } from "react";
//import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/HeroSection/Hero";
import About from "../components/AboutSection/About";
import Projects from "../components/ProjectSection/Projects";
import Contact from "../components/ContactSection/Contact";
import Footer from "../components/Footer/Footer";
import LanguageSwitch from "../components/navbar/LanguageSwitch";
import index from './index.css';

const Home = () => {
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>  
      <LanguageSwitch language={language}
        handleSetLanguage={(language) => {
          setLanguage(language);
          storeLanguageInLocalStorage(language);
        }}/>
      <Hero language={language}/>
      <About language={language}/>
      <Projects language={language}/>
      <Contact language={language}/>
      <Footer />
    </>
  );
};

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default Home;


