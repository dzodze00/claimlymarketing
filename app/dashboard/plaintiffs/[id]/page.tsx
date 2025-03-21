import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Mail, MessageSquare, FileText, Shield, Download } from "lucide-react"
import Link from "next/link"
import { PlaintiffProfile } from "@/components/plaintiffs/plaintiff-profile"
import { PlaintiffDocuments } from "@/components/plaintiffs/plaintiff-documents"
import { PlaintiffTimeline } from "@/components/plaintiffs/plaintiff-timeline"
import { PlaintiffCommunication } from "@/components/plaintiffs/plaintiff-communication"

export default function PlaintiffDetailsPage({ params }: { params: { id: string } }) {
  const plaintiffId = params.id

  // This would normally be fetched from an API
  const plaintiffDetails = {
    id: plaintiffId,
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "(555) 123-4567",
    address: "123 Main St, San Francisco, CA 94105",
    case: "Smith v. TechCorp",
    caseId: "CA-2023-001",
    status: "Verified",
    joined: "2023-10-15",
    verificationDate: "2023-10-18",
    eligibilityScore: 92,
    documents: [
      { name: "ID Verification", status: "Verified", date: "2023-10-16" },
      { name: "Proof of Account", status: "Verified", date: "2023-10-17" },
      { name: "Breach Notification Email", status: "Verified", date: "2023-10-17" },
    ],
    timeline: [
      { date: "2023-10-15", event: "Plaintiff signed up through AI outreach email" },
      { date: "2023-10-16", event: "Submitted ID verification" },
      { date: "2023-10-17", event: "Uploaded supporting documents" },
      { date: "2023-10-18", event: "Verification completed" },
      { date: "2023-11-05", event: "Received case update email" },
      { date: "2023-12-01", event: "Chatbot interaction - asked about timeline" },
    ],
    communications: [
      { date: "2023-10-15", type: "Email", subject: "Welcome to Smith v. TechCorp Class Action", status: "Delivered" },
      { date: "2023-11-05", type: "Email", subject: "Case Update: Motion Filed", status: "Opened" },
      { date: "2023-12-10", type: "SMS", subject: "Document Request Reminder", status: "Delivered" },
    ],
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Link href="/dashboard/plaintiffs">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">{plaintiffDetails.name}</h1>
        <Badge className="ml-2">{plaintiffDetails.status}</Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Plaintiff Summary</CardTitle>
            <CardDescription>
              {plaintiffId} • {plaintiffDetails.case} • Joined on {plaintiffDetails.joined}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-muted-foreground">{plaintiffDetails.email}</p>
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-sm text-muted-foreground">{plaintiffDetails.phone}</p>
              </div>
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-sm text-muted-foreground">{plaintiffDetails.address}</p>
              </div>
              <div>
                <h3 className="font-medium">Verification Date</h3>
                <p className="text-sm text-muted-foreground">{plaintiffDetails.verificationDate}</p>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-medium">Eligibility Score</h3>
              <div className="mt-2 h-2 w-full rounded-full bg-muted">
                <div
                  className="h-2 rounded-full bg-primary"
                  style={{ width: `${plaintiffDetails.eligibilityScore}%` }}
                ></div>
              </div>
              <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                <span>0</span>
                <span>{plaintiffDetails.eligibilityScore}%</span>
                <span>100</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Button className="justify-start">
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </Button>
            <Button className="justify-start" variant="outline">
              <MessageSquare className="mr-2 h-4 w-4" />
              Send SMS
            </Button>
            <Button className="justify-start" variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Request Documents
            </Button>
            <Button className="justify-start" variant="outline">
              <Shield className="mr-2 h-4 w-4" />
              Verify Identity
            </Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="profile" className="mt-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="communication">Communication</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-4">
          <PlaintiffProfile plaintiffDetails={plaintiffDetails} />
        </TabsContent>

        <TabsContent value="documents" className="mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Documents</CardTitle>
                <CardDescription>View and manage plaintiff documents.</CardDescription>
              </div>
              <Button size="sm">
                <FileText className="mr-2 h-4 w-4" />
                Request Document
              </Button>
            </CardHeader>
            <CardContent>
              <PlaintiffDocuments plaintiffId={plaintiffId} documents={plaintiffDetails.documents} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timeline" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Activity Timeline</CardTitle>
              <CardDescription>Complete history of plaintiff interactions and events.</CardDescription>
            </CardHeader>
            <CardContent>
              <PlaintiffTimeline plaintiffId={plaintiffId} timeline={plaintiffDetails.timeline} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="communication" className="mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Communication History</CardTitle>
                <CardDescription>Track all communications with this plaintiff.</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </CardHeader>
            <CardContent>
              <PlaintiffCommunication plaintiffId={plaintiffId} communications={plaintiffDetails.communications} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

