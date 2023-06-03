import {
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

export default function Chart() {
  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Aug",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Sep",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Oct",
      uv: 2490,
      pv: 3300,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 5490,
      pv: 5300,
      amt: 2100,
    },
    {
      name: "Dec",
      uv: 4490,
      pv: 2300,
      amt: 2100,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height={200}>
      <ComposedChart
        width={10}
        height={40}
        data={data}
        margin={{
          left: -10,
        }}
      >
        <XAxis dataKey="name" strokeOpacity={0} />
        <YAxis strokeOpacity={0} />
        <CartesianGrid stroke="#9F9F9F" strokeDasharray="5 5" />
        <Bar type="monotone" dataKey="uv" stroke="red" strokeWidth={2} />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
