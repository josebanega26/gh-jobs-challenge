import React from 'react';
import { InfoContainer } from './style';
import { ReactComponent as WorldIcon } from 'assets/icons/world.svg';
import { ReactComponent as TimeIcon } from 'assets/icons/clock.svg';

interface IInfoViewProps {
  text: string;
  icon?: 'world' | 'clock';
}
const InfoMessage: React.FC<IInfoViewProps> = ({ text, icon = 'world' }) => {
  return (
    <InfoContainer>
      <div>
        {icon === 'world' && <WorldIcon></WorldIcon>}
        {icon === 'clock' && <TimeIcon></TimeIcon>}
      </div>
      <span>{text}</span>
    </InfoContainer>
  );
};

export default InfoMessage;
