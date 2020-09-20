import React from 'react';
import placeholder from 'assets/images/placeholder.png';
import { ImageContainer, CardContainer, CompanyName, TextContainer, InfoWrapper } from './style';
import { Title, Tag } from 'common/styles';
import InfoMessage from 'components/InfoMessage';

const Card = () => {
  return (
    <CardContainer>
      <ImageContainer>
        <img src={placeholder} alt='' />
      </ImageContainer>
      <TextContainer>
        <CompanyName> Company Title</CompanyName>
        <Title>Job</Title>
        <Tag>job type</Tag>
        <InfoWrapper>
          <InfoMessage text='country' />
          <InfoMessage icon='clock' text='publication' />
        </InfoWrapper>
      </TextContainer>
    </CardContainer>
  );
};

export default Card;
