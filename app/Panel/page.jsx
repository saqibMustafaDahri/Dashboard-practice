"use client";
import React from "react";
import BoxAtom from "../components/Atoms/BoxAtom/page";
import SideBar from "../components/Molecules/SideBar/page";
// import FourCards from "../components/Molecules/FourCards/page";
import UserDetail from "../components/Molecules/UserDetail/page";
import FourCards from "../components/Molecules/FourCards/page";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import WaterfallChartIcon from "@mui/icons-material/WaterfallChart";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
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
            <BoxAtom
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <FourCards icon={<ShowChartIcon />} label="Growth" />
              <FourCards icon={<PieChartIcon />} label="Shares" />
              <FourCards icon={<WaterfallChartIcon />} label="Flow" />
              <FourCards icon={<LeaderboardIcon />} label="Rank" />
            </BoxAtom>{" "}
            <UserDetail />
          </BoxAtom>
        </BoxAtom>
      </BoxAtom>
    </>
  );
}
