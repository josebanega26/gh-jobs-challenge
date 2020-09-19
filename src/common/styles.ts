import styled from 'styled-components';

export const Sidebar = styled.aside``;

export const SubTitle = styled.h6`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 0.875rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray};
  padding-bottom: 0.875rem;
  line-height: 21px;
  font-weight: 700;
`;

export const Title = styled.h4``;
