"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Phone, PhoneOff } from "lucide-react"

export default function IncomingCallPage() {
  const router = useRouter()
  const [callTimer, setCallTimer] = useState(0)
  const [callStatus, setCallStatus] = useState<"ringing" | "ongoing" | "ended">("ringing")

  // Mock caller data
  const caller = {
    name: "John Smith",
    avatar: "/placeholder.svg?height=120&width=120",
    phone: "(555) 123-4567",
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (callStatus === "ongoing") {
      interval = setInterval(() => {
        setCallTimer((prev) => prev + 1)
      }, 1000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [callStatus])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleAccept = () => {
    setCallStatus("ongoing")
  }

  const handleDecline = () => {
    setCallStatus("ended")
    // Redirect after a short delay
    setTimeout(() => {
      router.push("/dashboard")
    }, 1500)
  }

  const handleEndCall = () => {
    setCallStatus("ended")
    // Redirect after a short delay
    setTimeout(() => {
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 p-4">
      <div className="text-center text-white space-y-6 max-w-md">
        {callStatus === "ringing" && (
          <>
            <h1 className="text-2xl font-bold">Incoming Call</h1>
            <div className="animate-pulse">
              <Avatar className="h-32 w-32 mx-auto border-4 border-white">
                <AvatarImage src={caller.avatar || "/placeholder.svg"} alt={caller.name} />
                <AvatarFallback className="text-4xl">{caller.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">{caller.name}</h2>
              <p className="text-blue-100">{caller.phone}</p>
            </div>
            <div className="flex justify-center space-x-8 pt-8">
              <Button onClick={handleDecline} size="lg" className="h-16 w-16 rounded-full bg-red-500 hover:bg-red-600">
                <PhoneOff className="h-8 w-8" />
                <span className="sr-only">Decline</span>
              </Button>
              <Button
                onClick={handleAccept}
                size="lg"
                className="h-16 w-16 rounded-full bg-green-500 hover:bg-green-600"
              >
                <Phone className="h-8 w-8" />
                <span className="sr-only">Accept</span>
              </Button>
            </div>
          </>
        )}

        {callStatus === "ongoing" && (
          <>
            <h1 className="text-2xl font-bold">On Call</h1>
            <Avatar className="h-32 w-32 mx-auto border-4 border-white">
              <AvatarImage src={caller.avatar || "/placeholder.svg"} alt={caller.name} />
              <AvatarFallback className="text-4xl">{caller.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">{caller.name}</h2>
              <p className="text-2xl font-mono">{formatTime(callTimer)}</p>
            </div>
            <div className="flex justify-center pt-8">
              <Button onClick={handleEndCall} size="lg" className="h-16 w-16 rounded-full bg-red-500 hover:bg-red-600">
                <PhoneOff className="h-8 w-8" />
                <span className="sr-only">End Call</span>
              </Button>
            </div>
          </>
        )}

        {callStatus === "ended" && (
          <>
            <h1 className="text-2xl font-bold">Call Ended</h1>
            <Avatar className="h-32 w-32 mx-auto border-4 border-white opacity-70">
              <AvatarImage src={caller.avatar || "/placeholder.svg"} alt={caller.name} />
              <AvatarFallback className="text-4xl">{caller.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">{caller.name}</h2>
              {callTimer > 0 && <p className="text-blue-100">Call duration: {formatTime(callTimer)}</p>}
            </div>
            <p className="text-blue-100">Redirecting to dashboard...</p>
          </>
        )}
      </div>
    </div>
  )
}
