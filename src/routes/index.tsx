import React from 'react';
import Landing from '../pages/Landing';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0.25rem 7.5rem;
`;

const AppRoutes = () => {
  return (
    <Wrapper>
      <Landing></Landing>
    </Wrapper>
  );
};

export default AppRoutes;
