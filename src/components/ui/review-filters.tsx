'use client'

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ReviewFilters() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          className="text-muted-foreground"
        >
          All Reviews
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="text-muted-foreground"
        >
          Top Rated
        </Button>
      </div>
    </div>
  )
}

