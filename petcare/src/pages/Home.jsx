import React from 'react';
import Hero from '../components/Hero';
import FeaturesAccordion from '../components/FeaturesAccordion';
import BenefitsCards from '../components/BenefitsCards';
import TestimonialsModal from '../components/TestimonialsModal';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <main>
      <Hero />
      <BenefitsCards />
      <FeaturesAccordion />
      <TestimonialsModal />
      <Newsletter />
    </main>
  );
};

export default Home;