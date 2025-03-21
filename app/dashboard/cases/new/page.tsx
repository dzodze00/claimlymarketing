"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function NewCasePage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleNext = () => {
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setStep(4) // Success step
    }, 1500)
  }

  return (
    <div className="flex flex-col gap-4 max-w-3xl mx-auto">
      <div className="flex items-center gap-2">
        <Link href="/dashboard/cases">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">Create New Case</h1>
      </div>

      <div className="flex justify-between mb-6">
        <div className={`flex flex-col items-center ${step >= 1 ? "text-primary" : "text-muted-foreground"}`}>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
          >
            1
          </div>
          <span className="text-sm mt-1">Case Details</span>
        </div>
        <div className="flex-1 flex items-center">
          <div className={`h-1 w-full ${step >= 2 ? "bg-primary" : "bg-muted"}`}></div>
        </div>
        <div className={`flex flex-col items-center ${step >= 2 ? "text-primary" : "text-muted-foreground"}`}>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
          >
            2
          </div>
          <span className="text-sm mt-1">AI Configuration</span>
        </div>
        <div className="flex-1 flex items-center">
          <div className={`h-1 w-full ${step >= 3 ? "bg-primary" : "bg-muted"}`}></div>
        </div>
        <div className={`flex flex-col items-center ${step >= 3 ? "text-primary" : "text-muted-foreground"}`}>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
          >
            3
          </div>
          <span className="text-sm mt-1">Review</span>
        </div>
      </div>

      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Case Details</CardTitle>
            <CardDescription>Enter the basic information about the class action case.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="case-name">Case Name</Label>
              <Input id="case-name" placeholder="e.g., Smith v. TechCorp" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="case-type">Case Type</Label>
                <Select defaultValue="data-breach">
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
                    <SelectItem value="antitrust">Antitrust</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="filing-date">Filing Date</Label>
                <Input id="filing-date" type="date" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="court">Court</Label>
              <Input id="court" placeholder="e.g., U.S. District Court, Northern District of California" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="judge">Judge</Label>
              <Input id="judge" placeholder="e.g., Hon. Maria Rodriguez" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Case Description</Label>
              <Textarea id="description" placeholder="Provide a brief description of the case..." rows={4} />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={handleNext}>
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>AI Configuration</CardTitle>
            <CardDescription>Configure AI settings for plaintiff discovery and engagement.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="discovery-sources">Discovery Sources</Label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select discovery sources" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sources</SelectItem>
                  <SelectItem value="public-records">Public Records Only</SelectItem>
                  <SelectItem value="social-media">Social Media Only</SelectItem>
                  <SelectItem value="news-articles">News Articles Only</SelectItem>
                  <SelectItem value="custom">Custom Configuration</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="eligibility-criteria">Eligibility Criteria</Label>
              <Textarea
                id="eligibility-criteria"
                placeholder="Define the criteria that makes someone eligible for this class action..."
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="verification-level">Verification Level</Label>
              <Select defaultValue="standard">
                <SelectTrigger>
                  <SelectValue placeholder="Select verification level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic">Basic (Email Verification)</SelectItem>
                  <SelectItem value="standard">Standard (ID + Document Verification)</SelectItem>
                  <SelectItem value="enhanced">Enhanced (ID + Document + Additional Proof)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="outreach-channels">Outreach Channels</Label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select outreach channels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Channels</SelectItem>
                  <SelectItem value="email">Email Only</SelectItem>
                  <SelectItem value="sms">SMS Only</SelectItem>
                  <SelectItem value="email-sms">Email + SMS</SelectItem>
                  <SelectItem value="custom">Custom Configuration</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleBack}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button onClick={handleNext}>
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 3 && (
        <Card>
          <CardHeader>
            <CardTitle>Review & Create</CardTitle>
            <CardDescription>Review your case details before creating.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border rounded-lg p-4 space-y-4">
              <div>
                <h3 className="font-medium">Case Details</h3>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Case Name</p>
                    <p>Smith v. TechCorp</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Case Type</p>
                    <p>Data Breach</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Filing Date</p>
                    <p>2023-12-20</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Court</p>
                    <p>U.S. District Court, Northern District of California</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium">AI Configuration</h3>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Discovery Sources</p>
                    <p>All Sources</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Verification Level</p>
                    <p>Standard (ID + Document Verification)</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Outreach Channels</p>
                    <p>All Channels</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-medium">AI-Generated Recommendations</h3>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>
                    Based on case type, recommend focusing discovery on customer databases and social media mentions of
                    the data breach.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>
                    Suggested eligibility criteria: Customers who had accounts during the breach period (Jan-Mar 2023).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Recommend enhanced verification for this case type to reduce fraudulent claims.</span>
                </li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleBack}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? "Creating..." : "Create Case"}
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 4 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-green-600">Case Created Successfully!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <div className="flex justify-center">
              <div className="rounded-full bg-green-100 p-3">
                <Check className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <p>Your new case has been created and the AI is now processing the initial discovery phase.</p>
            <p className="text-muted-foreground">Case ID: CA-2023-008</p>
          </CardContent>
          <CardFooter className="flex justify-center gap-4">
            <Button variant="outline" onClick={() => router.push("/dashboard/cases")}>
              View All Cases
            </Button>
            <Button onClick={() => router.push("/dashboard/cases/CA-2023-008")}>Go to Case Dashboard</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}

