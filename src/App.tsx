import { Todos } from './components/Todos.tsx'
import { useState } from 'react'
import { type TodoId, type Todo as TodoType } from './types'

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

  const handleRemove = ({ id }: TodoId) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = (
    { id, completed }: Pick<TodoType, 'id' | 'completed'>
    ) => {
      const newTodos = todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed
          }
        }

        return todo
      })

      setTodos(newTodos)
    }

  return (
    <div className='todoapp'>
      <Todos 
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={todos} 
      />
    </div>
  )
}

export default App
