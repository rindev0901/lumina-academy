import { getStudents } from "@/lib/data";

const Students = async () => {
  const students = await getStudents();
  return (
    <ul>
      {students?.map(({ node: { id, full_name } }) => (
        <li key={id}>{full_name}</li>
      ))}
    </ul>
  );
};

export default Students;
