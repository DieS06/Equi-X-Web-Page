import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "../css/wsIcon.css"

const WhatsAppIcon = () => {
    const url = 'https://wa.me/+50686750723';
    const handleClick = () => {
        window.location.href = url;
    }
      
    return (
        <Link to={url} target="_blank" onClick={handleClick} className="whatsapp-icon">
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
        </Link> 
    );
}
 
export default WhatsAppIcon;