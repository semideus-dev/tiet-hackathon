"use client";

import Link from "next/link";
import {
  MoreVertical,
  ChevronLast,
  ChevronFirst,
  AlignJustify,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
  const [expanded, setExpanded] = useState(false);

  return (
    <aside className="h-screen">
      <nav className="hidden h-full flex-col border-r bg-white shadow-sm md:flex">
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
            <AlignJustify />
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="mt-4 flex-1 space-y-8 px-3">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

export function MobileSidebar({ children }: SidebarProps) {
  return (
    <Sheet>
      <SheetTrigger className="mr-2 mt-4 h-fit rounded-lg bg-muted p-1">
        <AlignJustify />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="font-light uppercase tracking-wide">
            Navigation
          </SheetTitle>
          {children}
        </SheetHeader>
      </SheetContent>
    </Sheet>
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
