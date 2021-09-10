import { Input } from "antd";
import { observer } from "mobx-react-lite";
import { useCallback } from "react";
import TodoListStore from "../../stores/todoListStore";
import { TodoItem } from "../TodoItem/TodoItem";

const TodoList = observer(() => {
  const { Search } = Input;

  const handleAdd = useCallback((value: string) => {
    TodoListStore.addTodo({
      id: getItemId(),
      text: value,
      status: "inProcess",
    });
  }, []);

  const getItemId = () => {
    return `inProcess_${TodoListStore.length + 1}`;
  };

  const renderProcessList = () => {
    const filteredTodoList = TodoListStore.todos.filter(
      (value) => value.status === "inProcess"
    );
    const result = filteredTodoList.map((todo) => (
      <TodoItem
        id={todo.id}
        key={todo.id}
        text={todo.text}
        status={todo.status}
      />
    ));

    return result;
  };

  const renderCompleteList = () => {
    const filteredTodoList = TodoListStore.todos.filter(
      (value) => value.status === "completed"
    );
    const result = filteredTodoList.map((todo) => (
      <TodoItem
        id={todo.id}
        key={todo.id}
        text={todo.text}
        status={todo.status}
      />
    ));

    return result;
  };

  return (
    <div key="wrapper-lists">
      <Search
        placeholder="Задание"
        enterButton="Добавить"
        size="large"
        className="search-field"
        onSearch={handleAdd}
      />
      <div className="todo-list" key="container-lists">
        <div className="container-list" key="container-process-list">
          <h3>В процессе</h3>
          {renderProcessList()}
        </div>
        <div className="container-list" key="container-complete-list">
          <h3>Готовые</h3>
          {renderCompleteList()}
        </div>
      </div>
    </div>
  );
});

export default TodoList;
