"use client";
import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    typography: {
        fontFamily: 'var(--font-arvo), serif',
    },

    customStyles: {
        myGradient: "linear-gradient(60deg, lightblue 20%, black 70%, red 100%)",
    },
    palette: {
        primary: {
            main: '#1976d2',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    border: " none",
                    background: "linear-gradient(60deg, lightblue 20%, black 70%, red 100%)",
                    color: "white",
                    borderRadius: "8px",
                    transition: "opacity 0.3s ease",
                    "&:hover": {
                        opacity: 0.9,
                        background: "A10000",
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: "linear-gradient(60deg, lightblue 20%, black 70%, red 100%)"
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {}
            }
        }
    },
});
export default theme;