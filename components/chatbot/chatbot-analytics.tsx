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
  PieChart,
  Pie,
  Cell,
} from "recharts"

const conversationData = [
  { date: "Nov 15", conversations: 85, resolved: 65 },
  { date: "Nov 20", conversations: 110, resolved: 82 },
  { date: "Nov 25", conversations: 125, resolved: 95 },
  { date: "Nov 30", conversations: 150, resolved: 115 },
  { date: "Dec 5", conversations: 180, resolved: 140 },
  { date: "Dec 10", conversations: 210, resolved: 165 },
  { date: "Dec 15", conversations: 245, resolved: 192 },
]

const topicsData = [
  { name: "Document Submission", value: 35, color: "#4f46e5" },
  { name: "Case Status", value: 25, color: "#06b6d4" },
  { name: "Eligibility", value: 15, color: "#8b5cf6" },
  { name: "Compensation", value: 12, color: "#ec4899" },
  { name: "Timeline", value: 8, color: "#f59e0b" },
  { name: "Other", value: 5, color: "#64748b" },
]

export function ChatbotAnalytics() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Conversation Volume & Resolution</CardTitle>
          <CardDescription>Total conversations and resolution rate over time.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={conversationData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="conversations"
                  name="Total Conversations"
                  stroke="#4f46e5"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="resolved"
                  name="Resolved"
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
          <CardTitle>Conversation Topics</CardTitle>
          <CardDescription>Breakdown of conversation topics.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={topicsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {topicsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Chatbot Performance</CardTitle>
          <CardDescription>Key performance metrics.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Resolution Rate</span>
                <span className="text-sm font-medium">78.3%</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-muted">
                <div className="h-2 rounded-full bg-green-500" style={{ width: "78.3%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Average Response Time</span>
                <span className="text-sm font-medium">1.2s</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-muted">
                <div className="h-2 rounded-full bg-blue-500" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">User Satisfaction</span>
                <span className="text-sm font-medium">92%</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-muted">
                <div className="h-2 rounded-full bg-purple-500" style={{ width: "92%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Human Escalation Rate</span>
                <span className="text-sm font-medium">11.7%</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-muted">
                <div className="h-2 rounded-full bg-amber-500" style={{ width: "11.7%" }}></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>AI-Generated Insights</CardTitle>
          <CardDescription>Automated insights from chatbot conversations.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Trending Topics</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                There has been a 35% increase in questions about compensation amounts over the past week. This coincides
                with recent media coverage of the TechCorp case. Consider adding more detailed information about the
                compensation process to the chatbot's knowledge base.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">User Satisfaction</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Users who interact with the chatbot for document submission have a 15% higher satisfaction rate than
                those who use it for case status inquiries. The document submission process appears to be
                well-optimized, while case status updates could be improved.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Recommended Actions</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                1. Enhance the chatbot's responses regarding compensation estimates and timelines. 2. Improve case
                status update messaging with more specific details and next steps. 3. Consider adding proactive
                notifications for plaintiffs when their case status changes.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
