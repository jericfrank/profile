import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { ButtonMenu } from './ButtonMenu';
import { DrawerMobile } from './DrawerMobile';
import { MENU_ITEM } from './constants';

export function MenuBar() {
  const theme = useTheme();

  const smBreakpoint = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: '#fff',
        boxShadow: 'none',
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
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
          component={RouterLink}
          to="/" 
        >
          Jerec Frank
        </Typography>
        {smBreakpoint ? <DrawerMobile menuItems={MENU_ITEM} /> : <ButtonMenu menuItems={MENU_ITEM} />}
      </Toolbar>
    </AppBar>
  );
}
