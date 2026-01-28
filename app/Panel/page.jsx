"use client";
import React from "react";
import BoxAtom from "../components/Atoms/BoxAtom/page";
import SideBar from "../components/Molecules/SideBar/page";
import FourCards from "../components/Molecules/FourCards/page";
import UserDetail from "../components/Molecules/UserDetail/page";
export default function Panel() {
  return (
    <>
      <BoxAtom
        sx={{
          width: "100%",
          backgroundColor: "#F2F2F2",
          position: "relative",
        }}
      >
        <BoxAtom
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            paddingRight: { xs: "10px", md: "20px" },
            gap: "20px",
          }}
        >
          <SideBar />
          <BoxAtom
            sx={{
              width: { xs: "100%", md: "80%" },
            }}
          >
            <FourCards />
            <UserDetail />
          </BoxAtom>
        </BoxAtom>
      </BoxAtom>
    </>
  );
}
