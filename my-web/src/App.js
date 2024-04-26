import React from 'react';
import './css/App.css';
import './css/fonts.css';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CVD from "./components/CVDownload";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className='sec-content'>
        <CVD />
        <ContactForm />
      </section>
      <Footer/>
    </div>
  );
}

export default App;