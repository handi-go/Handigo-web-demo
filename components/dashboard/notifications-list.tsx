"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Bell, Calendar, MessageSquare, DollarSign, CheckCircle2 } from "lucide-react"
import Link from "next/link"

// Mock data for notifications
const allNotifications = [
  {
    id: "1",
    type: "job",
    title: "New Job Request",
    message: "You have a new plumbing job request from John Smith",
    time: "10 minutes ago",
    read: false,
    link: "/dashboard/job-details/1",
    icon: Calendar,
  },
  {
    id: "2",
    type: "message",
    title: "New Message",
    message: "Sarah Johnson sent you a message about the electrical installation",
    time: "1 hour ago",
    read: false,
    link: "/dashboard/chat",
    icon: MessageSquare,
  },
  {
    id: "3",
    type: "payment",
    title: "Payment Received",
    message: "You received a payment of $350 for the painting service",
    time: "3 hours ago",
    read: true,
    link: "/dashboard/wallet",
    icon: DollarSign,
  },
  {
    id: "4",
    type: "job",
    title: "Job Completed",
    message: "Your carpentry job for Emily Davis has been marked as completed",
    time: "Yesterday",
    read: true,
    link: "/dashboard/job-details/4",
    icon: CheckCircle2,
  },
  {
    id: "5",
    type: "system",
    title: "Account Verification",
    message: "Your account verification is pending. Please complete the verification process.",
    time: "2 days ago",
    read: true,
    link: "/dashboard/verification",
    icon: Bell,
  },
]

export function NotificationsList() {
  const [notifications, setNotifications] = useState(allNotifications)

  const unreadNotifications = notifications.filter((notification) => !notification.read)
  const readNotifications = notifications.filter((notification) => notification.read)

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((notification) => ({ ...notification, read: true })))
  }

  const getIconColor = (type: string) => {
    switch (type) {
      case "job":
        return "text-blue-500"
      case "message":
        return "text-green-500"
      case "payment":
        return "text-purple-500"
      case "system":
        return "text-orange-500"
      default:
        return "text-gray-500"
    }
  }

  const renderNotification = (notification: (typeof allNotifications)[0]) => (
    <Link
      href={notification.link}
      key={notification.id}
      className={`block border-b last:border-0 p-4 hover:bg-gray-50 ${!notification.read ? "bg-blue-50" : ""}`}
      onClick={() => markAsRead(notification.id)}
    >
      <div className="flex items-start">
        <div className={`mr-3 p-2 rounded-full bg-gray-100 ${getIconColor(notification.type)}`}>
          <notification.icon className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className={`font-medium ${!notification.read ? "text-blue-700" : ""}`}>{notification.title}</h3>
            <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{notification.time}</span>
          </div>
          <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
        </div>
        {!notification.read && <div className="h-2 w-2 rounded-full bg-blue-600 mt-2 ml-2" />}
      </div>
    </Link>
  )

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Notifications</CardTitle>
        {unreadNotifications.length > 0 && (
          <Button variant="ghost" size="sm" onClick={markAllAsRead}>
            Mark all as read
          </Button>
        )}
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">
              All
              {notifications.length > 0 && <span className="ml-2 text-xs">({notifications.length})</span>}
            </TabsTrigger>
            <TabsTrigger value="unread">
              Unread
              {unreadNotifications.length > 0 && <span className="ml-2 text-xs">({unreadNotifications.length})</span>}
            </TabsTrigger>
            <TabsTrigger value="read">
              Read
              {readNotifications.length > 0 && <span className="ml-2 text-xs">({readNotifications.length})</span>}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="border-t">
            {notifications.length > 0 ? (
              notifications.map(renderNotification)
            ) : (
              <div className="p-8 text-center text-gray-500">No notifications</div>
            )}
          </TabsContent>
          <TabsContent value="unread" className="border-t">
            {unreadNotifications.length > 0 ? (
              unreadNotifications.map(renderNotification)
            ) : (
              <div className="p-8 text-center text-gray-500">No unread notifications</div>
            )}
          </TabsContent>
          <TabsContent value="read" className="border-t">
            {readNotifications.length > 0 ? (
              readNotifications.map(renderNotification)
            ) : (
              <div className="p-8 text-center text-gray-500">No read notifications</div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
