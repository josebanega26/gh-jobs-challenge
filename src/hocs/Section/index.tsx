import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding-top: 2.65rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 32px;
  transition: all 1s;
  @media (max-width: ${({ theme }) => theme.size.md}) {
    grid-template-columns: 1fr;
  }
`;

interface ISectionsProps {
  children: React.ReactNode;
}
const Section: React.FC<ISectionsProps> = ({ children }) => {
  return <SectionWrapper>{children}</SectionWrapper>;
};

export default Section;
