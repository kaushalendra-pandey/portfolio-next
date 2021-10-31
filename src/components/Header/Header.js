import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GiBlackBook } from "react-icons/gi";
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Kaushalendra Pandey</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>  
      <li>
        <Link href="#blogs">
          <NavLink>Blogs</NavLink>
        </Link>
      </li>      
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/kaushalendra-pandey">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/kaushalendra-pandey-47a971192/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://hashnode.com/@itsKaush">
          <GiBlackBook size="3rem" />
        </SocialIcons>
        
      </Div3>
    </Container>
);

export default Header;
