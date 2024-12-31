import { ReviewCard } from "@/components/ui/review-card"

const sampleReviews = [
  {
    id: "1",
    restaurantName: "The Rustic Table",
    rating: 5,
    review: "Amazing farm-to-table experience! The seasonal menu was incredibly fresh and the service was impeccable.",
    reviewerId: "0xab12...cd34",
    date: "2024-01-15"
  },
  {
    id: "2",
    restaurantName: "Sushi Master",
    rating: 4,
    review: "Fresh sushi and great atmosphere. The omakase was a journey through flavors. Slightly pricey but worth it.",
    reviewerId: "0x9876...ef54",
    date: "2024-01-14"
  },
  {
    id: "3",
    restaurantName: "Bella Italia",
    rating: 5,
    review: "Authentic Italian cuisine that transported me straight to Rome. The homemade pasta was divine!",
    reviewerId: "0x4567...89ab",
    date: "2024-01-13"
  },
  {
    id: "4",
    restaurantName: "Burger & Brew",
    rating: 3,
    review: "Good craft beer selection but the burgers were a bit underwhelming. Service was friendly though.",
    reviewerId: "0xfedc...4321",
    date: "2024-01-12"
  },
  {
    id: "5",
    restaurantName: "Spice Route",
    rating: 5,
    review: "Best Indian food in the city! The butter chicken was rich and flavorful, and the naan was perfectly cooked.",
    reviewerId: "0x2468...ace0",
    date: "2024-01-11"
  },
  {
    id: "6",
    restaurantName: "Le Petit Bistro",
    rating: 4,
    review: "Charming French bistro with excellent wine selection. The coq au vin was particularly memorable.",
    reviewerId: "0x1357...bd24",
    date: "2024-01-10"
  }
]

export function ReviewGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {sampleReviews.map((review) => (
        <ReviewCard key={review.id} {...review} />
      ))}
    </div>
  )
}

