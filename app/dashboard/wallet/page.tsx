import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { WalletOverview } from "@/components/dashboard/wallet-overview"
import { TransactionHistory } from "@/components/dashboard/transaction-history"

export default function WalletPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader title="Wallet" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <WalletOverview />
        </div>
        <div className="lg:col-span-2">
          <TransactionHistory />
        </div>
      </div>
    </div>
  )
}
