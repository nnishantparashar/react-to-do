import './todos.css'
import Todo from '../Todo/todo';
import {useContext} from 'react';
import { todoContext } from '../../App';



const Todos = (props) => {
    const {todos, filterString} = useContext(todoContext)

    const ChangeStatus = (id, newStatus) =>{
      props.onChangeStatus(id, newStatus)
    }

    let filteredData = todos

    if(filterString === 'All'){
      filteredData = todos;
    }else{
      filteredData = todos.filter(todo => todo.status === filterString)
      
    }
    
    return (
        <div className='container'>
            {
      filteredData.map((todo) => {
        return <Todo todo={todo} onChangeStatus ={ChangeStatus}/>;
      })}
        </div>
    );
};

export default Todos