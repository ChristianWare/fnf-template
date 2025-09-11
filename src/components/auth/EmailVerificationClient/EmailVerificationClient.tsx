"use client";

import { useEffect, useState } from "react";
import { verifyEmail } from "../../../../actions/auth/email-verification";
import Alert from "@/components/shared/Alert/Alert";
import Button from "@/components/shared/Button/Button";

type Props = { token?: string };

export default function EmailVerificationClient({ token }: Props) {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [pending, setPending] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      setPending(true);

      if (!token) {
        if (!isMounted) return;
        setError("Missing verification token");
        setPending(false);
        return;
      }

      try {
        const res = await verifyEmail(token);
        if (!isMounted) return;
        setSuccess(res?.success);
        setError(res?.error);
      } catch {
        if (!isMounted) return;
        setError(
          "Something went wrong verifying your email. Please try again."
        );
      } finally {
        if (isMounted) setPending(false);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [token]);

  return (
    <div>
      {pending && <div>Verifying email...</div>}
      {success && <Alert message={success} success />}
      {error && <Alert message={error} error />}
      {success && <Button text='Login' btnType='blue' href='/login' />}
    </div>
  );
}
