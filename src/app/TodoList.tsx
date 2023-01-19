import { use } from "react";
import TodoItem from "./TodoItem";

const getTodos = async () => {
  const todos = await fetch(
    "https://nextjs-mock-server-tan.vercel.app/api/todo/list"
  );

  return todos.json();
};

interface TodosT {
  todos: [{ id: string; name: string; isDone: boolean }] | [];
}
const TodoList = () => {
  const { todos }: TodosT = use(getTodos());

  if (todos.length === 0) {
    return (
      <div className="bg-[#201D47] text-center px-4 py-3 md:px-8 md:py-4 rounded-lg ">
        <h2 className="font-bold text-xl  text-transparent bg-clip-text text-gradient ">
          Currently, There is Nothing Todo
        </h2>
      </div>
    );
  }
  return (
    <ul className="bg-[#201D47] px-4 py-3 md:px-8 md:py-4 rounded-lg space-y-3">
      {todos?.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
