import { type Todo as TodoType, type TodoId, type ListOfTodos } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  onRemoveTodo: ({ id }: TodoId) => void //void lo usamos para indicar que la función no devuelve un valor
}

export const Todos: React.FC<Props> = ({ todos, onToggleCompleteTodo, onRemoveTodo }) => {
  return (
    <ul className='todo-list'>
      { todos.map(todo => (
        <li key={todo.id}
            className={`${todo.completed ? 'completed' : ''}`}>
          <Todo 
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onToggleCompleteTodo={onToggleCompleteTodo}
            onRemoveTodo={onRemoveTodo}
          />
        </li>
      ))}
    </ul>
  )
}
