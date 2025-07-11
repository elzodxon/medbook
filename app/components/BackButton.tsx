'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface BackButtonProps {
  href?: string
  className?: string
}

export default function BackButton({ href, className = '' }: BackButtonProps) {
  const router = useRouter()

  const handleClick = () => {
    if (href) {
      router.push(href)
    } else {
      router.back()
    }
  }

  return (
    <button 
      onClick={handleClick}
      className={`flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors ${className}`}
    >
      <ArrowLeft className="w-5 h-5" />
      <span>Back</span>
    </button>
  )
} 