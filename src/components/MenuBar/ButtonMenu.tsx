import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Button, IconButton, Tooltip } from '@mui/material';
import { GitHub } from '@mui/icons-material';

import { MenuItem } from './constants';

interface Props {
  menuItems: MenuItem[];
}

export function ButtonMenu({ menuItems }: Props) {
  return (
    <Fragment>
      {menuItems.map(it => (
        <Button
          key={it.title}
          component={Link}
          to={it.path}
          color="inherit"
          sx={{ textTransform: 'none' }}
        >
          {it.title}
        </Button>
      ))}
      <Tooltip title="View Source Code" arrow>
        <IconButton
          component="a"
          href="https://github.com/jericfrank/profile"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          sx={{ ml: 1 }}
        >
          <GitHub />
        </IconButton>
      </Tooltip>
    </Fragment>
  );
}
