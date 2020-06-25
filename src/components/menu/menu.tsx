import React from 'react';
import { MenuContainer, MenuList } from './styles';
import { MenuItem } from '../menu-item';

const Menu = () => {
  return (
    <MenuContainer>
      <MenuList>
        <MenuItem circleColor='#f00' isActive>
          Hello world
        </MenuItem>
      </MenuList>
    </MenuContainer>
  );
};

export default Menu;
