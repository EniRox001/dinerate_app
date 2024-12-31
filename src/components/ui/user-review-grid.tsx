import { ReviewCard } from './review-card'

const userReviews = [
  {
    restaurantName: "The Rustic Table",
    rating: 5,
    review: "Amazing farm-to-table experience! The seasonal menu was incredibly fresh and the service was impeccable.",
    reviewerId: "0x1234...5678",
    date: "2024-01-15"
  },
  {
    restaurantName: "Sushi Master",
    rating: 4,
    review: "Fresh sushi and great atmosphere. The omakase was a journey through flavors. Slightly pricey but worth it.",
    reviewerId: "0x1234...5678",
    date: "2024-01-14"
  },
  {
    restaurantName: "Bella Italia",
    rating: 5,
    review: "Authentic Italian cuisine that transported me straight to Rome. The homemade pasta was divine!",
    reviewerId: "0x1234...5678",
    date: "2024-01-13"
  }
]

export function UserReviewGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {userReviews.map((review, index) => (
        <ReviewCard id={''} key={index} {...review} />
      ))}
    </div>
  )
}

