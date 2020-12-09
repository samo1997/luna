import { connect } from 'react-redux'
import React, { useState } from 'react';
import styled from 'styled-components'
import {
    FooterContainer, FooterNavigation,
    FooterLeft, FooterBtn, AboutBtn, PressBtn, BlogBtn, IosBtn, AndroidBtn,
    FooterRight, FooterIcons, IconFB, IconTW, IconGooglePlus, IconIN,
    Copyright
} from "../../style/Footer";
import IconFacebook from "../../assets/svgs/facebook.svg";
import IconTwitter from "../../assets/svgs/twitter.svg";
import IconGooglePl from "../../assets/svgs/googleplus.svg";
import IconInstagram from "../../assets/svgs/instagram.svg";


const Footer = (props) => {
    return (
        <FooterContainer>
            <FooterNavigation>
                <FooterLeft>
                    <FooterBtn>
                        <AboutBtn>About us</AboutBtn>
                        <PressBtn>Press</PressBtn>
                        <BlogBtn>Blog</BlogBtn>
                        <IosBtn>iOS</IosBtn>
                        <AndroidBtn>Android</AndroidBtn>
                    </FooterBtn>
                </FooterLeft>
                <FooterRight>
                    <FooterIcons>

                        <IconFB
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferer"
                        >
                            <img src={`${IconFacebook}`} alt="Facebook Logo"></img>
                        </IconFB>

                        <IconTW src={`${IconTwitter}`}
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferer"
                        >
                            <img src={`${IconTwitter}`} alt="Twitter Logo"></img>
                        </IconTW>

                        <IconGooglePlus
                            href="https://google.com"
                            target="_blank"
                            rel="noopener noreferer"
                        >
                            <img src={`${IconGooglePl}`} alt="Google+ Logo"></img>
                        </IconGooglePlus>

                        <IconIN
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferer"
                        >
                            <img className="icons" src={`${IconInstagram}`} alt="Instagram Logo"></img>
                        </IconIN>

                    </FooterIcons>
                </FooterRight>
            </FooterNavigation>
            <Copyright>
                <p>&copy; Copyright AlSaTo & Design by Ru</p>
            </Copyright>
        </FooterContainer>
    )
}

export default connect()(Footer);
