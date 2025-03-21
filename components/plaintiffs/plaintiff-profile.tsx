import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface PlaintiffProfileProps {
  plaintiffDetails: any
}

export function PlaintiffProfile({ plaintiffDetails }: PlaintiffProfileProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Basic information about the plaintiff.</CardDescription>
        </CardHeader>
        <CardContent>
          <dl className="space-y-4">
            <div>
              <dt className="text-sm font-medium text-muted-foreground">Full Name</dt>
              <dd>{plaintiffDetails.name}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-muted-foreground">Email</dt>
              <dd>{plaintiffDetails.email}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-muted-foreground">Phone</dt>
              <dd>{plaintiffDetails.phone}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-muted-foreground">Address</dt>
              <dd>{plaintiffDetails.address}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Case Information</CardTitle>
          <CardDescription>Information about the plaintiff's case.</CardDescription>
        </CardHeader>
        <CardContent>
          <dl className="space-y-4">
            <div>
              <dt className="text-sm font-medium text-muted-foreground">Case</dt>
              <dd>{plaintiffDetails.case}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-muted-foreground">Status</dt>
              <dd>{plaintiffDetails.status}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-muted-foreground">Joined</dt>
              <dd>{plaintiffDetails.joined}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-muted-foreground">Verification Date</dt>
              <dd>{plaintiffDetails.verificationDate}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>AI-Generated Insights</CardTitle>
          <CardDescription>Automated insights about this plaintiff.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Engagement Analysis</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                This plaintiff has a high engagement score (92/100). They have opened all communications and responded
                promptly. They have completed all required document submissions and verification steps ahead of
                schedule.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Eligibility Assessment</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Based on the submitted documentation, this plaintiff has a strong eligibility claim. They were a
                customer during the entire breach period and have provided clear evidence of receiving the breach
                notification.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Recommended Actions</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                No immediate actions required. Consider including this plaintiff in the upcoming case update email
                campaign scheduled for next week. They may be a good candidate for a testimonial or case study.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

