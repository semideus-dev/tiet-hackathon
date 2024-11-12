import ReportBinStatusForm from "@/components/custom/forms/report-bin-status-form";

export default function ReportComponent() {
  return (
    <div className="flex flex-col space-y-2">
      <h1 className="text-3xl font-medium capitalize">Report Bin Status</h1>
      <span className="text-sm tracking-tight text-muted-foreground"></span>
      <ReportBinStatusForm />
    </div>
  );
}
