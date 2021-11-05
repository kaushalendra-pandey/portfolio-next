import React from 'react';
import {BiArrowBack} from "react-icons/bi"
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from '../Projects/ProjectsStyles';
import { Section, SectionDivider, SectionTitle, LinkContainer } from '../../styles/GlobalComponents';
import { mentorProject } from '../../constants/constants';
import Link from "next/link"

const MentorProject = () => (
  <Section nopadding id="projects">
  
    <SectionTitle main>Mentored Projects</SectionTitle>
    <h3> These are the projects which I taught 🚀 being the part of MyWays. 
      So, the code cannot be provided. 
      Also the deployment will depend on the companies decision😅.  
    </h3>
    <br/>
     <SectionDivider />
    <GridContainer>
      {mentorProject.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            {
               p.source === "Not available" ? (
                 <HeaderThree> 
                   Projects will be made live as soon as they are on <a href="https://myways.in" target="_blank"> Myways </a>.
                 </HeaderThree>

               ) : (
                <UtilityList>
                  <ExternalLinks target="_blank" href={p.visit}>Visit</ExternalLinks>
                  {/* <ExternalLinks href={p.source}>Code</ExternalLinks> */}
                </UtilityList>
               )

            }
            
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default MentorProject;