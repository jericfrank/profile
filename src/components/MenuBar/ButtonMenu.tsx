import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@mui/material';

import { MenuItem } from '.';

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
    </Fragment>
  );
}
