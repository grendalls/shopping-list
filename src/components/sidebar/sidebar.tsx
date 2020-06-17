import React from 'react';
import { Link } from 'react-router-dom';
import {
  SideBarWrapper,
  SideBarContainer,
  SideBarItemList,
  SideBarItem,
} from './styles';

const SideBar = () => {
  return (
    <SideBarWrapper>
      <SideBarContainer>
        <Link to="/">Все задачи</Link>
        <SideBarItemList>
          <li>
            <SideBarItem to="/items">Покупки</SideBarItem>
          </li>
          <li>
            <SideBarItem to="/books">Книги</SideBarItem>
          </li>
          <li>
            <SideBarItem to="/music">Музыка</SideBarItem>
          </li>
        </SideBarItemList>
      </SideBarContainer>
    </SideBarWrapper>
  );
};

export default SideBar;
