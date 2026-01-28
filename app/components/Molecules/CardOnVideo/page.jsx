"use client";
import BoxAtom from "../../Atoms/BoxAtom/page";
import TypographyAtom from "../../Atoms/TypographyAtom/page";
import Btn from "../../Atoms/Btn/page";
export default function CardOnVideo() {
  return (
    <BoxAtom
      sx={{
        width: { xs: "70%", sm: "60%", md: "400px" },
        height: "auto",
        minHeight: "250px",
        borderRadius: "15px",
        textAlign: "center",
        padding: { xs: "15px", md: "5px" },
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        backdropFilter: "blur(15px)",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <TypographyAtom
        sx={{
          marginTop: "10px",
          fontWeight: "bold",
          fontSize: { xs: "1.2rem", md: "1.5rem" },
        }}
        text="Get started"
      />
      <TypographyAtom
        sx={{ fontSize: { xs: "0.9rem", md: "1.1rem" } }}
        text="Ready to unlock your Property's true Value"
      />
      <TypographyAtom
        sx={{ fontSize: { xs: "0.7rem", md: "0.85rem" }, opacity: 0.8 }}
        text="lorem ipsum lkj hjjuh gyhtf jbgug jnij gujdb yyt oiuy tyui tyu eig hytgd"
      />
      <BoxAtom
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          mt: "15px",
          paddingX: "10px",
        }}
      >
        <Btn
          sx={{
            width: { xs: "100%", sm: "200px", md: "200px" },
            fontSize: "8px",
            color: "white",
            border: "none",
            fontWeight: "bold",
            background:
              "linear-gradient(60deg, lightblue 20%, black 70%, red 100%)",
          }}
          text="Book a free Property Assessment"
        />
        <Btn
          sx={{
            width: { xs: "100%", sm: "150px", md: "150px" },
            fontSize: "8px",
            color: "white",
            border: "none",
            fontWeight: "bold",
            background:
              "linear-gradient(60deg, lightblue 20%, black 70%, red 100%)",
          }}
          text="Speak to the team"
        />
      </BoxAtom>
    </BoxAtom>
  );
}
