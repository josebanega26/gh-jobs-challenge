import React from 'react';
import { ReactComponent as WorkIcon } from '../../assets/icons/work.svg';
import { Button } from '../Button';
import { SearchContainer, Search } from './style';

interface ISearchBoxProps {
  placeholder: string;
  withButton?: boolean;
  handlerClick?: Function;
  handlerSubmit?: Function;
  width?: string;
}

const SearchBox: React.FC<ISearchBoxProps> = ({
  placeholder,
  withButton = false,
  handlerClick,
  handlerSubmit,
  width,
}) => {
  return (
    <SearchContainer
      width={width}
      onSubmit={(e) => {
        e.preventDefault();
        !!handlerSubmit && handlerSubmit();
      }}
    >
      <Search>
        <WorkIcon></WorkIcon>
        <input placeholder={placeholder} type='text' />
      </Search>
      {withButton && <Button type='button' title='Search' onClick={handlerClick}></Button>}
    </SearchContainer>
  );
};

export default SearchBox;
