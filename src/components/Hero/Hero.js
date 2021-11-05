import React,{useRef} from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import {Link} from "next/link"

const Hero = (props) => (

  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          HOLA AMIGOS !
        </SectionTitle>
        <SectionText>
          I am a full stack web developer and a tech enthusiast. I love reading about tech,
          writing about web development, building things and problem solving.
        </SectionText>
        {/* <Button onClick={props.handleClick}>
          About Me
        </Button> */}
        {/* {
            <Link style={{display: 'none'}} ref="linkRef" href="#about"></Link>
        } */}
        
      </LeftSection>
    </Section>
  </>
);

export default Hero;