import React, { useState } from "react";
import { Box, Typography, TextField, Autocomplete, Button } from "@mui/material";
import FaceIcon from "../../assets/recognition/Recognition - Face.svg";
import YesIcon from "../../assets/recognition/Recognition - Yes.svg";
import NoIcon from "../../assets/recognition/Recognition - No.svg";

const Recognition = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [entries, setEntries] = useState(["John Doe", "Jane Smith", "Emily Davis"]); // Dummy initial entries

  const options = [
    { label: "Yes", icon: YesIcon, value: "yes" },
    { label: "No", icon: NoIcon, value: "no" },
  ];

  const handleClick = (value) => {
    setSelectedOption(value);
    if (value === "no") setInputValue(""); // Clear input when "No" is selected
  };

  const handleSubmit = () => {
    if (inputValue && !entries.includes(inputValue)) {
      setEntries([...entries, inputValue]); // Add new entry to the list
    }
    setInputValue(""); // Clear the input field
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem",
        minHeight: "calc(100vh - 200px)",
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
          textAlign: "center",
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
          marginBottom: selectedOption === "yes" ? "1.5rem" : "0",
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
              padding: "1.5rem",
              borderRadius: "12px",
              width: "100px",
              height: "100px",
              transition: "background-color 0.3s ease-in-out",
              boxShadow:
                selectedOption === option.value
                  ? "0px 4px 10px rgba(0, 0, 0, 0.2)"
                  : "none",
              backgroundColor:
                selectedOption === option.value ? "#E0F7FA" : "transparent",
              "&:hover": {
                backgroundColor: "#F1F1F1",
              },
            }}
          >
            <img
              src={option.icon}
              alt={option.label}
              style={{
                width: "100%",
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
                fontSize: selectedOption === option.value ? "1.15rem" : "1rem",
              }}
            >
              {option.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Text Box and Dropdown (Appears for "Yes") */}
      {selectedOption === "yes" && (
        <Box
          sx={{
            width: "100%",
            maxWidth: "400px",
            marginTop: "1rem",
            textAlign: "center",
          }}
        >
          <Autocomplete
            freeSolo
            options={entries}
            value={inputValue}
            onInputChange={(event, newValue) => setInputValue(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Recognize Colleague"
                placeholder="Enter colleague name"
                variant="outlined"
                sx={{
                  borderRadius: "8px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                  },
                }}
              />
            )}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              marginTop: "1rem",
              padding: "0.75rem 2rem",
              borderRadius: "8px",
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Recognition;
