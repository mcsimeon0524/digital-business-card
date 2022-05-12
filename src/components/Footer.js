import React from "react";
import "./Footer.css";
import githubLogo from "../images/Github-logo.png";
import instagramLogo from "../images/Instagram-logo.png";

const Footer = () => {
    return (
        <footer className="profile-footer">
            <div className="profile-social_media">
                <a
                    target="blank"
                    rel="noopener noreferrer"
                    className="profile-github"
                    href="https://github.com/mcsimeon0524"
                >
                    <img
                        src={githubLogo}
                        alt="Click to be redirected to my GitHub Profile"
                        className="profile-image_icons"
                    />
                </a>
                <a
                    target="blank"
                    rel="noopener noreferrer"
                    className="profile-instagram"
                    href="https://www.instagram.com/"
                >
                    <img
                        src={instagramLogo}
                        alt="Click to be redirected to my Instagram Profile"
                        className="profile-image_icons"
                    />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
