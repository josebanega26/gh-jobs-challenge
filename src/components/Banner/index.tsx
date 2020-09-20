import React from 'react';
import styled from 'styled-components';
import SearchBox from 'components/SearchBox';
import bannerBackground from 'assets/images/bannerImg.png';

const BannerWrapper = styled.div`
  min-height: 138px;
  border-radius: 8px;
  background-image: url(${bannerBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = () => {
  return (
    <BannerWrapper>
      <SearchBox placeholder='Title, companies, expertise or benefits' withButton></SearchBox>
    </BannerWrapper>
  );
};

export default Banner;
