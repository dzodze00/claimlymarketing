"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  {
    name: "Nov 15",
    "Engagement Rate": 65,
    "Conversion Rate": 45,
    "Drop-off Rate": 20,
  },
  {
    name: "Nov 20",
    "Engagement Rate": 68,
    "Conversion Rate": 48,
    "Drop-off Rate": 18,
  },
  {
    name: "Nov 25",
    "Engagement Rate": 72,
    "Conversion Rate": 52,
    "Drop-off Rate": 16,
  },
  {
    name: "Nov 30",
    "Engagement Rate": 75,
    "Conversion Rate": 55,
    "Drop-off Rate": 15,
  },
  {
    name: "Dec 5",
    "Engagement Rate": 78,
    "Conversion Rate": 58,
    "Drop-off Rate": 14,
  },
  {
    name: "Dec 10",
    "Engagement Rate": 82,
    "Conversion Rate": 62,
    "Drop-off Rate": 12,
  },
  {
    name: "Dec 15",
    "Engagement Rate": 85,
    "Conversion Rate": 65,
    "Drop-off Rate": 10,
  },
]

export function CaseMetrics() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip formatter={(value) => [`${value}%`, ""]} />
        <Legend />
        <Line
          type="monotone"
          dataKey="Engagement Rate"
          stroke="#4f46e5"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line type="monotone" dataKey="Conversion Rate" stroke="#22c55e" strokeWidth={2} dot={{ r: 4 }} />
        <Line type="monotone" dataKey="Drop-off Rate" stroke="#ef4444" strokeWidth={2} dot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}

