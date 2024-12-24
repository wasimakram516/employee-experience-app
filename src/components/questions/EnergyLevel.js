import React, { useState } from "react";
import { Box, Typography, Slider } from "@mui/material";

const EnergyLevel = () => {
  const [sliderValue, setSliderValue] = useState(0); // Smooth slider value
  const [batteryLevel, setBatteryLevel] = useState(5); // Discrete battery level (0 to 100)

  const handleEnergyChange = (event, newValue) => {
    setSliderValue(newValue); // Update slider value smoothly

    // Calculate the closest increment of 5% for the battery
    const increment = Math.round((newValue / 5) * 100);
    if (increment !== batteryLevel) {
      setBatteryLevel(increment); // Update battery level only if it changes
    }
  };

  // Determine the battery fill color based on its level
  const getFillColor = (level) => {
    if (level <= 20) return "#FF5B5B"; // Red for low energy
    if (level <= 40) return "#FFC300"; // Yellow for moderate energy
    if (level <= 60) return "#8BC34A"; // Light green for good energy
    if (level <= 80) return "#4CAF50"; // Dark green for high energy
    return "#388E3C"; // Deep green for full energy
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "calc(100vh - 200px)", // Adjust height to fit in the dashboard
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
            value={sliderValue}
            onChange={handleEnergyChange}
            step={0.01} // Smooth slider movement
            min={0}
            max={5}
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
                backgroundColor: getFillColor(batteryLevel), // Match slider track color with battery fill
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
                height: `${batteryLevel}%`, // Dynamically adjust fill height (0 to 100%)
                backgroundColor: getFillColor(batteryLevel), // Fill color based on battery level
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
