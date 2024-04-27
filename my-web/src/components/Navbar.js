import LogoEquiX from '../assets/images/SVG/LogoEquiX.svg';
import { useTranslation } from 'react-i18next';
import "../css/navbar.css";

//Button states
const lngs = {
    es: {nativeName: 'ES'},
    en: {nativeName: 'EN'}
  }

const Navbar = () => { 
    //Declared for translation
    const [t, i18n] = useTranslation("global");
    return (  
        <nav className="navbar">
                <a href="/">
                    <img src={LogoEquiX} alt="Equi-X Logo" />
                </a>
            <div className="links">
                <ul>
                    <li>
                        <a href="/Gallery" >{t("navBar.gallery")}</a>
                    </li>
                    <li>
                        <a href="/">{t("navBar.contact")}</a>
                    </li>
                    <li className='translate'>
                        {Object.keys(lngs).map((lng) => (
                        <button 
                        type='submit' 
                        key={lng} 
                        onClick={() => i18n.changeLanguage(lng)}
                        className={lng === 'en' ? 'button rounded-left' : 'button rounded-right'}
                        disabled={i18n.resolvedLanguage === lng}
                        > 
                        {lngs[lng].nativeName}                
                        </button>
                        ))}  
                    </li>                                                                                    
                </ul>                          
            </div>
        </nav>
    );
}
export default Navbar;
