import React from 'react';
import placeholder from 'assets/images/placeholder.png';
import { CardContainer, TextContainer, InfoWrapper } from './style';
import { Title, Tag, ImageContainer, CompanyName, } from 'common/styles';
import InfoMessage from 'components/InfoMessage';
import { IJob } from 'models/jobs.model';

interface ICardProps {
  job: IJob;
}
const Card: React.FC<ICardProps> = ({ job }) => {
  const { company, type, title, company_logo, location, created_at } = job;
  return (
    <CardContainer>
      <ImageContainer>
        <img src={company_logo || placeholder} alt={company} loading='lazy' />
      </ImageContainer>
      <TextContainer>
        <CompanyName> {company}</CompanyName>
        <Title>{title}</Title>
        <Tag>{type}</Tag>
        <InfoWrapper>
          <InfoMessage text={location} />
          <InfoMessage last_item icon='clock' text={created_at} />
        </InfoWrapper>
      </TextContainer>
    </CardContainer>
  );
};

export default Card;
