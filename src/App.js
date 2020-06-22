import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Input from './Input';


const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function addTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  function handleEnter(e) {
    if (e.key === "Enter")
      addTodo(null)
  }

  //Styles//
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60vh;
    height: 100vh;
    align-content: center;
    border: 1px solid;
    padding: 3vh;
  `;

  const Button = styled.div`
    border: none;
    background: #404040;
    color: #ffffff !important;
    font-weight: 100;
    padding: 20px;
    text-transform: uppercase;
    border-radius: 6px;
    display: inline-block;
    transition: all 0.3s ease 0s;
    &:hover {
    color: #404040 !important;
    font-weight: 700 !important;
    letter-spacing: 3px;
    background: none;
    box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    transition: all 0.3s ease 0s;
}
  `;
  //Styles//

  return (
    <>
      <Container>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <Input onKeyDown={handleEnter} ref={todoNameRef} />
        <Button onClick={addTodo}>Add</Button>
        <Button onClick={handleClearTodos}>Clear Completed</Button>
        <div>{todos.filter(todo => !todo.complete).length} left to do</div>
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
