import { AuthForm } from "@/components/auth-form"

export default function AuthPage() {
  return (
    <div className="container mx-auto flex items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-md">
        <AuthForm />
      </div>
    </div>
  )
}
