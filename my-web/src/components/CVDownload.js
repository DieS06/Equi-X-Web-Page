import { useRef }from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { useTranslation } from 'react-i18next';
import "../css/cvDownload.css";

const CVDownload = () => {
    
    const downloadCV = () => {
        //CV PDF DOWNLOAD
        const pdfURL = '../assets/PDF/JuanDiegoSequeiraG_CV_Design&Programming.pdf';
        const link = document.createElement('a');
        link.href = pdfURL;
        link.download = "JuanDiegoSequeiraG_CV_Design&Programming.pdf";
        link.click();
      };
       //Declared for translation
       const [t] = useTranslation("global");
    
        //Lottie Animation
        const playerRef = useRef(null);

        const handleMouseOver = () => {
            if (playerRef.current) {
            playerRef.current.play();
            }
        };

        const handleMouseLeave = () => {
            if (playerRef.current) {
            playerRef.current.stop();
            }
        };


    return ( 
        <section className="sec-cvdld">
            <div className="colOne-content">
                <h1 className="cvdld-title">
                    {t("CVDownload.title")}
                </h1>
                <span className="cvdld-text">
                    {t("CVDownload.parragraph2")}
                </span>
                <div className="cvdld-btns">
                <button className="btn-download" onClick={downloadCV}>
                    {t("CVDownload.download")}
                </button>
                    <button className="btn-bio">{t("CVDownload.bio")}</button>
                </div>

            </div>
            <div className="colTwo-content" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                <Player 
                ref={playerRef}
                loop={false}
                autoplay={true}
                src="https://lottie.host/9d87c8a2-68eb-4134-a73c-25e3e59c5b83/3Hl67a4owT.json">        
                </Player>
            </div>
        </section>
     );
}
 
export default CVDownload;