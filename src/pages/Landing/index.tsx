import React from 'react';
import Section from 'hocs/Section';
import { Sidebar } from 'common/styles';
import SearchBox from 'components/SearchBox';

const Landing = () => {
  return (
    <Section>
      <Sidebar>
        <SearchBox width='100%' placeholder='City, state, zip code or country'></SearchBox>
      </Sidebar>
      <main>I'm the main</main>
    </Section>
  );
};

export default Landing;
