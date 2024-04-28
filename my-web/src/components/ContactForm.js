import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Player } from '@lottiefiles/react-lottie-player';
import Modal from 'react-modal';
import "../css/contactForm.css";

const ContactForm = () => {
    //Declared for translation
    const [t] = useTranslation("global");
    //MODAL POP UPS
    const [isModalOpen, setIsModalOpen] = useState(false);
    //FORM DATA
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
    const [validationErrors, setValidationErrors] = useState({}); 
    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
      setValidationErrors({ ...validationErrors, [event.target.name]: '' });
    }; 
    const handleSubmit = (event) => {
      event.preventDefault();   
      const errors = validateForm(formData);
      setValidationErrors(errors);
  
      if (Object.keys(errors).length === 0) {
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      }
      if (Object.keys(errors).length === 0) {
        setIsModalOpen(true);
      }
    };
    /*VALIDATION DATA*/
    const validateForm = (data) => {
        const errors = {};
        if (!data.firstName) {
          errors.firstName = t('contactForm.validation.firstNameRequired');
        }
        if (!data.lastName) {
          errors.lastName = t('contactForm.validation.lastNameRequired');
        }
        if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
          errors.email = t('contactForm.validation.emailInvalid');
        }
        if (!data.message) {
          errors.message = t('contactForm.validation.messageRequired');
        }
        return errors;
      };

    return ( 
        <section className="contact-form"  id='sec-contactForm'>
            <br />
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>{t("contactForm.legend")}</legend>
                    
                    <div className="form-group">
                        <label htmlFor="firstName">{t('contactForm.fullname')}</label>
                        <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        placeholder={t('contactForm.firstname')}
                        onChange={handleChange}
                        className={validationErrors.firstName ? 'error-input' : ''} 
                        required
                        />
                        {validationErrors.firstName && (
                        <span className="error-message">{validationErrors.firstName}</span>
                        )}
                        <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        placeholder={t('contactForm.lastname')}
                        onChange={handleChange}
                        className={validationErrors.lastName ? 'error-input' : ''} 
                        required
                        />
                        {validationErrors.lastName && (
                        <span className="error-message">{validationErrors.lastName}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">{t('contactForm.email')}</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        placeholder={t('contactForm.emailExample')}
                        onChange={handleChange}
                        className={validationErrors.email ? 'error-input' : ''}
                        required
                        />
                        {validationErrors.email && (
                        <span className="error-message">{validationErrors.email}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">{t('contactForm.message')}</label>
                        <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        value={formData.message}
                        placeholder={t('contactForm.writeHere')}
                        onChange={handleChange}
                        className={validationErrors.message ? 'error-input' : ''} 
                        required
                        ></textarea>
                    </div>

                    <button className='send-btn' type='submit'>{t("contactForm.send")}</button>
                </fieldset>
                
            </form>
            <br />
            <Modal className="ReactModal__Overlay" 
            isOpen={isModalOpen} onRequestClose={() => 
            setIsModalOpen(false)}>
                <div className='modal-content'>
                  <h2 className='modal-title'>{t('contactForm.confirmation.title')}</h2>
                  <Player 
                    loop
                    autoplay
                    speed={2.5}
                    src="https://lottie.host/2205565c-7ba8-4309-b68e-40502d924179/GqVrcaLvW7.json">        
                  </Player>
                  <p className='modal-p'>{t('contactForm.confirmation.message')}</p>
                  
                  <div className="btn-container">
                    <button className='btn-modal confirm' onClick={() => {
                    setIsModalOpen(false);
                    }}>
                    {t('contactForm.confirmation.confirm')}
                    </button>
                    <button className='btn-modal cancel' onClick={() => setIsModalOpen(false)}>{t('contactForm.confirmation.cancel')}</button>
                  </div>
                </div>
            </Modal>
        </section>      
     );
}
 
export default ContactForm;