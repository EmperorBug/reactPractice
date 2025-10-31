import { useState } from "react";
import {createTodo,delTodo,updateTodo} from "../services/todoService"

export function useTodos() {
    const [todos, setTodos] = useState([]);

    const add = (text) => {
        const newTodo = {id:crypto.randomUUID(), text, done:false};
        setTodos((prev) => createTodo(prev));
    };

    const edit = (id, text) => {
        
    }
}