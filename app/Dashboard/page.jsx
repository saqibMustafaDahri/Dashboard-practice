"use client";
import React from "react";
import Bar from "../components/Molecules/Bar/page";
import Chart from "../components/Molecules/Chart/page";
import PiChart from "../components/Molecules/PiChart/page";
import BoxAtom from "../components/Atoms/BoxAtom/page";
import TypographyAtom from "../components/Atoms/TypographyAtom/page";
import Gauge from "../components/Molecules/Gauge/page";
import Bar2 from "../components/Molecules/Bar2/page";
import SideBar from "../components/Molecules//SideBar/page";
import FourCards from "../components/Molecules/FourCards/page";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import WaterfallChartIcon from "@mui/icons-material/WaterfallChart";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
export default function Dashboard() {
  return (
    <BoxAtom
      sx={{
        width: "100%",
        backgroundColor: "#F2F2F2",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <BoxAtom
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          paddingRight: { xs: "10px", md: "20px" },
          paddingLeft: { xs: "10px" },
          gap: "20px",
          alignItems: "flex-start",
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
          </BoxAtom>
          <Chart />
          <BoxAtom
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: "20px",
              marginTop: "20px",
              marginBottom: "30px",
            }}
          >
            <BoxAtom
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                backgroundColor: "white",
                width: { xs: "100%", lg: "50%" },
                height: { xs: "auto", sm: "300px" },
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              <BoxAtom sx={{ marginTop: { xs: "10px", sm: "50px" }, flex: 1 }}>
                <TypographyAtom
                  sx={{
                    color: "#001652",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                  text="Graph"
                />
                <TypographyAtom
                  sx={{ color: "black", fontSize: "14px", marginTop: "10px" }}
                  text="hgdvhj sd d ecdf dcsdiudvcgcuhdscsc sddsisdcvsdcs dicdskc huod  chudshc."
                />
              </BoxAtom>
              <PiChart />
            </BoxAtom>
            <BoxAtom
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                backgroundColor: "white",
                width: { xs: "100%", lg: "50%" },
                height: { xs: "auto", sm: "300px" },
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              <BoxAtom sx={{ marginTop: { xs: "10px", sm: "50px" }, flex: 1 }}>
                <TypographyAtom
                  sx={{
                    color: "#001652",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                  text="Bar Graph"
                />
                <TypographyAtom
                  sx={{ color: "black", fontSize: "14px", marginTop: "10px" }}
                  text="hgdvhj sd d ec dcsdiudvcgcuhdscsc sddsisdcvsdcs dicdskc huod  chudshc."
                />
              </BoxAtom>
              <Bar />
            </BoxAtom>
          </BoxAtom>

          <BoxAtom
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: "20px",
              marginTop: "20px",
              marginBottom: "30px",
            }}
          >
            <BoxAtom
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                backgroundColor: "white",
                width: { xs: "100%", lg: "50%" },
                height: { xs: "auto", sm: "300px" },
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              <BoxAtom sx={{ marginTop: { xs: "10px", sm: "50px" }, flex: 1 }}>
                <TypographyAtom
                  sx={{
                    color: "#001652",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                  text="Graph"
                />
                <TypographyAtom
                  sx={{ color: "black", fontSize: "14px", marginTop: "10px" }}
                  text="hgdvhj sd d ecdf dcsdiudvcgcuhdscsc sddsisdcvsdcs dicdskc huod  chudshc."
                />
              </BoxAtom>
              <Gauge />
            </BoxAtom>
            <BoxAtom
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                backgroundColor: "white",
                width: { xs: "100%", lg: "50%" },
                height: { xs: "auto", sm: "300px" },
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              <BoxAtom sx={{ marginTop: { xs: "10px", sm: "50px" }, flex: 1 }}>
                <TypographyAtom
                  sx={{
                    color: "#001652",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                  text="Bar Graph"
                />
                <TypographyAtom
                  sx={{ color: "black", fontSize: "14px", marginTop: "10px" }}
                  text="hgdvhj sd d ec dcsdiudvcgcuhdscsc sddsisdcvsdcs dicdskc huod  chudshc."
                />
              </BoxAtom>
              <Bar2 />
            </BoxAtom>
          </BoxAtom>
        </BoxAtom>
      </BoxAtom>
    </BoxAtom>
  );
}
