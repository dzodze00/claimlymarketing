"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { ChatbotPreview } from "@/components/chatbot/chatbot-preview"
import { ChatbotAnalytics } from "@/components/chatbot/chatbot-analytics"
import { ChatbotSettings } from "@/components/chatbot/chatbot-settings"

export default function ChatbotPage() {
  const [chatbotEnabled, setChatbotEnabled] = useState(true)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">AI Chatbot</h1>
        <div className="flex items-center space-x-2">
          <Switch id="chatbot-status" checked={chatbotEnabled} onCheckedChange={setChatbotEnabled} />
          <Label htmlFor="chatbot-status">{chatbotEnabled ? "Enabled" : "Disabled"}</Label>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Conversations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,842</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolution Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78.3%</div>
            <p className="text-xs text-muted-foreground">+3.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Human Escalations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">215</div>
            <p className="text-xs text-muted-foreground">11.7% of conversations</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="preview" className="mt-4">
        <TabsList>
          <TabsTrigger value="preview">Chatbot Preview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Configure Chatbot</CardTitle>
                <CardDescription>Customize the AI chatbot for your cases.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="chatbot-name">Chatbot Name</Label>
                  <Input id="chatbot-name" defaultValue="Claimly Assistant" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="welcome-message">Welcome Message</Label>
                  <Textarea
                    id="welcome-message"
                    defaultValue="Hello! I'm your Claimly Assistant. I'm here to help with your class action lawsuit questions and guide you through the process. How can I assist you today?"
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="case-selection">Case</Label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Select case" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Cases</SelectItem>
                      <SelectItem value="CA-2023-001">Smith v. TechCorp</SelectItem>
                      <SelectItem value="CA-2023-002">Johnson v. PharmaCo</SelectItem>
                      <SelectItem value="CA-2023-003">Williams v. AutoMakers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="escalation-threshold">Escalation Threshold</Label>
                  <Select defaultValue="medium">
                    <SelectTrigger>
                      <SelectValue placeholder="Select threshold" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low (Escalate Frequently)</SelectItem>
                      <SelectItem value="medium">Medium (Balanced)</SelectItem>
                      <SelectItem value="high">High (Minimize Escalations)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="document-collection" defaultChecked />
                  <Label htmlFor="document-collection">Enable Document Collection</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="id-verification" defaultChecked />
                  <Label htmlFor="id-verification">Enable ID Verification</Label>
                </div>
                <Button className="w-full">Save Configuration</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Live Preview</CardTitle>
                <CardDescription>See how your chatbot will appear to plaintiffs.</CardDescription>
              </CardHeader>
              <CardContent>
                <ChatbotPreview enabled={chatbotEnabled} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Chatbot Analytics</CardTitle>
              <CardDescription>Insights and performance metrics for your AI chatbot.</CardDescription>
            </CardHeader>
            <CardContent>
              <ChatbotAnalytics />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Settings</CardTitle>
              <CardDescription>Configure advanced settings for your AI chatbot.</CardDescription>
            </CardHeader>
            <CardContent>
              <ChatbotSettings />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

