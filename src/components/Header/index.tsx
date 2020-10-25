import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const HeaderWrapper = styled.header`
  font-family: Poppins;
  padding: 2rem 0;
  font-size: 1.5rem;

  a {
    text-decoration: none;
    font-weight: 700;
    color: #282538;
    &:hover{
      opacity: 0.8
    }
     small {
    font-weight: 300;
  }
}
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to='/'>
        Github &nbsp;<small>Jobs</small>
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
