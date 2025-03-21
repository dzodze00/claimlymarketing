"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ChatbotPreviewProps {
  enabled: boolean
}

export function ChatbotPreview({ enabled }: ChatbotPreviewProps) {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content:
        "Hello! I'm your Claimly Assistant. I'm here to help with your class action lawsuit questions and guide you through the process. How can I assist you today?",
    },
  ])

  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    setMessages([...messages, { role: "user", content: newMessage }])

    // Simulate bot responses based on user input
    setTimeout(() => {
      let botResponse = ""

      if (newMessage.toLowerCase().includes("document") || newMessage.toLowerCase().includes("upload")) {
        botResponse =
          "To submit documents for your case, you can upload them directly through our secure portal. Would you like me to guide you through the document upload process?"
      } else if (newMessage.toLowerCase().includes("status") || newMessage.toLowerCase().includes("update")) {
        botResponse =
          "Your claim is currently in the verification stage. Our team is reviewing your submitted documents. This process typically takes 3-5 business days. I'll notify you as soon as there's an update."
      } else if (newMessage.toLowerCase().includes("payment") || newMessage.toLowerCase().includes("compensation")) {
        botResponse =
          "Compensation amounts will be determined after the case settlement or judgment. Based on similar cases, payments typically range from $500-$2,500 per plaintiff, but this can vary based on many factors. I'll keep you updated on any developments."
      } else {
        botResponse =
          "Thank you for your question. I'll look into that for you. Is there anything specific about the class action lawsuit that you'd like to know?"
      }

      setMessages((prev) => [...prev, { role: "bot", content: botResponse }])
    }, 1000)

    setNewMessage("")
  }

  if (!enabled) {
    return (
      <div className="h-80 flex items-center justify-center border rounded-lg bg-muted/30">
        <div className="text-center p-4">
          <h3 className="font-medium text-muted-foreground">Chatbot is currently disabled</h3>
          <p className="text-sm text-muted-foreground mt-1">Enable the chatbot to see the preview</p>
        </div>
      </div>
    )
  }

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-primary p-3 text-primary-foreground">
        <h3 className="font-medium">Claimly Assistant</h3>
      </div>
      <div className="h-80 overflow-y-auto p-4 space-y-4 bg-muted/30">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 border-t flex gap-2">
        <Input
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </div>
    </div>
  )
}

