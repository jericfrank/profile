import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { MenuItem } from './constants';

interface Props {
  menuItems: MenuItem[];
}

export function DrawerMobile({ menuItems }: Props) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(
    () => setMenuOpen(!isMenuOpen),
    [isMenuOpen],
  );

  return (
    <>
      <IconButton
        color="inherit"
        edge="start"
        onClick={toggleMenu}
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={isMenuOpen} onClose={toggleMenu}>
        <List sx={{ width: 200 }}>
          {menuItems.map(it => (
            <ListItem key={it.title} disablePadding component="li">
              <ListItemButton component={Link} to={it.path}>
                <ListItemText primary={it.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
