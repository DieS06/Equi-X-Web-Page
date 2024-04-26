import React from 'react';
import './css/App.css';
import './css/fonts.css';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CVD from "./components/CVDownload";
import WhatsAppIcon from './components/WhatsappChat';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className='sec-content'>
        <CVD />
        <ContactForm />
      </main>
      <Footer/> 
      <WhatsAppIcon /> 
    </div>
  );
}

export default App;