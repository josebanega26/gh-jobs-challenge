import styled from 'styled-components';

export const InfoContainer = styled.div<{last_item: boolean}>`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.gray};
  fill: ${({ theme }) => theme.colors.gray};
  font-weight: 500;
  padding-right: ${({ last_item }) => last_item ? '0' : '28.5px' };
  font-family: ${({ theme }) => theme.fonts.primary};
  display: flex;
  align-items: center;
  span {
    padding-left: 7.5px;
  }
`;
