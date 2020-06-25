import styled from 'styled-components';

interface Props {
  width?: number;
  height?: number;
  color?: string;
  iconUrl?: string;
}

const calcWidth = ({ width }: Props) => width + 'px';
const calcHeight = ({ height }: Props) => height + 'px';

export const CircleWrapper = styled.div`
  position: relative;
  width: ${calcWidth};
  height: ${calcHeight};
`;

export const CircleInner = styled(CircleWrapper)`
  background-color: ${({ color }: Props) => color};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & > img {
    display: block;
  }
`;
