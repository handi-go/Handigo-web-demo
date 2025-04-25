import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { JobRequestsTable } from "@/components/dashboard/job-requests-table"

// Mock data for job requests
const jobRequests = [
  {
    id: "1",
    title: "Plumbing Repair",
    client: "John Smith",
    location: "123 Main St, Anytown",
    status: "pending",
    date: "2023-05-15",
    amount: "$120.00",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "2",
    title: "Electrical Installation",
    client: "Sarah Johnson",
    location: "456 Oak Ave, Somewhere",
    status: "in-progress",
    date: "2023-05-16",
    amount: "$250.00",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "3",
    title: "Painting Service",
    client: "Michael Brown",
    location: "789 Pine Rd, Elsewhere",
    status: "completed",
    date: "2023-05-14",
    amount: "$350.00",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "4",
    title: "Carpentry Work",
    client: "Emily Davis",
    location: "321 Cedar Ln, Nowhere",
    status: "pending",
    date: "2023-05-17",
    amount: "$180.00",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "5",
    title: "Landscaping",
    client: "Robert Wilson",
    location: "654 Maple Dr, Anywhere",
    status: "completed",
    date: "2023-05-13",
    amount: "$420.00",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function JobsPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader title="Job Requests" />
      <JobRequestsTable jobRequests={jobRequests} />
    </div>
  )
}
