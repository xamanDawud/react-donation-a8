import "./Staticks.css";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const Staticks = () => {
  const COLORS = ["#8884d8", "#83a6ed", "#8dd1e1", "#82ca9d", "#a4de6c"];
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
  ];

  return (
    <div>
      {" "}
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data} fill={COLORS} label>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Staticks;
