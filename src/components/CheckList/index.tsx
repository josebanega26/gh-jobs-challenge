import React from 'react';
import { countries } from './data';
import { List } from './style';
import Checkbox from 'components/Checkbox';

interface ICheckboxListProps {
  data?: { name: string; value?: any }[];
}

const CheckList: React.FC<ICheckboxListProps> = ({ data = countries }) => {
  return (
    <List>
      {data.map(({ name }) => (
        <Checkbox label={name} space='1rem'></Checkbox>
      ))}
    </List>
  );
};

export default CheckList;
