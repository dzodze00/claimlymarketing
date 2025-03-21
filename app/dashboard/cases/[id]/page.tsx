import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Mail, MessageSquare, FileText, Users, Download, Plus } from "lucide-react"
import Link from "next/link"
import { CaseOverview } from "@/components/cases/case-overview"
import { PlaintiffTable } from "@/components/cases/plaintiff-table"
import { CaseDocuments } from "@/components/cases/case-documents"
import { CaseChatbot } from "@/components/cases/case-chatbot"

export default function CaseDetailsPage({ params }: { params: { id: string } }) {
  const caseId = params.id

  // This would normally be fetched from an API
  const caseDetails = {
    id: caseId,
    name: "Smith v. TechCorp",
    type: "Data Breach",
    status: "Active",
    filingDate: "2023-06-15",
    description:
      "Class action lawsuit against TechCorp for a data breach affecting over 1 million customers. The breach exposed personal and financial information.",
    plaintiffs: {
      total: 1245,
      verified: 876,
      pending: 289,
      rejected: 80,
    },
    judge: "Hon. Maria Rodriguez",
    court: "U.S. District Court, Northern District of California",
    nextHearing: "2024-02-10",
    updates: [
      { date: "2023-12-15", text: "Motion for class certification filed" },
      { date: "2023-11-20", text: "Discovery phase initiated" },
      { date: "2023-10-05", text: "Initial complaint filed" },
    ],
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Link href="/dashboard/cases">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">{caseDetails.name}</h1>
        <Badge className="ml-2">{caseDetails.status}</Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Case Summary</CardTitle>
            <CardDescription>
              {caseId} • {caseDetails.type} • Filed on {caseDetails.filingDate}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{caseDetails.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium">Court</h3>
                <p className="text-sm text-muted-foreground">{caseDetails.court}</p>
              </div>
              <div>
                <h3 className="font-medium">Judge</h3>
                <p className="text-sm text-muted-foreground">{caseDetails.judge}</p>
              </div>
              <div>
                <h3 className="font-medium">Next Hearing</h3>
                <p className="text-sm text-muted-foreground">{caseDetails.nextHearing}</p>
              </div>
              <div>
                <h3 className="font-medium">Total Plaintiffs</h3>
                <p className="text-sm text-muted-foreground">{caseDetails.plaintiffs.total.toLocaleString()}</p>
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
              Send Plaintiff Outreach
            </Button>
            <Button className="justify-start" variant="outline">
              <MessageSquare className="mr-2 h-4 w-4" />
              Configure Chatbot
            </Button>
            <Button className="justify-start" variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
            <Button className="justify-start" variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Manage Team
            </Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="mt-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="plaintiffs">Plaintiffs</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="chatbot">AI Chatbot</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-4">
          <CaseOverview caseDetails={caseDetails} />
        </TabsContent>

        <TabsContent value="plaintiffs" className="mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Plaintiffs</CardTitle>
                <CardDescription>Manage and monitor all plaintiffs for this case.</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Plaintiff
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <PlaintiffTable caseId={caseId} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Case Documents</CardTitle>
              <CardDescription>Manage and organize all documents related to this case.</CardDescription>
            </CardHeader>
            <CardContent>
              <CaseDocuments caseId={caseId} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="chatbot" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>AI Chatbot Configuration</CardTitle>
              <CardDescription>Configure the AI chatbot to assist plaintiffs with this case.</CardDescription>
            </CardHeader>
            <CardContent>
              <CaseChatbot caseId={caseId} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

