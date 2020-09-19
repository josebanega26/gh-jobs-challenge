import React from 'react';
import styled from 'styled-components';
import SearchBox from 'components/SearchBox';

const BannerWrapper = styled.div`
  min-height: 138px;
  border-radius: 8px;
  background: #3f3f3f;
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
