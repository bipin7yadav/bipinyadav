import { motion } from 'framer-motion';
import { Tablist, Wrapper } from '../components';
import { getSectionAnimation } from '../animations';
import { experienceSection } from '../utils/portfolio';

const Experience = () => {
  return (
    <Wrapper
      id="experience"
      className="lg:col-span-3 !py-12"
      {...getSectionAnimation}
    >
      <h2 className="heading-secondary">{experienceSection.title}</h2>
      <Tablist experiences={experienceSection.experiences} />
    </Wrapper>
  );
};

export default Experience;
