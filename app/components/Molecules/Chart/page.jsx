import { LineChart } from "@mui/x-charts/LineChart";
import BoxAtom from "../../Atoms/BoxAtom/page";
export default function Chart({
  xAxisData = [1, 2, 3, 5.5, 8, 10],
  seriesData = [2, 5.5, 2, 8.5, 1.5, 5],
}) {
  return (
    <BoxAtom
      sx={{
        backgroundColor: "white",
        height: "350px",
        marginTop: "16px",
        borderRadius: "8px",
        padding: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <LineChart
        xAxis={[{ data: xAxisData }]}
        series={[
          {
            data: seriesData,
          },
        ]}
        height={300}
        sx={{
          width: "100%",
          "& .MuiChartsAxis-bottom .MuiChartsAxis-line": { stroke: "black" },
          "& .MuiChartsAxis-left .MuiChartsAxis-line": { stroke: "black" },
          "& .MuiChartsAxis-bottom .MuiChartsAxis-tick": { stroke: "black" },
          "& .MuiChartsAxis-left .MuiChartsAxis-tick": { stroke: "black" },
          "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": { fill: "black" },
          "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": { fill: "black" },
        }}
      />
    </BoxAtom>
  );
}
