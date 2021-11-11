import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { FaServer, FaAws} from "react-icons/fa";
import {AiOutlineDeploymentUnit} from "react-icons/ai"

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies
    </SectionTitle>
    <SectionText>
      
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js and NextJs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaServer size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Go(learning)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Experience with <br />
            MongoDB and MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaAws size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Cloud</ListTitle>
          <ListParagraph>
            Worked with<br />
            AWS.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <AiOutlineDeploymentUnit size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Deployment</ListTitle>
          <ListParagraph>
            Deployed projects using<br />
            Heroku, Netlify and Vercel
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
