"use client"

interface OutreachPreviewProps {
  type: string
}

export function OutreachPreview({ type }: OutreachPreviewProps) {
  if (type === "email" || type === "both") {
    return (
      <div className="space-y-4">
        <div className="border rounded-lg overflow-hidden">
          <div className="bg-muted p-3 border-b">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-medium">
                  From: Claimly <span className="text-muted-foreground">&lt;notifications@claimly.com&gt;</span>
                </span>
              </div>
              <div>
                <span className="font-medium">To: </span>
                <span className="text-muted-foreground">Potential Plaintiff</span>
              </div>
              <div>
                <span className="font-medium">Subject: </span>
                <span>Important: Your Eligibility for Smith v. TechCorp</span>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-primary h-10 w-10 flex items-center justify-center text-primary-foreground font-bold">
                  C
                </div>
                <div>
                  <p className="font-bold">Claimly</p>
                  <p className="text-xs text-muted-foreground">Class Action Lawsuit Platform</p>
                </div>
              </div>

              <p>Dear Potential Plaintiff,</p>

              <p>
                We are reaching out to inform you that you may be eligible to participate in the{" "}
                <strong>Smith v. TechCorp</strong> class action lawsuit.
              </p>

              <p>
                Our records indicate that you may have been affected by the TechCorp data breach that occurred between
                January and March 2023. If you were a TechCorp customer during this period, you may be entitled to
                compensation.
              </p>

              <div className="bg-muted rounded-lg p-4 my-4">
                <p className="font-medium">Case Details:</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Case Name: Smith v. TechCorp</li>
                  <li>Case Type: Data Breach</li>
                  <li>Eligibility: TechCorp customers between Jan-Mar 2023</li>
                  <li>Potential Compensation: $500-$2,500 per plaintiff</li>
                </ul>
              </div>

              <p>
                To determine your eligibility and join this class action, please click the button below to complete a
                brief questionnaire:
              </p>

              <div className="my-4 text-center">
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium">
                  Check Your Eligibility
                </button>
              </div>

              <p>If you have any questions, our AI assistant is available 24/7 to help you through the process.</p>

              <p>
                Sincerely,
                <br />
                The Claimly Team
              </p>

              <div className="text-xs text-muted-foreground border-t pt-4 mt-4">
                <p>
                  This email was sent by Claimly on behalf of the law firm representing plaintiffs in the Smith v.
                  TechCorp case.
                </p>
                <p>
                  To unsubscribe or manage your communication preferences,{" "}
                  <a href="#" className="text-primary">
                    click here
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        {type === "both" && (
          <div className="text-center text-sm text-muted-foreground">Scroll down to see the SMS preview</div>
        )}
      </div>
    )
  }

  if (type === "sms" || type === "both") {
    return (
      <div className={`${type === "both" ? "mt-8" : ""}`}>
        <div className="border rounded-lg overflow-hidden max-w-xs mx-auto">
          <div className="bg-muted p-3 border-b">
            <span className="font-medium">SMS Preview</span>
          </div>
          <div className="p-4 bg-muted/30 space-y-2">
            <div className="bg-primary text-primary-foreground p-3 rounded-lg rounded-tl-none max-w-[80%]">
              <p className="text-sm">
                Claimly: You may be eligible for compensation in the Smith v. TechCorp data breach lawsuit. Check
                eligibility: https://claimly.com/c/TC23. Reply STOP to opt out.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center text-xs text-muted-foreground">
          <p>SMS messages are limited to 160 characters. Message and data rates may apply.</p>
        </div>
      </div>
    )
  }

  return null
}

