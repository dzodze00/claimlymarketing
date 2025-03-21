"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts"

const data = [
  {
    name: "Nov 15",
    "New Plaintiffs": 65,
    Verified: 38,
    Rejected: 12,
  },
  {
    name: "Nov 20",
    "New Plaintiffs": 78,
    Verified: 52,
    Rejected: 15,
  },
  {
    name: "Nov 25",
    "New Plaintiffs": 91,
    Verified: 67,
    Rejected: 18,
  },
  {
    name: "Nov 30",
    "New Plaintiffs": 125,
    Verified: 85,
    Rejected: 22,
  },
  {
    name: "Dec 5",
    "New Plaintiffs": 132,
    Verified: 97,
    Rejected: 25,
  },
  {
    name: "Dec 10",
    "New Plaintiffs": 145,
    Verified: 105,
    Rejected: 30,
  },
  {
    name: "Dec 15",
    "New Plaintiffs": 178,
    Verified: 120,
    Rejected: 35,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <Tooltip />
        <Legend />
        <Bar dataKey="New Plaintiffs" fill="#4f46e5" radius={[4, 4, 0, 0]} />
        <Bar dataKey="Verified" fill="#22c55e" radius={[4, 4, 0, 0]} />
        <Bar dataKey="Rejected" fill="#ef4444" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

