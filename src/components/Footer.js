import styled from "styled-components";
import React from "react";

import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #000d1a;
`;

const FooterWrap = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: flex;
  grid-template-rows: 450px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    grid-template-columns: 1fr;
  }
`;

const FooterColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem 2rem 2rem 3rem;
  @media screen and (max-width: 900px) {
    align-items: center;
  }
  h1 {
    padding-top: 5rem;
    color: #fff;
    font-size: 5rem;

    @media screen and (max-width: 900px) {
      text-align: center;
    }
  }
`;

const SocialMediaWrap = styled.div`
  padding-top: 1rem;
  margin-bottom: 3rem;
  text-align: center;
`;
const SocialIcons = styled.div``;

const SocialIconLink = styled.a`
  color: #cd853f;
  font-size: 2rem;
  padding-right: 2rem;
`;

const Small = styled.div`
  color: #cd853f;
  text-align: center;
  padding-bottom: 1rem;
`;

const FooterColumnRight = styled.div`
  display: flex;
  flex-direction: rows;
  justify-content: center;
  color: #fff;
  font-size: 15px;
  margin: 10rem 2rem 2rem 3rem;
  height: 100%;

  @media screen and (max-width: 900px) {
    text-align: flex-start;
    margin: 3rem 3rem;
    width: 100%;
  }
`;

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 3rem;
  width: 130px;

  a {
    color: #fff;
    text-decoration: none;
    padding-top: 2rem;
  }
`;

const Footer = ({ heading, link1, link2, link3, link4, link5 }) => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterColumnLeft>
          <h1>{heading}</h1>
        </FooterColumnLeft>
        <FooterColumnRight>
          <FooterLinkItems>
            <h2>Contact Us</h2>
            <Link to="/">FAQ</Link>
            <Link to="/">Support</Link>
            <Link to="/">Questions</Link>
          </FooterLinkItems>
          <FooterLinkItems>
            <h2>Offices</h2>
            <Link to="/">United States</Link>
            <Link to="/">Europe</Link>
            <Link to="/">Canada </Link>
          </FooterLinkItems>
        </FooterColumnRight>
      </FooterWrap>
      <SocialMediaWrap>
        <SocialIcons>
          <SocialIconLink href={link1} target="_blank" aria-label="Facebook">
            <FaFacebook />
          </SocialIconLink>
          <SocialIconLink href={link2} target="_blank" aria-label="Instagram">
            <FaInstagram />
          </SocialIconLink>
          <SocialIconLink href={link3} target="_blank" aria-label="Youtube">
            <FaYoutube />
          </SocialIconLink>
          <SocialIconLink
            href={link4}
            target="_blank"
            aria-label="Twitter"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </SocialIconLink>
          <SocialIconLink href={link5} target="_blank" aria-label="Linkedin">
            <FaLinkedin />
          </SocialIconLink>
        </SocialIcons>
      </SocialMediaWrap>
      <Small>OznGrsc @2022</Small>
    </FooterContainer>
  );
};

export default Footer;
