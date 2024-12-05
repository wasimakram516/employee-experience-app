import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/background.webp";

const StartScreen = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/dashboard"); // Navigate to the dashboard page
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${backgroundImage})`, // Background image
        backgroundSize: "cover", // Ensure the image covers the entire screen
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Avoid tiling
        color: "white", // Text color
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: "4rem", // 48px for "WELCOME TO"
          fontWeight: 200,
          letterSpacing: "0.2rem", // Slight letter spacing for elegance
          marginBottom: "1rem",
        }}
      >
        WELCOME TO
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: "3rem", // 64px for "INSIGHTHUB"
          fontWeight: 700,
          textTransform: "uppercase", // Match uppercase style
          marginBottom: "2rem",
        }}
      >
        INSIGHTHUB
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: "1.5rem", // 24px for "PRESS START TO BEGIN"
          fontWeight: 200, // Lighter font weight
          marginBottom: "2rem",
        }}
      >
        PRESS START TO BEGIN
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{
          letterSpacing: "0.2rem",
          borderRadius: "50px", // Rounded button style
          padding: "0.25rem 3rem", // Larger padding for a prominent button
          fontSize: "1.75rem", // Button text size
          backgroundColor: "#ffffff", // White button background
          color: "primary.main",
          "&:hover": {
            backgroundColor: "#e6e6e6", // Slightly darker hover effect
          },
        }}
        onClick={handleStart}
      >
        START
      </Button>
    </Box>
  );
};

export default StartScreen;
