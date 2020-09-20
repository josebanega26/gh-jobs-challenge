import React from 'react';
import { IJobs } from 'models/jobs.model';
import styled from 'styled-components';
import Card from 'components/Card';

const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

interface ICardListProps {
  jobs: IJobs[];
}
const CardList: React.FC<ICardListProps> = ({ jobs }) => {
  return (
    <CardsContainer>
      {jobs.map((job) => (
        <Card key={job.id}></Card>
      ))}
    </CardsContainer>
  );
};

export default CardList;
