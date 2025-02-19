import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  useEffect(() => {
    window.location.href = 'https://www.youtube.com/watch?v=GbqVHPR7A7Y&pp=ygUVa2luZyB3b21hbiBoaWVyb3BoYW50'
  })
  return null
}