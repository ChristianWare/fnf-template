import { redirect } from "next/navigation";
import { auth } from "../../../../../auth";
import { UsersTable } from "@/components/admin/UsersTable/UsersTable";

export const runtime = "nodejs";

export default async function UsersIndex() {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") redirect("/login");

  // You can reuse UsersTable and pass a prop to show more, or create a separate component.
  return (
    <main>
      {/* For brevity, reuse existing table. Swap data getter inside if you add a prop. */}
      <UsersTable />
    </main>
  );
}
