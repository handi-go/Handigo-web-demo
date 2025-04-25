"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Paperclip, Phone, Video } from "lucide-react"

// Mock data for contacts
const contacts = [
  {
    id: "1",
    name: "John Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "When can you come to fix the sink?",
    time: "10:30 AM",
    unread: 2,
  },
  {
    id: "2",
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "The electrical work looks great, thanks!",
    time: "Yesterday",
    unread: 0,
  },
  {
    id: "3",
    name: "Michael Brown",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Can you provide a quote for painting?",
    time: "Yesterday",
    unread: 0,
  },
]

// Mock data for messages
const initialMessages = [
  {
    id: "1",
    sender: "John Smith",
    content: "Hi there! I need help with my plumbing issue.",
    time: "10:00 AM",
    isMe: false,
  },
  {
    id: "2",
    sender: "Me",
    content: "Hello! I'd be happy to help. Can you describe the issue?",
    time: "10:05 AM",
    isMe: true,
  },
  {
    id: "3",
    sender: "John Smith",
    content: "My kitchen sink is leaking. Water is pooling under the cabinet.",
    time: "10:10 AM",
    isMe: false,
  },
  {
    id: "4",
    sender: "Me",
    content: "I understand. When would be a good time for me to come take a look?",
    time: "10:15 AM",
    isMe: true,
  },
  {
    id: "5",
    sender: "John Smith",
    content: "Would tomorrow morning around 10 AM work?",
    time: "10:20 AM",
    isMe: false,
  },
  {
    id: "6",
    sender: "Me",
    content: "Yes, that works for me. I'll be there at 10 AM tomorrow.",
    time: "10:25 AM",
    isMe: true,
  },
  {
    id: "7",
    sender: "John Smith",
    content: "Great! My address is 123 Main St, Anytown. When can you come to fix the sink?",
    time: "10:30 AM",
    isMe: false,
  },
]

export function ChatInterface() {
  const [activeContact, setActiveContact] = useState(contacts[0])
  const [messages, setMessages] = useState(initialMessages)
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now().toString(),
        sender: "Me",
        content: newMessage,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isMe: true,
      }
      setMessages([...messages, message])
      setNewMessage("")
    }
  }

  return (
    <div className="flex h-full border rounded-lg overflow-hidden">
      {/* Contact list */}
      <div className="w-1/3 border-r bg-white">
        <div className="p-4 border-b">
          <Input placeholder="Search contacts..." className="w-full" />
        </div>
        <div className="overflow-y-auto h-[calc(100%-4rem)]">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                activeContact.id === contact.id ? "bg-blue-50" : ""
              }`}
              onClick={() => setActiveContact(contact)}
            >
              <div className="flex items-start">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
                  <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium truncate">{contact.name}</h3>
                    <p className="text-xs text-gray-500">{contact.time}</p>
                  </div>
                  <p className="text-xs text-gray-500 truncate">{contact.lastMessage}</p>
                </div>
                {contact.unread > 0 && (
                  <span className="ml-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {contact.unread}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Chat header */}
        <div className="p-4 border-b bg-white flex items-center justify-between">
          <div className="flex items-center">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage src={activeContact.avatar || "/placeholder.svg"} alt={activeContact.name} />
              <AvatarFallback>{activeContact.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">{activeContact.name}</h3>
              <p className="text-xs text-gray-500">Online</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon">
              <Phone className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  message.isMe ? "bg-blue-600 text-white" : "bg-white border border-gray-200"
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <p className={`text-xs mt-1 text-right ${message.isMe ? "text-blue-100" : "text-gray-500"}`}>
                  {message.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message input */}
        <div className="p-4 border-t bg-white">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Paperclip className="h-5 w-5" />
            </Button>
            <Input
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage()
                }
              }}
              className="flex-1"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className="bg-blue-600 hover:bg-blue-700"
              size="icon"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
