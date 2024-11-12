"use client";

import Link from "next/link";
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import React, {
  useContext,
  createContext,
  useState,
  ReactNode,
  ReactElement,
} from "react";

// Sidebar context type
interface SidebarContextType {
  expanded: boolean;
}

// Sidebar props type
interface SidebarProps {
  children: ReactNode;
}

// SidebarItem props type
interface SidebarItemProps {
  icon: ReactElement;
  text: string;
  href?: string;
  active?: boolean;
  alert?: boolean;
}

// Create SidebarContext with default value
const SidebarContext = createContext<SidebarContextType>({ expanded: true });

export default function Sidebar({ children }: SidebarProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen">
      <nav className="flex h-full flex-col border-r bg-white shadow-sm">
        <div className="flex items-center justify-between p-4 pb-2">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}
            alt="Company Logo"
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="rounded-lg bg-gray-50 p-1.5 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="mt-4 flex-1 space-y-8 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="flex border-t p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt="User Avatar"
            className="h-10 w-10 rounded-md"
          />
          <div
            className={`flex items-center justify-between overflow-hidden transition-all ${expanded ? "ml-3 w-52" : "w-0"}`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({
  icon,
  text,
  href = "#",
  active = false,
  alert = false,
}: SidebarItemProps) {
  const { expanded } = useContext(SidebarContext);

  return (
    <Link href={href} className="flex">
      <li
        className={`group relative my-1 flex cursor-pointer items-center rounded-md px-3 py-2 font-medium transition-colors ${
          active
            ? "bg-gradient-to-tr from-purple-200 to-purple-100 text-primary"
            : "text-gray-600 hover:bg-purple-50"
        }`}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${expanded ? "ml-3 w-52" : "w-0"}`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 h-2 w-2 rounded bg-primary ${expanded ? "" : "top-2"}`}
          />
        )}
        {!expanded && (
          <div
            className={`invisible absolute left-full ml-6 -translate-x-3 rounded-md bg-purple-100 px-2 py-1 text-sm text-primary opacity-20 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100`}
          >
            {text}
          </div>
        )}
      </li>
    </Link>
  );
}
