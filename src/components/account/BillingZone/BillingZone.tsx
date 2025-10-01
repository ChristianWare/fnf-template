// components/account/BillingZone/BillingZone.tsx
"use client";

import { useState } from "react";
import styles from "./BillingZone.module.css";

type Plan = "SOLO" | "TEAM" | "RENTAL_FLEET" | "MULTI_LOCATION" | "CUSTOM";

export default function BillingZone({
  currentPlan,
  hasActiveSub,
}: {
  currentPlan: Plan | null | undefined;
  hasActiveSub: boolean;
}) {
  const [plan, setPlan] = useState<Plan>(currentPlan ?? "SOLO");
  const actionUrl = `/account/actions`;

  return (
    <section className={styles.card}>
      <h2 className={styles.title}>Manage your subscription</h2>
      <p className={styles.note}>
        Update your plan or cancel renewal at period end. These actions
        immediately affect your Stripe subscription.
      </p>

      <div className={styles.grid}>
        <form
          method='POST'
          action={actionUrl}
          className={styles.block}
          onSubmit={(e) => {
            if (
              !window.confirm("Switch your plan in Stripe and the database?")
            ) {
              e.preventDefault();
            }
          }}
        >
          <input type='hidden' name='action' value='change_plan' />
          <label className={styles.label}>Change Plan</label>
          <select
            name='plan'
            className={styles.select}
            value={plan}
            onChange={(e) => setPlan(e.target.value as Plan)}
          >
            <option value='SOLO'>Solo</option>
            <option value='TEAM'>Team</option>
            <option value='RENTAL_FLEET'>Rental/Fleet</option>
            <option value='MULTI_LOCATION'>Multi-Location</option>
            <option value='CUSTOM'>Custom</option>
          </select>
          <button className={styles.btn} type='submit'>
            Update Plan
          </button>
          {/* <p className={styles.help}>
            Updates the active Stripe subscription’s price item and your DB row
            (no proration).
          </p> */}
        </form>

        {hasActiveSub ? (
          <form
            method='POST'
            action={actionUrl}
            className={styles.block}
            onSubmit={(e) => {
              if (!window.confirm("Cancel at period end in Stripe?")) {
                e.preventDefault();
              }
            }}
          >
            <input type='hidden' name='action' value='cancel_at_period_end' />
            <button className={styles.warnBtn} type='submit'>
              Cancel at period end
            </button>
            {/* <p className={styles.help}>
              Sets <code>cancel_at_period_end=true</code> in Stripe and updates
              your DB flag.
            </p> */}
          </form>
        ) : null}
      </div>
    </section>
  );
}
