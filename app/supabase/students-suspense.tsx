import { PreloadQuery } from "@/lib/apollo-server";
import Students from "./students";
import { ProfilesQuery } from "./queries";
import { cookies } from "next/headers";
import { createClient } from "@/lib/supabase/server";

export default async function StudentsSuspense() {
  const cookieStore = await cookies();

  const supabase = await createClient({ cookieStore });

  const token =
    (await supabase.auth.getSession()).data.session?.access_token ?? "";

  return (
    <PreloadQuery
      query={ProfilesQuery}
      context={{
        headers: {
          apiKey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
          authorization: `Bearer ${token}`,
        },
      }}
    >
      <Students />
    </PreloadQuery>
  );
}
