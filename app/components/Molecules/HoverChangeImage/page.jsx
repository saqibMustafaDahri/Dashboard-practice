"use client";
import { useState } from "react";
import BoxAtom from "../../Atoms/BoxAtom/page";
import TypographyAtom from "../../Atoms/TypographyAtom/page";
export default function HoverChangeImage() {
  const [activeImage, setActiveImage] = useState("masjid2.jpg");

  return (
    <BoxAtom sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <BoxAtom
        sx={{
          width: "90%",
          flexDirection: { xs: "column", md: "row" },
          display: "flex",
          justifyContent: "space-between",
          display: "flex",
          gap: "40px",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        <BoxAtom
          sx={{
            background: (theme) => theme.customStyles.myGradient,
            borderRadius: "20px",
            height: "400px",
            width: { xs: "100%", md: "500px" },
            padding: "20px",
            boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            gap: "40px",
          }}
        >
          <BoxAtom
            onMouseEnter={() => setActiveImage("masjid2.jpg")}
            sx={{
              boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
              height: "70px",
              width: "100%",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "0.3s",
              backgroundColor:
                activeImage === "masjid2.jpg" ? "#FEFF8A" : "white",
              "&:hover": {
                backgroundColor: "#f0f0f0",
                transform: "scale(1.02)",
              },
            }}
          >
            <TypographyAtom text="Lorem ipsum dolor sit amet." />
          </BoxAtom>

          <BoxAtom
            onMouseEnter={() => setActiveImage("3d male.jpg")}
            sx={{
              boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
              height: "70px",
              width: "100%",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "0.3s",
              backgroundColor:
                activeImage === "3d male.jpg" ? "#FEFF8A" : "white",
              "&:hover": {
                backgroundColor: "#f0f0f0",
                transform: "scale(1.02)",
              },
            }}
          >
            <TypographyAtom text="Lorem ipsum dolor sit amet." />
          </BoxAtom>

          <BoxAtom
            onMouseEnter={() => setActiveImage("water.jpg")}
            sx={{
              boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
              height: "70px",
              width: "100%",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "0.3s",
              backgroundColor:
                activeImage === "water.jpg" ? "#FEFF8A" : "white",
              "&:hover": {
                backgroundColor: "#f0f0f0",
                transform: "scale(1.02)",
              },
            }}
          >
            <TypographyAtom text="Lorem ipsum dolor sit amet." />
          </BoxAtom>
        </BoxAtom>

        <BoxAtom
          sx={{
            width: { xs: "100%", md: "400px" },
            height: { xs: "auto", md: "400px" },
            minHeight: "300px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={activeImage}
            alt="Dynamic Display"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "20px",
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
              transition: "opacity 0.4s ease-in-out",
            }}
          />
        </BoxAtom>
      </BoxAtom>
    </BoxAtom>
  );
}
