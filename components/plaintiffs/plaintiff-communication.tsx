import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface PlaintiffCommunicationProps {
  plaintiffId: string
  communications: any[]
}

export function PlaintiffCommunication({ plaintiffId, communications }: PlaintiffCommunicationProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Subject</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {communications.map((communication, index) => (
          <TableRow key={index}>
            <TableCell>{communication.date}</TableCell>
            <TableCell>{communication.type}</TableCell>
            <TableCell className="font-medium">{communication.subject}</TableCell>
            <TableCell>
              <Badge
                variant={
                  communication.status === "Opened"
                    ? "default"
                    : communication.status === "Delivered"
                      ? "outline"
                      : "secondary"
                }
              >
                {communication.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

