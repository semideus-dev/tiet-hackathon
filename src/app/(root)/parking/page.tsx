import ParkingCard from "@/components/custom/cards/parking-card";
import PageHeader from "@/components/custom/dashboard/page-header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
export default function ParkingModule() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <PageHeader header="Parking Module" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Parking</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-semibold capitalize">
          Main Parking Area (4 Wheeler)
        </h1>
        <div className="grid grid-cols-2 gap-4 rounded-lg border p-4 md:grid-cols-4">
          <ParkingCard name="A1" status="available" />
          <ParkingCard name="A2" status="occupied" />
          <ParkingCard name="A3" status="occupied" />
          <ParkingCard name="A4" status="available" />
          <ParkingCard name="A5" status="available" />
          <ParkingCard name="A6" status="available" />
          <ParkingCard name="A7" status="occupied" />
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-semibold capitalize">
          Main Parking Area (2 Wheeler)
        </h1>
        <div className="grid grid-cols-2 gap-4 rounded-lg border p-4 md:grid-cols-4">
          <ParkingCard name="A1" status="available" />
          <ParkingCard name="A2" status="occupied" />
          <ParkingCard name="A3" status="occupied" />
          <ParkingCard name="A4" status="available" />
          <ParkingCard name="A5" status="available" />
          <ParkingCard name="A6" status="available" />
          <ParkingCard name="A7" status="occupied" />
        </div>
      </div>
    </div>
  );
}
