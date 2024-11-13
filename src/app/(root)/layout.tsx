import Sidebar, {
  MobileSidebar,
  SidebarItem,
} from "@/components/custom/sidebar";
import {
  CircleGauge,
  LibraryBig,
  Trash2,
  CircleParking,
  CloudFog,
  FireExtinguisher,
} from "lucide-react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar>
        <SidebarItem
          icon={<CircleGauge fontSize={20} />}
          text="Dashboard"
          alert
          href="/"
        />
        <SidebarItem
          icon={<LibraryBig fontSize={20} />}
          text="Library"
          href="/library"
        />
        <SidebarItem
          icon={<CircleParking fontSize={20} />}
          text="Parking"
          href="/parking"
        />
        <SidebarItem
          icon={<Trash2 fontSize={20} />}
          text="Garbage"
          href="/garbage"
        />
        <SidebarItem
          icon={<CloudFog fontSize={20} />}
          text="Weather"
          href="/weather"
        />
        <SidebarItem
          icon={<FireExtinguisher fontSize={20} />}
          text="Fire"
          href="/fire"
        />
      </Sidebar>

      <main className="m-4 flex-1 overflow-auto">{children}</main>
      <div className="absolute right-0 md:hidden">
        <MobileSidebar>
          <SidebarItem
            icon={<CircleGauge fontSize={20} />}
            text="Dashboard"
            alert
            href="/"
          />
          <SidebarItem
            icon={<LibraryBig fontSize={20} />}
            text="Library"
            href="/library"
          />
          <SidebarItem
            icon={<CircleParking fontSize={20} />}
            text="Parking"
            href="/parking"
          />
          <SidebarItem
            icon={<Trash2 fontSize={20} />}
            text="Garbage"
            href="/garbage"
          />
          <SidebarItem
            icon={<CloudFog fontSize={20} />}
            text="Weather"
            href="/weather"
          />
          <SidebarItem icon={<FireExtinguisher fontSize={20} />} text="Fire" />
        </MobileSidebar>
      </div>
    </div>
  );
}
