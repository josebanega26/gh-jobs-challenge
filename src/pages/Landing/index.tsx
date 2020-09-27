import React from 'react';
import Section from 'hocs/Section';
import { Sidebar } from 'common/styles';
import SearchBox from 'components/SearchBox';
import Checkbox from 'components/Checkbox';
import CheckList from 'components/CheckList';
import CardList from 'components/CardList';
import { mockResponse } from 'api/mockdata';
import { getAllJobs } from 'api/jobsAPI';

const Landing = () => {
  React.useEffect(() => {
    const fetchJobs = async () => {
      await getAllJobs();
    };
    fetchJobs();
  }, []);
  return (
    <Section>
      <Sidebar>
        <Checkbox space='2rem' label='Full time'></Checkbox>
        <SearchBox
          title='Location'
          width='100%'
          placeholder='City, state, zip code or country'
          margin='0 0 25px 0'
        ></SearchBox>
        <CheckList></CheckList>
      </Sidebar>
      <main>
        <CardList jobs={mockResponse}></CardList>
      </main>
    </Section>
  );
};

export default Landing;
