import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/system';

//A home icon logo
import IconButton from '@mui/material/IconButton';
import Home from '@mui/icons-material/Home';
import MuiNextLink from '@components/MuiNextLink';

// logo test
// import Icon from '@material-ui/core/Icon
// import { ReactComponent as Logo } from '../public/rollin-logo-white.svg';
// import Logo from '../public/rollin-logo-dark.svg';
// import ConcretIcon from './ConcretIcon';
// 나래님 방법
// import { ReactComponent as SushiLogo } from '../assets/rollin-logo-dark.svg';
//Johnny https://youtu.be/9tJTEGG0t-M
// https://www.npmjs.com/package/@svgr/webpack
import Logo from 'components/svgs/rollin-logo-white.svg';

import Navbar from './Navbar';
import SideDrawer from './SideDrawer';
import HideOnScroll from './HideOnScroll';
import Fab from '@mui/material/Fab';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import BackToTop from './BackToTop';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export const navLinks = [
  { title: `home`, path: `/` },
  { title: `about us`, path: `/about-us` },
  { title: `menu`, path: `/menu` },
  { title: `catering`, path: `/catering` },
  { title: `contact`, path: `/contact` },
];

const Header = () => {
  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed">
          {/* <AppBar position="fixed" color="inherit"> */}
          <Toolbar>
            <Container
              maxWidth="lg"
              sx={{ display: `flex`, justifyContent: `space-between` }}
            >
              <IconButton edge="start" aria-label="home">
                <MuiNextLink activeClassName="active" href="/">
                  {/* <Home
                    sx={{
                      color: (theme) => theme.palette.common.white,
                    }}
                    fontSize="large"
                  /> */}

                  {/* <SushiLogo /> */}

                  <Logo />
                </MuiNextLink>
              </IconButton>

              <Navbar navLinks={navLinks} />
              <SideDrawer navLinks={navLinks} />
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Offset id="back-to-top-anchor" />
      <BackToTop>
        <Fab color="secondary" size="large" aria-label="back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};

export default Header;
