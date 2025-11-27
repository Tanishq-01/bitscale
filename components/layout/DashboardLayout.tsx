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
          <div
            className="flex items-center justify-between rounded-lg px-2" // 8px horizontal padding = px-2
            style={{
              background: "#EDF3EC",
              width: "259.16px",
              height: "34px",
            }}
          >
            {/* Coins + numbers */}
            <div className="flex items-center text-gray-700 text-sm font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-1 text-yellow-600"
              >
                <path d="M12 1C6.48 1 2 3.24 2 6v12c0 2.76 4.48 5 10 5s10-2.24 10-5V6c0-2.76-4.48-5-10-5zm8 14c0 1.65-3.58 3-8 3s-8-1.35-8-3v-2.09C5.69 13.6 8.67 14 12 14s6.31-.4 8-1.09V15zm0-4c0 1.65-3.58 3-8 3s-8-1.35-8-3V8.91C5.69 9.6 8.67 10 12 10s6.31-.4 8-1.09V11zm-8-3C6.42 8 3 6.65 3 5s3.42-3 9-3 9 1.35 9 3-3.42 3-9 3z"/>
              </svg>
              450000 / 5500000
            </div>

            {/* Booster Plan pill */}
            <div
            className="px-3 py-1 text-white font-semibold rounded-full"
            style={{
              background: "#438361",
              height: "60%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "80px", // ensures pill doesn't shrink too much
            }}
          >
            <span className="text-xs">Booster Plan</span> 
          </div>

          </div>


            <Avatar initials = 'TA' imageAlt="User Avatar" />
          </div>
        </div>
        <div className="px-[21px] py-[21px] flex flex-col gap-6 h-[calc(100vh-56px)] overflow-y-auto w-full">{children}</div>
      </main>
    </div>
  );
}
