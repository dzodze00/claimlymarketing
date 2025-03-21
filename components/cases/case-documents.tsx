import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"

interface CaseDocumentsProps {
  caseId: string
}

export function CaseDocuments({ caseId }: CaseDocumentsProps) {
  // This would normally be fetched from an API based on the caseId
  const documents = [
    {
      id: "DOC-001",
      name: "Initial Complaint",
      type: "Legal Document",
      uploadedBy: "Sarah Johnson",
      uploadDate: "2023-10-05",
      status: "Final",
    },
    {
      id: "DOC-002",
      name: "Evidence Exhibit A",
      type: "Evidence",
      uploadedBy: "Michael Brown",
      uploadDate: "2023-10-10",
      status: "Final",
    },
    {
      id: "DOC-003",
      name: "Motion for Class Certification",
      type: "Legal Document",
      uploadedBy: "Sarah Johnson",
      uploadDate: "2023-12-15",
      status: "Draft",
    },
    {
      id: "DOC-004",
      name: "Expert Witness Statement",
      type: "Testimony",
      uploadedBy: "Robert Wilson",
      uploadDate: "2023-11-20",
      status: "Final",
    },
    {
      id: "DOC-005",
      name: "Discovery Request",
      type: "Legal Document",
      uploadedBy: "Sarah Johnson",
      uploadDate: "2023-11-25",
      status: "Final",
    },
  ]

  return (
    <div>
      <div className="flex justify-between mb-4">
        <Button>Upload Document</Button>
        <Button variant="outline">Create Folder</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Document Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Uploaded By</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {documents.map((document) => (
            <TableRow key={document.id}>
              <TableCell className="font-medium">{document.name}</TableCell>
              <TableCell>{document.type}</TableCell>
              <TableCell>{document.uploadedBy}</TableCell>
              <TableCell>{document.uploadDate}</TableCell>
              <TableCell>
                <Badge variant={document.status === "Final" ? "default" : "outline"}>{document.status}</Badge>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

