export type TTodoStatus = "completed" | "inProcess";

export interface ITodoItemProps {
  id: string;
  text: string;
  status?: TTodoStatus;
}
