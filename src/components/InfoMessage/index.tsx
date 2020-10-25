import React from 'react';
import { InfoContainer } from './style';
import { ReactComponent as WorldIcon } from 'assets/icons/world.svg';
import { ReactComponent as TimeIcon } from 'assets/icons/clock.svg';
import { getDifference } from 'helper';
interface IInfoViewProps {
  text: string;
  icon?: 'world' | 'clock';
  last_item?: boolean
}
const InfoMessage: React.FC<IInfoViewProps> = ({ text, icon = 'world', last_item }) => {
  return (
    <InfoContainer last_item={!!last_item}>
      <div>
        {icon === 'world' && <WorldIcon></WorldIcon>}
        {icon === 'clock' && <TimeIcon></TimeIcon>}
      </div>
      <span>{ icon === 'clock' ? getDifference(text) : text}</span>
    </InfoContainer>
  );
};

export default InfoMessage;
