import React from 'react';
import { Lock, Search, X } from 'lucide-react';

export default function FindPeopleMainFrame() {
  return (
      <div 
        className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col overflow-hidden absolute"
        style={{
          width: '623px',
          height: '618px',
          top: '34px',
          left: '370.5px',
        }}
      >
        
        {/* --- TOP BAR (Badges & Close) --- */}
        <div className="flex justify-end px-4 pt-3 pb-1">
          <div className="flex items-center gap-3">
             {/* Quota Badge */}
            <div className="flex items-center gap-2 px-3 py-1 bg-[#FFF7ED] rounded-full border border-[#FFEDD5]">
              <Search size={14} className="text-[#C2410C]" />
              <span className="text-xs font-semibold text-[#C2410C]">8000/50000</span>
            </div>
            
          </div>
        </div>

        {/* --- HEADER CONTENT --- */}
        <div className="flex justify-between items-center px-6 pb-6 pt-1">
          <h2 className="text-gray-700 font-medium">
            Found 0 companies. Click preview to view results
          </h2>
          
          <button className="flex items-center gap-2 text-[#D97706] hover:text-[#B45309] transition-colors text-sm font-bold">
            <Lock size={16} />
            <span>Unlock 100,000 leads with Enterprise Plan*</span>
          </button>
        </div>

        {/* --- TABLE HEADERS --- */}
        <div className="bg-gray-50 border-y border-gray-100">
          <div className="grid grid-cols-7 gap-4 px-6 py-3">
            {['NAME', 'TITLE', 'HEADLINE', 'LINKEDIN URL', 'COMPANY', 'COMPANY URL', 'COMPANY...'].map((header, index) => (
              <div key={index} className="text-xs font-bold text-gray-500 tracking-wider uppercase">
                {header}
              </div>
            ))}
          </div>
        </div>

        {/* --- EMPTY STATE --- */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-white relative">
          
          {/* Illustration (Custom SVG to match style) */}
          <div className="mb-6 relative w-48 h-48">
             <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
               {/* Background Elements */}
               <rect x="40" y="40" width="120" height="140" fill="#F3F4F6" rx="4" />
               <rect x="50" y="50" width="100" height="120" fill="white" rx="2" />
               
               {/* Checklist Items */}
               <rect x="65" y="70" width="15" height="15" rx="2" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2"/>
               <path d="M68 76 L72 80 L77 73" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               <rect x="90" y="75" width="50" height="6" rx="3" fill="#E5E7EB" />
               
               <rect x="65" y="100" width="15" height="15" rx="2" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2"/>
               <path d="M68 106 L72 110 L77 103" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               <rect x="90" y="105" width="50" height="6" rx="3" fill="#E5E7EB" />

               <rect x="65" y="130" width="15" height="15" rx="2" fill="white" stroke="#D1D5DB" strokeWidth="2"/>
               <rect x="90" y="135" width="50" height="6" rx="3" fill="#E5E7EB" />
               
               {/* Character */}
               <circle cx="50" cy="100" r="15" fill="#1F2937" /> {/* Head */}
               <path d="M35 120 C 35 120, 65 120, 65 140 L 65 180 L 35 180 L 35 140 Z" fill="#1F2937" /> {/* Body */}
               <path d="M35 140 L 25 160" stroke="#1F2937" strokeWidth="4" strokeLinecap="round" /> {/* Arm Left */}
               <path d="M65 140 L 80 120" stroke="#1F2937" strokeWidth="4" strokeLinecap="round" /> {/* Arm Right holding pencil */}
               
               {/* Giant Pencil */}
               <path d="M80 120 L 85 90 L 90 120 Z" fill="#3B82F6" />
               <rect x="78" y="90" width="8" height="40" transform="rotate(-15 82 110)" fill="#60A5FA" />
             </svg>
          </div>

          <div className="max-w-md space-y-3">
            <p className="text-gray-500 text-sm leading-relaxed">
              Start your Company search, preview, and import companies for enrichment by applying any filter in the left panel.
            </p>
            <p className="text-gray-400 text-sm font-medium">
              OR
            </p>
            <p className="text-gray-500 text-sm">
              Import companies from saved Search.
            </p>
          </div>

        </div>

        {/* Bottom Loading Bar Simulator */}
        <div className="h-1.5 bg-gray-100 w-full mt-auto">
             <div className="h-full bg-gray-300 w-full rounded-r-full"></div>
        </div>
      </div>
  );
}