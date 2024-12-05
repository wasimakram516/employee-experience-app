import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import NotSupportedIcon from "../../assets/teamDynamicInsight/Not Supported.svg";
import SlightlySupportedIcon from "../../assets/teamDynamicInsight/Slightly Supported.svg";
import WellSupportedIcon from "../../assets/teamDynamicInsight/Well Supported.svg";
import VerySupportedIcon from "../../assets/teamDynamicInsight/Very Supported.svg";

const TeamDynamicsInsight = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { label: "Not Supported", icon: NotSupportedIcon, value: "notSupported" },
    {
      label: "Slightly Supported",
      icon: SlightlySupportedIcon,
      value: "slightlySupported",
    },
    { label: "Well Supported", icon: WellSupportedIcon, value: "wellSupported" },
    {
      label: "Fully Supported",
      icon: VerySupportedIcon,
      value: "fullySupported",
    },
  ];

  const handleClick = (value) => {
    setSelectedOption(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        minHeight: "calc(100vh - 200px)",
        boxSizing: "border-box",
        backgroundColor: "background.default",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Title and Subtitle */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          marginBottom: "1rem",
          color: "#333",
          textAlign: "center",
        }}
      >
        Team Dynamics Insight
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: "1.25rem",
          color: "#666",
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        Do you feel supported by your team today?
      </Typography>

      {/* Options */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" },
          gap: "2.5rem",
          justifyItems: "center",
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
              transition: "transform 0.2s ease",
            }}
          >
            <img
              src={option.icon}
              alt={option.label}
              style={{
                width: "100px",
                height: "100px",
                filter:
                  selectedOption === option.value
                    ? "none"
                    : "brightness(0%)",
                transition: "filter 0.3s ease-in-out",
              }}
            />
            <Typography
              variant="body2"
              sx={{
                marginTop: "0.5rem",
                color:
                  selectedOption === option.value
                    ? "#142850"
                    : "rgba(0, 0, 0, 0.6)",
                fontWeight: selectedOption === option.value ? 600 : 400,
                textAlign: "center",
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

export default TeamDynamicsInsight;
