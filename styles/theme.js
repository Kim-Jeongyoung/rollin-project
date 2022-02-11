import { createTheme, responsiveFontSizes } from '@mui/material/styles';
// import { deepPurple, amber } from '@mui/material/colors';

// Create a theme instance.
// let theme = createTheme({
//   palette: {
//     primary: deepPurple,
//     secondary: amber,
//   },
// });

let theme = createTheme({
  palette: {
    primary: { main: '#40464d' },
    secondary: { main: '#f48a88' },
  },
  // typography: {
  //   fontFamily: ['Nunito', 'sans-serif'].join(','),
  // },
});

theme = responsiveFontSizes(theme);

export default theme;
