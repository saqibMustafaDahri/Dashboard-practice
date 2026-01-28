"use client";
import React, { useState } from "react";
import { TextField, Link } from "@mui/material";
import TypographyAtom from "../components/Atoms/TypographyAtom/page";
import BoxAtom from "../components/Atoms/BoxAtom/page";
import PaperAtom from "../components/Atoms/PaperAtom/page";
import Btn from "../components/Atoms/Btn/page";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const validate = () => {
    let tempErrors = { email: "", password: "" };
    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      tempErrors.email = "Please enter a valid email (e.g. name@domain.com)";
      isValid = false;
    }
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    if (!passwordRegex.test(password)) {
      tempErrors.password =
        "Password must include 8Letters Uppercase, Lowercase, and Special Character";
      isValid = false;
    }
    setErrors(tempErrors);
    return isValid;
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Login Successful", { email, password });
    } else {
      console.log("Validation Failed");
    }
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
            variant="h4"
            sx={{ mb: 4, fontWeight: "bold" }}
            text="Login"
          />
          <BoxAtom component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
            <TextField
              fullWidth
              label="Email"
              variant="standard"
              margin="normal"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={Boolean(errors.email)}
              helperText={errors.email}
              InputLabelProps={{ style: { color: "#aaa" } }}
              sx={{
                input: { color: "white" },
                "& .MuiInput-underline:before": { borderBottomColor: "#555" },
                "& .MuiInput-underline:after": { borderBottomColor: "#ff4500" },
                "& .MuiFormHelperText-root": { color: "#ff4500" },
              }}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="standard"
              margin="normal"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={Boolean(errors.password)}
              helperText={errors.password}
              InputLabelProps={{ style: { color: "#aaa" } }}
              sx={{
                input: { color: "white" },
                "& .MuiInput-underline:before": { borderBottomColor: "#555" },
                "& .MuiInput-underline:after": { borderBottomColor: "#ff4500" },
                "& .MuiFormHelperText-root": { color: "#ff4500" },
              }}
            />
            <Link href="ForgetPass" underline="hover" color="#ff4500">
              <TypographyAtom
                text="Forgot Password?"
                sx={{
                  mt: 2,
                  mb: 4,
                  color: "white",
                  "&:hover": { color: "#ff4500" },
                  cursor: "pointer",
                  width: "fit-content",
                }}
              />
            </Link>
            <Btn
              type="submit"
              variant="contained"
              sx={{
                width: "100%",
                mt: 6,
                py: 1.5,
                borderRadius: "50px",
                fontWeight: "bold",
                "&:hover": { opacity: 0.9 },
              }}
              text="Login"
            />
          </BoxAtom>
          <BoxAtom sx={{ mt: 4, textAlign: "center" }}>
            <BoxAtom
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <TypographyAtom
                variant="body2"
                sx={{ color: "gray" }}
                text="Don't have an account? "
              />
              <Link
                href="/Register"
                underline="hover"
                sx={{ color: "#ff4500", ml: 0.5 }}
              >
                Sign Up
              </Link>
            </BoxAtom>
            <Link
              href="/Dashboard"
              underline="hover"
              sx={{
                color: "#ff4500",
                fontSize: "0.875rem",
                mt: 1,
                display: "block",
              }}
            >
              Dashboard
            </Link>
          </BoxAtom>
        </BoxAtom>
        <BoxAtom
          sx={{
            display: { xs: "none", md: "flex" },
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            p: 6,
            color: "white",
            background: (theme) =>
              theme.customStyles?.myGradient ||
              "linear-gradient(45deg, lightblue 20%, black 70%, red 100%)",
          }}
        >
          <TypographyAtom
            variant="h2"
            sx={{ letterSpacing: 4, fontWeight: "bold" }}
            text="WELCOME"
          />
          <TypographyAtom
            sx={{ mt: 2, color: "rgba(255,255,255,0.7)", maxWidth: "280px" }}
            text="We are happy to have you with us again. If you need anything, we are here to help."
          />
        </BoxAtom>
      </PaperAtom>
    </BoxAtom>
  );
}
