import { cookies } from "next/headers";
import { PortfolioShell } from "@/components/layout/PortfolioShell";

export default async function Home() {
  const cookieStore = await cookies();
  const introSeen = cookieStore.get("portfolio_intro_seen")?.value === "true";

  return <PortfolioShell shouldShowIntro={!introSeen} />;
}
