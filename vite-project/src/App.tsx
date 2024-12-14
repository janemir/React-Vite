import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"


function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
          <Label htmlFor="email">Your email address</Label>
          <Button>Создать аккаунт</Button>
      </div>
  )
}

export default App
