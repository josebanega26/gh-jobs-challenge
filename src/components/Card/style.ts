import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  background: #fff;
  border-radius: 4px;
  padding: 12px;
  box-shadow: 0px 2px 4px 0px #00000060;
`;
export const ImageContainer = styled.div`
  overflow: hidden;
  border-radius: 8px;
  width: 90px;
  height: 90px;
`;

export const CompanyName = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.75rem;
  padding-bottom: 0.5rem;
  font-weight: 700;
`;

export const TextContainer = styled.div`
  padding-left: 1rem;
`;

export const IconWrapper = styled.div`
  position: absolute;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.gray};
  bottom: 20px;
  right: 12px;
  span {
    font-weight: 500;
    padding-left: 28.5px;
    font-family: ${({ theme }) => theme.fonts.primary};
  }
`;
