import { createTheme } from "@mui/material/styles";

// Create a custom Material-UI theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#526172", // Primary blue color
    },
    secondary: {
      main: "#FFD700", // Secondary dark color
    },
    
    background: {
      default: "#F9FAFC", // Background color
    },
    text: {
      primary: "#333", // Default text color
      secondary: "#142850", // Secondary text color
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif", // Set Montserrat as the global default font
    h1: {
      fontSize: "3rem", // 48px
      fontWeight: 300, // Thin weight
    },
    h2: {
      fontSize: "2.5rem", // 40px
      fontWeight: 400, // Regular weight
    },
    h3: {
      fontSize: "2rem", // 32px
      fontWeight: 500, // Medium weight
    },
    body1: {
      fontSize: "1rem", // 16px
      fontWeight: 400, // Regular weight for body text
    },
    body2: {
      fontSize: "0.875rem", // 14px
      fontWeight: 300, // Slightly thinner for secondary text
    },
    button: {
      textTransform: "none", // Disable uppercase transformation
      fontWeight: 700,
      letterSpacing:"0.2rem",
      fontSize: "1rem", // 16px
    },
  },
  spacing: 8, // Default spacing unit (8px)
});

export default theme;
