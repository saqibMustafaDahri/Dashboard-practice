import { BarChart } from "@mui/x-charts/BarChart";
import BoxAtom from "../../Atoms/BoxAtom/page";
export default function Bar() {
  return (
    <BoxAtom
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BarChart
        xAxis={[{ data: ["group A", "group B", "group C"] }]}
        series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
        height={300}
        width={300}
        sx={{
          width: "100%",
          "& .MuiChartsAxis-bottom .MuiChartsAxis-line": { stroke: "white" },
          "& .MuiChartsAxis-left .MuiChartsAxis-line": { stroke: "white" },
          "& .MuiChartsAxis-bottom .MuiChartsAxis-tick": { stroke: "white" },
          "& .MuiChartsAxis-left .MuiChartsAxis-tick": { stroke: "white" },
          "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": { fill: "white" },
          "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": { fill: "white" },
        }}
      />
    </BoxAtom>
  );
}
