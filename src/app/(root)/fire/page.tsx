import InfoCard from "@/components/custom/cards/info-card";
import PageHeader from "@/components/custom/dashboard/page-header";
import { Biohazard, CircleAlert, Flame } from "lucide-react";

export default function FireModule() {
  return (
    <div className="space-y-8">
      <PageHeader header="Fire Module" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <InfoCard
          title="Fire alarms"
          icon={<Flame />}
          info="72"
          desc="fire alarms active"
        />
        <InfoCard
          title="Hazards"
          icon={<Biohazard />}
          info="0"
          desc="detected in campus"
        />
        <InfoCard
          title="Past Reports"
          icon={<CircleAlert />}
          info="2"
          desc="reports this month"
        />
      </div>
    </div>
  );
}
