import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"



function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
          <Label htmlFor="create_account">Создать аккаунт</Label>
          <Label htmlFor="email">Почта</Label>
          <Input />
          <Label htmlFor="password">Пароль</Label>
          <Input />
          <Label htmlFor="repeat_password">Повторите пароль</Label>
          <Input />
          <Button>Создать аккаунт</Button>
          <Label htmlFor="repeat_password">Уже есть аккаунт?</Label>
          <Label htmlFor="repeat_password">Войти</Label>
      </div>
  )
}

export default App
