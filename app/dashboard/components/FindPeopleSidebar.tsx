"use client";

import React, { useState } from 'react';
import { 
  Search, 
  Briefcase, 
  Globe, 
  MapPin, 
  Users, 
  ChevronDown, 
  User, 
  Waypoints, 
  Eye, 
  ListPlus, 
  LucideIcon
} from 'lucide-react';

interface FilterItemProps {
  icon: LucideIcon;
  label: string;
  placeholder: string;
  onClick?: () => void;
}

// Reusable component for the collapsible filter items
const FilterItem: React.FC<FilterItemProps> = ({ icon: Icon, label, placeholder, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group flex items-start justify-between py-4 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
    >
      <div className="flex gap-3">
        {/* Icon Container */}
        <div className="mt-0.5 text-gray-900">
          <Icon size={18} strokeWidth={2.5} />
        </div>
        
        {/* Text Content */}
        <div className="flex flex-col">
          <span className="text-sm font-bold text-gray-900 leading-tight">
            {label}
          </span>
          <span className="text-sm text-gray-500 mt-1">
            {placeholder}
          </span>
        </div>
      </div>

      {/* Chevron */}
      <ChevronDown 
        size={18} 
        className="text-gray-400 group-hover:text-gray-600 transition-transform duration-200" 
      />
    </div>
  );
};

export default function FindPeopleSidebar() {
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <>
      <div 
        className="bg-white rounded-2xl flex flex-col w-[319px] shadow-xl overflow-hidden absolute"
        style={{ height: '668px', top: '32px', left: '32.5px' }}
      >
        
        {/* --- HEADER --- */}
        <div className="flex items-center justify-between px-6 py-5">
          <h1 className="text-xl font-extrabold text-gray-900">Find People</h1>
          
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-semibold text-gray-700 transition-colors">
            Saved Search
            <ChevronDown size={14} strokeWidth={3} />
          </button>
        </div>

        {/* --- SCROLLABLE CONTENT --- */}
        <div className="flex-1 overflow-y-auto px-6 pb-4 custom-scrollbar">
          
          {/* People Keyword Section */}
          <div className="py-4 border-b border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <User size={18} strokeWidth={2.5} className="text-gray-900" />
              <span className="text-sm font-bold text-gray-900">People Keyword</span>
            </div>
            
            <div className="relative">
              <Search 
                className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" 
                size={18} 
              />
              <input
                type="text"
                placeholder="Enter single keyword here..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="w-full pl-7 py-2 text-sm text-gray-900 placeholder-gray-400 bg-transparent border-b border-gray-300 focus:border-black focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Filter Items List */}
          <div className="flex flex-col">
            <FilterItem 
              icon={Briefcase} 
              label="Job Title" 
              placeholder="E.g: Manager, Software Engineer" 
            />
            
            <FilterItem 
              icon={Globe} 
              label="Company Website" 
              placeholder="E.g: Google.com, LinkedIn.com" 
            />
            
            <FilterItem 
              icon={MapPin} 
              label="Person Location" 
              placeholder="E.g: London, Great New York City" 
            />
            
            <FilterItem 
              icon={MapPin} 
              label="Company Location" 
              placeholder="E.g: United States, UAE" 
            />
            
            <FilterItem 
              icon={Users} 
              label="Company Headcount" 
              placeholder="E.g: 11-15, 10000+" 
            />
            
            <FilterItem 
              icon={Waypoints} 
              label="Management Level" 
              placeholder="E.g: Owner, Founder" 
            />
          </div>
        </div>

        {/* --- FOOTER --- */}
        <div className="p-6 border-t border-gray-100 bg-white">
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold rounded-xl transition-colors">
              <ListPlus size={18} />
              Save Search
            </button>
            
            <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-[#111827] hover:bg-black text-white text-sm font-semibold rounded-xl shadow-lg shadow-gray-200 transition-all hover:shadow-gray-300">
              <Eye size={18} />
              Preview Result
            </button>
          </div>
        </div>

      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #e5e7eb;
          border-radius: 20px;
        }
      `}</style>
    </>
  );
}