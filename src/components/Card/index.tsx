import React from 'react';
import placeholder from 'assets/images/placeholder.png';
import { ImageContainer, CardContainer, CompanyName, TextContainer, InfoWrapper } from './style';
import { Title, Tag } from 'common/styles';
import InfoMessage from 'components/InfoMessage';
import { IJob } from 'models/jobs.model';
import { getDifference } from 'helper';

interface ICardProps {
  job: IJob;
}
const Card: React.FC<ICardProps> = ({ job }) => {
  const { company, type, title, company_logo, location, created_at } = job;
  getDifference(created_at);
  return (
    <CardContainer>
      <ImageContainer>
        <img src={company_logo || placeholder} alt={company} />
      </ImageContainer>
      <TextContainer>
        <CompanyName> {company}</CompanyName>
        <Title>{title}</Title>
        <Tag>{type}</Tag>
        <InfoWrapper>
          <InfoMessage text={location} />
          <InfoMessage icon='clock' text={created_at} />
        </InfoWrapper>
      </TextContainer>
    </CardContainer>
  );
};

export default Card;
