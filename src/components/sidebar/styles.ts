import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideBarWrapper = styled.aside`
  height: 700px;
  width: 200px;
  background-color: #e5e5e5;
`;

export const SideBarContainer = styled.div`
  padding-top: 58px;
  height: 265px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const SideBarItemList = styled.ul`
  width: 100%;
  padding: 5% 10%;
`;

export const ItemLink = styled(Link)``;

export const SideBarItem = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 37px;
  border: 1px solid #333;
  border-radius: 10px;
  margin: 20px 0;
`;

export const SideBarAddNewItem = styled.button``;
