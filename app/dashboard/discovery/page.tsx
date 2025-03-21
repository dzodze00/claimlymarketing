"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Download, Play, Pause, AlertCircle } from "lucide-react"
import { DiscoveryResults } from "@/components/discovery/discovery-results"
import { DiscoverySettings } from "@/components/discovery/discovery-settings"
import { DiscoveryInsights } from "@/components/discovery/discovery-insights"

export default function DiscoveryPage() {
  const [activeDiscovery, setActiveDiscovery] = useState(true)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">AI-Driven Discovery</h1>
        <Button
          variant={activeDiscovery ? "destructive" : "default"}
          onClick={() => setActiveDiscovery(!activeDiscovery)}
        >
          {activeDiscovery ? (
            <>
              <Pause className="mr-2 h-4 w-4" />
              Pause Discovery
            </>
          ) : (
            <>
              <Play className="mr-2 h-4 w-4" />
              Resume Discovery
            </>
          )}
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Discoveries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Across 5 cases</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Potential Plaintiffs Found</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">38.2%</div>
            <p className="text-xs text-muted-foreground">+5.1% from previous period</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-4">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Discovery Dashboard</CardTitle>
              <CardDescription>Monitor and manage AI-driven plaintiff discovery across all cases.</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={activeDiscovery ? "default" : "outline"} className="ml-2">
                {activeDiscovery ? "Active" : "Paused"}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="results" className="space-y-4">
            <TabsList>
              <TabsTrigger value="results">Discovery Results</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
              <TabsTrigger value="insights">AI Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="results">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 w-full max-w-sm">
                  <Input placeholder="Search discoveries..." />
                  <Button variant="outline" size="icon">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by case" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Cases</SelectItem>
                      <SelectItem value="CA-2023-001">Smith v. TechCorp</SelectItem>
                      <SelectItem value="CA-2023-002">Johnson v. PharmaCo</SelectItem>
                      <SelectItem value="CA-2023-003">Williams v. AutoMakers</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </div>
              </div>

              <DiscoveryResults />
            </TabsContent>

            <TabsContent value="settings">
              <DiscoverySettings />
            </TabsContent>

            <TabsContent value="insights">
              <DiscoveryInsights />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="mt-4 border-amber-200 bg-amber-50">
        <CardHeader className="pb-2">
          <div className="flex items-start gap-2">
            <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
            <div>
              <CardTitle className="text-amber-800">Discovery Alert</CardTitle>
              <CardDescription className="text-amber-700">
                The AI has detected a potential new group of plaintiffs for Smith v. TechCorp.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-amber-700 mb-2">
            Based on recent social media activity and news articles, there may be an additional 200-300 affected
            customers who were not included in the original data breach notification.
          </p>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="border-amber-300 text-amber-800 hover:bg-amber-100">
              Dismiss
            </Button>
            <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
              Investigate
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

