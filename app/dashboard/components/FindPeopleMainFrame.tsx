"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function FindPeopleMainFrame() {
  return (
    <div
      className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col gap-8"
      style={{
        width: '623px',
        height: '618px',
        marginLeft: '24px',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)'
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
        <p className="text-sm text-gray-700">Found <span className="font-semibold">0</span> companies. Click preview to view results</p>
        <Button variant="outline" className="flex items-center gap-2 text-blue-500 border-blue-500 hover:bg-blue-50">
          <Image src="/public/lock.svg" alt="lock icon" width={16} height={16} />
          Unlock 100,000 leads with Enterprise Plan
        </Button>
      </div>

      {/* Table Headers */}
      <div className="grid grid-cols-5 gap-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
        <div>Name</div>
        <div>Title</div>
        <div>Headline</div>
        <div>LinkedIn URL</div>
        <div>Company</div>
        {/* Add more headers if needed based on the table content */}
      </div>

      {/* Empty State Illustration */}
      <div className="flex-grow flex flex-col items-center justify-center text-center text-gray-500">
        <Image src="/public/file.svg" alt="Empty State Illustration" width={120} height={120} className="mb-4" /> {/* Placeholder image */}
        <p className="mb-2">Start your Company search, preview, and import companies for enrichment by applying any filter in the left panel.</p>
        <p className="mb-2">OR</p>
        <p>Import companies from saved Search.</p>
      </div>
    </div>
  );
}
