import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ReviewCard } from "@/components/ui/review-card"
import { UserReviewGrid } from "@/components/ui/user-review-grid"
import { LogOut, Wallet } from 'lucide-react'

export default function ProfilePage() {
  // In a real app, this would come from your wallet connection
  const demoAddress = "0x1234...5678"
  
  return (
    <div className="container max-w-5xl mx-auto py-8 space-y-8">
      {/* Profile Card */}
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>View your profile and manage your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Wallet className="h-4 w-4" />
            <span className="font-mono">{demoAddress}</span>
          </div>
          <Button variant="destructive" className="gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </CardContent>
      </Card>

      {/* User's Reviews Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Your Reviews</h2>
        <UserReviewGrid />
      </div>
    </div>
  )
}

