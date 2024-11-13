import UserCard from "@/components/custom/cards/user-card";
import PageHeader from "@/components/custom/dashboard/page-header";

export default function Home() {
  return (
    <div className="space-y-8">
      <PageHeader header="Smart Campus - Thapar" />
      <UserCard />
    </div>
  );
}
