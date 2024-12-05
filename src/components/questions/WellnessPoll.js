import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import HydratedIcon from "../../assets/wellness/Hydrated.svg";
import ExerciseIcon from "../../assets/wellness/Excercise.svg";
import BreakIcon from "../../assets/wellness/Took A Break.svg";
import CommunicateIcon from "../../assets/wellness/Communicate.svg";
import NotYetIcon from "../../assets/wellness/Not Yet.svg";

const WellnessPoll = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { label: "Hydrated", icon: HydratedIcon, value: "hydrated" },
    { label: "Exercised", icon: ExerciseIcon, value: "exercised" },
    { label: "Took a Break", icon: BreakIcon, value: "break" },
    { label: "Communicate", icon: CommunicateIcon, value: "communicate" },
  ];

  const handleClick = (value) => {
    setSelectedOption(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        gap:{xs:0, sm:10},
        padding: "2rem",
        boxSizing: "border-box",
        borderRadius: "12px",
        backgroundColor: "background.default",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        minHeight: "calc(100vh - 200px)",
      }}
    >
      {/* Title and Description */}
      <Box
        sx={{
          flex: { xs: "none", sm: 1 },
          textAlign: { xs: "center", sm: "left" },
          marginBottom: { xs: "2rem", sm: 0 },
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
          Wellness Poll
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.25rem",
            color: "#666",
            marginBottom: "2rem", // Added space between text and options
          }}
        >
          Which of these did you do today to care for yourself?
        </Typography>
      </Box>

      {/* Options and "Nothing Yet" */}
      <Box
        sx={{
          display: "flex",
          flexDirection:{ xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        {/* Options Group */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0.5rem", // Increased gap between options
            width: { xs: "100%", sm: "auto" },
          }}
        >
          {options.map((option, index) => (
            <Box
              key={option.value}
              onClick={() => handleClick(option.value)}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                minWidth:"100px",
                padding: "2rem", // Increased size
                backgroundColor:
                  selectedOption === option.value ? "#142850" : "#E0E0E0",
                borderRadius: {
                  xs:
                    index === 0
                      ? "12px 0 0 0"
                      : index === 1
                      ? "0 12px 0 0"
                      : index === 2
                      ? "0 0 0 12px"
                      : "0 0 12px 0",
                },
                transition: "background-color 0.3s ease-in-out",
              }}
            >
              <img
                src={option.icon}
                alt={option.label}
                style={{
                  width: "80px", 
                  marginBottom: "0.5rem",
                  filter: selectedOption === option.value ? "none" : "brightness(70%)",
                  transition: "filter 0.3s ease-in-out",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: selectedOption === option.value ? "#FFF" : "#666",
                }}
              >
                {option.label}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* "Nothing Yet" Option */}
        <Box
          onClick={() => handleClick("notYet")}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            padding: "2rem",
            width: "80px",
            height: "80px",
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <img
            src={NotYetIcon}
            alt="Not Yet"
            style={{
              width: "40px",
              filter: selectedOption === "notYet" ? "none" : "brightness(70%)",
              transition: "filter 0.3s ease-in-out",
            }}
          />
          <Typography
            variant="body2"
            sx={{
              marginTop: "0.5rem",
              color: selectedOption === "notYet" ? "#142850" : "#666",
              textAlign: "center",
            }}
          >
            Nothing Yet
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WellnessPoll;

