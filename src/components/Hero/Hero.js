import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />My Personal Portfolio
      </SectionTitle>
      <SectionText>
        hello there my name is rukundo ronaldo and i am a frontend developper
      </SectionText>
      <Button >More about me</Button>
    </LeftSection>
  </Section>
);

export default Hero;