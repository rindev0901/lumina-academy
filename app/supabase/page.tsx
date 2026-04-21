import { Suspense } from "react";
import User from "./user";
import { Form } from "./form";
import Link from "next/link";
import Students from "./students";

export default async function Page() {
  return (
    <div className="container mx-auto">
      <Link href={"/"}>Back to home</Link>
      <Form />
      <Suspense fallback="Students loading....">
        <Students />
      </Suspense>
      <Suspense fallback="User loading...">
        <User />
      </Suspense>
    </div>
  );
}
