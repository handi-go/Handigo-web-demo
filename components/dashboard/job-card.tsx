import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, DollarSign } from "lucide-react"

interface JobCardProps {
  job: {
    id: string
    title: string
    client: string
    location: string
    status: string
    date: string
    amount: string
    avatar: string
  }
}

export function JobCard({ job }: JobCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
      case "in-progress":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100"
      case "completed":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
    }
  }

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <Avatar>
              <AvatarImage src={job.avatar || "/placeholder.svg"} alt={job.client} />
              <AvatarFallback>{job.client.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">{job.title}</h3>
              <p className="text-sm text-gray-500">{job.client}</p>
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{job.location}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <Badge className={`${getStatusColor(job.status)} capitalize`}>{job.status.replace("-", " ")}</Badge>
            <div className="flex items-center mt-2 text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{job.date}</span>
            </div>
            <div className="flex items-center mt-1 text-sm font-medium">
              <DollarSign className="h-4 w-4 mr-1" />
              <span>{job.amount}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
