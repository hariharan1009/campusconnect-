import { currentUser } from '@clerk/nextjs/server'
import styles from './page.module.css'

// Utility function for class names
function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export default async function DashboardPage() {
  const user = await currentUser()
  const email = user?.emailAddresses[0]?.emailAddress
  const fullName = `${user?.firstName} ${user?.lastName}`

  return (
    <div className={styles.dashboard}>
      {/* Enhanced Welcome Section */}
      <div className={styles.welcomeSection}>
        <h1 className={styles.welcomeTitle}>
          Welcome back, <span className={styles.highlight}>{user?.firstName}</span>!
        </h1>
        <div className={styles.userInfo}>
          {user?.imageUrl && (
            <img 
              src={user.imageUrl} 
              alt="Profile" 
              className={styles.profileImage}
            />
          )}
          <div>
            <p className={styles.userName}>{fullName}</p>
            <p className={styles.userEmail}>{email}</p>
          </div>
        </div>
      </div>

      {/* Dashboard Content Grid */}
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Your Profile</h2>
          <div className={styles.profileDetails}>
            <p><strong>First Name:</strong> {user?.firstName}</p>
            <p><strong>Last Name:</strong> {user?.lastName}</p>
            <p><strong>Email:</strong> {email}</p>
          </div>
        </div>

        <div className={cn(styles.card, styles.wideCard)}>
          <h2>Recent Activity</h2>
          <p className={styles.mutedText}>No recent activity</p>
        </div>
      </div>
    </div>
  )
}