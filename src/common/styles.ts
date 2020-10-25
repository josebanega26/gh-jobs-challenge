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

export const Title = styled.h4<{ bold?: boolean  }>`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ bold }) => bold ? '1.5rem' : '1.25rem'};
  font-weight: ${({ bold }) => bold ? '700' : '400'};
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

export const Text = styled.div<{ bold?: boolean  }>`
  font-family: ${({ theme,bold }) => !bold ? theme.fonts.primary : theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: ${({ bold }) => bold ? '500' : '400'};
  line-height:21px;
  a{
    color: ${({ theme }) => theme.colors.primary};
    text-decoration:none;
    &:hover{
      opacity:0.8;
    }
  }
`;

export const ImageContainer = styled.div<{sm?: boolean}>`
  overflow: hidden;
  border-radius: 8px;
  width: ${({ sm }) => sm ? '42px' : '90px'};
  display: flex;
  align-items: center;
  height: ${({ sm }) => sm ? '42px' : '90px'};
  img {
    width: inherit;
  }
`;

export const CompanyName = styled.p<{ lg?: boolean  }>`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ lg }) => lg ? '1.125rem' : '0.75rem'};
  padding-bottom: 0.5rem;
  font-weight: 700;
`;