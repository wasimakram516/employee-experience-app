import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import RelaxedIcon from "../../assets/workEnvironment/WE - Relaxed Face.svg";
import NeutralIcon from "../../assets/workEnvironment/WE - Neutral Face.svg";
import MinorDiscomfortIcon from "../../assets/workEnvironment/WE - Minor Discomfort.svg";
import UncomfortableIcon from "../../assets/workEnvironment/WE - Uncomftorable.svg";

const WorkEnvironmentFeedback = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { label: "Relaxed", icon: RelaxedIcon, value: "relaxed" },
    { label: "Neutral", icon: NeutralIcon, value: "neutral" },
    { label: "Minor Discomfort", icon: MinorDiscomfortIcon, value: "minorDiscomfort" },
    { label: "Uncomfortable", icon: UncomfortableIcon, value: "uncomfortable" },
  ];

  const handleClick = (value) => {
    setSelectedOption(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, // Stack vertically on small screens
        justifyContent: "space-between",
        alignItems: "center",
        height: "calc(100vh - 200px)",
        padding: "2rem",
        boxSizing: "border-box",
        borderRadius: "12px",
        backgroundColor: "background.default",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Left Section: Title and Description */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: { xs: "center", sm: "left" }, // Center-align text on portrait screens
          marginBottom: { xs: "1rem", sm: 0 }, // Add spacing for stacked layout
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
          Work Environment Feedback
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.25rem",
            color: "#666",
          }}
        >
          How comfortable do you feel in your work environment today?
        </Typography>
      </Box>

      {/* Right Section: Emoji Grid */}
      <Box
        sx={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(2, 1fr)" }, // Maintain 2 columns on all screens
          gap: "1rem",
        }}
      >
        {options.map((option) => (
          <Box
            key={option.value}
            onClick={() => handleClick(option.value)}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            {/* Circle with Image */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: {xs:"130px"},
                height: {xs:"130px"},
                backgroundColor:
                  selectedOption === option.value ? "#142850" : "#E0E0E0",
                borderRadius: "50%",
                transition: "background-color 0.3s ease-in-out",
                boxShadow:
                  selectedOption === option.value
                    ? "0px 4px 10px rgba(0, 0, 0, 0.3)"
                    : "none",
              }}
            >
              <img
                src={option.icon}
                alt={option.label}
                style={{
                  width: "70%",
                  height: "70%",
                  filter: selectedOption === option.value ? "none" : "brightness(70%)",
                  opacity: selectedOption === option.value ? 1 : 0.7,
                  transition: "opacity 0.3s ease, filter 0.3s ease",
                }}
              />
            </Box>

            {/* Label Below Circle */}
            <Typography
              variant="body2"
              sx={{
                marginTop: "0.5rem",
                color: selectedOption === option.value ? "#142850" : "#666",
                fontWeight: 400,
              }}
            >
              {option.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WorkEnvironmentFeedback;
