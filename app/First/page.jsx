"use client";
import Link from "next/link";
import { Box, Button } from "@mui/material";

export default function First() {
  return (
    <Box
      sx={{
        background: (theme) => theme.customStyles.myGradient,
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
      }}
    >
      <Button
        component={Link}
        href="/Login"
        variant="outlined"
        sx={{
          width: "120px",
          py: 1.5,
          color: "white",
          borderColor: "white",
          borderRadius: "8px",
          boxShadow: "0px 4px 15px rgba(165, 180, 252, 0.4)",
          fontWeight: "bold",
          textTransform: "none",
          "&:hover": {
            borderColor: "lightblue",
            opacity: 0.9,
          },
        }}
      >
        Login
      </Button>

      <Button
        component={Link}
        href="/Register"
        variant="outlined"
        sx={{
          width: "120px",
          py: 1.5,
          color: "white",
          borderColor: "white",
          borderRadius: "8px",
          boxShadow: "0px 4px 15px rgba(165, 180, 252, 0.4)",
          fontWeight: "bold",
          textTransform: "none",
          "&:hover": {
            borderColor: "red",
            opacity: 0.9,
          },
        }}
      >
        Register
      </Button>
    </Box>
  );
}
