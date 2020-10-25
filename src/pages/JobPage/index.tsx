import React from 'react';
import { RouteComponentProps } from '@reach/router';
import Section from 'hocs/Section';
import { Sidebar, SubTitle, Title, Tag, Text } from 'common/styles';
import BackButton from 'components/BackButton'
import { mockResponse } from 'api/mockdata';
import { IJob } from 'models/jobs.model';

interface JobPageProps extends RouteComponentProps {

}

const JobPage: React.FC<JobPageProps> = () => {
  const detailJob: IJob = mockResponse[0];
  console.log('dj', detailJob);
  return <Section>
    <Sidebar>
      <BackButton></BackButton>
      <SubTitle>
        How to apply
      </SubTitle>
      <Text dangerouslySetInnerHTML={{
        __html: detailJob.how_to_apply
      }}>
      </Text>
    </Sidebar>
    <main>Job Page</main>
  </Section>;
};

export default JobPage;
