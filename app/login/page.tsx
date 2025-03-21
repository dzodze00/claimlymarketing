import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-12">
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">Claimly</span>
            </Link>
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <p className="text-muted-foreground">Enter your credentials to access your account</p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="name@example.com" type="email" defaultValue="demo@claimly.com" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="text-sm text-primary hover:underline underline-offset-4">
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" defaultValue="demo123" />
            </div>
            <Link href="/dashboard" className="w-full">
              <Button className="w-full">Sign In</Button>
            </Link>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="#" className="text-primary hover:underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

