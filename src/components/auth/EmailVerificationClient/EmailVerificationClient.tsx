"use client";

import styles from "./EmailVerificationClient.module.css";
import { useEffect, useState } from "react";
import { verifyEmail } from "../../../../actions/auth/email-verification";
import Alert from "@/components/shared/Alert/Alert";
import Button from "@/components/shared/Button/Button";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Image from "next/image";
import Yay from "../../../../public/images/yay.png";
import Angry from "../../../../public/images/angry.png";

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
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          {pending && <div>Verifying email...</div>}
          {/* {success && <Alert message={success} success />} */}
          {error && (
            <>
              <div className={styles.imgContainer}>
                <Image
                  src={Angry}
                  alt='angry face'
                  fill
                  className={styles.img}
                />
              </div>
              <Alert message={error} error />
            </>
          )}
          {success && (
            <>
              <div className={styles.imgContainer}>
                <Image src={Yay} alt='happy face' fill className={styles.img} />
              </div>
              <Alert message={success} success />
              <div className={styles.btnContainer}>
                <Button text='Login' btnType='black' href='/login' />
              </div>
            </>
          )}
        </div>
      </LayoutWrapper>
    </section>
  );
}
