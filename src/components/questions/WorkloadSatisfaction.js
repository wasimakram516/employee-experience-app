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
  const [draggedWeight, setDraggedWeight] = useState(null); // Track the weight being dragged
  const [dragging, setDragging] = useState(false);
  const [lastTouchedSide, setLastTouchedSide] = useState(null); // Track the last touched drop zone

  const handleDragStart = (e, weightId) => {
    setDraggedWeight(weightId);
    setDragging(true);
    if (e.dataTransfer) {
      e.dataTransfer.setData("weight", weightId);
    }
  };

  const handleDrop = (e, side) => {
    e.preventDefault();
    const weightId = draggedWeight || parseInt(e.dataTransfer.getData("weight"), 10);
    if (availableWeights.includes(weightId)) {
      setAvailableWeights((prev) => prev.filter((id) => id !== weightId));
      if (side === "left") {
        setLeftPanWeights((prev) => [...prev, weightId]);
      } else {
        setRightPanWeights((prev) => [...prev, weightId]);
      }
    }
    setDraggedWeight(null);
    setDragging(false);
  };

  const handleTouchMove = (e) => {
    if (!dragging || draggedWeight === null) return;

    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);

    if (element && element.dataset && element.dataset.side) {
      setLastTouchedSide(element.dataset.side); // Track the side being touched
    }
  };

  const handleTouchEnd = () => {
    if (draggedWeight !== null && lastTouchedSide) {
      // Finalize the drop on the last touched side
      handleDrop({ preventDefault: () => {} }, lastTouchedSide);
    }
    setDraggedWeight(null);
    setDragging(false);
    setLastTouchedSide(null); // Reset last touched side
  };

  const handleRemoveWeight = (weightId, side) => {
    if (side === "left") {
      setLeftPanWeights((prev) => prev.filter((id) => id !== weightId));
    } else {
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
  const leftPanOffset = calculatePanOffset(-rotationAngle); // Left pan moves opposite
  const rightPanOffset = calculatePanOffset(rotationAngle); // Right pan moves in sync

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
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          marginBottom: "1rem",
          color: "#333",
          textAlign: "center",
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
          alignItems: { xs: "center", md: "flex-end" },
          width: "100%",
          position: "relative",
        }}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
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
              onTouchStart={() => {
                setDraggedWeight(id);
                setDragging(true);
              }}
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
              transformOrigin: "center center",
              width: "250px",
            }}
          />

          {/* Left Pan */}
          <Box
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, "left")}
            data-side="left"
            sx={{
              position: "absolute",
              left: "10%",
              top: `${80 + leftPanOffset}px`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "top 0.3s ease",
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
            data-side="right"
            sx={{
              position: "absolute",
              right: "10%",
              top: `${80 + rightPanOffset}px`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "top 0.3s ease",
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
