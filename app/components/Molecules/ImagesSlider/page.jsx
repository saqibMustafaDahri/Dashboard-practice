import React, { useState } from "react";
import { IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { images } from "../../../Constants/data";
import BoxAtom from "../../Atoms/BoxAtom/page";
import PaperAtom from "../../Atoms/PaperAtom/page";
const ImagesSlider = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prev) => (prev - 1 + maxSteps) % maxSteps);
  };

  return (
    <BoxAtom
      sx={{
        maxWidth: 800,
        flexGrow: 1,
        position: "relative",
        margin: "auto",
        mt: 5,
        display: "flex",
        justifyContent: "center",
        marginBottom: "10px",
      }}
    >
      <PaperAtom elevation={4} sx={{ overflow: "hidden", borderRadius: 2 }}>
        <BoxAtom
          component="img"
          sx={{
            height: { xs: 250, sm: 300, md: 350, lg: 400 },
            display: "block",
            maxWidth: "100%",
            width: { lg: 800 },
            objectFit: "cover",
          }}
          src={images[activeStep].src}
          alt={images[activeStep].label}
        />
      </PaperAtom>

      <IconButton
        onClick={handleBack}
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
          bgcolor: "#F55D40",
          "&:hover": { bgcolor: "white" },
        }}
      >
        <ArrowBackIcon />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          bgcolor: "#F55D40",
          "&:hover": { bgcolor: "white" },
        }}
      >
        <ArrowForwardIcon />
      </IconButton>
    </BoxAtom>
  );
};

export default ImagesSlider;
