"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CaseChatbotProps {
  caseId: string
}

export function CaseChatbot({ caseId }: CaseChatbotProps) {
  const [chatPreview, setChatPreview] = useState([
    { role: "bot", content: "Hello! I'm your Claimly Assistant for Smith v. TechCorp. How can I help you today?" },
    { role: "user", content: "What documents do I need to submit?" },
    {
      role: "bot",
      content:
        "For the Smith v. TechCorp case, you'll need to submit: 1) Proof of identity (government-issued ID), 2) Proof that you were a TechCorp customer during the breach period (Jan-Mar 2023), such as an account statement or email from TechCorp, and 3) Any notification you received about the data breach. Would you like me to help you upload these documents now?",
    },
  ])

  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    setChatPreview([...chatPreview, { role: "user", content: newMessage }])

    // Simulate bot response
    setTimeout(() => {
      setChatPreview((prev) => [
        ...prev,
        {
          role: "bot",
          content:
            "I understand your question. Let me check the case details and get back to you with the most accurate information.",
        },
      ])
    }, 1000)

    setNewMessage("")
  }

  return (
    <Tabs defaultValue="configuration">
      <TabsList>
        <TabsTrigger value="configuration">Configuration</TabsTrigger>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="knowledge">Knowledge Base</TabsTrigger>
      </TabsList>

      <TabsContent value="configuration" className="space-y-4 mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="chatbot-name">Chatbot Name</Label>
            <Input id="chatbot-name" defaultValue="Smith v. TechCorp Assistant" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="chatbot-persona">Chatbot Persona</Label>
            <Select defaultValue="helpful">
              <SelectTrigger>
                <SelectValue placeholder="Select persona" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="helpful">Helpful & Informative</SelectItem>
                <SelectItem value="formal">Formal & Professional</SelectItem>
                <SelectItem value="friendly">Friendly & Approachable</SelectItem>
                <SelectItem value="custom">Custom</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="welcome-message">Welcome Message</Label>
          <Textarea
            id="welcome-message"
            defaultValue="Hello! I'm your Claimly Assistant for Smith v. TechCorp. How can I help you today?"
            rows={3}
          />
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

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Features</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Switch id="document-collection" defaultChecked />
              <Label htmlFor="document-collection">Document Collection</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="id-verification" defaultChecked />
              <Label htmlFor="id-verification">ID Verification</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="case-updates" defaultChecked />
              <Label htmlFor="case-updates">Case Updates</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="eligibility-check" defaultChecked />
              <Label htmlFor="eligibility-check">Eligibility Check</Label>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="escalation-contact">Escalation Contact</Label>
          <Select defaultValue="sarah">
            <SelectTrigger>
              <SelectValue placeholder="Select contact" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sarah">Sarah Johnson (Lead Attorney)</SelectItem>
              <SelectItem value="michael">Michael Brown (Paralegal)</SelectItem>
              <SelectItem value="jennifer">Jennifer Lee (Case Manager)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-end">
          <Button>Save Configuration</Button>
        </div>
      </TabsContent>

      <TabsContent value="preview" className="mt-4">
        <div className="border rounded-lg overflow-hidden">
          <div className="bg-primary p-3 text-primary-foreground">
            <h3 className="font-medium">Smith v. TechCorp Assistant</h3>
          </div>
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-muted/30">
            {chatPreview.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t flex gap-2">
            <Input
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <Button onClick={handleSendMessage}>Send</Button>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-muted-foreground">
          This is a preview of how the chatbot will appear to plaintiffs.
        </div>
      </TabsContent>

      <TabsContent value="knowledge" className="space-y-4 mt-4">
        <div className="space-y-2">
          <Label htmlFor="knowledge-sources">Knowledge Sources</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="case-documents" defaultChecked />
              <Label htmlFor="case-documents">Case Documents</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="faqs" defaultChecked />
              <Label htmlFor="faqs">FAQs</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="legal-precedents" defaultChecked />
              <Label htmlFor="legal-precedents">Legal Precedents</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="custom-knowledge" defaultChecked />
              <Label htmlFor="custom-knowledge">Custom Knowledge Base</Label>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="custom-knowledge-base">Custom Knowledge Base</Label>
          <Textarea
            id="custom-knowledge-base"
            placeholder="Add custom knowledge for the chatbot..."
            rows={6}
            defaultValue="Smith v. TechCorp is a class action lawsuit filed on June 15, 2023, against TechCorp for a data breach affecting over 1 million customers. The breach exposed personal and financial information including names, addresses, email addresses, and partial credit card information. Eligible plaintiffs include any TechCorp customers who had active accounts between January 1, 2023, and March 31, 2023."
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="faq-questions">Frequently Asked Questions</Label>
          <div className="space-y-2 border rounded-lg p-4">
            <div className="space-y-2 pb-2 border-b">
              <div className="flex justify-between">
                <Label>Q: What documents do I need to submit?</Label>
                <Button variant="ghost" size="sm">
                  Edit
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                A: For the Smith v. TechCorp case, you'll need to submit: 1) Proof of identity (government-issued ID),
                2) Proof that you were a TechCorp customer during the breach period (Jan-Mar 2023), such as an account
                statement or email from TechCorp, and 3) Any notification you received about the data breach.
              </p>
            </div>
            <div className="space-y-2 pb-2 border-b">
              <div className="flex justify-between">
                <Label>Q: When will I receive compensation?</Label>
                <Button variant="ghost" size="sm">
                  Edit
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                A: The timeline for compensation depends on several factors, including court proceedings and settlement
                negotiations. Currently, we anticipate that initial payments may begin within 6-12 months, but this is
                subject to change based on case developments.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Q: How much compensation will I receive?</Label>
                <Button variant="ghost" size="sm">
                  Edit
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                A: The amount of compensation will depend on the final settlement or judgment amount, the number of
                verified plaintiffs, and the extent of damages proven. We're working to secure the maximum possible
                compensation for all affected individuals.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Button variant="outline">Add FAQ</Button>
          <Button>Save Knowledge Base</Button>
        </div>
      </TabsContent>
    </Tabs>
  )
}

