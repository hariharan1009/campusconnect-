// app/page.tsx
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
    
      <main className={styles.main}>
        <SignedOut>
          <section className={styles.hero}>
            <h1 className={styles.heroTitle}>
              Connect with your <span className={styles.highlight}>campus community</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Join clubs, attend events, and make lasting connections at your university.
            </p>
            <div className={styles.ctaContainer}>
              <Link href="/sign-up" className={styles.primaryButton}>
                Get Started
              </Link>
            </div>
          </section>
        </SignedOut>

        <SignedIn>
          <section className={styles.hero}>
            <h1 className={styles.heroTitle}>
              Welcome back to <span className={styles.highlight}>CampusConnect</span>
            </h1>
            <div className={styles.ctaContainer}>
             
            </div>
          </section>
        </SignedIn>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} CampusConnect. All rights reserved.</p>
      </footer>
    </div>
  );
}