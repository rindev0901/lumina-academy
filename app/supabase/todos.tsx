import { getTodos } from "@/lib/data";

const Todos = async() => {
  const todos = await getTodos();
  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </ul>
  );
};

export default Todos;
