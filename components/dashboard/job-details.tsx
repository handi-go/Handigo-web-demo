import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Calendar, Clock, DollarSign, Phone, Mail, MessageSquare } from "lucide-react"
import Link from "next/link"

interface JobDetailsProps {
  job: {
    id: string
    title: string
    client: string
    location: string
    status: string
    date: string
    time: string
    amount: string
    avatar: string
    description: string
    phone: string
    email: string
  }
}

export function JobDetails({ job }: JobDetailsProps) {
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{job.title}</CardTitle>
                <CardDescription>Job #{job.id}</CardDescription>
              </div>
              <Badge className={`${getStatusColor(job.status)} capitalize`}>{job.status.replace("-", " ")}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs defaultValue="details">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="client">Client</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-500">Description</h3>
                  <p>{job.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-gray-500" />
                    <div>
                      <p className="text-sm font-medium">Date</p>
                      <p className="text-sm text-gray-500">{job.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-gray-500" />
                    <div>
                      <p className="text-sm font-medium">Time</p>
                      <p className="text-sm text-gray-500">{job.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-gray-500" />
                    <div>
                      <p className="text-sm font-medium">Amount</p>
                      <p className="text-sm text-gray-500">{job.amount}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="client" className="space-y-4 pt-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={job.avatar || "/placeholder.svg"} alt={job.client} />
                    <AvatarFallback>{job.client.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{job.client}</h3>
                    <p className="text-sm text-gray-500">Client</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-gray-500" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-sm text-gray-500">{job.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-gray-500" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-gray-500">{job.email}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="location" className="space-y-4 pt-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Address</p>
                    <p className="text-sm text-gray-500">{job.location}</p>
                  </div>
                </div>
                <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center">
                  <p className="text-gray-500">Map view would be displayed here</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel Job</Button>
            {job.status === "pending" && <Button className="bg-blue-600 hover:bg-blue-700">Accept Job</Button>}
            {job.status === "in-progress" && (
              <Button className="bg-green-600 hover:bg-green-700">Mark as Complete</Button>
            )}
            {job.status === "completed" && <Button variant="outline">View Invoice</Button>}
          </CardFooter>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link href={`/dashboard/chat?client=${job.client}`}>
              <Button className="w-full flex items-center justify-start bg-blue-600 hover:bg-blue-700">
                <MessageSquare className="mr-2 h-4 w-4" />
                Message Client
              </Button>
            </Link>
            <Link href={`/dashboard/calls/incoming`}>
              <Button variant="outline" className="w-full flex items-center justify-start">
                <Phone className="mr-2 h-4 w-4" />
                Call Client
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-blue-600" />
                  <div className="h-full w-0.5 bg-gray-200" />
                </div>
                <div>
                  <p className="text-sm font-medium">Job Created</p>
                  <p className="text-xs text-gray-500">May 14, 2023 - 9:30 AM</p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-blue-600" />
                  <div className="h-full w-0.5 bg-gray-200" />
                </div>
                <div>
                  <p className="text-sm font-medium">Job Assigned</p>
                  <p className="text-xs text-gray-500">May 14, 2023 - 10:15 AM</p>
                </div>
              </div>
              {job.status === "in-progress" || job.status === "completed" ? (
                <div className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full bg-blue-600" />
                    <div className="h-full w-0.5 bg-gray-200" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Work Started</p>
                    <p className="text-xs text-gray-500">May 15, 2023 - 10:00 AM</p>
                  </div>
                </div>
              ) : null}
              {job.status === "completed" ? (
                <div className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full bg-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Job Completed</p>
                    <p className="text-xs text-gray-500">May 15, 2023 - 11:45 AM</p>
                  </div>
                </div>
              ) : (
                <div className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full bg-gray-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Pending Completion</p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
