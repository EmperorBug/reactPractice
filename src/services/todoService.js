export function createTodo(todos, newTodo) {
    return [...todos, newTodo];
}

export function updateTodo(todos, idx, newText) {
    return todos.map((t) => 
        t.idx === idx ? {...t, text:newText} : t
    );
}

export function delTodo(todos, idx) {
    return todos.filter((t) => 
        t.idx !== idx
    );
}