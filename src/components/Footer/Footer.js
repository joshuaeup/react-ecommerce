import React from "react";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div id="footer-logo-img-container">
                <img
                    src="https://img.pngio.com/luxurious-badge-logo-design-free-vintage-stamp-logo-maker-badge-design-png-621_581.png"
                    alt="logo"
                    id="footer-logo-img"
                />
            </div>
            <div className="footer-social__icon__link__container">
                <a className="footer-social__icon__link" href="/">
                    <i className="footer-social__icon fab fa-youtube"></i>
                </a>
                <a className="footer-social__icon__link" href="/">
                    <i className="footer-social__icon fab fa-youtube"></i>
                </a>
                <a className="footer-social__icon__link" href="/">
                    <i className="footer-social__icon fab fa-youtube"></i>
                </a>
            </div>
            <ul className="footer-link-list">
                <li className="footer-link">
                    <a className="link" href="/">
                        About
                    </a>
                </li>
                <li className="footer-link">
                    <a className="link" href="/">
                        Support
                    </a>
                </li>
                <li className="footer-link">
                    <a className="link" href="/">
                        Blog
                    </a>
                </li>
                <li className="footer-link four">
                    <a className="link" href="/">
                        Terms of Use
                    </a>
                </li>
                <li className="footer-link">
                    <a className="link" href="/">
                        Blog
                    </a>
                </li>

                <li className="footer-link five">
                    <a className="link" href="/">
                        Privacy Policy
                    </a>
                </li>
            </ul>
            <p id="copyright" className="footer-link">
                © 2020 joshuaeup
            </p>
        </footer>
    );
};

export default Footer;
