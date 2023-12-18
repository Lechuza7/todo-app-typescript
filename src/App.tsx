import { Todos } from './components/Todos.tsx'
import { useState } from 'react'
import { FilterValue, type TodoId, type Todo as TodoType } from './types'
import { TODO_FILTERS } from './consts.ts'
import { Footer } from './components/Footer.tsx'

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
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

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
        todos={filteredTodos} 
      />
      <Footer 
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={()=> {}}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
