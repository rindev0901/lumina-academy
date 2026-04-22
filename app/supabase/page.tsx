import { Suspense } from "react";
import User from "./user";
import { Form } from "./form";
import Link from "next/link";
import StudentsSuspense from "./students-suspense";

export default async function Page() {
  return (
    <div className="container mx-auto">
      <Link href={"/"}>Back to home</Link>
      <Form />
      <Suspense fallback="Students loading...">
        <StudentsSuspense />
      </Suspense>
      <Suspense fallback="User loading...">
        <User />
      </Suspense>
    </div>
  );
}
