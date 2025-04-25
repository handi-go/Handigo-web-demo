# Supabase Web App Integration

This repository demonstrates how to create a Supabase database and connect it with a Next.js web application. It includes authentication, database operations, and best practices for integrating Supabase with your web app.

## Features

- **Authentication**: Email/password login, magic link authentication, and user management
- **Database**: PostgreSQL database with Row Level Security (RLS) policies
- **Storage**: File uploads and management with Supabase Storage
- **Profile Management**: User profiles with avatar uploads
- **Todo List**: Simple CRUD operations example

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account

### Setup

1. Clone this repository:
   \`\`\`bash
   git clone https://github.com/yourusername/supabase-webapp.git
   cd supabase-webapp
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Create a Supabase project:
   - Go to [Supabase Dashboard](https://app.supabase.io/)
   - Click "New Project"
   - Enter your project details and create the project

4. Set up environment variables:
   - Create a `.env.local` file in the root directory
   - Add the following variables:
     \`\`\`
     NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
     \`\`\`

5. Apply database migrations:
   \`\`\`bash
   npx supabase link --project-ref your-project-ref
   npx supabase db push
   \`\`\`

6. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/app`: Next.js App Router pages and layouts
- `/components`: React components
- `/lib`: Utility functions and type definitions
- `/supabase`: Database migrations and configuration
- `/public`: Static assets

## Database Schema

The project includes the following tables:

1. **profiles**: User profile information
   - `id`: UUID (references auth.users)
   - `username`: Text (unique)
   - `full_name`: Text
   - `avatar_url`: Text
   - `website`: Text
   - `updated_at`: Timestamp

2. **todos**: Todo items
   - `id`: UUID
   - `user_id`: UUID (references auth.users)
   - `task`: Text
   - `is_complete`: Boolean
   - `created_at`: Timestamp
   - `updated_at`: Timestamp

## Row Level Security (RLS)

The database uses Row Level Security to ensure users can only access their own data:

- Users can only view, update, and delete their own profiles
- Users can only view, create, update, and delete their own todos
- Storage policies ensure users can only manage their own files

## Authentication Flow

1. Users sign up with email/password or magic link
2. On successful authentication, a profile is automatically created
3. Users can update their profile information and upload an avatar
4. Session management is handled by Supabase Auth

## Learn More

- [Supabase Documentation](https://supabase.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Auth Helpers for Next.js](https://supabase.com/docs/guides/auth/auth-helpers/nextjs)

## License

MIT
