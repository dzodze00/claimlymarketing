"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts"

const sourceData = [
  { name: "Public Records", value: 425, color: "#4f46e5" },
  { name: "Social Media", value: 310, color: "#06b6d4" },
  { name: "News Articles", value: 234, color: "#8b5cf6" },
  { name: "Consumer Complaints", value: 196, color: "#ec4899" },
  { name: "SEC Filings", value: 83, color: "#f59e0b" },
]

const conversionData = [
  { name: "Smith v. TechCorp", discovered: 845, converted: 356 },
  { name: "Johnson v. PharmaCo", discovered: 234, converted: 112 },
  { name: "Williams v. AutoMakers", discovered: 169, converted: 89 },
]

const timelineData = [
  { date: "Nov 15", count: 42 },
  { date: "Nov 20", count: 63 },
  { date: "Nov 25", count: 78 },
  { date: "Nov 30", count: 91 },
  { date: "Dec 5", count: 124 },
  { date: "Dec 10", count: 156 },
  { date: "Dec 15", count: 187 },
]

export function DiscoveryInsights() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Discovery Sources</CardTitle>
          <CardDescription>Breakdown of plaintiff discovery by source.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sourceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {sourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value} Plaintiffs`, "Count"]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Conversion by Case</CardTitle>
          <CardDescription>Discovery to plaintiff conversion rates by case.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={conversionData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="discovered" name="Discovered" fill="#4f46e5" />
                <Bar dataKey="converted" name="Converted" fill="#22c55e" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Discovery Timeline</CardTitle>
          <CardDescription>Potential plaintiffs discovered over time.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={timelineData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" name="Discovered" fill="#4f46e5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>AI-Generated Insights</CardTitle>
          <CardDescription>Automated insights from discovery data.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Discovery Patterns</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                The AI has detected a significant increase in potential plaintiffs from social media sources over the
                past 7 days. This appears to be related to a viral post about the TechCorp data breach that has been
                shared over 5,000 times.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Conversion Optimization</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Plaintiffs discovered through consumer complaints have a 52% higher conversion rate than other sources.
                Consider allocating more resources to monitoring consumer complaint boards and forums.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Recommended Actions</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                1. Increase social media monitoring frequency to capitalize on the viral post trend. 2. Adjust outreach
                messaging for consumer complaint sources to emphasize the specific issues they've reported. 3. Consider
                expanding discovery to include Reddit and specialized forums where TechCorp customers are discussing the
                breach.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

