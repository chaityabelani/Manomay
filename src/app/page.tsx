import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="card max-w-md w-full text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to Manomay</h1>
        <p className="text-gray-600">
          A modern web application built with Next.js, TypeScript, and Tailwind CSS
        </p>
        <div className="space-y-4">
          <Link 
            href="/login" 
            className="btn btn-primary block"
          >
            Login
          </Link>
          <Link 
            href="/signup" 
            className="btn btn-secondary block"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
} 