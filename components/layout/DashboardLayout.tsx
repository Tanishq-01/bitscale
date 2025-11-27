"use client";

import Sidebar from "./Sidebar";
import Image from "next/image";
import { Button } from "../ui/button";
import { Avatar } from "../ui/avatar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />

      {/* Main Content */}
      <main className="ml-[224px] w-[calc(100vw-224px)] min-h-screen bg-gray-50">

        {/* Top Navbar */}
        <div className="flex items-center justify-end border-b bg-white px-6 h-14">
          <div className="flex items-center gap-4">
            <div className="text-gray-500 text-sm">
              450000/5500000
            </div>
            <Button className="bg-green-200 text-green-800 text-sm px-3 py-1 rounded-full">
              Booster Plan
            </Button>
            <Avatar initials = 'TA' imageAlt="User Avatar" />
          </div>
        </div>
        <div className="px-[21px] py-[21px] flex flex-col gap-6 h-[calc(100vh-56px)] overflow-y-auto w-full">{children}</div>
      </main>
    </div>
  );
}
