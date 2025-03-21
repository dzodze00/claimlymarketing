"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

const data = [
  { name: "Verified", value: 876, color: "#22c55e" },
  { name: "Pending", value: 289, color: "#f59e0b" },
  { name: "Rejected", value: 80, color: "#ef4444" },
]

export function PlaintiffStats() {
  return (
    <div className="h-[300px] flex flex-col">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value} Plaintiffs`, "Count"]} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex justify-between text-sm text-muted-foreground mt-2">
        <div>Total Plaintiffs: 1,245</div>
        <div>Verification Rate: 70.4%</div>
      </div>
    </div>
  )
}

