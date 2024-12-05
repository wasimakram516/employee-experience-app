import React, { useState } from "react";
import { Box, Typography, Slider } from "@mui/material";
import EngagementBar from "../../assets/engagement/Engagement Bar.svg";
import EngagementMeterHand from "../../assets/engagement/Engagement Meter Hand.svg";

const Engagement = () => {
  const [rotation, setRotation] = useState(0); // Rotation state for the needle

  const handleSliderChange = (e, value) => {
    setRotation(value);
  };

  const getEngagementLevel = () => {
    if (rotation < 60) return "Low";
    if (rotation < 120) return "Moderate";
    return "High";
  };

  const getSliderColor = () => {
    if (rotation < 60) return "#FE3507"; // Red for Low
    if (rotation < 120) return "#FFAA00"; // Yellow for Moderate
    return "#4CAF50"; // Green for High
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Responsive layout
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "calc(100vh - 200px)",
        padding: "2rem",
        backgroundColor: "#F9FAFC",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      {/* Left Column */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: "center",
          flex: 1,
          paddingRight: { md: "2rem" },
          textAlign: { xs: "center", md: "left" },
          marginBottom: { xs: "2rem", md: 0 },
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
          Engagement
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.25rem",
            color: "#666",
            marginBottom: "2rem",
          }}
        >
          How engaged do you feel with your current tasks?
        </Typography>
      </Box>

      {/* Right Column */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Engagement Meter */}
        <Box
          id="meter"
          sx={{
            position: "relative",
            width: "300px",
            height: "150px",
            marginBottom: "1rem",
          }}
        >
          {/* Engagement Bar */}
          <img
            src={EngagementBar}
            alt="Engagement Bar"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              zIndex: 1,
            }}
          />
          {/* Engagement Meter Hand */}
          <img
            src={EngagementMeterHand}
            alt="Meter Hand"
            style={{
              position: "absolute",
              bottom: "0",
              left: "30%",
              transformOrigin: "100% 60%", // Anchored to the right corner
              transform: `translate(-50%) rotate(${rotation}deg)`,
              width: "120px",
              zIndex: 2,
            }}
          />
        </Box>

        {/* Slider */}
        <Box
          sx={{
            width: "80%",
            margin: "auto",
          }}
        >
          <Slider
            value={rotation}
            onChange={handleSliderChange}
            min={0}
            max={180}
            aria-label="Engagement Level"
            sx={{
              color: getSliderColor(), // Dynamic color based on the engagement level
              height: "8px",
              "& .MuiSlider-thumb": {
                width: "20px",
                height: "20px",
              },
            }}
          />
        </Box>

        {/* Engagement Level Text */}
        <Typography
          variant="body1"
          sx={{
            fontSize: "1rem",
            color: "#333",
            marginTop: "1rem",
            textAlign: "center",
          }}
        >
          Turn the slider to show your current level of engagement:{" "}
          <strong>{getEngagementLevel()}</strong>
        </Typography>
      </Box>
    </Box>
  );
};

export default Engagement;
