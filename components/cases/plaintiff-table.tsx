import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface PlaintiffTableProps {
  caseId: string
}

export function PlaintiffTable({ caseId }: PlaintiffTableProps) {
  // This would normally be fetched from an API based on the caseId
  const plaintiffs = [
    {
      id: "P-10045",
      name: "John Smith",
      email: "john.smith@example.com",
      status: "Verified",
      eligibilityScore: 92,
      joined: "2023-10-15",
    },
    {
      id: "P-10046",
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      status: "Pending",
      eligibilityScore: 85,
      joined: "2023-10-16",
    },
    {
      id: "P-10047",
      name: "Michael Brown",
      email: "mbrown@example.com",
      status: "Verified",
      eligibilityScore: 88,
      joined: "2023-10-18",
    },
    {
      id: "P-10048",
      name: "Emily Davis",
      email: "emily.davis@example.com",
      status: "Rejected",
      eligibilityScore: 45,
      joined: "2023-10-20",
    },
    {
      id: "P-10049",
      name: "Robert Wilson",
      email: "rwilson@example.com",
      status: "Verified",
      eligibilityScore: 95,
      joined: "2023-10-22",
    },
    {
      id: "P-10050",
      name: "Jennifer Lee",
      email: "jlee@example.com",
      status: "Pending",
      eligibilityScore: 78,
      joined: "2023-10-25",
    },
    {
      id: "P-10051",
      name: "David Martinez",
      email: "dmartinez@example.com",
      status: "Verified",
      eligibilityScore: 91,
      joined: "2023-10-28",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Eligibility Score</TableHead>
          <TableHead>Joined</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {plaintiffs.map((plaintiff) => (
          <TableRow key={plaintiff.id}>
            <TableCell className="font-medium">
              <Link href={`/dashboard/plaintiffs/${plaintiff.id}`} className="text-primary hover:underline">
                {plaintiff.id}
              </Link>
            </TableCell>
            <TableCell>{plaintiff.name}</TableCell>
            <TableCell>{plaintiff.email}</TableCell>
            <TableCell>
              <Badge
                variant={
                  plaintiff.status === "Verified" ? "default" : plaintiff.status === "Pending" ? "outline" : "secondary"
                }
              >
                {plaintiff.status}
              </Badge>
            </TableCell>
            <TableCell>{plaintiff.eligibilityScore}</TableCell>
            <TableCell>{plaintiff.joined}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

