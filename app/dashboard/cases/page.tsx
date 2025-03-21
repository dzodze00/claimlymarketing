import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Filter, ArrowUpDown } from "lucide-react"
import Link from "next/link"

export default function CasesPage() {
  const cases = [
    {
      id: "CA-2023-001",
      name: "Smith v. TechCorp",
      type: "Data Breach",
      plaintiffs: 1245,
      status: "Active",
      updated: "2023-12-15",
    },
    {
      id: "CA-2023-002",
      name: "Johnson v. PharmaCo",
      type: "Product Liability",
      plaintiffs: 567,
      status: "Active",
      updated: "2023-12-10",
    },
    {
      id: "CA-2023-003",
      name: "Williams v. AutoMakers",
      type: "Consumer Protection",
      plaintiffs: 892,
      status: "Active",
      updated: "2023-12-05",
    },
    {
      id: "CA-2023-004",
      name: "Brown v. FinanceGroup",
      type: "Securities Fraud",
      plaintiffs: 78,
      status: "Pending",
      updated: "2023-11-28",
    },
    {
      id: "CA-2023-005",
      name: "Davis v. RetailGiant",
      type: "Employment",
      plaintiffs: 342,
      status: "Active",
      updated: "2023-11-20",
    },
    {
      id: "CA-2022-015",
      name: "Miller v. InsuranceCo",
      type: "Insurance",
      plaintiffs: 156,
      status: "Closed",
      updated: "2023-10-15",
    },
    {
      id: "CA-2022-018",
      name: "Wilson v. EnergyInc",
      type: "Environmental",
      plaintiffs: 89,
      status: "Pending",
      updated: "2023-10-05",
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Cases</h1>
        <Link href="/dashboard/cases/new">
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            New Case
          </Button>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Cases</CardTitle>
          <CardDescription>Manage and monitor all your class action cases.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 w-full max-w-sm">
              <Input placeholder="Search cases..." />
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
                <TableHead>Case ID</TableHead>
                <TableHead>Case Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>
                  <div className="flex items-center gap-1">
                    Plaintiffs
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead>
                  <div className="flex items-center gap-1">
                    Last Updated
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cases.map((caseItem) => (
                <TableRow key={caseItem.id}>
                  <TableCell className="font-medium">
                    <Link href={`/dashboard/cases/${caseItem.id}`} className="text-primary hover:underline">
                      {caseItem.id}
                    </Link>
                  </TableCell>
                  <TableCell>{caseItem.name}</TableCell>
                  <TableCell>{caseItem.type}</TableCell>
                  <TableCell>{caseItem.plaintiffs.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        caseItem.status === "Active"
                          ? "default"
                          : caseItem.status === "Pending"
                            ? "outline"
                            : "secondary"
                      }
                    >
                      {caseItem.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{caseItem.updated}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

