"use client";

import {
  Home,
  Bookmark,
  Settings,
  Grid3X3,
  Plug,
  FileText,
  ChevronDown,
  HelpCircle,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-[224px] border-r border-gray-200 bg-white px-4 py-5 flex flex-col">
      {/* Bitscale Logo */}
      <div className="mb-6 px-3">
        <Image
          src="/images/bitscale-logo.png"
          alt="Bitscale Logo"
          width={100}
          height={30}
        />
      </div>

      {/* GTM Spaces */}
      <div className="flex items-center justify-between mb-6 border-b pb-4 px-3">
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          <Image
            src="/images/user-1.png"
            alt="User 1"
            width={32}
            height={32}
            className="rounded-full border-2 border-white"
          />
          <Image
            src="/images/user-2.png"
            alt="User 2"
            width={32}
            height={32}
            className="rounded-full border-2 border-white"
          />
        </div>

        <div>
          <p className="text-sm font-normal text-black">GTM Spaces</p>
        </div>
      </div>

        <ChevronDown className="h-4 w-4 text-gray-500" />
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-1 text-sm font-medium flex-grow">
        <SidebarItem href="#" label="Home" />
        <SidebarItem
          href="#"
          icon={Grid3X3}
          label="My Dashboard"
          active
        />

        <SidebarItem href="#" icon={Bookmark} label="Playbooks" />
        <SidebarItem href="#" icon={Plug} label="Integrations" />

        <SidebarSection title="Other" />
        <SidebarItem
          href="#"
          icon={FileText}
          label="Documentation"
        />
        <SidebarItem href="#" icon={Settings} label="Settings" />
      </nav>

      {/* Footer */}
      <div className="mt-auto pt-6 border-t px-3">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/bitscale-logo.png"
              alt="Bitscale Logo"
              width={80}
              height={24}
            />
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <HelpCircle className="h-4 w-4" />
          <span>Get Support at Bitscale</span>
        </div>
      </div>
    </aside>
  );
}

/* ------------------------ Subcomponents ------------------------ */

function SidebarItem({
  href,
  icon: Icon,
  label,
  active = false,
}: {
  href: string;
  icon?: LucideIcon;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100",
        active && "bg-gray-100 font-semibold text-black"
      )}
    >
      {Icon && <Icon className="h-5 w-5" />}
      {label}
    </Link>
  );
}

function SidebarSection({ title }: { title: string }) {
  return <p className="mt-4 mb-1 px-3 text-xs font-medium text-gray-500">{title}</p>;
}
