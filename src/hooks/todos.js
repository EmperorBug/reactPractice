import { useState } from "react";
import {createTodo,delTodo,updateTodo} from "../services/todoService"

export function useTodos() {
    const [todos, setTodos] = useState([]);

    const add = (text) => {
        const newTodo = {idx:crypto.randomUUID(), text, done:false};
        setTodos((prev) => createTodo(prev, newTodo));
    };

    const edit = (idx, text) => {
        setTodos((prev) => updateTodo(prev, idx, text));
    };

    const del = (idx) => {
        setTodos((prev) => delTodo(prev,idx));
    };

    return {todos, add, edit, del};
}