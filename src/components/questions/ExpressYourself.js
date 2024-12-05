import React, { useState } from "react";
import { Box, Typography, TextField, InputAdornment } from "@mui/material";
import KeyboardIcon from "@mui/icons-material/Keyboard"; // MUI Keyboard icon

const ExpressYourself = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
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

      {/* Text Input */}
      <TextField
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type how you feel here...."
        variant="outlined"
        fullWidth
        sx={{
          maxWidth: "600px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "25px",
            borderColor: "#657D9A",
            "& fieldset": {
              borderWidth: "2px",
              borderColor: "#657D9A",
            },
            "&:hover fieldset": {
              borderColor: "#primary.main",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#primary.main",
            },
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <KeyboardIcon sx={{ color: "primary.main" }} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default ExpressYourself;
