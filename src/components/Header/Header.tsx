// components/Header.tsx
'use client'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Header.module.css'

export function Header() {
  const pathname = usePathname()

  // Don't show header on auth pages
  if (pathname.startsWith('/sign-in') || pathname.startsWith('/sign-up')) {
    return null
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          CampusConnect
        </Link>
        <Link href="/dashboard" className={styles.primaryButton}>
                Dashboard
              </Link>
        <nav className={styles.nav}>
          <SignedOut>
            <Link 
              href="/sign-in" 
              className={styles.signInLink}
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className={styles.signUpButton}
            >
              Sign Up
            </Link>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </nav>
      </div>
    </header>
  )
}