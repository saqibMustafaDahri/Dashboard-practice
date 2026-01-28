"use client";
import React, { useState } from "react";
import { TextField, Link } from "@mui/material";
import TypographyAtom from "../components/Atoms/TypographyAtom/page";
import BoxAtom from "../components/Atoms/BoxAtom/page";
import Btn from "../components/Atoms/Btn/page";
import PaperAtom from "../components/Atoms/PaperAtom/page";

export default function ForgetPass() {
  const [email, setEmail] = useState("");

  const handleResetRequest = (e) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
    alert("Password reset link has been sent to your email!");
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
      }}
    >
      <PaperAtom
        elevation={24}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          maxWidth: "900px",
          borderRadius: "24px",
          overflow: "hidden",
          bgcolor: "#222",
          border: "1px solid rgba(255, 165, 0, 0.1)",
        }}
      >
        <BoxAtom
          sx={{
            flex: 1,
            p: { xs: 4, md: 8 },
            color: "white",
          }}
        >
          <TypographyAtom
            sx={{ mb: 2, fontSize: "30px", fontWeight: "bold" }}
            text="Reset Password"
          />
          <TypographyAtom
            sx={{ color: "#aaa", mb: 4 }}
            text=" Enter your email address and we'll send you a link to reset your
            password."
          />

          <BoxAtom
            component="form"
            onSubmit={handleResetRequest}
            sx={{ mt: 1 }}
          >
            <TextField
              fullWidth
              label="Email Address"
              variant="standard"
              margin="normal"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputLabelProps={{ style: { color: "#aaa" } }}
              sx={{
                input: { color: "white" },
                "& .MuiInput-underline:before": { borderBottomColor: "#555" },
                "& .MuiInput-underline:after": { borderBottomColor: "#ff4500" },
              }}
            />

            <Btn
              type="submit"
              variant="contained"
              sx={{
                width: "100%",
                border: "none",
                mt: 6,
                py: 1.5,
                borderRadius: "50px",
                fontWeight: "bold",
                "&:hover": { opacity: 0.9 },
              }}
              text=" Send Reset Link"
            />
          </BoxAtom>

          <BoxAtom sx={{ mt: 4, textAlign: "center" }}>
            <TypographyAtom
              sx={{ fontSize: "15px", color: "gray" }}
              text="Remember your password?"
            />
            <Link href="/Login" underline="hover" color="#ff4500">
              <TypographyAtom
                sx={{ color: "#ff4500", fontWeight: "bold" }}
                text="Back to Login"
              />
            </Link>
          </BoxAtom>
        </BoxAtom>

        <BoxAtom
          sx={{
            display: { xs: "none", md: "flex" },
            flex: 1,
            background: (theme) => theme.customStyles.myGradient,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            p: 6,
            color: "white",
          }}
        >
          <TypographyAtom
            sx={{ letterSpacing: 2, fontSize: "20px", fontWeight: "bold" }}
            text="NO WORRIES!"
          />
          <TypographyAtom
            sx={{ mt: 2, color: "rgba(255,255,255,0.7)", maxWidth: "280px" }}
            text="
            It happens to the best of us. Just follow the instructions to get
            back into your account."
          />
        </BoxAtom>
      </PaperAtom>
    </BoxAtom>
  );
}
