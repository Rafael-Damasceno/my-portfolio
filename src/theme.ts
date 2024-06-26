import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme({
    palette: {
      primary: {
        main: '#101626',
      },
      secondary: {
        main: '#0FF2B2',
      },
    },
    typography: {
        fontFamily: "helvetica neue",
    }
  });

  

  theme = responsiveFontSizes(theme);

  

  export default theme;