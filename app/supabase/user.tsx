import { getUsers } from "@/lib/data";

const User = async () => {
  const user = await getUsers();
  return <pre>{JSON.stringify(user, null, 2)}</pre>;
};

export default User;
