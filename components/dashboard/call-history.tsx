import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Phone, PhoneCall, PhoneIncoming, PhoneOutgoing, PhoneMissed, Video } from "lucide-react"

// Mock data for call history
const calls = [
  {
    id: "1",
    name: "John Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    type: "incoming",
    status: "answered",
    duration: "5:23",
    date: "Today, 10:30 AM",
    isVideo: false,
  },
  {
    id: "2",
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    type: "outgoing",
    status: "answered",
    duration: "12:05",
    date: "Today, 9:15 AM",
    isVideo: true,
  },
  {
    id: "3",
    name: "Michael Brown",
    avatar: "/placeholder.svg?height=40&width=40",
    type: "missed",
    status: "missed",
    duration: "0:00",
    date: "Yesterday, 3:45 PM",
    isVideo: false,
  },
  {
    id: "4",
    name: "Emily Davis",
    avatar: "/placeholder.svg?height=40&width=40",
    type: "incoming",
    status: "answered",
    duration: "8:17",
    date: "Yesterday, 1:20 PM",
    isVideo: false,
  },
  {
    id: "5",
    name: "Robert Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    type: "outgoing",
    status: "missed",
    duration: "0:00",
    date: "May 14, 2023",
    isVideo: false,
  },
]

export function CallHistory() {
  const getCallIcon = (type: string, status: string, isVideo: boolean) => {
    if (isVideo) return <Video className="h-4 w-4" />
    if (type === "incoming" && status === "answered") return <PhoneIncoming className="h-4 w-4 text-green-500" />
    if (type === "outgoing" && status === "answered") return <PhoneOutgoing className="h-4 w-4 text-blue-500" />
    if (status === "missed") return <PhoneMissed className="h-4 w-4 text-red-500" />
    return <PhoneCall className="h-4 w-4" />
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Call History</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="incoming">Incoming</TabsTrigger>
            <TabsTrigger value="outgoing">Outgoing</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="border-t">
            {calls.map((call) => (
              <div key={call.id} className="flex items-center justify-between p-4 border-b last:border-0">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={call.avatar || "/placeholder.svg"} alt={call.name} />
                    <AvatarFallback>{call.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-medium">{call.name}</h3>
                      <Badge
                        variant="outline"
                        className={`ml-2 ${
                          call.status === "missed" ? "text-red-500 border-red-200" : "text-gray-500 border-gray-200"
                        }`}
                      >
                        {getCallIcon(call.type, call.status, call.isVideo)}
                        <span className="ml-1 text-xs capitalize">{call.type}</span>
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{call.date}</span>
                      {call.status !== "missed" && <span className="ml-2">• {call.duration}</span>}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    {call.isVideo ? <Video className="h-4 w-4" /> : <Phone className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="incoming" className="border-t">
            {calls
              .filter((call) => call.type === "incoming")
              .map((call) => (
                <div key={call.id} className="flex items-center justify-between p-4 border-b last:border-0">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={call.avatar || "/placeholder.svg"} alt={call.name} />
                      <AvatarFallback>{call.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center">
                        <h3 className="font-medium">{call.name}</h3>
                        <Badge
                          variant="outline"
                          className={`ml-2 ${
                            call.status === "missed" ? "text-red-500 border-red-200" : "text-gray-500 border-gray-200"
                          }`}
                        >
                          {getCallIcon(call.type, call.status, call.isVideo)}
                          <span className="ml-1 text-xs capitalize">{call.type}</span>
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{call.date}</span>
                        {call.status !== "missed" && <span className="ml-2">• {call.duration}</span>}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      {call.isVideo ? <Video className="h-4 w-4" /> : <Phone className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              ))}
          </TabsContent>
          <TabsContent value="outgoing" className="border-t">
            {calls
              .filter((call) => call.type === "outgoing")
              .map((call) => (
                <div key={call.id} className="flex items-center justify-between p-4 border-b last:border-0">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={call.avatar || "/placeholder.svg"} alt={call.name} />
                      <AvatarFallback>{call.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center">
                        <h3 className="font-medium">{call.name}</h3>
                        <Badge
                          variant="outline"
                          className={`ml-2 ${
                            call.status === "missed" ? "text-red-500 border-red-200" : "text-gray-500 border-gray-200"
                          }`}
                        >
                          {getCallIcon(call.type, call.status, call.isVideo)}
                          <span className="ml-1 text-xs capitalize">{call.type}</span>
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{call.date}</span>
                        {call.status !== "missed" && <span className="ml-2">• {call.duration}</span>}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      {call.isVideo ? <Video className="h-4 w-4" /> : <Phone className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
