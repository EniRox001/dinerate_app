import { Search, Plus } from 'lucide-react'
import { ReviewGrid } from '@/components/ui/review-grid'
import { Input } from '@/components/ui/input'
import { ReviewFilters } from '@/components/ui/review-filters'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ReviewsPage() {
  return (
    <div className="container max-w-6xl mx-auto py-6 space-y-8">
      {/* Search Section */}
      <div className="space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Discover Restaurant Reviews</h1>
          <p className="text-muted-foreground">
            Explore authentic, blockchain-verified restaurant reviews from our community
          </p>
        </div>
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search restaurants or reviews..."
            className="pl-9"
          />
        </div>
      </div>

      {/* Filters and Reviews */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <ReviewFilters />
          <Button asChild>
            <Link href="/reviews/create" className="gap-2">
              <Plus className="h-4 w-4" />
              New Review
            </Link>
          </Button>
        </div>
        <ReviewGrid />
      </div>
    </div>
  )
}

