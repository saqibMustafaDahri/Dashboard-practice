"use client";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import PaperAtom from "../components/Atoms/PaperAtom/page";
import BoxAtom from "../components/Atoms/BoxAtom/page";
import TypographyAtom from "../components/Atoms/TypographyAtom/page";
import Btn from "../components/Atoms/Btn/page";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log({ name, email, message });
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
            p: { xs: 4, md: 4 },
            color: "white",
          }}
        >
          <TypographyAtom
            variant="h4"
            sx={{
              mb: 2,
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            }}
            text="Contact Us"
          />
          <TypographyAtom
            variant="body1"
            sx={{
              color: "white",
              textAlign: "center",
            }}
            text=" We'd love to hear from you! Fill out the form below and we'll get
            back to you as soon as possible."
          />

          <BoxAtom component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              fullWidth
              label="Name"
              variant="standard"
              margin="normal"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputLabelProps={{ style: { color: "#aaa" } }}
              sx={{
                input: { color: "white" },
                "& .MuiInput-underline:before": { borderBottomColor: "#555" },
                "& .MuiInput-underline:after": { borderBottomColor: "#ff4500" },
              }}
            />
            <TextField
              TextField
              fullWidth
              label="Email"
              variant="standard"
              margin="normal"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={
                email !== "" &&
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
              }
              helperText={
                email !== "" &&
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
                  ? "Please enter a valid email address"
                  : ""
              }
              InputLabelProps={{ style: { color: "#aaa" } }}
              sx={{
                input: { color: "white" },
                "& .MuiInput-underline:before": { borderBottomColor: "#555" },
                "& .MuiInput-underline:after": { borderBottomColor: "#ff4500" },
              }}
            />

            <TextField
              fullWidth
              label="Message"
              variant="standard"
              margin="normal"
              placeholder="Your message"
              multiline
              minRows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              InputLabelProps={{ style: { color: "#aaa" } }}
              sx={{
                textarea: { color: "white" },
                "& .MuiInput-underline:before": { borderBottomColor: "#555" },
                "& .MuiInput-underline:after": { borderBottomColor: "#ff4500" },
                mt: 1,
              }}
            />

            <Btn
              type="submit"
              variant="contained"
              sx={{
                width: "100%",
                border: "none",
                background: (theme) => theme.customStyles.myGradient,
                mt: 6,
                py: 1.5,
                borderRadius: "50px",
                fontWeight: "bold",
                "&:hover": { opacity: 0.9 },
              }}
              text="  Send Message"
            />
            <Btn
              href="/Dashboard"
              type="submit"
              variant="contained"
              sx={{
                border: "none",
                width: "100%",
                background: (theme) => theme.customStyles.myGradient,
                mt: 2,
                py: 1.5,
                borderRadius: "50px",
                fontWeight: "bold",
                "&:hover": { opacity: 0.9 },
              }}
              text="Dashboard"
            />
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
            variant="h2"
            sx={{ letterSpacing: 4, fontWeight: "bold" }}
            text="GET IN TOUCH"
          />
          <TypographyAtom
            sx={{ mt: 2, color: "rgba(255,255,255,0.7)", maxWidth: "320px" }}
            text="We are here to help. Share your thoughts, questions, or feedback and
            we'll respond promptly."
          />
        </BoxAtom>
      </PaperAtom>
    </BoxAtom>
  );
}
