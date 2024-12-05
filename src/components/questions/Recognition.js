import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import FaceIcon from "../../assets/recognition/Recognition - Face.svg";
import YesIcon from "../../assets/recognition/Recognition - Yes.svg";
import NoIcon from "../../assets/recognition/Recognition - No.svg";

const Recognition = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { label: "Yes", icon: YesIcon, value: "yes" },
    { label: "No", icon: NoIcon, value: "no" },
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
        padding: "3rem",
        height: "calc(100vh - 200px)",
        boxSizing: "border-box",
        backgroundColor: "background.default",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Title and Description */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          marginBottom: "1rem",
          color: "#333",
        }}
      >
        Recognition
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: "1.25rem",
          color: "#666",
          marginBottom: "2rem",
          textAlign:"center"
        }}
      >
        Would you like to recognise a colleague today?
      </Typography>

      {/* Face Icon */}
      <Box
        sx={{
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={FaceIcon}
          alt="Recognition Face"
          style={{
            width: "150px",
            height: "150px",
          }}
        />
      </Box>

      {/* Options */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
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
              padding: "1rem",
              borderRadius: "50%",
              width: "100px",
              height: "100px",
              transition: "filter 0.3s ease-in-out",
            }}
          >
            <img
              src={option.icon}
              alt={option.label}
              style={{
                width: "70%",
                filter:
                  selectedOption === option.value ? "none" : "grayscale(100%)",
                transition: "filter 0.3s ease-in-out",
              }}
            />
            <Typography
              variant="body2"
              sx={{
                marginTop: "0.5rem",
                color: selectedOption === option.value ? "#333" : "#666",
                fontWeight: selectedOption === option.value ? "bold" : "normal",
                filter:
                  selectedOption === option.value ? "none" : "grayscale(100%)",
                fontSize: selectedOption === option.value ? "1.15rem" : "1rem"
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

export default Recognition;
