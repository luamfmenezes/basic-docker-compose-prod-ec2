import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos,setTodos] = useState([]);
  const [content,setContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/todos');
      const jsonResp = await response.json();
      setTodos(jsonResp);
    }
    fetchData();
  },[]);

  const addTodo = async () => {
    const response = await fetch('http://localhost:3001/todos',{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({content}),
      mode: 'cors',
      cache: 'default'
    });
    const newTodo = await response.json();
    setTodos([...todos,newTodo]);
  }

  const deleteTodo = async (id) => {
    const response = await fetch('http://localhost:3001/todos/'+id,{
      method:'DELETE',
      mode: 'cors',
      cache: 'default'
    });
    const deletedTodo = await response.json();
    const newTodos = todos.filter(el => el._id !== deletedTodo._id);
    setTodos(newTodos);
  }
  const handleInput = event => setContent(event.target.value);

  return (
    <div className="App">
      <header className="App-header">
        <h1> Todo List </h1>
        <div className="container-todo">
          {
            todos.map(el => 
            <div className="todo" key={el._id}>
              <p>{el.content}</p>
              <button onClick={() => deleteTodo(el._id)}> delete </button> 
            </div>)
          }
        </div>
        <div>
          <p>Add Todo: </p>
          <input onChange={handleInput}/>
          <button
            onClick={addTodo}
          >Add</button>
        </div>
      </header>
    </div>
  );
}

export default App;
