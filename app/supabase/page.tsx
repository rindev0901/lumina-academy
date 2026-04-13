import { createClient } from "@/lib/supabase/server";

export default async function Page() {
  const supabase = await createClient();

  const { data: todos } = await supabase.from("todos").select();

  const user = await supabase.auth.getUser();

  return (
    <>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
}
