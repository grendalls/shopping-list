import styled from 'styled-components';

export const MenuItemContainer = styled.li`
  margin: 40px 10%;
  display: flex;
  font-size: 14px;
  background-color: transparent;
  height: 40px;
  & :nth-child(2) {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }
`;

export const MenuItemContainerActive = styled(MenuItemContainer)`
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  background-color: #fff;
`;
