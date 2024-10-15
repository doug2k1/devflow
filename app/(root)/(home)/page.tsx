import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div>
      <h1 className="h1-bold">DevFlow</h1>
      <UserButton />
    </div>
  )
}
