import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-full space-y-4">
      <h1 className="font-extrabold text-center text-transparent text-5xl md:text-8xl bg-clip-text text-gradient">
        Todo List
      </h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}
