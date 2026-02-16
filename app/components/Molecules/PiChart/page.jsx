import { PieChart } from "@mui/x-charts/PieChart";
import BoxAtom from "../../Atoms/BoxAtom/page";
import { data } from "../../../Constants/data";

const settings = {
  width: 300,
  height: 300,
  hideLegend: true,
};

export default function PiChart() {
  return (
    <BoxAtom
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PieChart
        series={[{ innerRadius: 0, outerRadius: 120, data, arcLabel: "value" }]}
        {...settings}
      />
    </BoxAtom>
  );
}
