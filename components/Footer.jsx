// Box component is a wrapper component with the MUI theme and system styling utilities.
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// Add Social Media Icon
import Stack from '@mui/material/Stack';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import MuiNextLink from '@components/MuiNextLink';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 5, bgcolor: 'primary.main' }}>
      <Stack direction="row" justifyContent="center" spacing={4} sx={{ mb: 5 }}>
        <MuiNextLink
          sx={{ textDecoration: 'none', color: 'common.white' }}
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook fontSize="large" />
        </MuiNextLink>

        <MuiNextLink
          sx={{ textDecoration: 'none', color: 'common.white' }}
          href="https://YourInstagramLink/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram fontSize="large" />
        </MuiNextLink>

        <MuiNextLink
          sx={{ textDecoration: 'none', color: 'common.white' }}
          href="https://YourTwitterLink/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter fontSize="large" />
        </MuiNextLink>
      </Stack>
      {/* Add the copyright and the started year */}
      <Typography align="center" color="common.white">
        ©{new Date().getFullYear()}, Rollin Restaurant
      </Typography>
    </Box>
  );
};

export default Footer;
