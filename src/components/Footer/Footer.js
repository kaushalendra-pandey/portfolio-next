import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GiBlackBook } from "react-icons/gi";
import { SiLeetcode } from 'react-icons/si';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+919897106928">+91 9897106928</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:pandeysid713@gmail.com">
            pandeysid713@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Just trying to be better every day.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/kaushalendra-pandey">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/kaushalendra-pandey-47a971192/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://hashnode.com/@itsKaush">
            <GiBlackBook size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://leetcode.com/its_kaush/">
          <SiLeetcode size="3rem" />
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
