import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { AddFundsForm } from "@/components/dashboard/add-funds-form"

export default function AddFundsPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader title="Add Funds" />
      <div className="max-w-md mx-auto">
        <AddFundsForm />
      </div>
    </div>
  )
}
