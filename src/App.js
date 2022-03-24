import React, { Fragment } from 'react';
import logo from './assets/images/logos/logo_primary.png';
import './styles/App.css';
import SplashScreen from './components/SplashScreen';
import 'react-preloading-screen/raf-polyfill';
import { Preloader, Placeholder } from 'react-preloading-screen';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ServiceSection from './components/ServiceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Element } from 'react-scroll';


function App() {
  return (
    <Fragment>
      <Preloader fadeDuration={2000}>
        <Placeholder>
          <SplashScreen logo={logo} />
        </Placeholder>
        <Hero />
      </Preloader>
      <Navbar />
      <Element name="lp-about">
        <AboutSection />
      </Element>
      <Element name="lp-services">
        <ServiceSection />
      </Element>
      <Element name="lp-contact">
        <ContactSection />
      </Element>
      <Footer />
    </Fragment>
  );
}

export default App;
