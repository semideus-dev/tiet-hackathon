import InfoCard from "@/components/custom/cards/info-card";
import PageHeader from "@/components/custom/dashboard/page-header";
import ReportComponent from "@/components/custom/garbage/report";
import { Hammer, SprayCan, Trash2 } from "lucide-react";

export default function GarbageModule() {
  return (
    <div className="space-y-8">
      <PageHeader header="Garbage Module" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <InfoCard
          title="Total Waste Collected"
          icon={<Trash2 />}
          info="250"
          desc="kilograms of waste collected"
        />
        <InfoCard
          title="Overflow Alerts"
          icon={<SprayCan />}
          info="4/58"
          desc="bins are full"
        />
        <InfoCard
          title="Bin Status"
          icon={<Hammer />}
          info="11/58"
          desc="bins require maintainance"
        />
      </div>
      <ReportComponent />
    </div>
  );
}
