import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import LoginPageIntro from "@/components/loginPage/LoginPageIntro/LoginPageIntro";
import Nav from "@/components/shared/Nav/Nav";
import FinalCTAMain from "@/components/shared/FinalCTAMain/FinalCTAMain";

export default async function LoginPage() {
  const session = await auth();
  if (session) redirect("/account");
  return (
    <main>
      <Nav />
      <LoginPageIntro />
      <FinalCTAMain />
    </main>
  );
}
