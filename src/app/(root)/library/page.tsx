import InfoCard from "@/components/custom/cards/info-card";
import PageHeader from "@/components/custom/dashboard/page-header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import RequestComponent from "@/components/custom/library/request";
import { BookMarked, CalendarArrowUp, IndianRupee } from "lucide-react";

export default function LibraryModule() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <PageHeader header="Library Module" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Library</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <InfoCard
          title="Inventory"
          icon={<BookMarked />}
          info="40"
          desc="books available at the library"
          href="/library/inventory"
        />
        <InfoCard
          title="Pending Requests"
          icon={<CalendarArrowUp />}
          info="9"
          desc="orders in queue"
          href="/library/pending-requests"
        />
        <InfoCard
          title="Library Budget"
          icon={<IndianRupee />}
          info="₹1,50,000"
          desc="amount remaining"
          href="#"
        />
      </div>
      <RequestComponent />
    </div>
  );
}
