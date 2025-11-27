"use client";

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search, List, ChevronDown, Star, Image as ImageIcon } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar'; // Import Avatar component
import { dummyGridData, GridItem } from '@/app/dashboard/data/data'; // Import from new data file

export default function GridsAndWorkbooksSection() {
  const [activeTab, setActiveTab] = useState('my-grids');

  const filteredData = activeTab === 'my-grids'
    ? dummyGridData
    : dummyGridData.filter(item => item.isStarred);

  return (
    <div className="bg-white rounded-lg p-6 shadow">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-4">
          <button
            className={`font-semibold pb-2 ${activeTab === 'my-grids' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('my-grids')}
          >
            My Grids
          </button>
          <button
            className={`font-semibold pb-2 ${activeTab === 'starred' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('starred')}
          >
            Starred
          </button>
        </div>

        <div
          className="flex items-center gap-[1px] bg-[#F3F4F6] w-[286px] h-[36px]
                    rounded-[8.5px] border border-gray-300
                    pt-[4px] pb-[4px] pl-[12px] pr-[12px]"
        >
          <Search className="h-4 w-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search grids and workbooks..."
            className="bg-transparent outline-none border-none text-sm text-gray-700 w-full pl-2"
          />

          <button className="p-2 rounded-md hover:bg-gray-100">
            <List className="h-5 w-5 text-gray-600" />
          </button>
        </div>


      </div>

      {/* Grid/Table Placeholder */}
      <div className="border rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Edited by</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last edited</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((item) => (
              <tr key={item.id} className="h-10">
                <td className="px-6 py-2 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                    <Star className={`h-4 w-4 cursor-pointer ${item.isStarred ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`} />
                    <ImageIcon className="h-4 w-4 text-gray-400" /> {/* Random icon placeholder */}
                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                  </div>
                </td>
                <td className="px-6 py-2 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <Avatar initials={item.editedBy.split(' ').map(n => n[0]).join('')} imageAlt={item.editedBy} variant="small" />
                    <div className="text-sm text-gray-900">{item.editedBy}</div>
                  </div>
                </td>
                <td className="px-6 py-2 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{item.lastEdited}</div>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-gray-600 hover:text-gray-900">...</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
