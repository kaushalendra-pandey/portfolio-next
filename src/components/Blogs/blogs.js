import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from '../Projects/ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const blogs = [
    {
        title : "Next.js",
        description : "Next.js is a framework build over react.js which, as they claim, is laden up with all the features needed for production. If you are...",
        link : "https://itskaush.hashnode.dev/nextjs-what-and-why"
    } ,
    {
        title : "Sweetalerts",
        description : "Alerts have been a major part of a developer's life. Be it from testing code flow in the development or telling a user th..",
        link : "https://itskaush.hashnode.dev/sweetalerts-beautiful-alerts"
    } ,
    {
        title : "Doing things without React!",
        description : "Everyone who has been working with REACT has come across a situation where he needs to render the same component for so many items...",
        link : "https://itskaush.hashnode.dev/doing-things-without-react"
    } ,
    // {
    //     title : "Constructors in CPP",
    //     description : "Object-Oriented Programming is a paradigm of programming which is based on the concepts of Objects. It is a style of p...",
    //     link : "https://itskaush.hashnode.dev/constructors-in-c"
    // },
    // {
    //     title : "Copy Constructors in Cpp",
    //     description : "Copy constructors are constructors which are used to create an object as a copy of another object...",
    //     link : "https://itskaush.hashnode.dev/copy-constructors-in-c"
    // } ,
    {
      title : "CORS",
      description : "CORS or Cross-Origin Resource Sharing is the mechanism that allows websites from different origins ... ",
      link : "https://itskaush.hashnode.dev/cors"
  } ,
  
    
  ]

const Blogs = () => (
  <Section nopadding id="blogs">
    {/* <SectionDivider /> */}
    <SectionTitle main>Blogs</SectionTitle>
    <GridContainer>
      {blogs.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
            </div>
            <UtilityList>
              <ExternalLinks href={p.link}>Read More</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Blogs;