import React, { FC } from 'react';
import { MenuItemContainer, MenuItemContainerActive } from './styles';
import remove from '@assets/remove.svg';
import { Circle } from '../circle';

interface Props {
  circleColor?: string;
  children: string;
  isActive: boolean;
}

const MenuItem: FC<Props> = ({ circleColor, children, isActive }: Props) => {
  const content = (
    <>
      <Circle color={circleColor} circleMultiplier={0.3}></Circle>
      <span>{children}</span>
      <Circle circleMultiplier={0.3}>
        <img src={remove} alt='Close Icon' />
      </Circle>
    </>
  );
  return isActive ? (
    <MenuItemContainerActive>{content}</MenuItemContainerActive>
  ) : (
    <MenuItemContainer>{content}</MenuItemContainer>
  );
};

export default MenuItem;
