import Image from "next/image"
import { ResetPasswordForm } from "@/components/auth/reset-password-form"

export default function ResetPasswordPage() {
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

      {/* Right side - Reset password form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Reset your password</h1>
            <p className="text-gray-600">Enter your new password</p>
          </div>
          <ResetPasswordForm />
        </div>
      </div>
    </div>
  )
}
