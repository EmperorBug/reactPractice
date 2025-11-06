import { useState } from 'react';
import styles from '../styles/list.module.css';

export default function TodoList({todos, edit, del}) {
    const [isEditing, setIsEditing] = useState(null);
    const [editText, setEditText] = useState('');

    const editBtnClick = (todo) => {
        setIsEditing(todo.idx);
        setEditText(todo.text);
    }

    const handleDelete = (idx) => {
        if (window.confirm("本当に削除しますか")) {
            del(idx);
        }
    }
    
    const cancel = () => {
        setIsEditing(null);
    }

    const editClick = (todo) => {
        if (!editText.trim()) return;
        edit(todo.idx,editText);
        cancel()
    }
    return (
        <ul>
            {todos.map((t) => (
                <li key={t.idx}>
                    {isEditing == t.idx ? (
                        <>
                            <input type='text' value={editText} onChange={(e) => setEditText(e.target.value)}/>
                            <button onClick={cancel}>취소</button>
                            <button onClick={() =>editClick(t)}>저장</button>
                        </>
                    ) : (
                        <>
                            <span>{t.text}</span>
                            <button onClick={()=>handleDelete(t.idx)}>삭제</button>
                            <button onClick={()=>editBtnClick(t)}>수정</button>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
}