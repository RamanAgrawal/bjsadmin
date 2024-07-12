import { BarChart, Bar } from "recharts";

const data = Array.from({ length: 20 }, () => ({
  name: `Page ${Math.floor(Math.random() * 10)}`,
  uv: Math.floor(Math.random() * 10000),
  pv: Math.floor(Math.random() * 10000),
  amt: Math.floor(Math.random() * 10000),
}));

const Chart = () => {
  return (
    <BarChart
      width={200}
      height={40}
      data={[...data]}
      style={{ width: "100%", height: "100%", padding: "0" }}
    >
      <Bar dataKey="uv" fill="#8884d8" />
    </BarChart>
  );
};

export default Chart;
