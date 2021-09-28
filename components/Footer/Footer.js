import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 300 });
  };

  return (
    <FooterContainer id="footer">
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/home/pageforlinks">How it works</FooterLink>
              <FooterLink to="/home/pageforlinks">Testimonials</FooterLink>
              <FooterLink to="/home/pageforlinks">Careers</FooterLink>
              <FooterLink to="/home/pageforlinks">Investors</FooterLink>
              <FooterLink to="/home/pageforlinks">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/home/pageforlinks">Contact</FooterLink>
              <FooterLink to="/home/pageforlinks">Support</FooterLink>
              <FooterLink to="/home/pageforlinks">Destinations</FooterLink>
              <FooterLink to="/home/pageforlinks">Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/home/pageforlinks">Submit Video</FooterLink>
              <FooterLink to="/home/pageforlinks">Agency</FooterLink>
              <FooterLink to="/home/pageforlinks">Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/home/pageforlinks">Instagram</FooterLink>
              <FooterLink to="/home/pageforlinks">Twitter</FooterLink>
              <FooterLink to="/home/pageforlinks">Facebook</FooterLink>
              <FooterLink to="/home/pageforlinks">YouTube</FooterLink>
              <FooterLink to="/home/pageforlinks">VKontakte</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={scrollToTop}>
              atom
            </SocialLogo>
            <WebsiteRights>
              atom © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
