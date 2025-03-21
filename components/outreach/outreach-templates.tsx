"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Pencil, Trash, Copy, Plus } from "lucide-react"

export function OutreachTemplates() {
  const [showEditor, setShowEditor] = useState(false)
  const [editMode, setEditMode] = useState(false)

  const templates = [
    {
      id: "TPL-001",
      name: "Initial Outreach - Data Breach",
      type: "Email",
      lastUsed: "2023-12-10",
      performance: "High",
    },
    {
      id: "TPL-002",
      name: "Document Request Reminder",
      type: "Email + SMS",
      lastUsed: "2023-12-05",
      performance: "Medium",
    },
    {
      id: "TPL-003",
      name: "Case Update Notification",
      type: "Email",
      lastUsed: "2023-11-20",
      performance: "High",
    },
    {
      id: "TPL-004",
      name: "Verification Reminder",
      type: "SMS",
      lastUsed: "2023-11-15",
      performance: "High",
    },
    {
      id: "TPL-005",
      name: "Final Notice - Deadline Approaching",
      type: "Email + SMS",
      lastUsed: "2023-11-10",
      performance: "Medium",
    },
  ]

  const CASE_NAME = "{CASE_NAME}"
  const PLAINTIFF_NAME = "{PLAINTIFF_NAME}"

  return (
    <div>
      {!showEditor ? (
        <>
          <div className="flex justify-between mb-4">
            <Input placeholder="Search templates..." className="max-w-sm" />
            <Button
              onClick={() => {
                setShowEditor(true)
                setEditMode(false)
              }}
            >
              <Plus className="mr-2 h-4 w-4" />
              New Template
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Template Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Last Used</TableHead>
                <TableHead>Performance</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {templates.map((template) => (
                <TableRow key={template.id}>
                  <TableCell className="font-medium">{template.name}</TableCell>
                  <TableCell>{template.type}</TableCell>
                  <TableCell>{template.lastUsed}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        template.performance === "High"
                          ? "default"
                          : template.performance === "Medium"
                            ? "outline"
                            : "secondary"
                      }
                    >
                      {template.performance}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setShowEditor(true)
                          setEditMode(true)
                        }}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      ) : (
        <div className="space-y-4">
          <div className="flex justify-between">
            <h3 className="text-lg font-medium">{editMode ? "Edit Template" : "Create New Template"}</h3>
            <Button variant="outline" onClick={() => setShowEditor(false)}>
              Cancel
            </Button>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="template-name">Template Name</Label>
              <Input
                id="template-name"
                placeholder="e.g., Initial Outreach - Data Breach"
                defaultValue={editMode ? "Initial Outreach - Data Breach" : ""}
              />
            </div>

            <div className="space-y-2">
              <Label>Template Type</Label>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="type-email"
                    name="template-type"
                    defaultChecked={editMode}
                    className="h-4 w-4 text-primary"
                  />
                  <Label htmlFor="type-email" className="cursor-pointer">
                    Email
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="type-sms" name="template-type" className="h-4 w-4 text-primary" />
                  <Label htmlFor="type-sms" className="cursor-pointer">
                    SMS
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="type-both" name="template-type" className="h-4 w-4 text-primary" />
                  <Label htmlFor="type-both" className="cursor-pointer">
                    Both
                  </Label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="case-type">Case Type</Label>
              <Select defaultValue={editMode ? "data-breach" : ""}>
                <SelectTrigger>
                  <SelectValue placeholder="Select case type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="data-breach">Data Breach</SelectItem>
                  <SelectItem value="product-liability">Product Liability</SelectItem>
                  <SelectItem value="consumer-protection">Consumer Protection</SelectItem>
                  <SelectItem value="securities-fraud">Securities Fraud</SelectItem>
                  <SelectItem value="employment">Employment</SelectItem>
                  <SelectItem value="environmental">Environmental</SelectItem>
                  <SelectItem value="all">All Case Types</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email-subject">Email Subject</Label>
              <Input
                id="email-subject"
                placeholder="e.g., Important: Your Eligibility for {CASE_NAME}"
                defaultValue={editMode ? "Important: Your Eligibility for {CASE_NAME}" : ""}
              />
              <p className="text-xs text-muted-foreground">
                Use {CASE_NAME}, {PLAINTIFF_NAME}, and other variables to personalize the subject.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email-content">Email Content</Label>
              <Textarea
                id="email-content"
                placeholder="Enter email content..."
                rows={10}
                defaultValue={
                  editMode
                    ? "Dear {PLAINTIFF_NAME},\n\nWe are reaching out to inform you that you may be eligible to participate in the {CASE_NAME} class action lawsuit.\n\nOur records indicate that you may have been affected by the {DEFENDANT_NAME} data breach that occurred between {BREACH_START_DATE} and {BREACH_END_DATE}. If you were a {DEFENDANT_NAME} customer during this period, you may be entitled to compensation.\n\n..."
                    : ""
                }
              />
              <div className="flex justify-between">
                <p className="text-xs text-muted-foreground">
                  Use variables like {PLAINTIFF_NAME} to personalize your email.
                </p>
                <Button variant="outline" size="sm">
                  Insert Variable
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="sms-content">SMS Content</Label>
              <Textarea
                id="sms-content"
                placeholder="Enter SMS content (160 characters max)..."
                rows={3}
                defaultValue={
                  editMode
                    ? "Claimly: You may be eligible for compensation in the {CASE_NAME} lawsuit. Check eligibility: {LINK}. Reply STOP to opt out."
                    : ""
                }
              />
              <p className="text-xs text-muted-foreground">
                SMS messages are limited to 160 characters. Message and data rates may apply.
              </p>
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowEditor(false)}>
                Cancel
              </Button>
              <Button>{editMode ? "Save Changes" : "Create Template"}</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

