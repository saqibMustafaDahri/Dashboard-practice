"use client";
import React, { useState } from "react";
import {
  TextField,
  Paper,
  Link,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import BoxAtom from "../components/Atoms/BoxAtom/page";
import TypographyAtom from "../components/Atoms/TypographyAtom/page";
import Btn from "../components/Atoms/Btn/page";
import { questions } from "../Constants/data";
export default function WhyUsPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const q = questions[currentQuestionIndex];

  const currentAnswer = answers[currentQuestionIndex];
  const isAnswered = currentAnswer && currentAnswer.toString().trim() !== "";

  const handleChange = (value) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: value,
    }));
  };

  const handleNext = () => {
    if (isAnswered && currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((i) => i + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((i) => i - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAnswered) {
      console.log("Final Answers:", answers);
      alert("Form Submitted Successfully!");
    }
  };

  const buttonStyle = {
    background: (theme) =>
      theme.customStyles?.myGradient ||
      "linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)",
    py: 1,
    px: 3,
    borderRadius: "50px",
    fontWeight: "bold",
    color: "white",
    "&:hover": { opacity: 0.95 },
    "&.Mui-disabled": {
      background: "#444",
      color: "#888",
    },
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
      <Paper
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
            sx={{
              mb: 2,
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: "bold",
            }}
            text="Questions"
          />

          <TypographyAtom
            variant="body2"
            sx={{ color: "gray", mb: 2 }}
            text={`Question ${currentQuestionIndex + 1} of ${questions.length}`}
          />

          <BoxAtom component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            {q.type === "text" ? (
              <TextField
                fullWidth
                label={q.text}
                variant="standard"
                margin="normal"
                placeholder="Type your answer here..."
                value={answers[currentQuestionIndex] || ""}
                onChange={(e) => handleChange(e.target.value)}
                InputLabelProps={{ style: { color: "#aaa" } }}
                sx={{
                  input: { color: "white" },
                  "& .MuiInput-underline:before": { borderBottomColor: "#555" },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#ff4500",
                  },
                }}
              />
            ) : (
              <FormControl component="fieldset" sx={{ mt: 1, color: "white" }}>
                <TypographyAtom sx={{ mb: 1 }} text={q.text} />
                <RadioGroup
                  value={answers[currentQuestionIndex] || ""}
                  onChange={(e) => handleChange(e.target.value)}
                >
                  {q.options.map((opt) => (
                    <FormControlLabel
                      key={opt}
                      value={opt}
                      control={<Radio sx={{ color: "white" }} />}
                      label={
                        <TypographyAtom text={opt} sx={{ color: "white" }} />
                      }
                      sx={{ color: "white" }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            )}

            <BoxAtom
              sx={{ display: "flex", gap: 2, mt: 4, alignItems: "center" }}
            >
              <Btn
                onClick={handleBack}
                disabled={currentQuestionIndex === 0}
                sx={{
                  ...buttonStyle,
                  background: "transparent",
                  border: "none",
                }}
                text="Back"
              />

              {currentQuestionIndex < questions.length - 1 ? (
                <Btn
                  onClick={handleNext}
                  disabled={!isAnswered}
                  sx={{
                    ...buttonStyle,
                    background: "transparent",
                    border: "none",
                  }}
                  text="Next"
                />
              ) : (
                <Btn sx={buttonStyle} text="Submit" />
              )}
            </BoxAtom>
          </BoxAtom>

          <BoxAtom sx={{ mt: 4, textAlign: "center" }}>
            <TypographyAtom
              variant="body2"
              sx={{ color: "gray" }}
              text="Need to go back?"
            />
            <Link href="/Login" underline="hover" sx={{ color: "#ff4500" }}>
              <TypographyAtom text="Login" />
            </Link>
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
              <TypographyAtom text="Dashboard" />
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
            textAlign: "center",
            p: 6,
            color: "white",
          }}
        >
          <TypographyAtom
            sx={{
              letterSpacing: 4,
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: "bold",
            }}
            text="WELCOME DEV!"
          />

          <TypographyAtom
            sx={{ mt: 2, color: "rgba(255,255,255,0.7)", maxWidth: "280px" }}
            text="Tell us about yourself so we can personalize your experience."
          />
        </BoxAtom>
      </Paper>
    </BoxAtom>
  );
}
