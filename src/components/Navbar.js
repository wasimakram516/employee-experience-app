import React from "react";
import { Box, Typography } from "@mui/material";

const Navbar = ({ current, total }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap:10,
        padding: "0.75rem 2rem",
        backgroundColor: "primary.main", // Light blue-gray background
      }}
    >
      {/* Progress Bar */}
      <Box
        sx={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          gap: "0.5rem",
          marginRight: "1rem",
        }}
      >
        {Array.from({ length: total }).map((_, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              height: "8px",
              backgroundColor: index < current ? "secondary.main" : "#B0BEC5", // Yellow for completed, gray for remaining
              borderRadius: "8px",
              transition: "background-color 0.1s ease",
            }}
          />
        ))}
      </Box>

      {/* Question Number */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "secondary.main", 
          color: "black",
          borderRadius: "20px",
          padding: "0.3rem 1.5rem",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: "bold",
            fontSize: "1rem",
            letterSpacing:"0.1rem"
          }}
        >
          Question {current}/{total}
        </Typography>
      </Box>
    </Box>
  );
};

export default Navbar;
