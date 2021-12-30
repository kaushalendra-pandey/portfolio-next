import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import Blogs from '../components/Blogs/blogs';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        {/* <BgAnimation /> */}
        <img src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg"/>
      </Section>
      <Timeline />
      <Projects />
      <Technologies />
      {/* <Acomplishments /> */}
      <Blogs/>
    </Layout>
  );
};

export default Home;
