import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  font-family: Poppins;
  color: #282538;
  font-size: 1.5rem;
  p {
    font-weight: 700;
  }
  small {
    font-weight: 300;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <p>
        Github &nbsp;<small>Jobs</small>
      </p>
    </HeaderWrapper>
  );
};

export default Header;
