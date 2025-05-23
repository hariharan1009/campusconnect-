// app/sign-up/[[...sign-up]]/page.tsx
import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <SignUp 
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        appearance={{
          elements: {
            rootBox: 'w-full max-w-md',
            card: 'border-0 shadow-lg',
            headerTitle: 'text-2xl font-bold',
            formFieldInput: 'border-gray-300 focus:ring-blue-500 focus:border-blue-500',
            formButtonPrimary: 'bg-blue-600 hover:bg-blue-700',
          }
        }}
      />
    </div>
  )
}