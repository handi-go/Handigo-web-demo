import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function StoragePage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Storage with Supabase</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Supabase Storage provides an easy way to store and serve files. This example shows how to use Storage for user
        avatars and file uploads.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card>
          <CardHeader>
            <CardTitle>Storage Buckets</CardTitle>
            <CardDescription>How to create and configure storage buckets</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Storage buckets are containers for your files. You can create public or private buckets with different
              access policies.
            </p>
            <pre className="bg-muted p-4 rounded-md mt-4 overflow-x-auto text-xs">
              {`-- Create a public bucket for avatars
INSERT INTO storage.buckets (id, name, public)
VALUES ('avatars', 'avatars', true);

-- Create RLS policy for the avatars bucket
CREATE POLICY "Anyone can view avatars"
ON storage.objects FOR SELECT
USING (bucket_id = 'avatars');

-- Only authenticated users can upload avatars
CREATE POLICY "Authenticated users can upload avatars"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'avatars' AND
  auth.role() = 'authenticated'
);

-- Users can only update their own avatars
CREATE POLICY "Users can update own avatar"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'avatars' AND
  owner = auth.uid()
);`}
            </pre>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>File Operations</CardTitle>
            <CardDescription>Upload, download, and manage files</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Supabase provides a simple API for file operations. Here's how to upload and retrieve files:
            </p>
            <pre className="bg-muted p-4 rounded-md mt-4 overflow-x-auto text-xs">
              {`// Upload a file
const { data, error } = await supabase
  .storage
  .from('avatars')
  .upload('public/avatar1.png', file)

// Get a public URL for a file
const { data } = supabase
  .storage
  .from('avatars')
  .getPublicUrl('public/avatar1.png')

// Download a file
const { data, error } = await supabase
  .storage
  .from('avatars')
  .download('public/avatar1.png')`}
            </pre>
          </CardContent>
          <CardFooter>
            <Link href="https://supabase.com/docs/guides/storage" target="_blank" className="w-full">
              <Button variant="outline" className="w-full">
                Learn More About Storage
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="flex justify-center">
        <Link href="/dashboard">
          <Button>Go to Dashboard</Button>
        </Link>
      </div>
    </div>
  )
}
