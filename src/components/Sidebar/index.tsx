'use client'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './index.module.css'

// Utility function to conditionally join class names
function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

const navItems = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Events', href: '/events' },
  { name: 'Clubs', href: '/clubs' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <h1>CampusConnect</h1>
      </div>
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              styles.navItem,
              pathname === item.href && styles.active
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <div className={styles.footer}>
        <UserButton afterSignOutUrl="/" />
      </div>
    </aside>
  )
}