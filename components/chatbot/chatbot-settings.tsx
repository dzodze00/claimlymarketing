"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ChatbotSettings() {
  return (
    <Tabs defaultValue="model">
      <TabsList>
        <TabsTrigger value="model">AI Model</TabsTrigger>
        <TabsTrigger value="prompts">System Prompts</TabsTrigger>
        <TabsTrigger value="integration">Integrations</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
      </TabsList>

      <TabsContent value="model" className="space-y-4 mt-4">
        <div className="space-y-2">
          <Label htmlFor="ai-model">AI Model</Label>
          <Select defaultValue="gpt-4">
            <SelectTrigger>
              <SelectValue placeholder="Select AI model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gpt-4">GPT-4 (Recommended)</SelectItem>
              <SelectItem value="gpt-3.5">GPT-3.5 Turbo</SelectItem>
              <SelectItem value="claude">Claude 2</SelectItem>
              <SelectItem value="custom">Custom Model</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="model-temperature">Model Temperature</Label>
          <div className="flex items-center gap-2">
            <Input
              id="model-temperature"
              type="range"
              min="0"
              max="1"
              step="0.1"
              defaultValue="0.7"
              className="w-full"
            />
            <span>0.7</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Lower values make responses more focused and deterministic, higher values make responses more creative and
            varied.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="max-tokens">Maximum Response Length</Label>
          <div className="flex items-center gap-2">
            <Input id="max-tokens" type="number" defaultValue="1024" min="100" max="4000" />
            <span>tokens</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="api-key">API Key</Label>
          <Input id="api-key" type="password" placeholder="••••••••••••••••••••••" />
          <p className="text-xs text-muted-foreground">Your API key is encrypted and securely stored.</p>
        </div>

        <div className="flex justify-end">
          <Button>Save Model Settings</Button>
        </div>
      </TabsContent>

      <TabsContent value="prompts" className="space-y-4 mt-4">
        <div className="space-y-2">
          <Label htmlFor="system-prompt">System Prompt</Label>
          <Textarea
            id="system-prompt"
            rows={6}
            defaultValue="You are an AI assistant for a class action lawsuit platform called Claimly. Your role is to help plaintiffs understand the lawsuit process, assist with document submission, provide case updates, and answer questions about eligibility and compensation. You should be helpful, informative, and empathetic. You should not provide legal advice, but you can explain legal concepts in simple terms. If you don't know the answer to a question, acknowledge that and offer to connect the plaintiff with a human representative."
          />
          <p className="text-xs text-muted-foreground">
            The system prompt sets the overall behavior and role of the chatbot.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="greeting-prompt">Greeting Message</Label>
          <Textarea
            id="greeting-prompt"
            rows={3}
            defaultValue="Hello! I'm your Claimly Assistant. I'm here to help with your class action lawsuit questions and guide you through the process. How can I assist you today?"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="fallback-prompt">Fallback Message</Label>
          <Textarea
            id="fallback-prompt"
            rows={3}
            defaultValue="I'm sorry, but I don't have enough information to answer that question accurately. Would you like me to connect you with a human representative who can help you further?"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="escalation-prompt">Escalation Message</Label>
          <Textarea
            id="escalation-prompt"
            rows={3}
            defaultValue="I understand this is an important matter that requires human attention. I'll connect you with a case manager who can help you further. They typically respond within 1 business day. Is there anything else I can help you with in the meantime?"
          />
        </div>

        <div className="flex justify-end">
          <Button>Save Prompt Settings</Button>
        </div>
      </TabsContent>

      <TabsContent value="integration" className="space-y-4 mt-4">
        <div className="space-y-2">
          <Label>Integrations</Label>
          <div className="space-y-2">
            <div className="flex items-center justify-between border p-4 rounded-lg">
              <div>
                <h3 className="font-medium">Case Management System</h3>
                <p className="text-sm text-muted-foreground">
                  Connect to your case management system to provide real-time case updates.
                </p>
              </div>
              <Switch id="cms-integration" defaultChecked />
            </div>
            <div className="flex items-center justify-between border p-4 rounded-lg">
              <div>
                <h3 className="font-medium">Document Storage</h3>
                <p className="text-sm text-muted-foreground">
                  Connect to your document storage system to handle document uploads.
                </p>
              </div>
              <Switch id="document-integration" defaultChecked />
            </div>
            <div className="flex items-center justify-between border p-4 rounded-lg">
              <div>
                <h3 className="font-medium">Email System</h3>
                <p className="text-sm text-muted-foreground">
                  Connect to your email system to send notifications and follow-ups.
                </p>
              </div>
              <Switch id="email-integration" defaultChecked />
            </div>
            <div className="flex items-center justify-between border p-4 rounded-lg">
              <div>
                <h3 className="font-medium">SMS Provider</h3>
                <p className="text-sm text-muted-foreground">
                  Connect to your SMS provider to send text message notifications.
                </p>
              </div>
              <Switch id="sms-integration" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="webhook-url">Webhook URL</Label>
          <Input id="webhook-url" placeholder="https://your-webhook-url.com/endpoint" />
          <p className="text-xs text-muted-foreground">
            Receive real-time notifications when certain events occur in the chatbot.
          </p>
        </div>

        <div className="flex justify-end">
          <Button>Save Integration Settings</Button>
        </div>
      </TabsContent>

      <TabsContent value="security" className="space-y-4 mt-4">
        <div className="space-y-2">
          <Label>Security Settings</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Switch id="data-encryption" defaultChecked />
              <Label htmlFor="data-encryption">Enable End-to-End Encryption</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="data-retention" defaultChecked />
              <Label htmlFor="data-retention">Enable Data Retention Policies</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="pii-redaction" defaultChecked />
              <Label htmlFor="pii-redaction">Automatically Redact PII</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="audit-logging" defaultChecked />
              <Label htmlFor="audit-logging">Enable Audit Logging</Label>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="data-retention-period">Data Retention Period</Label>
          <Select defaultValue="90days">
            <SelectTrigger>
              <SelectValue placeholder="Select retention period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30days">30 Days</SelectItem>
              <SelectItem value="90days">90 Days</SelectItem>
              <SelectItem value="180days">180 Days</SelectItem>
              <SelectItem value="1year">1 Year</SelectItem>
              <SelectItem value="custom">Custom</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="ip-allowlist">IP Allowlist</Label>
          <Textarea id="ip-allowlist" placeholder="Enter IP addresses, one per line..." rows={3} />
          <p className="text-xs text-muted-foreground">Leave blank to allow all IP addresses.</p>
        </div>

        <div className="flex justify-end">
          <Button>Save Security Settings</Button>
        </div>
      </TabsContent>
    </Tabs>
  )
}

