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
import { GitHub, Menu } from '@mui/icons-material';

import { MenuItem } from './constants';

interface Props {
  menuItems: MenuItem[];
  onClickGithub: () => void;
}

export function DrawerMobile({ menuItems, onClickGithub }: Props) {
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
        <Menu />
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
          <ListItem
            disablePadding
            component="a"
            href="https://github.com/jericfrank/profile"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClickGithub}
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
              px: 2.2
            }}
          >
            <IconButton edge="start" color="inherit">
              <GitHub />
            </IconButton>
            <ListItemText primary="Source Code" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
