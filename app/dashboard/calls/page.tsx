import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { CallHistory } from "@/components/dashboard/call-history"

export default function CallsPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader title="Call History" />
      <CallHistory />
    </div>
  )
}
