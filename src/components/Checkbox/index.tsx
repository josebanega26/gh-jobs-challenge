import React from 'react';
import { Text, CheckboxContainer, HiddenCheckbox, StyledCheckbox } from './style';

interface ICheckboxProps {
  label?: string;
  onChange?: Function;
  checked?: boolean;
  space?: string;
}

const Checkbox: React.FC<ICheckboxProps> = ({
  label = 'default label',
  onChange,
  checked,
  space,
}) => {
  return (
    <CheckboxContainer space={space}>
      <HiddenCheckbox
        checked={checked}
        onChange={() => {
          !!onChange && onChange();
        }}
      />
      <StyledCheckbox></StyledCheckbox>
      <Text>{label}</Text>
    </CheckboxContainer>
  );
};

export default Checkbox;
