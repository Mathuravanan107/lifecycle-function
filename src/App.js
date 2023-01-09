import React, {useState} from 'react';
import Header from './componentss/Header';
import './App.css';
import Form from './componentss/Form';
import TodosList from './componentss/TodosList';
import Firstclass from './Firstclass';
import Lifecycle from './Lifecycle';
import ParentFun from './ParentFun';

const App = () => {
  const[input,setInput]=useState("")
  const[todos,setTodos]=useState([]);
  const [editTodo,setEditTodo]=useState(null)
  return (
    <ParentFun />
    //<Firstclass/>
    // <div className='container'>
    //   <div className='app-wrapper'>
    //     <div>
    //       <Header />
    //     </div>
    //     <div>
    //       <Form 
    //         input={input}
    //         setInput={setInput}
    //         todos={todos}
    //         setTodos={setTodos}
    //         editTodo={editTodo}
    //         setEditTodo={setEditTodo}
    //       />
    //     </div>
    //     <div>
    //       <TodosList
    //       todos={todos}
    //       setTodos={setTodos}
    //       setEditTodo={setEditTodo}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}
export default App;