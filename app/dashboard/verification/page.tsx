import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { VerificationStatus } from "@/components/dashboard/verification-status"

export default function VerificationPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader title="Account Verification" />
      <VerificationStatus />
    </div>
  )
}
