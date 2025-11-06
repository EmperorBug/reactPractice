import { useState } from 'react';
import styles from '../styles/input.module.css';

export default function InputArea({add}) {
    const [text, setText] = useState("");
    
    const handleAdd = () => {
        if (!text.trim()) return;
        add(text);
        setText(""); 
    };

    return (
        <div className={styles.inputGroup}>
            <input type="text" placeholder="할 일을 입력하세요" onChange={(e) => setText(e.target.value)}/>
            <button onClick={handleAdd}>추가</button>
        </div> 
    )
}