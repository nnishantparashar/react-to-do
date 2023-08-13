import NewTodo from "./Components/NewTodo/new-todo";
import TodoFilter from "./Components/TodoFilter/todo-filter";
import Todos from "./Components/Todos/todos";
import { createContext, useState } from "react";

const Dummy_Todo = [
  {
    id: "1",
    name: "fetch Api 1",
    description: "fetch data from all listed apis",
    status: "Not Completed",
  },
  {
    id: "2",
    name: "fetch Api 2",
    description: "fetch data from all listed apis",
    status: "Not Completed",
  },
  {
    id: "3",
    name: "fetch Api 3",
    description: "fetch data from all listed apis",
    status: "Not Completed",
  },
];

export const todoContext = createContext(null);

function App() {
  const [todos, setTodos] = useState(Dummy_Todo);
  const [filterString, setFilterString] = useState('All')

  const addTodoHandler = (todo) => {
    setTodos((prevState) => {
      return [todo, ...prevState];
     
    });
    
  };
  

  const onChangeStatus = (id, newStatus)=>{
    const updated_todos = todos.map(todo =>{
      if(todo.id === id){
        todo.status = newStatus;
      }
      return todo;
    })
   
    setTodos(updated_todos)
}

  const filteredTodo = (filter) =>{
    setFilterString(filter)
     
  }

  return (
    <todoContext.Provider value={{ todos, filterString }}>
      <div className="App">
        <NewTodo onAddNewTodo={addTodoHandler} />
        <TodoFilter onChangeFilter={filteredTodo}/>
        <Todos onChangeStatus={onChangeStatus} />
      </div>
    </todoContext.Provider>
  );
}

export default App;
