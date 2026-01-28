import React from "react";
import { Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const GradientButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#121212",
  color: "#4dabf7",
  textTransform: "none",
  padding: "6px 16px",
  borderRadius: "8px",
  fontSize: "14px",
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
  gap: "8px",
  border: "1px solid transparent",
  position: "relative",
  backgroundClip: "padding-box",
  transition: "all 0.3s ease",

  "&::after": {
    content: '""',
    position: "absolute",
    inset: -1,
    borderRadius: "8px",
    padding: "1.5px",
    background: "linear-gradient(to right, #22c55e, #3b82f6, #a855f7)",
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "destination-out",
    maskComposite: "exclude",
    pointerEvents: "none",
  },

  "&:hover": {
    backgroundColor: "#1a1a1a",
    boxShadow: "0px 0px 12px rgba(59, 130, 246, 0.4)",
  },
}));

export default function GlowBtn() {
  return (
    <Box
      sx={{ p: 4, display: "flex", justifyContent: "center", bgcolor: "#000" }}
    >
      <GradientButton variant="contained">
        <AutoAwesomeIcon sx={{ fontSize: 18, color: "#4dabf7" }} />
        Edit in Chat
      </GradientButton>
    </Box>
  );
}
