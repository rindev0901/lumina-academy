import { getStudents } from "@/lib/data";

const Students = async() => {
  const students = await getStudents();
  return (
    <ul>
      {students?.map((stu) => (
        <li key={stu.id}>{stu.full_name}</li>
      ))}
    </ul>
  );
};

export default Students;
