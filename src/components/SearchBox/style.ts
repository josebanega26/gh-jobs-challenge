import styled from 'styled-components';

export const SearchContainer = styled.form<{ width?: string }>`
  height: 55px;
  background: #fff;
  padding: 4px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ width }) => width || '66%'};
  transition: all 0.4s;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const Search = styled.div`
  padding-left: 18px;
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
  fill: ${(props) => props.theme.colors.gray};
  input {
    color: ${(props) => props.theme.colors.textPrimary};
    font-family: ${(props) => props.theme.fonts[1]};
    font-size: 12px;
    line-height: 14px;
    padding-left: 10px;
    border: none;
    width: 100%;
    ::placeholder,
    ::-webkit-input-placeholder {
      color: ${(props) => props.theme.colors.gray};
    }
    :-ms-input-placeholder {
      color: ${(props) => props.theme.colors.gray};
    }
  }
`;
