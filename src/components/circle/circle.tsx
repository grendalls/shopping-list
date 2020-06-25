import React, { FC, ReactNode } from 'react';
import { CircleWrapper, CircleInner } from './styles';

interface Props {
  width?: number;
  height?: number;
  color?: string;
  children?: ReactNode;
  circleMultiplier?: number;
}

const Circle: FC<Props> = ({
  width = 40,
  height = 40,
  color = 'transparent',
  children,
  circleMultiplier = 0.3,
}) => {
  return (
    <CircleWrapper width={width} height={height}>
      <CircleInner
        width={width * circleMultiplier}
        height={height * circleMultiplier}
        color={color}
      >
        {children}
      </CircleInner>
    </CircleWrapper>
  );
};

export default Circle;
