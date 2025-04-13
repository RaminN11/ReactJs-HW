import React, { useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState('');

    const addTodo = () => {
        if (inputText.trim() === '') return;

        setTodos([...todos, inputText.trim()]);
        setInputText('');
      };

    const inputChange = (e) => {
        setInputText(e.target.value)
    }

    const keyPress = (e) => {
        if (e.key === "Enter") {
            addTodo();
        }
    }
    return (
        <div>
            <h2>Список дел</h2>
            <input placeholder="Добавить новую задачу" type="text" value={inputText} onChange={inputChange} onKeyUp={keyPress}></input>

            <button onClick={addTodo}>Добавить</button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
                <li ></li>
            </ul>
        </div>
    );
}

export default TodoList;
