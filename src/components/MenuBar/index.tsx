import { useCallback } from 'react';
import ga from 'react-ga4';

import {
  AppBar,
  Toolbar,
  useTheme,
  useMediaQuery,
  Box,
} from '@mui/material';

import { AvatarCircle } from './AvatarCircle';
import { ButtonMenu } from './ButtonMenu';
import { DrawerMobile } from './DrawerMobile';
import { MENU_ITEM } from './constants';

export function MenuBar() {
  const theme = useTheme();

  const smBreakpoint = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickGithub = useCallback(() => {
    ga.event({
      category: 'CTA',
      action: 'Click',
      label: 'Menu - github source code button',
    });
  }, []);

  return (
    <AppBar
      position="sticky"
      elevation={smBreakpoint ? 2 : 0}
      sx={{
        bgcolor: '#fff',
        color: 'black',
      }}
    >
      <Toolbar
        sx={{
          px: {
            xs: 2,
            sm: 3,
            md: 6,
            lg: 20,
            xl: 40,
          },
        }}
      >
        <Box
          sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit', my: 2 }}
        >
          <AvatarCircle />
        </Box>
        {smBreakpoint ? (
          <DrawerMobile menuItems={MENU_ITEM} onClickGithub={handleClickGithub} />
        ) : (
          <ButtonMenu menuItems={MENU_ITEM} onClickGithub={handleClickGithub} />
        )}
      </Toolbar>
    </AppBar>
  );
}
