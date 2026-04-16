export default async function AuthErrorPage({
  searchParams,
}: PageProps<"/auth/auth-code-error">) {
  const { error } = await searchParams;

  return (
    <>
      <p>Something went wrong</p>
      {error && typeof error === "string" && (
        <pre>
          {JSON.stringify(JSON.parse(decodeURIComponent(error)), null, 2)}
        </pre>
      )}
    </>
  );
}
