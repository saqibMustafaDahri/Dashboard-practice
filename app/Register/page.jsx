"use client";
import React, { useState } from "react";
import { Link, TextField } from "@mui/material";
import BoxAtom from "../components/Atoms/BoxAtom/page";
import PaperAtom from "../components/Atoms/PaperAtom/page";
import TypographyAtom from "../components/Atoms/TypographyAtom/page";
import Btn from "../components/Atoms/Btn/page";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({ name: "", email: "", password: "" });

  const validate = () => {
    let tempErrors = { name: "", email: "", password: "" };
    let isValid = true;

    if (name.trim().length < 3) {
      tempErrors.name = "Name must be at least 3 characters";
      isValid = false;
    }

    const emailRegex = /^[a-zA-Z]+[0-9]+@[a-zA-Z]+\.com$/;
    if (!emailRegex.test(email)) {
      tempErrors.email = "Format: name123@domain.com";
      isValid = false;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    if (!passwordRegex.test(password)) {
      tempErrors.password = "Need Uppercase, Lowercase & Special Character";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Registered with:", { name, email, password });
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
        <BoxAtom sx={{ flex: 1, p: { xs: 5, md: 10 }, color: "white" }}>
          <TypographyAtom
            variant="h4"
            fontWeight="bold"
            sx={{ mb: 4 }}
            text="Sign Up"
          />
          <BoxAtom
            component="form"
            onSubmit={handleRegister}
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
          >
            <TextField
              fullWidth
              label="Full Name"
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={Boolean(errors.name)}
              helperText={errors.name}
              InputLabelProps={{ style: { color: "#888" } }}
              sx={{
                input: { color: "white" },
                "& .MuiInput-underline:before": { borderBottomColor: "#444" },
                "& .MuiFormHelperText-root": { color: "#ff4444" },
              }}
            />

            <TextField
              fullWidth
              label="Email Address"
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={Boolean(errors.email)}
              helperText={errors.email}
              InputLabelProps={{ style: { color: "#888" } }}
              sx={{
                input: { color: "white" },
                "& .MuiFormHelperText-root": { color: "#ff4444" },
                "& .MuiInput-underline:before": {
                  borderBottomColor: errors.email ? "#ff4444" : "#444",
                },
                "& .MuiInput-underline:after": { borderBottomColor: "#ff4500" },
              }}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="standard"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={Boolean(errors.password)}
              helperText={errors.password}
              InputLabelProps={{ style: { color: "#888" } }}
              sx={{
                input: { color: "white" },
                "& .MuiFormHelperText-root": { color: "#ff4444" },
                "& .MuiInput-underline:before": { borderBottomColor: "#444" },
              }}
            />

            <Btn
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 4,
                py: 1.5,
                borderRadius: "50px",
                fontWeight: "bold",
              }}
              text="Create Account"
            />
          </BoxAtom>

          <BoxAtom sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
            <TypographyAtom
              variant="body2"
              sx={{ color: "gray" }}
              text="Already have an account?"
            />
            <Link
              href={"/Login"}
              sx={{
                color: "#ff4500",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Login
            </Link>
          </BoxAtom>
        </BoxAtom>

        <BoxAtom
          sx={{
            display: { xs: "none", md: "flex" },
            flex: 1,
            background: (theme) =>
              theme.customStyles?.myGradient ||
              "linear-gradient(45deg, #ff4500, #ff8c00)",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 6,
            color: "white",
          }}
        >
          <TypographyAtom
            variant="h2"
            sx={{ fontWeight: "bold" }}
            text="JOIN US!"
          />
          <TypographyAtom
            sx={{ mt: 2 }}
            text="Start your journey with us today."
          />
        </BoxAtom>
      </PaperAtom>
    </BoxAtom>
  );
}
