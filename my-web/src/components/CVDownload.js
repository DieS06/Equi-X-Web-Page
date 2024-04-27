import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "../css/cvDownload.css";

const CVDownload = () => {
    
    const downloadCV = () => {
        const pdfURL = '../assets/PDF/JuanDiegoSequeiraG_CV_Design&Programming.pdf';
        const link = document.createElement('a');
        link.href = pdfURL;
        link.download = "JuanDiegoSequeiraG_CV_Design&Programming.pdf";
        link.click();
      };
    //Lottie Animation
    const animOpt = {
        loop: true,
        autoplay: true,
        animURL: "https://lottie.host/bbd55d61-dec7-460b-933e-fa570874a344/qjFdVXp8R6.json",
    };

    //Declared for translation
    const [t] = useTranslation("global");

    return ( 
        <section className="sec-cvdld">
            <div className="colOne-content">
                <h1 className="cvdld-title">
                    {t("CVDownload.title")}
                </h1>
                <span className="cvdld-text">
                    {t("CVDownload.parragraph")}
                </span>
                <div className="cvdld-btns">
                <button className="btn-download" onClick={downloadCV}>
                    {t("CVDownload.download")}
                </button>
                    <button className="btn-bio">{t("CVDownload.bio")}</button>
                </div>

            </div>
            <div className="colTwo-content">
                <Lottie options={animOpt} height={350} width={350} />
            </div>
        </section>
     );
}
 
export default CVDownload;