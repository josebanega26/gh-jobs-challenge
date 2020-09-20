import React from 'react';
import placeholder from 'assets/images/placeholder.png';
import { ImageContainer, CardContainer, CompanyName, TextContainer, IconWrapper } from './style';
import { Title, Tag } from 'common/styles';

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
      </TextContainer>
      <IconWrapper>
        <span>Zone</span>
        <span>Time</span>
      </IconWrapper>
    </CardContainer>
  );
};

export default Card;
