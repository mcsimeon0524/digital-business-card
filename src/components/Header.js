import React from "react";
import "./Header.css";
import profileImage from "../images/profileimage.jpg";
import linkedInLogo from "../images/LinkedIn-logo.png";
import emailLogo from "../images/Email-logo.png";

const Header = () => {
    return (
        <div className="profile-container">
            <header className="header">
                <img
                    className="profile-image"
                    src={profileImage}
                    alt="Melchor Simeon"
                />
            </header>
            <div className="profile-bio">
                <h1 className="profile-name">Melchor Simeon</h1>
                <p className="profile-title">Frontend Developer</p>
                <p className="profile-small">more coming soon</p>
                <div className="profile-contacts">
                    <div className="profile-links">
                        <a
                            target="blank"
                            rel="noopener noreferrer"
                            className="profile-email"
                            href="melchorcsimeon@gmail.com"
                        >
                            <img
                                className="email-logo"
                                src={emailLogo}
                                alt=""
                            />
                            Email
                        </a>
                        <a
                            target="blank"
                            rel="noopener noreferrer"
                            className="profile-linkedin"
                            href="https://www.linkedin.com/in/melchor-simeon-23a0a0167/"
                        >
                            <img
                                className="linkedin-logo"
                                src={linkedInLogo}
                                alt=""
                            />
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
