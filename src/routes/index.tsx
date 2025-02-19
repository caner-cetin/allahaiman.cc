import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  useEffect(() => {
    window.location.href = "https://www.youtube.com/watch?v=GbqVHPR7A7Y"
  })
  return null
}
