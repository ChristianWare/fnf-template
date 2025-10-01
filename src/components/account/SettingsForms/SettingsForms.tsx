// components/account/SettingsForms/SettingsForms.tsx
"use client";

// /* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import styles from "./SettingsForms.module.css";
import Modal from "@/components/shared/Modal/Modal";

export default function SettingsForms() {
  const [showName, setShowName] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showBilling, setShowBilling] = useState(false);

  return (
    <section className={styles.grid}>
      {/* Name */}
      <form
        method='POST'
        action='/account/settings/actions'
        className={styles.card}
        onSubmit={(e) => {
          if (!confirm("Update your display name?")) e.preventDefault();
        }}
      >
        <h3 className={styles.heading}>Display name</h3>
        <input type='hidden' name='action' value='update_name' />
        <label className={styles.label}>Name</label>
        <input className={styles.input} name='name' placeholder='Your name' />
        <button className={styles.primaryBtn} type='submit'>
          Save
        </button>
      </form>

      {/* Email */}
      <form
        method='POST'
        action='/account/settings/actions'
        className={styles.card}
        onSubmit={(e) => {
          if (!confirm("Change your login email? You may need to re-verify."))
            e.preventDefault();
        }}
      >
        <h3 className={styles.heading}>Email</h3>
        <input type='hidden' name='action' value='update_email' />
        <label className={styles.label}>Email</label>
        <input
          className={styles.input}
          type='email'
          name='email'
          placeholder='you@example.com'
        />
        <button className={styles.primaryBtn} type='submit'>
          Save
        </button>
      </form>

      {/* Password */}
      <form
        method='POST'
        action='/account/settings/actions'
        className={styles.card}
        onSubmit={(e) => {
          if (!confirm("Update your password? You will need to log in again."))
            e.preventDefault();
        }}
      >
        <h3 className={styles.heading}>Password</h3>
        <input type='hidden' name='action' value='change_password' />
        <label className={styles.label}>Current password</label>
        <input className={styles.input} type='password' name='current' />
        <label className={styles.label}>New password</label>
        <input className={styles.input} type='password' name='next' />
        <label className={styles.label}>Confirm new password</label>
        <input className={styles.input} type='password' name='confirm' />
        <button className={styles.warnBtn} type='submit'>
          Update Password
        </button>
      </form>

      {/* Billing card (Stripe portal) */}
      <form
        method='POST'
        action='/account/billing/portal'
        className={styles.card}
        onSubmit={(e) => {
          if (!confirm("Open Stripe Billing to update your payment method?"))
            e.preventDefault();
        }}
      >
        <h3 className={styles.heading}>Payment method</h3>
        <p className={styles.help}>
          Securely update your card on file through Stripe.
        </p>
        <input type='hidden' name='flow' value='payment_method_update' />
        <button className={styles.secondaryBtn} type='submit'>
          Manage payment method
        </button>
      </form>

      {/* Example of using your Modal component if you prefer modal UX */}
      <Modal isOpen={showBilling} onClose={() => setShowBilling(false)}>
        <div>Are you sure you want to open Stripe Billing?</div>
      </Modal>
    </section>
  );
}
