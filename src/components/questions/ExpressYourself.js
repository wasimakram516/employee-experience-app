import React, { useState } from "react";
import { Box, Typography, TextField, InputAdornment, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send"; // MUI Send icon

const ExpressYourself = () => {
  const [inputValue, setInputValue] = useState("");
  const [submitted, setSubmitted] = useState(false); // State for submission feedback
  const maxCharacters = 500; // Dummy character limit

  const handleInputChange = (event) => {
    if (event.target.value.length <= maxCharacters) {
      setInputValue(event.target.value);
    }
  };

  const handleSubmit = () => {
    if (inputValue.trim()) {
      console.log("Submitted:", inputValue); // Replace with actual submission logic
      setInputValue(""); // Clear the input field
      setSubmitted(true); // Show success message
      setTimeout(() => setSubmitted(false), 3000); // Hide message after 3 seconds
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && event.ctrlKey) {
      handleSubmit(); // Submit only when Ctrl + Enter is pressed
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 200px)",
        padding: "2rem",
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
          textAlign: "center",
        }}
      >
        Express Yourself!
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
        Is there anything we could improve today to make your workday better?
      </Typography>

      {/* Multi-line Text Input */}
      <TextField
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Type how you feel here..."
        variant="outlined"
        fullWidth
        multiline
        minRows={1}
        maxRows={10}
        sx={{
          maxWidth: "600px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "25px",
            "& fieldset": {
              borderWidth: "2px",
              borderColor: "#657D9A",
            },
            "&:hover fieldset": {
              borderColor: "primary.main",
            },
            "&.Mui-focused fieldset": {
              borderColor: "primary.main",
            },
          },
          "& .MuiOutlinedInput-input": {
            fontSize: "1rem",
            lineHeight: "1.5",
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSubmit} color="primary">
                <SendIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {/* Character Count */}
      <Typography
        variant="caption"
        sx={{
          marginTop: "0.5rem",
          color: inputValue.length >= maxCharacters ? "error.main" : "#666",
        }}
      >
        {inputValue.length}/{maxCharacters} characters
      </Typography>

      {/* Submission Feedback */}
      {submitted && (
        <Typography
          variant="body2"
          sx={{
            marginTop: "1rem",
            color: "success.main",
            fontWeight: "bold",
          }}
        >
          Thank you for your feedback!
        </Typography>
      )}
    </Box>
  );
};

export default ExpressYourself;
