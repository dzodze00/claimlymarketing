"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DiscoverySettings() {
  const [advancedMode, setAdvancedMode] = useState(false)

  return (
    <Tabs defaultValue="general">
      <TabsList>
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="sources">Data Sources</TabsTrigger>
        <TabsTrigger value="criteria">Eligibility Criteria</TabsTrigger>
        <TabsTrigger value="advanced">Advanced</TabsTrigger>
      </TabsList>

      <TabsContent value="general" className="space-y-4 mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="discovery-frequency">Discovery Frequency</Label>
            <Select defaultValue="daily">
              <SelectTrigger>
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hourly">Hourly</SelectItem>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="custom">Custom</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="min-score">Minimum Eligibility Score</Label>
            <div className="flex items-center gap-2">
              <Input id="min-score" type="number" defaultValue="70" min="0" max="100" />
              <span>/100</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="auto-outreach">Automatic Outreach</Label>
          <div className="flex items-center space-x-2">
            <Switch id="auto-outreach" defaultChecked />
            <Label htmlFor="auto-outreach">Enable automatic outreach to discovered plaintiffs</Label>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="outreach-delay">Outreach Delay</Label>
          <Select defaultValue="immediate">
            <SelectTrigger>
              <SelectValue placeholder="Select delay" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="immediate">Immediate</SelectItem>
              <SelectItem value="1day">1 Day</SelectItem>
              <SelectItem value="3days">3 Days</SelectItem>
              <SelectItem value="1week">1 Week</SelectItem>
              <SelectItem value="custom">Custom</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="notification-settings">Notification Settings</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="notify-new-plaintiffs" defaultChecked />
              <Label htmlFor="notify-new-plaintiffs">Notify when new plaintiffs are discovered</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="notify-high-score" defaultChecked />
              <Label htmlFor="notify-high-score">Notify for high-scoring plaintiffs (90+)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="notify-weekly" defaultChecked />
              <Label htmlFor="notify-weekly">Send weekly discovery summary</Label>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button>Save Settings</Button>
        </div>
      </TabsContent>

      <TabsContent value="sources" className="space-y-4 mt-4">
        <div className="space-y-2">
          <Label>Data Sources</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="public-records" defaultChecked />
              <Label htmlFor="public-records">Public Records</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="social-media" defaultChecked />
              <Label htmlFor="social-media">Social Media</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="news-articles" defaultChecked />
              <Label htmlFor="news-articles">News Articles</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="consumer-complaints" defaultChecked />
              <Label htmlFor="consumer-complaints">Consumer Complaints</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="sec-filings" defaultChecked />
              <Label htmlFor="sec-filings">SEC Filings</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="custom-sources" />
              <Label htmlFor="custom-sources">Custom Sources</Label>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="custom-sources-list">Custom Sources</Label>
          <Textarea id="custom-sources-list" placeholder="Enter custom data sources, one per line..." rows={4} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="source-priority">Source Priority</Label>
          <Select defaultValue="balanced">
            <SelectTrigger>
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="balanced">Balanced (Default)</SelectItem>
              <SelectItem value="public-records">Prioritize Public Records</SelectItem>
              <SelectItem value="social-media">Prioritize Social Media</SelectItem>
              <SelectItem value="news">Prioritize News Articles</SelectItem>
              <SelectItem value="custom">Custom Priority</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-end">
          <Button>Save Sources</Button>
        </div>
      </TabsContent>

      <TabsContent value="criteria" className="space-y-4 mt-4">
        <div className="space-y-2">
          <Label htmlFor="eligibility-criteria">Eligibility Criteria</Label>
          <Textarea
            id="eligibility-criteria"
            placeholder="Define the criteria that makes someone eligible for this class action..."
            rows={6}
            defaultValue="For Smith v. TechCorp: Customer of TechCorp between January 1, 2023, and March 31, 2023. Must have received notification of data breach or have evidence their data was compromised. Must be a resident of the United States."
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="exclusion-criteria">Exclusion Criteria</Label>
          <Textarea
            id="exclusion-criteria"
            placeholder="Define criteria that would exclude someone from eligibility..."
            rows={4}
            defaultValue="TechCorp employees and their immediate family members. Individuals who have already settled separately with TechCorp regarding the data breach. Individuals who opted out of TechCorp's terms of service arbitration clause."
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="scoring-weights">Scoring Weights</Label>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="weight-customer" className="w-40">
                Customer Status:
              </Label>
              <Input id="weight-customer" type="number" defaultValue="40" min="0" max="100" />
            </div>
            <div className="flex items-center gap-2">
              <Label htmlFor="weight-notification" className="w-40">
                Breach Notification:
              </Label>
              <Input id="weight-notification" type="number" defaultValue="30" min="0" max="100" />
            </div>
            <div className="flex items-center gap-2">
              <Label htmlFor="weight-location" className="w-40">
                Location:
              </Label>
              <Input id="weight-location" type="number" defaultValue="20" min="0" max="100" />
            </div>
            <div className="flex items-center gap-2">
              <Label htmlFor="weight-other" className="w-40">
                Other Factors:
              </Label>
              <Input id="weight-other" type="number" defaultValue="10" min="0" max="100" />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button>Save Criteria</Button>
        </div>
      </TabsContent>

      <TabsContent value="advanced" className="space-y-4 mt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Switch id="advanced-mode" checked={advancedMode} onCheckedChange={setAdvancedMode} />
            <Label htmlFor="advanced-mode">Enable Advanced Mode</Label>
          </div>
          <Button variant="outline" size="sm">
            Reset to Defaults
          </Button>
        </div>

        {advancedMode && (
          <>
            <div className="space-y-2">
              <Label htmlFor="ai-model">AI Model</Label>
              <Select defaultValue="gpt-4">
                <SelectTrigger>
                  <SelectValue placeholder="Select AI model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt-4">GPT-4 (Recommended)</SelectItem>
                  <SelectItem value="gpt-3.5">GPT-3.5 Turbo</SelectItem>
                  <SelectItem value="custom">Custom Model</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="api-rate-limit">API Rate Limit</Label>
              <div className="flex items-center gap-2">
                <Input id="api-rate-limit" type="number" defaultValue="100" min="10" max="1000" />
                <span>requests/minute</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="custom-prompt">Custom Discovery Prompt</Label>
              <Textarea
                id="custom-prompt"
                rows={6}
                defaultValue="You are an AI assistant helping to identify potential plaintiffs for a class action lawsuit. Your task is to analyze the provided data and determine if the individual meets the eligibility criteria for the case. Consider factors such as timing, location, and relationship to the defendant. Provide a confidence score and explanation for your assessment."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="custom-regex">Custom Regex Patterns</Label>
              <Textarea id="custom-regex" placeholder="Enter custom regex patterns for data extraction..." rows={4} />
            </div>
          </>
        )}

        <div className="flex justify-end">
          <Button>Save Advanced Settings</Button>
        </div>
      </TabsContent>
    </Tabs>
  )
}

