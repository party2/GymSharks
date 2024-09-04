import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css";

//importing the components
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import WorkoutSession from "./components/WorkoutSessions";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import BMICalculator from "./components/BMICalculator";
import Footer from "./components/Footer";


const App = () => {
  return (
    <Router>
      <NavBar />
      <Hero />
      <WorkoutSession />
      <Gallery />
      <Pricing />
      <Contact />
      <BMICalculator />
      <Footer />
      <ToastContainer theme='dark' position='top-center' />
    </Router>
  )
}

export default App