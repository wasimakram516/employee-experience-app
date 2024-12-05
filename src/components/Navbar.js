import React from "react";
import { Box, Typography } from "@mui/material";

const Navbar = ({ current, total }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, // Column for portrait screens
        justifyContent: "space-between",
        alignItems: "center",
        gap: { xs: 2, sm: 10 },
        padding: { xs: "0.75rem 1rem", sm: "0.75rem 2rem" },
        backgroundColor: "primary.main",
      }}
    >
      {/* Progress Bar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          width: "80%",
          maxWidth: { xs: "80%", sm: "none" }, // Limit width for portrait
          marginRight: { xs: 0, sm: "1rem" },
        }}
      >
        {Array.from({ length: total }).map((_, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              height: "8px",
              backgroundColor: index < current ? "secondary.main" : "#B0BEC5",
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
          marginTop: { xs: "1rem", sm: 0 },
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "0.9rem", sm: "1rem" },
            letterSpacing: "0.1rem",
            textAlign: "center",
          }}
        >
          Question {current}/{total}
        </Typography>
      </Box>
    </Box>
  );
};

export default Navbar;
