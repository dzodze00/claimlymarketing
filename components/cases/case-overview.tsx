"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts"

const plaintiffData = [
  { date: "Oct 5", count: 120 },
  { date: "Oct 15", count: 350 },
  { date: "Oct 25", count: 580 },
  { date: "Nov 5", count: 720 },
  { date: "Nov 15", count: 850 },
  { date: "Nov 25", count: 980 },
  { date: "Dec 5", count: 1100 },
  { date: "Dec 15", count: 1245 },
]

const verificationData = [
  { name: "Oct", verified: 85, pending: 35, rejected: 10 },
  { name: "Nov", verified: 420, pending: 150, rejected: 45 },
  { name: "Dec", verified: 371, pending: 104, rejected: 25 },
]

interface CaseOverviewProps {
  caseDetails: any
}

export function CaseOverview({ caseDetails }: CaseOverviewProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Case Updates</CardTitle>
          <CardDescription>Recent updates and milestones for this case.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {caseDetails.updates.map((update: any, index: number) => (
              <div key={index} className="flex items-start gap-4">
                <div className="min-w-[100px] text-sm text-muted-foreground">{update.date}</div>
                <div className="flex-1">
                  <p>{update.text}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Plaintiff Growth</CardTitle>
          <CardDescription>Total plaintiffs over time.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={plaintiffData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="#4f46e5" strokeWidth={2} name="Plaintiffs" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Verification Status</CardTitle>
          <CardDescription>Plaintiff verification by month.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={verificationData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="verified" name="Verified" fill="#22c55e" />
                <Bar dataKey="pending" name="Pending" fill="#f59e0b" />
                <Bar dataKey="rejected" name="Rejected" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

