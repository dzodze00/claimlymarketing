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

const performanceData = [
  { date: "Nov 15", sent: 450, opened: 315, clicked: 180, converted: 90 },
  { date: "Nov 20", sent: 600, opened: 420, clicked: 240, converted: 120 },
  { date: "Nov 25", sent: 750, opened: 525, clicked: 300, converted: 150 },
  { date: "Nov 30", sent: 900, opened: 630, clicked: 360, converted: 180 },
  { date: "Dec 5", sent: 1050, opened: 735, clicked: 420, converted: 210 },
  { date: "Dec 10", sent: 1200, opened: 840, clicked: 480, converted: 240 },
  { date: "Dec 15", sent: 1350, opened: 945, clicked: 540, converted: 270 },
]

const channelData = [
  { name: "Email", sent: 4500, opened: 3150, clicked: 1800, converted: 900 },
  { name: "SMS", sent: 2500, opened: 2000, clicked: 1200, converted: 600 },
  { name: "Combined", sent: 1000, opened: 850, clicked: 600, converted: 360 },
]

export function OutreachAnalytics() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Outreach Performance</CardTitle>
          <CardDescription>Campaign performance metrics over time.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sent" name="Sent" stroke="#64748b" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="opened" name="Opened" stroke="#4f46e5" strokeWidth={2} dot={{ r: 4 }} />
                <Line
                  type="monotone"
                  dataKey="clicked"
                  name="Clicked"
                  stroke="#06b6d4"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="converted"
                  name="Converted"
                  stroke="#22c55e"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Channel Performance</CardTitle>
          <CardDescription>Performance comparison by channel.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={channelData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sent" name="Sent" fill="#64748b" />
                <Bar dataKey="opened" name="Opened" fill="#4f46e5" />
                <Bar dataKey="clicked" name="Clicked" fill="#06b6d4" />
                <Bar dataKey="converted" name="Converted" fill="#22c55e" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Key Metrics</CardTitle>
          <CardDescription>Overall campaign performance metrics.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Open Rate</span>
                <span className="text-sm font-medium">78.2%</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-muted">
                <div className="h-2 rounded-full bg-primary" style={{ width: "78.2%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Click-through Rate</span>
                <span className="text-sm font-medium">57.1%</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-muted">
                <div className="h-2 rounded-full bg-cyan-500" style={{ width: "57.1%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Conversion Rate</span>
                <span className="text-sm font-medium">32.3%</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-muted">
                <div className="h-2 rounded-full bg-green-500" style={{ width: "32.3%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Unsubscribe Rate</span>
                <span className="text-sm font-medium">2.1%</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-muted">
                <div className="h-2 rounded-full bg-red-500" style={{ width: "2.1%" }}></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>AI-Generated Insights</CardTitle>
          <CardDescription>Automated insights from outreach campaigns.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Channel Effectiveness</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Combined email and SMS campaigns have a 20% higher conversion rate than email-only campaigns. Consider
                increasing the use of multi-channel outreach for high-value plaintiff segments.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Timing Analysis</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Emails sent on Tuesday and Wednesday mornings (9-11am) have a 15% higher open rate than those sent at
                other times. SMS messages perform best in the early evening (5-7pm).
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Recommended Actions</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                1. A/B test different subject lines for the Smith v. TechCorp campaign to improve open rates. 2. Segment
                plaintiffs by engagement level and create targeted follow-up campaigns. 3. Optimize SMS message content
                to improve click-through rates, which are currently 8% below benchmark.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

