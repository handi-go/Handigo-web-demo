import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { SettingsForm } from "@/components/dashboard/settings-form"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader title="Settings" />
      <div className="max-w-2xl mx-auto">
        <SettingsForm />
      </div>
    </div>
  )
}
