import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ReviewForm } from "@/components/ui/review-form"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
import Link from "next/link"

export default function NewReviewPage() {
  return (
    <div className="container max-w-2xl py-8 space-y-6">
      <Button variant="ghost" asChild className="-ml-4">
        <Link href="/reviews" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Reviews
        </Link>
      </Button>

      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Add New Review</CardTitle>
          <CardDescription>
            Share your dining experience and help others discover great restaurants
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ReviewForm />
        </CardContent>
      </Card>
    </div>
  )
}

