import { Todos } from './components/Todos.tsx'
import { useState } from 'react'

const mockTodos = [
  {
    id: '1',
    title: 'Hacer dos todos',
    completed: true
  },
  {
    id: '2',
    title: 'Practicar typescript',
    completed: false
  },
  {
    id: '3',
    title: 'Hacer commit antes del próximo apagón',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = (id: string) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Todos 
        onRemoveTodo={handleRemove}
        todos={todos} 
      />
    </div>
  )
}

export default App
