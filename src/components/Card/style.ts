import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  background: #fff;
  border-radius: 4px;
  padding: 12px;
  box-shadow: 0px 2px 4px 0px #00000060;
  align-items: center;
  margin-bottom: 2rem;
  cursor: pointer;
`;

export const TextContainer = styled.div`
  padding-left: 1rem;
  flex-grow: 1;
`;

export const InfoWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 12px;
  display: flex;
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    position: inherit;
    display: flex;
    justify-content: flex-end;
  }
`;
