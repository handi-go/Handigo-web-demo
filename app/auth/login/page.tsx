import Image from "next/image"
import Link from "next/link"
import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Blue background with image */}
      <div className="hidden md:flex md:w-1/2 bg-blue-600 flex-col justify-between p-8">
        <div className="text-white">
          <h2 className="text-2xl font-bold">Artisan</h2>
        </div>
        <div className="flex justify-center">
          <Image
            src="/placeholder.svg?height=400&width=300"
            alt="Mobile app preview"
            width={300}
            height={400}
            className="object-contain"
            priority
          />
        </div>
        <div className="text-white text-sm">
          <p>© 2023 Artisan. All rights reserved.</p>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
            <p className="text-gray-600">Login to your account</p>
          </div>
          <LoginForm />
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link href="/auth/signup" className="text-blue-600 font-medium hover:text-blue-500">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
