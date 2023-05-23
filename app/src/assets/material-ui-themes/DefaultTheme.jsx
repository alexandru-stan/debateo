import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
      primary: {
        main: '#444073', // Blue 500
      },
      secondary: {
        main: '#ff8c00', // Pink 500
      },
      error: {
        main: '#ff3d00', // Deep Orange 500
      },
      warning: {
        main: '#ff9800', // Orange 500
      },
      info: {
        main: '#03a9f4', // Light Blue 500
      },
      success: {
        main: '#4caf50', // Green 500
      },
    },
  });

  export default theme;