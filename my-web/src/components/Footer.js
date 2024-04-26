import "../css/index.css";
import git from "../assets/images/SVG/Github.svg";
import beh from "../assets/images/SVG/Behance.svg";
import insta from "../assets/images/SVG/Instagram.svg";
import linkedin from "../assets/images/SVG/Linkedin.svg";

const Footer = () => {
    return ( 
        <footer>
            <div className="top-footer">

            </div>
            <div className="bot-footer">
                <div className="div-footer">
                    <div className="social-media">
                        <a className="github-link" href="https://github.com/DieS06"><img src={git} alt="Github link portfolio." /></a>
                        <a className="behance-link" href="https://www.behance.net/jdiesequeirag0623"><img src={beh} alt="Behance link portfolio." /></a>
                        <a className="insta-link" href="https://www.instagram.com/equix.digital/"><img src={insta} alt="Instagram link." /></a>
                        <a className="linkedin-link" href="https://www.linkedin.com/in/diego-sequeira06/"><img src={linkedin} alt="Linkedin link." /></a>
                    </div>               
                </div>
            </div>
            <div className="copyright">
                <p>© 2024 Equi-X Digital</p>
            </div>
        </footer>
     );
}
 
export default Footer;