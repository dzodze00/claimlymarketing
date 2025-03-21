"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, FileText, Users, Search, MessageSquare, Mail, Settings, HelpCircle } from "lucide-react"

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Cases",
    href: "/dashboard/cases",
    icon: FileText,
  },
  {
    title: "Plaintiffs",
    href: "/dashboard/plaintiffs",
    icon: Users,
  },
  {
    title: "Discovery",
    href: "/dashboard/discovery",
    icon: Search,
  },
  {
    title: "AI Chatbot",
    href: "/dashboard/chatbot",
    icon: MessageSquare,
  },
  {
    title: "Outreach",
    href: "/dashboard/outreach",
    icon: Mail,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "Help & Support",
    href: "/dashboard/help",
    icon: HelpCircle,
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <div className="group flex h-screen w-16 flex-col items-center border-r bg-background pt-4 md:w-60">
      <nav className="flex flex-1 flex-col gap-1 px-2 w-full">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`)
          return (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex h-10 items-center gap-2 rounded-md px-3 text-sm font-medium",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted text-muted-foreground hover:text-foreground",
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="hidden md:inline-block">{item.title}</span>
            </Link>
          )
        })}
      </nav>
      <div className="mt-auto mb-4 px-2 w-full">
        <div className="hidden md:block rounded-md bg-muted p-3 text-xs text-muted-foreground">
          <p className="font-medium">Claimly v1.0</p>
          <p className="mt-1">© 2023 Claimly Inc.</p>
        </div>
      </div>
    </div>
  )
}
