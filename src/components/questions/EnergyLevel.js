import React, { useState } from "react";
import { Box, Typography, Slider } from "@mui/material";

const EnergyLevel = () => {
  const [energy, setEnergy] = useState(2); // Default energy level

  const handleEnergyChange = (event, newValue) => {
    setEnergy(newValue);
  };

  // Calculate fill height and color based on energy level
  const getFillHeight = (value) => `${value * 20}%`; // 20% per level (5 levels = 100%)
  const getFillColor = (value) => {
    switch (value) {
      case 1:
        return "#FF5B5B"; // Red for low energy
      case 2:
        return "#FFC300"; // Yellow for moderate energy
      case 3:
        return "#8BC34A"; // Light green for good energy
      case 4:
        return "#4CAF50"; // Dark green for high energy
      case 5:
        return "#388E3C"; // Deep green for full energy
      default:
        return "#E0E0E0"; // Default grey
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: "calc(100vh - 200px)", // Adjust height to fit in the dashboard
        padding: "2rem",
        boxSizing: "border-box",
        borderRadius: "12px",
        backgroundColor: "background.default", // Light background for a clean look
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
      }}
    >
      {/* Left Section: Text */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingRight: "2rem",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            marginBottom: "1rem",
            color: "#333",
          }}
        >
          Energy Level
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.25rem",
            color: "#666",
          }}
        >
          How energetic do you feel right now?
        </Typography>
      </Box>

      {/* Center-Right Section: Slider and Battery */}
      <Box
        sx={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Row: Slider and Battery */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Vertical Slider */}
          <Slider
            value={energy}
            onChange={handleEnergyChange}
            step={1}
            min={1}
            max={5} // Updated to allow 5 levels
            orientation="vertical"
            sx={{
              height: "200px", // Match slider height with the battery
              marginRight: "0.5rem", // Slight spacing from the battery
              "& .MuiSlider-thumb": {
                width: "28px",
                height: "28px",
                backgroundColor: "white",
                border: "2px solid #4A90E2", // Blue border for thumb
              },
              "& .MuiSlider-track": {
                backgroundColor: getFillColor(energy), // Match slider track color with battery fill
              },
              "& .MuiSlider-rail": {
                backgroundColor: "#E0E0E0", // Light gray for unused range
              },
            }}
          />

          {/* Battery Icon */}
          <Box
            sx={{
              position: "relative",
              width: "80px",
              height: "200px",
              border: "4px solid #142850", // Dark border for battery outline
              borderRadius: "8px",
              overflow: "hidden", // Clip the fill to the battery outline
            }}
          >
            {/* Battery Fill */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: getFillHeight(energy), // Dynamically adjust fill height
                backgroundColor: getFillColor(energy), // Fill color based on energy level
                transition: "height 0.3s ease, background-color 0.3s ease", // Smooth transitions
              }}
            />
          </Box>
        </Box>

        {/* Below Text */}
        <Typography
          variant="body2"
          sx={{
            marginTop: "1rem",
            color: "#666",
            textAlign: "center",
          }}
        >
          Slide up to indicate your current energy levels
        </Typography>
      </Box>
    </Box>
  );
};

export default EnergyLevel;
