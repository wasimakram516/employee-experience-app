import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Beam from "../../assets/workload/Beam.svg";
import RotatingBeam from "../../assets/workload/Rotating Beam.svg";
import WeighingPan from "../../assets/workload/Weighing Pan.svg";
import Weight from "../../assets/workload/Weight.svg";

const WorkloadSatisfaction = () => {
  const [leftPanWeights, setLeftPanWeights] = useState([]);
  const [rightPanWeights, setRightPanWeights] = useState([]);
  const [availableWeights, setAvailableWeights] = useState([1, 2, 3, 4, 5]);
  const [draggedWeight, setDraggedWeight] = useState(null);

  const handleDragStart = (e, weightId) => {
    setDraggedWeight(weightId);
    if (e.dataTransfer) {
      e.dataTransfer.setData("weight", weightId);
    }
  };

  const handleDrop = (e, side) => {
    e.preventDefault();
    const weightId =
      draggedWeight || (e.dataTransfer && parseInt(e.dataTransfer.getData("weight"), 10));

    if (weightId && availableWeights.includes(weightId)) {
      setAvailableWeights((prev) => prev.filter((id) => id !== weightId));
      if (side === "left") {
        setLeftPanWeights((prev) => [...prev, weightId]);
      } else if (side === "right") {
        setRightPanWeights((prev) => [...prev, weightId]);
      }
    }
    setDraggedWeight(null);
  };

  const handleRemoveWeight = (weightId, side) => {
    if (side === "left") {
      setLeftPanWeights((prev) => prev.filter((id) => id !== weightId));
    } else if (side === "right") {
      setRightPanWeights((prev) => prev.filter((id) => id !== weightId));
    }
    setAvailableWeights((prev) => [...prev, weightId]);
  };

  const calculateRotation = () => {
    const leftWeightCount = leftPanWeights.length;
    const rightWeightCount = rightPanWeights.length;

    const rotationPerWeight = 5; // Rotation angle per weight
    const weightDifference = rightWeightCount - leftWeightCount;

    return weightDifference * rotationPerWeight;
  };

  const calculatePanOffset = (angle) => {
    const maxOffset = 40; // Maximum vertical movement for the pans
    return (angle / 25) * maxOffset; // Adjust based on rotation angle
  };

  const rotationAngle = calculateRotation();
  const leftPanOffset = calculatePanOffset(-rotationAngle);
  const rightPanOffset = calculatePanOffset(rotationAngle);

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
        backgroundColor: "#F9FAFC",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
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
        Workload Satisfaction
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
        Add the weight to indicate how you feel about your current workload
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-end",
          width: "100%",
          position: "relative",
        }}
      >
        {/* Horizontal Line */}
        <Box
          sx={{
            position: "absolute",
            bottom: "-4px",
            left: "0",
            right: "0",
            height: "4px",
            backgroundColor: "#142850",
          }}
        />
        {/* Available Weights */}
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {availableWeights.map((id) => (
            <img
              key={id}
              src={Weight}
              alt={`Weight ${id}`}
              draggable
              onDragStart={(e) => handleDragStart(e, id)}
              onTouchStart={() => setDraggedWeight(id)}
              style={{
                width: "50px",
                cursor: "pointer",
                zIndex: 2,
              }}
            />
          ))}
        </Box>

        {/* Beam Balance */}
        <Box
          sx={{
            position: "relative",
            width: "400px",
            height: "300px",
          }}
        >
          {/* Central Beam */}
          <img
            src={Beam}
            alt="Beam"
            style={{
              position: "absolute",
              bottom: "0",
              left: "50%",
              transform: "translateX(-50%)",
              width: "800px",
              height: "300px",
              zIndex: 0,
            }}
          />

          {/* Rotating Beam */}
          <img
            src={RotatingBeam}
            alt="Rotating Beam"
            style={{
              position: "absolute",
              top: "50px",
              left: "50%",
              transform: `translateX(-50%) rotate(${rotationAngle}deg)`,
              transformOrigin: "center center", // Ensure rotation happens around the center
              width: "250px",
            }}
          />

          {/* Left Pan */}
          <Box
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, "left")}
            onTouchEnd={(e) => handleDrop(e, "left")}
            sx={{
              position: "absolute",
              left: "10%",
              top: `${80 + leftPanOffset}px`, // Dynamic vertical positioning
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "top 0.3s ease", // Smooth transition for vertical movement
            }}
          >
            <img
              src={WeighingPan}
              alt="Left Pan"
              style={{
                width: "120px",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "50px",
                display: "flex",
                gap: "4px",
                flexWrap: "wrap",
              }}
            >
              {leftPanWeights.map((id) => (
                <img
                  key={id}
                  src={Weight}
                  alt={`Weight ${id}`}
                  draggable
                  onDragStart={(e) => handleDragStart(e, id)}
                  onClick={() => handleRemoveWeight(id, "left")}
                  onTouchStart={() => handleRemoveWeight(id, "left")}
                  style={{
                    width: "25px",
                    cursor: "pointer",
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Right Pan */}
          <Box
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, "right")}
            onTouchEnd={(e) => handleDrop(e, "right")}
            sx={{
              position: "absolute",
              right: "10%",
              top: `${80 + rightPanOffset}px`, // Dynamic vertical positioning
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "top 0.3s ease", // Smooth transition for vertical movement
            }}
          >
            <img
              src={WeighingPan}
              alt="Right Pan"
              style={{
                width: "120px",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "50px",
                display: "flex",
                gap: "4px",
                flexWrap: "wrap",
              }}
            >
              {rightPanWeights.map((id) => (
                <img
                  key={id}
                  src={Weight}
                  alt={`Weight ${id}`}
                  draggable
                  onDragStart={(e) => handleDragStart(e, id)}
                  onClick={() => handleRemoveWeight(id, "right")}
                  onTouchStart={() => handleRemoveWeight(id, "right")}
                  style={{
                    width: "25px",
                    cursor: "pointer",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WorkloadSatisfaction;
