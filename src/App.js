import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Todos from './components/TodoList/Todos'
import Date from './components/Date/DateTitle'
import AddTodo from './components/AddTodo/AddTodo'
import './App.css'

function App() {
  
  const [showAddToDo, setShowTodo] = useState(false)
  const [todoList, setList] = useState([]);

  useEffect(() => {
    const findLocalStorage = JSON.parse(localStorage.getItem("Data"))
    if(findLocalStorage !== null){
      setList(JSON.parse(localStorage.getItem("Data")));
    }
  },[]);

  useEffect(() => {
    localStorage.setItem("Data",JSON.stringify(todoList));
  },[todoList])

  return (
    <div className="App">
      <div className='container'>
        <div className="todo" >
          <Header setShowTodo={setShowTodo} />
          <Date />
          <Todos todoList={todoList} setList={setList} />
          {showAddToDo ? <AddTodo showControl={setShowTodo} setList={setList} /> : null}
        </div>
      </div>
    </div >
  );
}

export default App;
