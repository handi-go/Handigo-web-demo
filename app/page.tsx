import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-blue-600 to-blue-800 text-white">
      <div className="max-w-md w-full text-center space-y-8">
        <h1 className="text-4xl font-bold">Welcome to Artisan</h1>
        <p className="text-lg">Connect with skilled professionals for your service needs</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/auth/login">
            <Button size="lg" variant="secondary" className="w-full">
              Login
            </Button>
          </Link>
          <Link href="/auth/signup">
            <Button size="lg" className="w-full bg-white text-blue-700 hover:bg-gray-100">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
