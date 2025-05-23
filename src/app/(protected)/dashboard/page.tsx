import { currentUser } from '@clerk/nextjs/server'
import styles from './page.module.css'

// Simple cn implementation for joining class names
function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export default async function DashboardPage() {
  const user = await currentUser()
  const email = user?.emailAddresses[0]?.emailAddress

  return (
    <div className={styles.dashboard}>
      <h1>Welcome back, {user?.firstName}!</h1>
      
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Your Profile</h2>
          <p className={styles.mutedText}>{email}</p>
        </div>

        <div className={cn(styles.card, styles.wideCard)}>
          <h2>Recent Activity</h2>
          <p className={styles.mutedText}>No recent activity</p>
        </div>
      </div>
    </div>
  )
}