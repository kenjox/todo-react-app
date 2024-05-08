import { useContext } from "react";
import { TodoContext } from "./TodoContext";

export const useTodoContext = () => {
  const ctx = useContext(TodoContext);

  if (ctx == null) {
    throw Error("Something went wrong.Fix it");
  }

  return ctx;
};
