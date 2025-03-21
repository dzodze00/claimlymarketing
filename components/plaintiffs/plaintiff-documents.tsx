import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"

interface PlaintiffDocumentsProps {
  plaintiffId: string
  documents: any[]
}

export function PlaintiffDocuments({ plaintiffId, documents }: PlaintiffDocumentsProps) {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Document</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {documents.map((document, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{document.name}</TableCell>
              <TableCell>
                <Badge variant={document.status === "Verified" ? "default" : "outline"}>{document.status}</Badge>
              </TableCell>
              <TableCell>{document.date}</TableCell>
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

      <div className="mt-4 flex justify-end">
        <Button>Request Additional Documents</Button>
      </div>
    </div>
  )
}

