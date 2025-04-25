import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { NotificationsList } from "@/components/dashboard/notifications-list"

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader title="Notifications" />
      <NotificationsList />
    </div>
  )
}
