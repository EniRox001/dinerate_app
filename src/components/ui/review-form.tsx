"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Star } from 'lucide-react'

export function ReviewForm() {
  const router = useRouter()
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In a real app, this would submit to your API
    console.log("Review submitted")
    router.push("/reviews")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="restaurant">Restaurant Name</Label>
        <Input
          id="restaurant"
          required
          placeholder="Enter the restaurant name"
        />
      </div>

      <div className="space-y-2">
        <Label>Rating</Label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="hover:scale-110 transition-transform"
            >
              <Star
                className={`h-6 w-6 ${
                  star <= (hoveredRating || rating)
                    ? "fill-primary text-primary"
                    : "fill-muted text-muted-foreground"
                }`}
              />
              <span className="sr-only">Rate {star} stars</span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          required
          placeholder="Enter the restaurant location"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="cuisine">Cuisine Type</Label>
        <Input
          id="cuisine"
          required
          placeholder="Enter the cuisine type"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="review">Your Review</Label>
        <Textarea
          id="review"
          required
          placeholder="Share your experience..."
          className="min-h-[150px]"
        />
      </div>

      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline" onClick={() => router.push("/reviews")}>
          Cancel
        </Button>
        <Button type="submit">
          Submit Review
        </Button>
      </div>
    </form>
  )
}

