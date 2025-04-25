import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, AlertCircle, Upload, Clock } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function VerificationStatus() {
  // Mock verification status
  const verificationStatus = {
    identity: "verified",
    address: "pending",
    professional: "unverified",
    background: "pending",
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "verified":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />
      case "pending":
        return <Clock className="h-5 w-5 text-yellow-500" />
      case "unverified":
        return <AlertCircle className="h-5 w-5 text-red-500" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "verified":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Verified</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
      case "unverified":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Unverified</Badge>
      default:
        return null
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Verification Status</CardTitle>
            <CardDescription>Complete all verification steps to unlock all features</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(verificationStatus.identity)}
                  <h3 className="font-medium">Identity Verification</h3>
                </div>
                {getStatusBadge(verificationStatus.identity)}
              </div>
              <p className="text-sm text-gray-500 pl-7">
                We verify your identity using government-issued ID to ensure security for all users.
              </p>
              {verificationStatus.identity === "verified" && (
                <div className="bg-green-50 text-green-700 p-3 rounded-md text-sm">
                  Your identity has been successfully verified. Thank you!
                </div>
              )}
              {verificationStatus.identity === "pending" && (
                <div className="bg-yellow-50 text-yellow-700 p-3 rounded-md text-sm">
                  Your identity verification is being processed. This usually takes 1-2 business days.
                </div>
              )}
              {verificationStatus.identity === "unverified" && (
                <Button className="ml-7 bg-blue-600 hover:bg-blue-700">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload ID
                </Button>
              )}
              <Separator />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(verificationStatus.address)}
                  <h3 className="font-medium">Address Verification</h3>
                </div>
                {getStatusBadge(verificationStatus.address)}
              </div>
              <p className="text-sm text-gray-500 pl-7">
                Verify your current address using a utility bill, bank statement, or lease agreement.
              </p>
              {verificationStatus.address === "verified" && (
                <div className="bg-green-50 text-green-700 p-3 rounded-md text-sm">
                  Your address has been successfully verified. Thank you!
                </div>
              )}
              {verificationStatus.address === "pending" && (
                <div className="bg-yellow-50 text-yellow-700 p-3 rounded-md text-sm">
                  Your address verification is being processed. This usually takes 1-2 business days.
                </div>
              )}
              {verificationStatus.address === "unverified" && (
                <Button className="ml-7 bg-blue-600 hover:bg-blue-700">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Proof of Address
                </Button>
              )}
              <Separator />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(verificationStatus.professional)}
                  <h3 className="font-medium">Professional Credentials</h3>
                </div>
                {getStatusBadge(verificationStatus.professional)}
              </div>
              <p className="text-sm text-gray-500 pl-7">
                Upload your professional licenses, certifications, or qualifications relevant to your services.
              </p>
              {verificationStatus.professional === "verified" && (
                <div className="bg-green-50 text-green-700 p-3 rounded-md text-sm">
                  Your professional credentials have been successfully verified. Thank you!
                </div>
              )}
              {verificationStatus.professional === "pending" && (
                <div className="bg-yellow-50 text-yellow-700 p-3 rounded-md text-sm">
                  Your professional credentials are being processed. This usually takes 2-3 business days.
                </div>
              )}
              {verificationStatus.professional === "unverified" && (
                <Button className="ml-7 bg-blue-600 hover:bg-blue-700">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Credentials
                </Button>
              )}
              <Separator />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(verificationStatus.background)}
                  <h3 className="font-medium">Background Check</h3>
                </div>
                {getStatusBadge(verificationStatus.background)}
              </div>
              <p className="text-sm text-gray-500 pl-7">
                A background check is required to ensure safety and trust within our community.
              </p>
              {verificationStatus.background === "verified" && (
                <div className="bg-green-50 text-green-700 p-3 rounded-md text-sm">
                  Your background check has been successfully completed. Thank you!
                </div>
              )}
              {verificationStatus.background === "pending" && (
                <div className="bg-yellow-50 text-yellow-700 p-3 rounded-md text-sm">
                  Your background check is in progress. This usually takes 3-5 business days.
                </div>
              )}
              {verificationStatus.background === "unverified" && (
                <Button className="ml-7 bg-blue-600 hover:bg-blue-700">
                  <Upload className="mr-2 h-4 w-4" />
                  Authorize Background Check
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Verification Benefits</CardTitle>
            <CardDescription>Why verification matters</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Build Trust</h3>
                <p className="text-sm text-gray-500">Verified profiles receive 3x more job requests</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Higher Earnings</h3>
                <p className="text-sm text-gray-500">Verified artisans earn 30% more on average</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Priority Support</h3>
                <p className="text-sm text-gray-500">Get faster responses from our support team</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Featured Placement</h3>
                <p className="text-sm text-gray-500">Appear higher in search results</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Complete Verification</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
            <CardDescription>Contact our verification team</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">
              Having trouble with verification? Our team is available to help you through the process.
            </p>
            <Button variant="outline" className="w-full mt-4">
              Contact Support
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
