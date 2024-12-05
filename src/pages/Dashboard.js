import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import Navbar from "../components/Navbar"; // Navbar component
import MoodCheck from "../components/questions/MoodCheck"; // Import question components
import EnergyLevel from "../components/questions/EnergyLevel";
import WellnessPoll from "../components/questions/WellnessPoll";
import WorkEnvironmentFeedback from "../components/questions/WorkEnvironmentFeedback";
import Recognition from "../components/questions/Recognition";
import ExpressYourself from "../components/questions/ExpressYourself";
import WorkloadSatisfaction from "../components/questions/WorkloadSatisfaction";
import Engagement from "../components/questions/Engagement";
import TeamDynamicsInsight from "../components/questions/TeamDynamicsInsight";

const Dashboard = () => {
  // State to track the current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Array of question components
  const questions = [
    <MoodCheck />,
    <EnergyLevel />,
    <WellnessPoll />,
    <WorkEnvironmentFeedback />,
    <Recognition />,
    <ExpressYourself />,
    <WorkloadSatisfaction />,
    <Engagement />,
    <TeamDynamicsInsight />,
  ];

  // Handlers for navigation
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#f4f4f4", // Light background
      }}
    >
      {/* Navbar with progress tracking */}
      <Navbar
        current={currentQuestionIndex + 1}
        total={questions.length}
      />

      {/* Dynamically Render the Current Question */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        {questions[currentQuestionIndex]}
      </Box>

      {/* Navigation Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem 2rem",
          borderTop: "1px solid #ddd",
          backgroundColor: "white",
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          disabled={currentQuestionIndex === 0}
          onClick={handlePrevious}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={currentQuestionIndex === questions.length - 1}
          onClick={handleNext}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;
