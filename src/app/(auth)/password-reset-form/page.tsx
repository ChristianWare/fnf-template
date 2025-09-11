import PasswordResetFormClient from "@/components/auth/PasswordResetFormClient/PasswordResetFormClient";

type PageProps = {
  searchParams?: { token?: string };
};

export default function PasswordResetFormPage({ searchParams }: PageProps) {
  const token =
    typeof searchParams?.token === "string" ? searchParams.token : undefined;

  return (
    <div>
      <PasswordResetFormClient token={token} />
    </div>
  );
}
