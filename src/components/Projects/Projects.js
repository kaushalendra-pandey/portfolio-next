import React from 'react';

import { BlogCard, CardInfo,SeeMore, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { fullStackProjects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    {/* <SectionDivider /> */}
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {fullStackProjects.map((p, i) => {
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
            <UtilityList>
              {
                p?.visit && <ExternalLinks target="_blank" href={p.visit}>Visit</ExternalLinks>
              }
              
              <ExternalLinks target="_blank" href={p.source}>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
    <SeeMore href="/projects"> See More </SeeMore> 
  </Section>
);

export default Projects;