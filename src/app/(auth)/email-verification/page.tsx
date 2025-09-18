// app/(auth)/email-verification/page.tsx
import EmailVerificationClient from "@/components/auth/EmailVerificationClient/EmailVerificationClient";

export default async function EmailVerificationPage({
  searchParams,
}: {
  searchParams?: Promise<{ token?: string }>;
}) {
  const sp = (await searchParams) ?? {};
  const token = typeof sp.token === "string" ? sp.token : undefined;

  return (
    <div>
      <EmailVerificationClient token={token} />
    </div>
  );
}
