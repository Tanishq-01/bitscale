"use client";

import React from 'react';
import Image from 'next/image';
import { FileCheck } from 'lucide-react';

export default function ProductDemoCard() {
  return (
    <div className="bg-[#E7F3F8] rounded-lg p-6 shadow-sm flex-1">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-gray-100 p-3 rounded-md">
          <Image src="/window.svg" alt="window icon" width={24} height={24} />
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
        <div className="flex items-center gap-2">
          <FileCheck className="h-4 w-4 text-blue-600" />
          Create your data list
        </div>
        <div className="flex items-center gap-2">
          <FileCheck className="h-4 w-4 text-blue-600" />
          Learn about BitAgent
        </div>
        <div className="flex items-center gap-2">
          <FileCheck className="h-4 w-4 text-blue-600" />
          Connect an integration
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" className="form-checkbox h-4 w-4 rounded text-blue-600 border-gray-300 focus:ring-blue-500" />
          Customise waterfall providers
        </div>
      </div>
    </div>
  );
}
