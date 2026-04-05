import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SEO, Loader } from '../components';
import Awards from '../components/Awards';
import {
  About,
  Experience,
  Hero,
  Skills,
  Contact,
  Projects,
  Layout,
} from '../containers';
import { seoData } from '../utils/portfolio';

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SEO {...seoData} />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <div key="content">
            <Layout>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Awards />
              <Contact />
            </Layout>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
