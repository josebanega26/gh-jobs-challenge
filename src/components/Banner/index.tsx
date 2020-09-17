import React from 'react';
import styled from 'styled-components';
import SearchBox from 'components/SearchBox';

const BannerWrapper = styled.div`
  height: 138px;
  border-radius: 8px;
  background: #3f3f3f;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = () => {
  return (
    <BannerWrapper>
      <SearchBox placeholder='City, state, zip code or country'></SearchBox>
    </BannerWrapper>
  );
};

export default Banner;
