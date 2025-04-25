"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Calendar, MessageSquare, DollarSign, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NotificationsDropdownProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function NotificationsDropdown({ open, onOpenChange }: NotificationsDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onOpenChange(false)
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open, onOpenChange])

  if (!open) return null

  // Mock notifications
  const notifications = [
    {
      id: "1",
      title: "New Job Request",
      message: "You have a new plumbing job request",
      time: "10 min ago",
      icon: Calendar,
      link: "/dashboard/job-details/1",
    },
    {
      id: "2",
      title: "New Message",
      message: "Sarah sent you a message",
      time: "1 hour ago",
      icon: MessageSquare,
      link: "/dashboard/chat",
    },
    {
      id: "3",
      title: "Payment Received",
      message: "You received $350 for painting service",
      time: "3 hours ago",
      icon: DollarSign,
      link: "/dashboard/wallet",
    },
  ]

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 mt-2 w-80 z-50 origin-top-right"
      onClick={(e) => e.stopPropagation()}
    >
      <Card className="overflow-hidden shadow-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-medium">Notifications</h3>
          <Link href="/dashboard/notifications" onClick={() => onOpenChange(false)}>
            <Button variant="ghost" size="sm" className="text-sm">
              View All
            </Button>
          </Link>
        </div>
        <div className="max-h-96 overflow-y-auto">
          {notifications.map((notification) => (
            <Link
              key={notification.id}
              href={notification.link}
              className="block p-4 hover:bg-gray-50 border-b last:border-0"
              onClick={() => onOpenChange(false)}
            >
              <div className="flex items-start">
                <div className="mr-3 bg-blue-100 p-2 rounded-full text-blue-600">
                  <notification.icon className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">{notification.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{notification.message}</p>
                  <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {notifications.length === 0 && (
          <div className="p-4 text-center text-gray-500">
            <Bell className="h-8 w-8 mx-auto text-gray-300 mb-2" />
            <p>No new notifications</p>
          </div>
        )}
      </Card>
    </div>
  )
}
