import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownLeft, Plus } from "lucide-react"
import Link from "next/link"

export function WalletOverview() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Wallet Balance</CardTitle>
        <CardDescription>Your current balance and actions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold mb-4">$2,580.00</div>
        <div className="grid grid-cols-2 gap-2 mb-6">
          <Button variant="outline" className="w-full justify-start">
            <ArrowUpRight className="mr-2 h-4 w-4 text-green-500" />
            Send
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <ArrowDownLeft className="mr-2 h-4 w-4 text-blue-500" />
            Receive
          </Button>
        </div>
        <Link href="/dashboard/add-funds">
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" />
            Add Funds
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
