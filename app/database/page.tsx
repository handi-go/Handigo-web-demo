import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function DatabasePage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Database with Supabase</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Supabase provides a powerful PostgreSQL database with Row Level Security (RLS) policies to secure your data.
        This example shows how to structure your database and implement security policies.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card>
          <CardHeader>
            <CardTitle>Schema Design</CardTitle>
            <CardDescription>How to structure your database tables</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              This example includes tables for user profiles, todos, and more. Each table is designed with proper
              relationships and constraints.
            </p>
            <pre className="bg-muted p-4 rounded-md mt-4 overflow-x-auto text-xs">
              {`-- Create profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  website TEXT,
  updated_at TIMESTAMP WITH TIME ZONE
);

-- Create todos table
CREATE TABLE todos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users NOT NULL,
  task TEXT NOT NULL,
  is_complete BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);`}
            </pre>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Row Level Security</CardTitle>
            <CardDescription>Secure your data with RLS policies</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              RLS policies ensure users can only access their own data. Here are example policies for the todos table:
            </p>
            <pre className="bg-muted p-4 rounded-md mt-4 overflow-x-auto text-xs">
              {`-- Enable RLS on todos table
ALTER TABLE todos ENABLE ROW LEVEL SECURITY;

-- Create policy for selecting todos
CREATE POLICY "Users can view their own todos" 
ON todos FOR SELECT 
USING (auth.uid() = user_id);

-- Create policy for inserting todos
CREATE POLICY "Users can insert their own todos" 
ON todos FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create policy for updating todos
CREATE POLICY "Users can update their own todos" 
ON todos FOR UPDATE 
USING (auth.uid() = user_id);

-- Create policy for deleting todos
CREATE POLICY "Users can delete their own todos" 
ON todos FOR DELETE 
USING (auth.uid() = user_id);`}
            </pre>
          </CardContent>
          <CardFooter>
            <Link href="https://supabase.com/docs/guides/auth/row-level-security" target="_blank" className="w-full">
              <Button variant="outline" className="w-full">
                Learn More About RLS
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
