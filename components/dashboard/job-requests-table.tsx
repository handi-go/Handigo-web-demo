import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal } from "lucide-react"

interface JobRequestsTableProps {
  jobRequests: {
    id: string
    title: string
    client: string
    location: string
    status: string
    date: string
    amount: string
    avatar: string
  }[]
}

export function JobRequestsTable({ jobRequests }: JobRequestsTableProps) {
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
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Client</TableHead>
            <TableHead>Job</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="w-[80px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobRequests.map((job) => (
            <TableRow key={job.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={job.avatar || "/placeholder.svg"} alt={job.client} />
                    <AvatarFallback>{job.client.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{job.client}</p>
                    <p className="text-xs text-gray-500">{job.location}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>{job.title}</TableCell>
              <TableCell>{job.date}</TableCell>
              <TableCell>
                <Badge className={`${getStatusColor(job.status)} capitalize`}>{job.status.replace("-", " ")}</Badge>
              </TableCell>
              <TableCell>{job.amount}</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Actions</span>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
