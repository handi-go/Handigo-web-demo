import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { JobDetails } from "@/components/dashboard/job-details"
import { notFound } from "next/navigation"

// Mock data for jobs
const jobs = [
  {
    id: "1",
    title: "Plumbing Repair",
    client: "John Smith",
    location: "123 Main St, Anytown",
    status: "pending",
    date: "2023-05-15",
    time: "10:00 AM - 12:00 PM",
    amount: "$120.00",
    avatar: "/placeholder.svg?height=40&width=40",
    description: "Kitchen sink is leaking. Water is pooling under the cabinet. Need urgent repair.",
    phone: "(555) 123-4567",
    email: "john.smith@example.com",
  },
  {
    id: "2",
    title: "Electrical Installation",
    client: "Sarah Johnson",
    location: "456 Oak Ave, Somewhere",
    status: "in-progress",
    date: "2023-05-16",
    time: "2:00 PM - 4:00 PM",
    amount: "$250.00",
    avatar: "/placeholder.svg?height=40&width=40",
    description: "Need to install new lighting fixtures in the living room and kitchen. Total of 5 fixtures.",
    phone: "(555) 234-5678",
    email: "sarah.johnson@example.com",
  },
  {
    id: "3",
    title: "Painting Service",
    client: "Michael Brown",
    location: "789 Pine Rd, Elsewhere",
    status: "completed",
    date: "2023-05-14",
    time: "9:00 AM - 5:00 PM",
    amount: "$350.00",
    avatar: "/placeholder.svg?height=40&width=40",
    description: "Paint the entire living room and dining area. Walls are approximately 800 sq ft in total.",
    phone: "(555) 345-6789",
    email: "michael.brown@example.com",
  },
  {
    id: "4",
    title: "Carpentry Work",
    client: "Emily Davis",
    location: "321 Cedar Ln, Nowhere",
    status: "pending",
    date: "2023-05-17",
    time: "1:00 PM - 3:00 PM",
    amount: "$180.00",
    avatar: "/placeholder.svg?height=40&width=40",
    description: "Need to repair wooden deck in the backyard. Some boards are rotting and need replacement.",
    phone: "(555) 456-7890",
    email: "emily.davis@example.com",
  },
]

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  const job = jobs.find((job) => job.id === params.id)

  if (!job) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <DashboardHeader title="Job Details" />
      <JobDetails job={job} />
    </div>
  )
}
