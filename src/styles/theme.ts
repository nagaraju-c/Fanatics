// src/theme.ts
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark', // This sets the theme to dark mode
        primary: {
            main: '#90caf9', // Primary color for buttons and other elements
        },
        secondary: {
            main: '#f48fb1', // Secondary color
        },
        background: {
            default: '#121212', // Dark background color
            paper: '#1e1e1e', // Background for AppBar and other components
        },
        text: {
            primary: '#ffffff', // Text color for buttons and other text
        },
    },
});

export default darkTheme;


export const darkGlassyTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
        },
        secondary: {
            main: '#f48fb1',
        },
        background: {
            default: '#121212',
            paper: 'rgba(30, 30, 30, 0.8)', // Semi-transparent background
        },
        text: {
            primary: '#ffffff',
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(30, 30, 30, 0.6)', // Transparent background for glassy effect
                    backdropFilter: 'blur(10px)', // Frosted glass effect
                    boxShadow: 'none', // Optional: removes shadow for cleaner look
                },
            },
        },
    },
});

export const greyGlassyTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9', // Primary button color
        },
        secondary: {
            main: '#f48fb1', // Secondary button color
        },
        background: {
            default: '#e0e0e0', // Light grey for the main background
            paper: 'rgba(128, 128, 128, 0.3)', // Grey with some transparency for paper elements
        },
        text: {
            primary: '#ffffff', // White text
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(128, 128, 128, 0.4)', // Semi-transparent grey background
                    backdropFilter: 'blur(10px)', // Frosted glass effect
                    boxShadow: 'none', // Optional: removes shadow for a sleek look
                },
            },
        },
    },
});

export const darkGlassyClassicTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#0D47A1', // Rich dark blue for primary
      },
      secondary: {
        main: '#B71C1C', // Deep rich red for secondary
      },
      background: {
        default: '#101010', // Very dark background for body
        paper: 'rgba(25, 25, 25, 0.85)', // Semi-transparent dark background with glassy effect
      },
      text: {
        primary: '#E0E0E0', // Light grey for readability
        secondary: '#B0BEC5', // Muted grey for secondary text
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Clean, classic font
      h1: {
        fontSize: '2.2rem',
        fontWeight: 700, // Bold classic headers
        color: '#E0E0E0',
      },
      h6: {
        fontSize: '1.2rem',
        fontWeight: 400,
        color: '#B0BEC5', // Lighter for subtitles or captions
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: 'rgba(25, 25, 25, 0.7)', // Dark glassy look for AppBar
            backdropFilter: 'blur(15px)', // Stronger frosted glass effect
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.7)', // Rich, deep shadow for more classic look
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '12px', // Smooth, rounded edges for classic feel
            textTransform: 'none', // No uppercase for a cleaner look
            padding: '8px 16px',
          },
        },
        variants: [
          {
            props: { variant: 'contained', color: 'primary' },
            style: {
              backgroundColor: '#0D47A1', // Rich dark blue
              '&:hover': {
                backgroundColor: '#0B3D91', // Slightly darker on hover
              },
            },
          },
          {
            props: { variant: 'contained', color: 'secondary' },
            style: {
              backgroundColor: '#B71C1C', // Rich deep red
              '&:hover': {
                backgroundColor: '#A01717', // Slightly darker on hover
              },
            },
          },
        ],
      },
    },
  });
