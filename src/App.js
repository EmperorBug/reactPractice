import Title from './components/title';
import InputArea from './components/input';
import TodoList from './components/todoList';
import { useTodos } from './hooks/todos';
import './App.css';

function App() {
  const {todos, add, edit, del} = useTodos();
  return (
    <div className="container">
      <Title title='TODO LIST'/>
      <InputArea add={add}/>
      <TodoList todos={todos} edit={edit} del={del}/>
    </div>
  );
}

export default App;
