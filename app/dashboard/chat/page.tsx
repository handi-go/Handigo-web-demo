import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { ChatInterface } from "@/components/dashboard/chat-interface"

export default function ChatPage() {
  return (
    <div className="h-[calc(100vh-6rem)]">
      <DashboardHeader title="Messages" />
      <ChatInterface />
    </div>
  )
}
