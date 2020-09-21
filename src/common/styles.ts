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

export const Title = styled.h4`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.25rem;
  font-weight: 400;
  padding-bottom: 12px;
  /* white-space: nowrap; */
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Tag = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 6px 8px;
  border: 1px solid ${({ theme }) => theme.colors.textPrimary};
  text-transform: capitalize;
  text-align: center;
  width: fit-content;
`;
