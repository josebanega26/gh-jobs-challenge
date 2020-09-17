import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textInverted};
  padding: 0 3rem;
  height: 100%;
  border: 0;
  border-radius: 4px;
  font-weight: 500;
  font-family: ${(props) => props.theme.fonts[2]};
  transition: all 0.5s;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.9;
  }
`;

interface IButtonProps {
  onClick?: Function;
  title: string;
  type: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<IButtonProps> = ({ onClick, title, type }) => {
  return (
    <ButtonWrapper
      type={type}
      onClick={(e) => {
        e.preventDefault();
        !!onClick && onClick();
      }}
    >
      {title}
    </ButtonWrapper>
  );
};
