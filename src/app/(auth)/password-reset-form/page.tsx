// app/(auth)/password-reset-form/page.tsx
import PasswordResetFormClient from "@/components/auth/PasswordResetFormClient/PasswordResetFormClient";

export default async function PasswordResetFormPage({
  searchParams,
}: {
  searchParams?: Promise<{ token?: string }>;
}) {
  const sp = (await searchParams) ?? {};
  const token = typeof sp.token === "string" ? sp.token : undefined;

  return (
    <div>
      <PasswordResetFormClient token={token} />
    </div>
  );
}
