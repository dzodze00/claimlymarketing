import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Check, X } from "lucide-react"
import Link from "next/link"

export function DiscoveryResults() {
  const discoveryResults = [
    {
      id: "PD-10045",
      name: "John Smith",
      email: "john.smith@example.com",
      case: "Smith v. TechCorp",
      caseId: "CA-2023-001",
      source: "Public Records",
      score: 92,
      status: "Verified",
      discovered: "2023-12-10",
    },
    {
      id: "PD-10046",
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      case: "Smith v. TechCorp",
      caseId: "CA-2023-001",
      source: "Social Media",
      score: 85,
      status: "Pending",
      discovered: "2023-12-11",
    },
    {
      id: "PD-10047",
      name: "Michael Brown",
      email: "mbrown@example.com",
      case: "Johnson v. PharmaCo",
      caseId: "CA-2023-002",
      source: "Consumer Complaints",
      score: 88,
      status: "Pending",
      discovered: "2023-12-12",
    },
    {
      id: "PD-10048",
      name: "Emily Davis",
      email: "emily.davis@example.com",
      case: "Smith v. TechCorp",
      caseId: "CA-2023-001",
      source: "News Articles",
      score: 45,
      status: "Rejected",
      discovered: "2023-12-13",
    },
    {
      id: "PD-10049",
      name: "Robert Wilson",
      email: "rwilson@example.com",
      case: "Williams v. AutoMakers",
      caseId: "CA-2023-003",
      source: "Public Records",
      score: 95,
      status: "Pending",
      discovered: "2023-12-14",
    },
    {
      id: "PD-10050",
      name: "Jennifer Lee",
      email: "jlee@example.com",
      case: "Johnson v. PharmaCo",
      caseId: "CA-2023-002",
      source: "Social Media",
      score: 78,
      status: "Pending",
      discovered: "2023-12-15",
    },
    {
      id: "PD-10051",
      name: "David Martinez",
      email: "dmartinez@example.com",
      case: "Smith v. TechCorp",
      caseId: "CA-2023-001",
      source: "Consumer Complaints",
      score: 91,
      status: "Pending",
      discovered: "2023-12-16",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Case</TableHead>
          <TableHead>Source</TableHead>
          <TableHead>Score</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Discovered</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {discoveryResults.map((result) => (
          <TableRow key={result.id}>
            <TableCell className="font-medium">{result.id}</TableCell>
            <TableCell>{result.name}</TableCell>
            <TableCell>{result.email}</TableCell>
            <TableCell>
              <Link href={`/dashboard/cases/${result.caseId}`} className="text-primary hover:underline">
                {result.case}
              </Link>
            </TableCell>
            <TableCell>{result.source}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <span>{result.score}</span>
                <div className="h-2 w-16 rounded-full bg-muted">
                  <div
                    className={`h-2 rounded-full ${
                      result.score >= 90 ? "bg-green-500" : result.score >= 70 ? "bg-amber-500" : "bg-red-500"
                    }`}
                    style={{ width: `${result.score}%` }}
                  ></div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge
                variant={
                  result.status === "Verified" ? "default" : result.status === "Pending" ? "outline" : "secondary"
                }
              >
                {result.status}
              </Badge>
            </TableCell>
            <TableCell>{result.discovered}</TableCell>
            <TableCell>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" disabled={result.status !== "Pending"}>
                  <Mail className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" disabled={result.status !== "Pending"}>
                  <Check className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" disabled={result.status !== "Pending"}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

