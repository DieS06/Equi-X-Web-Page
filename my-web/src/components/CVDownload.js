import photo15 from '../assets/images/RAW/15.JPG';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "../css/cvDownload.css";

const CVDownload = () => {
    const pdfURL = '../assets/PDF/JuanDiegoSequeiraG_CV_Design&Programming.pdf';
    //Declared for translation
    const [t] = useTranslation("global");

    return ( 
        <section className="sec-cvdld">
            <div className="colOne-content">
            <h1 className= "cvdld-title">
                {t("CVDownload.title")}
            </h1>
            <span className="cvdld-text">
                {t("CVDownload.parragraph")}
            </span>
            <div className="cvdld-btns">
            <Link to={pdfURL} target="btn-download" download="JuanDiegoSequeiraG_CV_Design&Programming.pdf">
                <button className="btn-download">{t("CVDownload.download")}</button>
            </Link>
                <button className="btn-bio">{t("CVDownload.bio")}</button>
            </div>
                
            </div>
            <div className="colTwo-content">
                <img src={photo15} alt="Macro focus lights." />
            </div>
            
        </section>
     );
}
 
export default CVDownload;