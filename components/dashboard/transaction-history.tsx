import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownLeft } from "lucide-react"

// Mock data for transactions
const transactions = [
  {
    id: "1",
    type: "deposit",
    description: "Deposit from Bank Account",
    date: "Today, 10:30 AM",
    amount: "+$500.00",
  },
  {
    id: "2",
    type: "withdrawal",
    description: "Withdrawal to Bank Account",
    date: "Yesterday, 2:45 PM",
    amount: "-$150.00",
  },
  {
    id: "3",
    type: "payment",
    description: "Payment from John Smith",
    date: "May 15, 2023",
    amount: "+$120.00",
  },
  {
    id: "4",
    type: "payment",
    description: "Payment from Sarah Johnson",
    date: "May 14, 2023",
    amount: "+$250.00",
  },
  {
    id: "5",
    type: "fee",
    description: "Service Fee",
    date: "May 13, 2023",
    amount: "-$5.00",
  },
]

export function TransactionHistory() {
  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "deposit":
      case "payment":
        return <ArrowDownLeft className="h-4 w-4 text-green-500" />
      case "withdrawal":
      case "fee":
        return <ArrowUpRight className="h-4 w-4 text-red-500" />
      default:
        return null
    }
  }

  const getAmountColor = (amount: string) => {
    return amount.startsWith("+") ? "text-green-600" : "text-red-600"
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Transaction History</CardTitle>
        <CardDescription>Your recent transactions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between py-2 border-b last:border-0">
              <div className="flex items-center">
                <div className="mr-3 bg-gray-100 p-2 rounded-full">{getTransactionIcon(transaction.type)}</div>
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-xs text-gray-500">{transaction.date}</p>
                </div>
              </div>
              <p className={`font-medium ${getAmountColor(transaction.amount)}`}>{transaction.amount}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
