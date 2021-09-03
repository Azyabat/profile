import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { useCallback } from "react";
import todoListStore from "../../stores/todoListStore";
import { ITodoItemProps } from "./TodoItem.types";

export const TodoItem = (props: ITodoItemProps) => {
  const handleApply = useCallback(() => {
    todoListStore.completeTodo(props.id);
  }, [props.id]);

  const handleRemove = useCallback(() => {
    todoListStore.removeTodo(props.id);
  }, [props.id]);

  return (
    <Card
      className={`${
        props.status === "inProcess"
          ? "todo-list__process-card"
          : "todo-list__completed-card"
      }`}
    >
      <span className="caption">{props.text}</span>
      <div className="icons-container">
        <CloseCircleOutlined onClick={handleRemove} className="icon__remove" />
        {props.status === "inProcess" && (
          <CheckCircleOutlined
            onClick={handleApply}
            className="icon__complete"
          />
        )}
      </div>
    </Card>
  );
};
