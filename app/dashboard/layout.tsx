import type React from "react"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { MobileHeader } from "@/components/dashboard/mobile-header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - hidden on mobile */}
      <DashboardSidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile header - visible only on mobile */}
        <MobileHeader />

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
