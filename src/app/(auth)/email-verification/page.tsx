import EmailVerificationClient from "@/components/auth/EmailVerificationClient/EmailVerificationClient";

type PageProps = {
  searchParams?: { token?: string };
};

export default function EmailVerificationPage({ searchParams }: PageProps) {
  const token =
    typeof searchParams?.token === "string" ? searchParams.token : undefined;

  return (
    <div>
      <EmailVerificationClient token={token} />
    </div>
  );
}
