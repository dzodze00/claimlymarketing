import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Shield, Users, FileText, MessageSquare } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Claimly</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/dashboard">
              <Button>
                Try Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Transforming Class Action Management
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  AI-Powered Plaintiff Discovery & Engagement
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Streamline your class action lawsuit management with our end-to-end platform that automates plaintiff
                  discovery, verification, and engagement.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/dashboard">
                    <Button size="lg" className="w-full min-[400px]:w-auto">
                      Try Demo Dashboard
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#how-it-works">
                    <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-3xl opacity-50" />
                <Image
                  src="/placeholder.svg?height=550&width=700"
                  width={700}
                  height={550}
                  alt="Dashboard preview"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last border shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Powerful Tools for Law Firms</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides everything you need to manage class action lawsuits efficiently and effectively.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <div className="flex flex-col items-start space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI-Driven Plaintiff Discovery</h3>
                <p className="text-muted-foreground">
                  Automate data collection from public records, SEC filings, and social media to identify potential
                  claimants.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-2">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Smart Eligibility & Validation</h3>
                <p className="text-muted-foreground">
                  Dynamic forms adjust based on responses to pre-screen plaintiffs efficiently with integrated ID
                  verification.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-2">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Automated Outreach</h3>
                <p className="text-muted-foreground">
                  AI-generated personalized emails and omnichannel engagement with automated follow-up sequences.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI Chatbot Assistant</h3>
                <p className="text-muted-foreground">
                  24/7 virtual legal assistant that answers FAQs, updates plaintiffs, and collects additional
                  information.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-2">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Case Tracking & Analytics</h3>
                <p className="text-muted-foreground">
                  Real-time insights into plaintiff engagement, drop-off rates, and eligibility funnel with predictive
                  scoring.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-2">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Secure Document Management</h3>
                <p className="text-muted-foreground">
                  Securely collect and store proof-of-claim documents with enterprise-grade security and compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  End-to-End Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How Claimly Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our streamlined workflow makes managing class action lawsuits simple and efficient.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12">
              <div className="grid gap-8 md:grid-cols-4">
                <div className="flex flex-col items-center space-y-4 md:items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">1</div>
                  <div className="space-y-2 text-center md:text-left">
                    <h3 className="text-xl font-bold">Discovery Phase</h3>
                    <p className="text-muted-foreground">
                      AI scrapes and identifies potential plaintiffs, then generates custom outreach lists.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4 md:items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">2</div>
                  <div className="space-y-2 text-center md:text-left">
                    <h3 className="text-xl font-bold">Engagement & Verification</h3>
                    <p className="text-muted-foreground">
                      AI sends personalized outreach with dynamic intake forms and fraud detection confirms legitimacy.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4 md:items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">3</div>
                  <div className="space-y-2 text-center md:text-left">
                    <h3 className="text-xl font-bold">Plaintiff Onboarding</h3>
                    <p className="text-muted-foreground">
                      AI chatbot assists with document uploads and automated status updates keep plaintiffs engaged.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4 md:items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">4</div>
                  <div className="space-y-2 text-center md:text-left">
                    <h3 className="text-xl font-bold">Litigation Support</h3>
                    <p className="text-muted-foreground">
                      Lawyers track plaintiff status via dashboard and AI identifies at-risk plaintiffs for follow-ups.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Trusted by Leading Law Firms</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what our clients have to say about Claimly.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    "Claimly has revolutionized how we manage class action lawsuits. We've seen a 40% increase in
                    plaintiff engagement and a 60% reduction in administrative work."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-muted h-10 w-10" />
                  <div>
                    <p className="text-sm font-medium">Sarah Johnson</p>
                    <p className="text-xs text-muted-foreground">Partner, Johnson & Associates</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    "The AI-powered plaintiff discovery has been a game-changer for our firm. We're identifying eligible
                    plaintiffs we would have missed with our manual processes."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-muted h-10 w-10" />
                  <div>
                    <p className="text-sm font-medium">Michael Chen</p>
                    <p className="text-xs text-muted-foreground">Managing Partner, Chen Legal Group</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    "The fraud detection and verification features have significantly improved the quality of our
                    plaintiff pool. We're spending less time on ineligible claims."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-muted h-10 w-10" />
                  <div>
                    <p className="text-sm font-medium">Rachel Torres</p>
                    <p className="text-xs text-muted-foreground">Litigation Director, Torres Law</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Transform Your Class Action Management?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Try our demo dashboard to see how Claimly can help your firm.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/dashboard">
                  <Button size="lg" variant="secondary" className="w-full min-[400px]:w-auto">
                    Try Demo Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full min-[400px]:w-auto border-primary-foreground/20 hover:bg-primary-foreground/10"
                  >
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Claimly</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Claimly. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

