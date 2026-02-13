import React from "react";
import "./PerformanceChart.css";
import LinkLegendIcon from "./LegendIcon";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { date: "Dec 24", sent: 340, delivered: 350, opened: 280, clicked: 240 },
  { date: "Dec 25", sent: 270, delivered: 265, opened: 230, clicked: 190 },
  { date: "Dec 26", sent: 420, delivered: 410, opened: 350, clicked: 305 },
  { date: "Dec 27", sent: 370, delivered: 365, opened: 310, clicked: 275 },
  { date: "Dec 28", sent: 455, delivered: 450, opened: 385, clicked: 335 },
  { date: "Dec 29", sent: 520, delivered: 510, opened: 445, clicked: 395 },
  { date: "Dec 30", sent: 490, delivered: 485, opened: 415, clicked: 370 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: 10,
        padding: "10px 12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        fontSize: 12,
      }}>
      <div style={{ fontWeight: 600, marginBottom: 6 }}>{label}</div>
      {payload.map((p) => (
        <div
          key={p.dataKey}
          style={{ display: "flex", gap: 8, alignItems: "center" }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: p.color,
              display: "inline-block",
            }}
          />
          <span style={{ minWidth: 70, textTransform: "capitalize" }}>
            {p.name}
          </span>
          <span style={{ fontWeight: 600 }}>{p.value}</span>
        </div>
      ))}
    </div>
  );
};

const legendOrder = ["sent", "delivered", "opened", "clicked"];
const colorMap = {
  sent: "#3B82F6",
  delivered: "#10B981",
  opened: "#8B5CF6",
  clicked: "#F59E0B",
};

export default function PerformanceChart() {
  return (
    <div className="performance-card">
      <h4 className="performance-title">Performance Over Time</h4>

      <div className="performance-chart">
        <ResponsiveContainer width="100%" height={368}>
          <LineChart
            data={data}
           
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e9eef5" horizontal vertical />

            <XAxis
              dataKey="date"
              tick={{ fontSize: 12, fill: "#6b7280", fontFamily: "Arimo, sans-serif" }}
              axisLine={{ stroke: "#6B7280", strokeWidth: 1 }}
              tickLine={true}
            />

            <YAxis
              domain={[0, 600]}
              ticks={[0, 150, 300, 450, 600]}
              tick={{ fontSize: 12, fill: "#6b7280", fontFamily: "Arimo, sans-serif" }}
              axisLine={{ stroke: "#6B7280", strokeWidth: 1 }}
              tickLine={true}
              width={50}
            />

            <Tooltip content={<CustomTooltip />} />


            <Line type="monotone" dataKey="sent" name="Sent" stroke={colorMap.sent} strokeWidth={2.5} />
            <Line type="monotone" dataKey="delivered" name="Delivered" stroke={colorMap.delivered} strokeWidth={2.5} />
            <Line type="monotone" dataKey="opened" name="Opened" stroke={colorMap.opened} strokeWidth={2.5} />
            <Line type="monotone" dataKey="clicked" name="Clicked" stroke={colorMap.clicked} strokeWidth={2.5} />
          </LineChart>
        </ResponsiveContainer>

        <div className="customLegend insideLegend">
          {legendOrder.map((key) => (
            <div key={key} className="legendItem">
              <LinkLegendIcon color={colorMap[key]} />
              <span style={{ color: colorMap[key] }} className="legendName">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
