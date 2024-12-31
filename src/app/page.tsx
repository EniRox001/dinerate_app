"use client"

import { Button } from '@/components/ui/button'
import { Star, ArrowRight, Search, Shield, TrendingUp } from 'lucide-react'
import Link from 'next/link'


const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full">
      <div className="container max-w-5xl mx-auto flex flex-col items-center justify-center space-y-4 py-24 text-center md:py-32">
        <div className="space-y-2">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
          Rate Restaurants on the{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Blockchain
          </span>
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Discover, rate, and earn rewards for your authentic restaurant reviews. Powered by blockchain technology.
        </p>
        </div>
        <div className="flex gap-4 mt-6">
        <Button asChild size="lg">
          <Link href="/reviews">
          Start Rating
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="border">
          <Link href="/reviews">
          Explore Reviews
          </Link>
        </Button>
        </div>
      </div>
      </section>

      {/* Features Section */}
      <section className="w-full">
        <div className="container max-w-5xl mx-auto py-20">
          <div className="grid gap-8 md:grid-cols-3">
        <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center">
          <Search className="h-12 w-12 text-purple-400" />
          <h3 className="text-xl font-bold">Discover Places</h3>
          <p className="text-muted-foreground">
            Find the best restaurants with verified blockchain reviews
          </p>
        </div>
           
        <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center">
          <Shield className="h-12 w-12 text-purple-400" />
          <h3 className="text-xl font-bold">Trusted Reviews</h3>
          <p className="text-muted-foreground">
            Blockchain-verified reviews you can trust
          </p>
        </div>

        <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center">
          <TrendingUp className="h-12 w-12 text-purple-400" />
          <h3 className="text-xl font-bold">Earn Rewards</h3>
          <p className="text-muted-foreground">
            Get rewarded for your authentic reviews
          </p>
        </div>
          </div>
        </div>
      </section>

      {/* Stats Section
      <section className="w-full border-t">
        <div className="container max-w-5xl mx-auto py-20">
          <div className="grid gap-8 text-center md:grid-cols-3">
            <div className="space-y-2">
              <h4 className="text-4xl font-bold">10K+</h4>
              <p className="text-muted-foreground">Restaurants Listed</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-4xl font-bold">50K+</h4>
              <p className="text-muted-foreground">Verified Reviews</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-4xl font-bold">100K+</h4>
              <p className="text-muted-foreground">Active Users</p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default Home