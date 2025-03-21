import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Filter, ArrowUpDown } from "lucide-react"
import Link from "next/link"

export default function PlaintiffsPage() {
  const plaintiffs = [
    {
      id: "P-10045",
      name: "John Smith",
      email: "john.smith@example.com",
      case: "Smith v. TechCorp",
      caseId: "CA-2023-001",
      status: "Verified",
      joined: "2023-10-15",
    },
    {
      id: "P-10046",
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      case: "Smith v. TechCorp",
      caseId: "CA-2023-001",
      status: "Pending",
      joined: "2023-10-16",
    },
    {
      id: "P-10047",
      name: "Michael Brown",
      email: "mbrown@example.com",
      case: "Johnson v. PharmaCo",
      caseId: "CA-2023-002",
      status: "Verified",
      joined: "2023-10-18",
    },
    {
      id: "P-10048",
      name: "Emily Davis",
      email: "emily.davis@example.com",
      case: "Smith v. TechCorp",
      caseId: "CA-2023-001",
      status: "Rejected",
      joined: "2023-10-20",
    },
    {
      id: "P-10049",
      name: "Robert Wilson",
      email: "rwilson@example.com",
      case: "Williams v. AutoMakers",
      caseId: "CA-2023-003",
      status: "Verified",
      joined: "2023-10-22",
    },
    {
      id: "P-10050",
      name: "Jennifer Lee",
      email: "jlee@example.com",
      case: "Johnson v. PharmaCo",
      caseId: "CA-2023-002",
      status: "Pending",
      joined: "2023-10-25",
    },
    {
      id: "P-10051",
      name: "David Martinez",
      email: "dmartinez@example.com",
      case: "Smith v. TechCorp",
      caseId: "CA-2023-001",
      status: "Verified",
      joined: "2023-10-28",
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Plaintiffs</h1>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Add Plaintiff
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Plaintiffs</CardTitle>
          <CardDescription>Manage and monitor all plaintiffs across your cases.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 w-full max-w-sm">
              <Input placeholder="Search plaintiffs..." />
              <Button variant="outline" size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Case</TableHead>
                <TableHead>
                  <div className="flex items-center gap-1">
                    Status
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-1">
                    Joined
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
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
                    <Link href={`/dashboard/cases/${plaintiff.caseId}`} className="text-primary hover:underline">
                      {plaintiff.case}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        plaintiff.status === "Verified"
                          ? "default"
                          : plaintiff.status === "Pending"
                            ? "outline"
                            : "secondary"
                      }
                    >
                      {plaintiff.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{plaintiff.joined}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

