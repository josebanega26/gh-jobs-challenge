import React from 'react';
import { RouteComponentProps } from '@reach/router';
import Section from 'hocs/Section';
import { Sidebar, SubTitle, Title, Tag, Text, CompanyName, ImageContainer } from 'common/styles';
import BackButton from 'components/BackButton'
import { mockResponse } from 'api/mockdata';
import { IJob } from 'models/jobs.model';
import { TitleContainer, CompanyContainer } from './styles'
import InfoMessage from 'components/InfoMessage';

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
      <Text bold dangerouslySetInnerHTML={{
        __html: detailJob.how_to_apply
      }}>
      </Text>
    </Sidebar>
    <main>
      <TitleContainer>
        <Title bold>{detailJob.title}</Title>
        <Tag>{detailJob.type}</Tag>
      </TitleContainer>
      <InfoMessage icon="clock" text={detailJob.created_at}></InfoMessage>
      <CompanyContainer>
        <ImageContainer >
          <img src={detailJob.company_logo} alt={detailJob.company} loading='lazy' />
        </ImageContainer>
        <div className='right-side'>
          <CompanyName lg > {detailJob.company}</CompanyName>
          <InfoMessage text={detailJob.location}></InfoMessage>
        </div>
      </CompanyContainer>

      <Text dangerouslySetInnerHTML={{
        __html: detailJob!.description as string
      }}>
      </Text>
    </main>
  </Section>;
};

export default JobPage;
