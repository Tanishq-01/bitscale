"use client";

import React from 'react';
import Image from 'next/image';
import { FileCheck, FileText } from 'lucide-react';

export default function ProductDemoCard() {
  return (
    <div className="bg-[#E7F3F8] rounded-lg p-6 shadow-sm flex-1">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-black p-3 rounded-full flex items-center justify-center">
          <FileText className="h-3 w-3 text-white" />
        </div>
        <div>
          <h2 className="font-semibold text-gray-900 text-xs">Complete product demo</h2>
          <p className="text-sm text-gray-500 text-xs">92% of users nailed BitScale after this walkthrough</p>
        </div>
      </div>
      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
        </div>
        <p className="text-right text-sm text-gray-500 mt-1 text-xs">75%</p>
      </div>
      <div className="grid grid-cols-2 gap-y-2 text-gray-700 text-xs">
        {/* Ticked items */}
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 flex items-center justify-center rounded-full bg-blue-600 text-white text-[10px]">
            ✓
          </div>
          Create your data list
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 flex items-center justify-center rounded-full bg-blue-600 text-white text-[10px]">
            ✓
          </div>
          Learn about BitAgent
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 flex items-center justify-center rounded-full bg-blue-600 text-white text-[10px]">
            ✓
          </div>
          Connect an integration
        </div>

        {/* Unticked item */}
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
          Customise waterfall providers
        </div>
      </div>


    </div>
  );
}
