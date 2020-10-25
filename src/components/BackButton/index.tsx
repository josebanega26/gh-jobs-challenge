import React from 'react'
import { ReactComponent as LeftArrow } from 'assets/icons/arrow.svg';
import { Link } from '@reach/router';
import styled from 'styled-components';

const ButtonContainer = styled(Link)`
color: ${({ theme }) => theme.colors.primary};
font-family: ${({ theme }) => theme.fonts.secondary};
display: flex;
align-items: center;
font-weight: 500;
text-decoration:none;
margin-bottom:36px;
    &:hover{
    opacity:0.8;
    }
    svg{
        fill: ${({ theme }) => theme.colors.primary};
        transform: rotate(180deg);
        padding-left:15px;
    }
`
const BackButton = () => {
    return (
        <ButtonContainer to='/'>
            <LeftArrow></LeftArrow>
            Back to search
        </ButtonContainer>
    )
}

export default BackButton
