import { Star, ArrowLeft } from 'lucide-react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// In a real app, this would fetch from your API
const getReviewById = (id: string) => {
  return {
    id: "1",
    restaurantName: "The Rustic Table",
    rating: 5,
    review: "Amazing farm-to-table experience! The seasonal menu was incredibly fresh and the service was impeccable. The attention to detail in every dish was remarkable, from the presentation to the flavor combinations. The chef's dedication to using local, seasonal ingredients really shines through in every bite. The ambiance perfectly complements the food, creating a warm and inviting atmosphere that makes you want to linger over your meal. The staff was knowledgeable and attentive without being intrusive, adding to the overall exceptional dining experience.",
    reviewerId: "0xab12...cd34",
    date: "2024-01-15",
    location: "123 Culinary Street",
    cuisine: "Farm-to-Table",
  }
}

export default function ReviewPage({ params }: { params: { id: string } }) {
  const review = getReviewById(params.id)

  return (
    <div className="container max-w-3xl mx-auto py-8 space-y-6">
      <Button variant="ghost" asChild className="-ml-4">
        <Link href="/reviews" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Reviews
        </Link>
      </Button>

      <Card>
        <CardHeader className="space-y-6">
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">{review.restaurantName}</h1>
              <span className="text-sm text-muted-foreground">{review.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating ? 'fill-primary text-primary' : 'fill-muted text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {review.rating}/5
              </span>
            </div>
          </div>

          <div className="flex gap-4 text-sm text-muted-foreground">
            <div>
              <span className="font-semibold">Location:</span> {review.location}
            </div>
            <div>
              <span className="font-semibold">Cuisine:</span> {review.cuisine}
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {review.review}
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t">
            <div className="text-sm">
              <div className="text-muted-foreground">Reviewed by</div>
              <div className="font-mono">{review.reviewerId}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

