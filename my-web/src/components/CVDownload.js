import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "../css/cvDownload.css";

const CVDownload = () => {
    //Lottie Animation
    const animOpt = {
        loop: true,
        autoplay: true,
        animURL: "https://lottie.host/bbd55d61-dec7-460b-933e-fa570874a344/qjFdVXp8R6.json",
    };
    //CV URL
    const pdfURL = '../assets/PDF/JuanDiegoSequeiraG_CV_Design&Programming.pdf';
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
                    <Link to={pdfURL} target="btn-download" download="JuanDiegoSequeiraG_CV_Design&Programming.pdf">
                        <button className="btn-download">{t("CVDownload.download")}</button>
                    </Link>
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