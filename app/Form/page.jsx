"use client";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import Map from "../components/Molecules/Map/page";
import BoxAtom from "../components/Atoms/BoxAtom/page";
import PaperAtom from "../components/Atoms/PaperAtom/page";
import TypographyAtom from "../components/Atoms/TypographyAtom/page";
import Btn from "../components/Atoms/Btn/page";
import GridAtom from "../components/Atoms/GridAtom/page";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
  };

  const fieldStyles = {
    input: { color: "white" },
    "& .MuiInput-underline:before": { borderBottomColor: "#444" },
    "& .MuiInput-underline:after": { borderBottomColor: "#ff4500" },
    "& .MuiFormLabel-root": { color: "#888" },
    "& .MuiFormLabel-root.Mui-focused": { color: "#ff4500" },
  };

  return (
    <BoxAtom
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#1a1a1a",
        px: 2,
        py: 4,
      }}
    >
      <PaperAtom
        elevation={24}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          maxWidth: "1000px",
          borderRadius: "24px",
          overflow: "hidden",
          bgcolor: "#222",
          border: "1px solid rgba(255, 165, 0, 0.1)",
        }}
      >
        <BoxAtom
          sx={{
            flex: { xs: "1", md: "0.6" },
            p: { xs: 4, md: 6 },
            color: "white",
            maxHeight: { md: "90vh" },
            overflowY: "auto",
          }}
        >
          <TypographyAtom
            variant="h4"
            sx={{ mb: 4, fontWeight: "bold" }}
            text="Form"
          />

          <BoxAtom component="form" onSubmit={handleRegister}>
            <GridAtom container spacing={3}>
              <GridAtom item xs={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  variant="standard"
                  placeholder="Enter your full name"
                  onChange={(e) => setName(e.target.value)}
                  sx={fieldStyles}
                />
              </GridAtom>

              <GridAtom item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  variant="standard"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  sx={fieldStyles}
                />
              </GridAtom>

              <GridAtom item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  variant="standard"
                  placeholder="Create password"
                  onChange={(e) => setPassword(e.target.value)}
                  sx={fieldStyles}
                />
              </GridAtom>

              <GridAtom item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Contact No"
                  type="number"
                  variant="standard"
                  placeholder="Enter contact number"
                  sx={fieldStyles}
                />
              </GridAtom>

              <GridAtom item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Address"
                  variant="standard"
                  placeholder="Property address"
                  sx={fieldStyles}
                />
              </GridAtom>

              <GridAtom item xs={12}>
                <BoxAtom
                  sx={{
                    bgcolor: "#2a2a2a",
                    p: 1.5,
                    borderRadius: "12px",
                    border: "1px solid #444",
                  }}
                >
                  <TypographyAtom
                    variant="caption"
                    sx={{ color: "#666", display: "block", mb: 1 }}
                    text="Select Location on Map"
                  />
                  <BoxAtom
                    sx={{
                      h: 160,
                      width: "100%",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <Map />
                  </BoxAtom>
                </BoxAtom>
              </GridAtom>

              <GridAtom item xs={12} sx={{ mt: 2 }}>
                <Btn
                  variant="contained"
                  sx={{
                    width: "100%",
                    py: 1.5,
                    borderRadius: "50px",
                    fontWeight: "bold",
                    mb: 2,
                    "&:hover": { opacity: 0.9 },
                  }}
                  text="Register Now"
                />

                <Btn
                  href={"/Dashboard"}
                  variant="contained"
                  sx={{
                    width: "100%",
                    py: 1.5,
                    borderRadius: "50px",
                    fontWeight: "bold",
                    mb: 2,
                    "&:hover": { opacity: 0.9 },
                  }}
                  text="Go to Dashboard"
                />
              </GridAtom>
            </GridAtom>
          </BoxAtom>
        </BoxAtom>

        <BoxAtom
          sx={{
            display: { xs: "none", md: "flex" },
            flex: 0.4,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            p: 6,
            color: "white",
            borderLeft: "1px solid rgba(255, 165, 0, 0.2)",
            background: (theme) => theme.customStyles.myGradient,
          }}
        >
          <TypographyAtom
            variant="h3"
            sx={{
              letterSpacing: 2,
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
            text="Join Our Community"
          />

          <TypographyAtom
            sx={{ mt: 3, color: "rgba(255,255,255,0.7)", maxWidth: "300px" }}
            text="Create an account to manage your properties and access your
            personalized dashboard."
          />
          <BoxAtom
            sx={{ mt: 4, width: 60, h: 4, bgcolor: "#ff4500", borderRadius: 2 }}
          />
        </BoxAtom>
      </PaperAtom>
    </BoxAtom>
  );
}
