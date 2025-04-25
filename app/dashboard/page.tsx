import { JobCard } from "@/components/dashboard/job-card"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

// Mock data for jobs
const jobs = [
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
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <DashboardHeader title="Dashboard" />

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Recent Job Requests</h2>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <PlusCircle className="mr-2 h-4 w-4" />
          New Job
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  )
}
