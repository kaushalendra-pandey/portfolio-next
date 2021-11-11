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
        <a 
        target="_blank"
        href="https://drive.google.com/file/d/1nAxB3-ihULLCWwQsxwf_J9Qufm6kYo7z/view?usp=sharing" 
          download="Kaushalendra's Resume">
          <Button>
            Get My Resume 
          </Button>
        </a>
        {/* {
            <Link style={{display: 'none'}} ref="linkRef" href="#about"></Link>
        } */}
        
      </LeftSection>
    </Section>
  </>
);

export default Hero;