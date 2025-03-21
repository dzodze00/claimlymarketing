"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { OutreachPreview } from "@/components/outreach/outreach-preview"
import { OutreachAnalytics } from "@/components/outreach/outreach-analytics"
import { OutreachTemplates } from "@/components/outreach/outreach-templates"

export default function OutreachPage() {
  const [outreachType, setOutreachType] = useState("email")

  const campaigns = [
    {
      id: "OC-001",
      name: "Initial Plaintiff Discovery",
      case: "Smith v. TechCorp",
      type: "Email",
      sent: 2500,
      opened: 1875,
      converted: 625,
      status: "Active",
      date: "2023-11-15",
    },
    {
      id: "OC-002",
      name: "Document Request Follow-up",
      case: "Smith v. TechCorp",
      type: "Email + SMS",
      sent: 1245,
      opened: 1100,
      converted: 980,
      status: "Completed",
      date: "2023-11-20",
    },
    {
      id: "OC-003",
      name: "Initial Plaintiff Discovery",
      case: "Johnson v. PharmaCo",
      type: "Email",
      sent: 1800,
      opened: 1200,
      converted: 350,
      status: "Active",
      date: "2023-12-01",
    },
    {
      id: "OC-004",
      name: "Case Update Notification",
      case: "Smith v. TechCorp",
      type: "Email",
      sent: 1245,
      opened: 1050,
      converted: 0,
      status: "Completed",
      date: "2023-12-05",
    },
    {
      id: "OC-005",
      name: "Verification Reminder",
      case: "Williams v. AutoMakers",
      type: "SMS",
      sent: 450,
      opened: 425,
      converted: 380,
      status: "Active",
      date: "2023-12-10",
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Automated Outreach</h1>
        <Button>Create Campaign</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7,240</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78.2%</div>
            <p className="text-xs text-muted-foreground">+5.4% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32.3%</div>
            <p className="text-xs text-muted-foreground">+2.8% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Recent Campaigns</CardTitle>
          <CardDescription>View and manage your automated outreach campaigns.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campaign</TableHead>
                <TableHead>Case</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Sent</TableHead>
                <TableHead>Open Rate</TableHead>
                <TableHead>Conversion</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map((campaign) => (
                <TableRow key={campaign.id}>
                  <TableCell className="font-medium">{campaign.name}</TableCell>
                  <TableCell>{campaign.case}</TableCell>
                  <TableCell>{campaign.type}</TableCell>
                  <TableCell>{campaign.sent.toLocaleString()}</TableCell>
                  <TableCell>{Math.round((campaign.opened / campaign.sent) * 100)}%</TableCell>
                  <TableCell>{Math.round((campaign.converted / campaign.sent) * 100)}%</TableCell>
                  <TableCell>
                    <Badge variant={campaign.status === "Active" ? "default" : "secondary"}>{campaign.status}</Badge>
                  </TableCell>
                  <TableCell>{campaign.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Tabs defaultValue="create" className="mt-4">
        <TabsList>
          <TabsTrigger value="create">Create Outreach</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="create" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Create New Outreach</CardTitle>
                <CardDescription>Configure and send AI-generated outreach to plaintiffs.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="campaign-name">Campaign Name</Label>
                  <Input id="campaign-name" placeholder="e.g., Initial Plaintiff Discovery" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="case-selection">Case</Label>
                  <Select defaultValue="CA-2023-001">
                    <SelectTrigger>
                      <SelectValue placeholder="Select case" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="CA-2023-001">Smith v. TechCorp</SelectItem>
                      <SelectItem value="CA-2023-002">Johnson v. PharmaCo</SelectItem>
                      <SelectItem value="CA-2023-003">Williams v. AutoMakers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Outreach Type</Label>
                  <div className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="type-email"
                        name="outreach-type"
                        value="email"
                        checked={outreachType === "email"}
                        onChange={() => setOutreachType("email")}
                        className="h-4 w-4 text-primary"
                      />
                      <Label htmlFor="type-email" className="cursor-pointer">
                        Email
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="type-sms"
                        name="outreach-type"
                        value="sms"
                        checked={outreachType === "sms"}
                        onChange={() => setOutreachType("sms")}
                        className="h-4 w-4 text-primary"
                      />
                      <Label htmlFor="type-sms" className="cursor-pointer">
                        SMS
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="type-both"
                        name="outreach-type"
                        value="both"
                        checked={outreachType === "both"}
                        onChange={() => setOutreachType("both")}
                        className="h-4 w-4 text-primary"
                      />
                      <Label htmlFor="type-both" className="cursor-pointer">
                        Both
                      </Label>
                    </div>
                  </div>
                </div>
                {(outreachType === "email" || outreachType === "both") && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="email-subject">Email Subject</Label>
                      <Input id="email-subject" placeholder="e.g., Important: Your Eligibility for Smith v. TechCorp" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email-content">Email Content</Label>
                      <Textarea
                        id="email-content"
                        placeholder="Enter email content or use AI to generate..."
                        rows={6}
                      />
                      <Button variant="outline" className="w-full">
                        Generate with AI
                      </Button>
                    </div>
                  </>
                )}
                {(outreachType === "sms" || outreachType === "both") && (
                  <div className="space-y-2">
                    <Label htmlFor="sms-content">SMS Content</Label>
                    <Textarea id="sms-content" placeholder="Enter SMS content (160 characters max)..." rows={3} />
                    <Button variant="outline" className="w-full">
                      Generate with AI
                    </Button>
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="audience">Target Audience</Label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Select audience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Potential Plaintiffs</SelectItem>
                      <SelectItem value="verified">Verified Plaintiffs Only</SelectItem>
                      <SelectItem value="pending">Pending Verification</SelectItem>
                      <SelectItem value="unresponsive">Unresponsive Plaintiffs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="schedule">Schedule</Label>
                  <Select defaultValue="now">
                    <SelectTrigger>
                      <SelectValue placeholder="Select schedule" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="now">Send Immediately</SelectItem>
                      <SelectItem value="schedule">Schedule for Later</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full">Preview & Send</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Preview</CardTitle>
                <CardDescription>See how your outreach will appear to recipients.</CardDescription>
              </CardHeader>
              <CardContent>
                <OutreachPreview type={outreachType} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Outreach Analytics</CardTitle>
              <CardDescription>Performance metrics and insights for your outreach campaigns.</CardDescription>
            </CardHeader>
            <CardContent>
              <OutreachAnalytics />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Outreach Templates</CardTitle>
              <CardDescription>Manage and create reusable outreach templates.</CardDescription>
            </CardHeader>
            <CardContent>
              <OutreachTemplates />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

