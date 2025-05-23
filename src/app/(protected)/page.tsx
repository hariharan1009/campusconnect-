// app/(protected)/dashboard/page.tsx
import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server'

export default async function DashboardPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/sign-in');
  }

  // Your actual dashboard content
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Dashboard content */}
    </div>
  );
}