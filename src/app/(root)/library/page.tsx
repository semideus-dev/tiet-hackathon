import InfoCard from "@/components/custom/cards/info-card";
import PageHeader from "@/components/custom/dashboard/page-header";
import RequestComponent from "@/components/custom/library/request";
import { BookMarked, CalendarArrowUp, IndianRupee } from "lucide-react";

export default function LibraryModule() {
  return (
    <div className="space-y-8">
      <PageHeader header="Library module" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <InfoCard
          title="Inventory"
          icon={<BookMarked />}
          info="40"
          desc="books available at the library"
        />
        <InfoCard
          title="Pending Requests"
          icon={<CalendarArrowUp />}
          info="9"
          desc="orders in queue"
        />
        <InfoCard
          title="Library Budget"
          icon={<IndianRupee />}
          info="₹1,50,000"
          desc="amount remaining"
        />
      </div>
      <RequestComponent />
    </div>
  );
}
