// src/emails/WelcomeEmail.tsx
export default function WelcomeEmail({ name }: { name?: string | null }) {
  return (
    <div
      style={{
        fontFamily:
          "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
      }}
    >
      <h2 style={{ margin: 0 }}>Welcome to Fonts & Footers 👋</h2>
      <p style={{ marginTop: 8 }}>
        {name ? `${name}, ` : ""}thanks for creating an account! You’re all set.
      </p>
      <p style={{ marginTop: 8 }}>
        From here you can manage your plan, billing, and settings anytime in
        your dashboard.
      </p>
      <p style={{ marginTop: 16 }}>— The Fonts & Footers team</p>
    </div>
  );
}
