import { message } from "antd";
import { action, computed, makeAutoObservable, observable, toJS } from "mobx";
import { TTodoStatus } from "../components/TodoItem/TodoItem.types";

interface IToDo {
  id: string;
  text: string;
  status: TTodoStatus;
}

class TodoListStore {
  @observable public todos: IToDo[] = [
    { id: "testingID", text: "hello", status: "inProcess" },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  @action
  addTodo(item: IToDo) {
    const isFound = this.todos.findIndex((todo) => todo.text === item.text);

    if (item.text.length <= 2) {
      message.error("Слишком короткое название задания");
      return;
    }

    if (isFound === -1) {
      this.todos.push(item);
    } else {
      message.error("Такое задание уже существует");
    }
  }

  @action
  removeTodo(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  @action
  completeTodo(id: string) {
    const foundedElement = this.todos.find((todo) => todo.id === id);
    const preparedElement = { ...foundedElement, status: "completed" } as IToDo;
    this.removeTodo(id);
    this.addTodo(preparedElement);
  }

  @computed
  get length() {
    return this.todos.length;
  }
}

export default new TodoListStore();
