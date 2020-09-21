import React from 'react';
import { IJob } from 'models/jobs.model';
import styled from 'styled-components';
import Card from 'components/Card';

const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

interface ICardListProps {
  jobs: IJob[];
}
const CardList: React.FC<ICardListProps> = ({ jobs }) => {
  return (
    <CardsContainer>
      {jobs.map((job) => (
        <Card key={job.id} job={job}></Card>
      ))}
    </CardsContainer>
  );
};

export default CardList;
