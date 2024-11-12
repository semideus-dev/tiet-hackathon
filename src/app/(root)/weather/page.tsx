import InfoCard from "@/components/custom/cards/info-card";
import PageHeader from "@/components/custom/dashboard/page-header";
import { Droplets, Sun, Thermometer, Wind } from "lucide-react";

export default function WeatherModule() {
  return (
    <div className="space-y-8">
      <PageHeader header="Weather Module" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <InfoCard
          title="Temperature"
          icon={<Thermometer />}
          info="28°C / 82.4°F"
          desc="Moderate"
        />
        <InfoCard title="Air Quality" icon={<Wind />} info="321" desc="Poor" />
        <InfoCard
          title="Humidity"
          icon={<Droplets />}
          info="60%"
          desc="chance of rain"
        />
        <InfoCard
          title="UV Index"
          icon={<Sun />}
          info="4"
          desc="Moderately High"
        />
      </div>
    </div>
  );
}
