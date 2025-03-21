import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const recentCases = [
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
]

export function RecentCases() {
  return (
    <div className="space-y-4">
      {recentCases.map((caseItem) => (
        <div key={caseItem.id} className="flex items-center justify-between space-x-4">
          <div className="space-y-1">
            <Link href={`/dashboard/cases/${caseItem.id}`} className="font-medium text-primary hover:underline">
              {caseItem.name}
            </Link>
            <p className="text-xs text-muted-foreground">
              {caseItem.type} • {caseItem.plaintiffs.toLocaleString()} plaintiffs
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant={
                caseItem.status === "Active" ? "default" : caseItem.status === "Pending" ? "outline" : "secondary"
              }
            >
              {caseItem.status}
            </Badge>
            <span className="text-xs text-muted-foreground">{caseItem.updated}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

