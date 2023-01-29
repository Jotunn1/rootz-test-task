import styles from "./styles.module.scss";
import { ReactComponent as TwitterLogo } from "../../assets/social-networks/twitter.svg";
import { ReactComponent as FacebookLogo } from "../../assets/social-networks/facebook.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/social-networks/linkedin.svg";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="contacts">
                <h6 className="title-h6">Contacts</h6>
                <div>
                    <p className="text-t3">2019 Rootz Foundation.</p>
                    <p className="text-t3">All rights reserved</p>
                </div>
            </div>
            <div className="adress">
                <h6 className="title-h3">Headquarters</h6>
                <div>
                    {" "}
                    <p className="text-t3">1234 Taliban</p>
                    <p className="text-t3">Los Angeles, La 1234567</p>
                    <p className="text-t3">
                        <a href="tel:+1234567890">(123) 456-7890</a>
                    </p>
                </div>
            </div>
            <div className="social">
                <h6 className="title-h3">Social media</h6>
                <ul>
                    <a href="https://twitter.com/home">
                        <TwitterLogo />
                        {/* <img
                            src={require("../../assets/social-networks/twitter.png")}
                            alt="twitter logo"
                        /> */}
                    </a>
                    <a href="https://uk-ua.facebook.com/">
                        <FacebookLogo />
                        {/* <img
                            src={require("../../assets/social-networks/facebook.png")}
                            alt="facebook logo"
                        /> */}
                    </a>
                    <a href="https://www.linkedin.com/">
                        <LinkedInLogo />
                        {/* <img
                            src={require("../../assets/social-networks/linkedin.png")}
                            alt="linkedin logo"
                        /> */}
                    </a>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
