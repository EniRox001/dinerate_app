import { Star } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface ReviewCardProps {
  id: string
  restaurantName: string
  rating: number
  review: string
  reviewerId: string
  date: string
}

export function ReviewCard({ id, restaurantName, rating, review, reviewerId, date }: ReviewCardProps) {
  return (
    <Link href={`/reviews/${id}`}>
      <Card className="h-full transition-colors hover:bg-muted/50">
        <CardContent className="p-6 space-y-4">
          <div className="space-y-1">
            <h3 className="font-bold">{restaurantName}</h3>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < rating ? 'fill-primary text-primary' : 'fill-muted text-muted-foreground'
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-3">{review}</p>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-mono">{reviewerId}</span>
            <span>{date}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

