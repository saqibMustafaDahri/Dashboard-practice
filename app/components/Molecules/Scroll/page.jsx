"use client";
import { useState, useEffect, useRef } from "react";
import BoxAtom from "../../Atoms/BoxAtom/page";
import TypographyAtom from "../../Atoms/TypographyAtom/page";

export default function Scroll() {
  const [showImage, setShowImage] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.boundingClientRect.top < 200) {
          setShowImage(true);
        } else {
          setShowImage(false);
        }
      },
      { threshold: 0.1 }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
    };
  }, []);

  return (
    <>
      <BoxAtom
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <BoxAtom
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            justifyContent: "space-between",
            alignItems: "flex-start",
            paddingY: { xs: "40px", md: "50px", lg: "70px" },
            marginTop: "10dvh",
            width: "90%",
            position: "relative",
            gap: { xs: 4, md: 2 },
          }}
        >
          <BoxAtom sx={{ width: { xs: "100%", md: "55%" } }}>
            {[...Array(15)].map((_, index) => (
              <div key={index} ref={index === 4 ? targetRef : null}>
                <TypographyAtom
                  sx={{
                    marginTop: index === 0 ? "0" : { xs: "40px", md: "60px" },
                    fontSize: { xs: "16px", md: "20px" },
                    lineHeight: "1.8",
                    textAlign: "justify",
                    color: "#333",
                  }}
                  text={`Text Block ${
                    index + 1
                  } Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
                />
              </div>
            ))}
          </BoxAtom>

          <BoxAtom
            sx={{
              position: { xs: "relative", md: "sticky" },
              top: "100px",
              zIndex: 10,
              width: { xs: "100%", md: "400px" },
            }}
          >
            <BoxAtom
              sx={{
                overflow: "hidden",
                transition: "all 0.9s ease-in-out",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
                width: "100%",
                height: "auto",
                borderRadius: "15px",
                padding: { xs: "20px", md: "20px" },
                background: (theme) => theme.customStyles.myGradient,
                boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
                marginBottom: { xs: "90px" },
              }}
            >
              {showImage ? (
                <img
                  src="masjid2.jpg"
                  alt="Switch"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    animation: "fadeIn 0.5s",
                  }}
                />
              ) : (
                <video
                  src="interior.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              )}
            </BoxAtom>
          </BoxAtom>
        </BoxAtom>
      </BoxAtom>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
