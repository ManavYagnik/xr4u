import React from 'react';
import NewHero from '../NewHero';
import Preface from '../Preface';
import Preface2 from '../Preface2';
import TabContent from '../TabContent';
import CTA from '../CTA';

const HomePage = () => {
  return (
    <div>
      <NewHero />
      <Preface />
      <Preface2 />
      <TabContent />
      <CTA />
    </div>
  );
}

export default HomePage;
