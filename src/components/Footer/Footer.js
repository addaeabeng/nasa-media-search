import React from 'react';
import './Footer.css';
import githubIcon from './github.svg';

const Footer = () => (
    <footer className="footer">
        <div className="footer__wrapper">
            Developed by Addae Abeng&nbsp;
            <a
                className="footer__link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/addaeabeng/nasa-media-search"
            >
                | Find me on <img
                    className="footer__icon"
                    src={githubIcon}
                    alt="Github icon"
                    width="16"
                />

            </a>.
        </div>
    </footer>
);

export default Footer;
