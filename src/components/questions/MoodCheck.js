import React, { useState } from "react";
import { Box, Typography, Slider } from "@mui/material";
import AngryFace from "../../assets/moods/Angry Face.svg";
import DeadFace from "../../assets/moods/Dead Face.svg";
import UnhappyFace from "../../assets/moods/Unhappy Face.svg";
import SmileFace from "../../assets/moods/Smile Face.svg";
import HappyFace from "../../assets/moods/Happy Face.svg";

const MoodCheck = () => {
  const [mood, setMood] = useState(3);

  const handleMoodChange = (event, newValue) => {
    setMood(newValue);
  };

  const emojiList = [
    { value: 1, src: AngryFace, alt: "Angry" },
    { value: 2, src: DeadFace, alt: "Dead" },
    { value: 3, src: UnhappyFace, alt: "Unhappy" },
    { value: 4, src: SmileFace, alt: "Smile" },
    { value: 5, src: HappyFace, alt: "Happy" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 200px)", // Adjust height to fit in dashboard with space for navbar
        backgroundColor: "background.default", // Light background for a clean look
        padding: "2rem",
        boxSizing: "border-box",
        borderRadius: "12px", // Rounded corners for better aesthetics
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          marginBottom: "1rem",
          textAlign: "center",
          color: "#333",
        }}
      >
        Daily Mood Check
      </Typography>

      {/* Subheading */}
      <Typography
        variant="body1"
        sx={{
          fontSize: "1.25rem",
          textAlign: "center",
          marginBottom: "2rem",
          color: "#666",
        }}
      >
        Pull the slider to the emotion that corresponds with how you feel
      </Typography>

      {/* Emoji Display */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: "1rem",
          padding: "0 10%",
        }}
      >
        {emojiList.map((emoji) => (
          <img
            key={emoji.value}
            src={emoji.src}
            alt={emoji.alt}
            style={{
              width: "48px",
              filter: mood === emoji.value ? "none" : "grayscale(100%)", // Highlight selected emoji
              transition: "filter 0.3s ease-in-out", // Smooth transition
            }}
          />
        ))}
      </Box>

      {/* Slider */}
      <Slider
        value={mood}
        onChange={handleMoodChange}
        step={1}
        min={1}
        max={5}
        sx={{
          width: "80%",
          color: "primary.main",
          "& .MuiSlider-thumb": {
            width: "28px",
            height: "28px",
            backgroundColor: "white",
            border: "2px solid #4A90E2", // Blue border for thumb
          },
          "& .MuiSlider-track": {
            height: "10px",
            borderRadius: "4px",
            background: `linear-gradient(to right, #FF5B5B, #FFC300, #8BC34A)`, // Gradient for track
          },
          "& .MuiSlider-rail": {
            height: "10px",
            borderRadius: "4px",
            backgroundColor: "#E0E0E0",
          },
        }}
      />
    </Box>
  );
};

export default MoodCheck;
