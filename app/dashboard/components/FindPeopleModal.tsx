"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react'; // For the close button
import FindPeopleSidebar from './FindPeopleSidebar';
import FindPeopleMainFrame from './FindPeopleMainFrame';

interface FindPeopleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FindPeopleModal({ isOpen, onClose }: FindPeopleModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 transition-opacity duration-300" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} onClick={onClose}> {/* Add onClick here to close if clicked outside */}
      <div
        className="relative bg-white rounded-xl shadow-lg flex" onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        style={{
          width: '1050px',
          height: '718px',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 z-10"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>

        {/* Content Area */}
        <div className="relative w-full h-full">
          <FindPeopleSidebar />
          <FindPeopleMainFrame />
        </div>
      </div>
    </div>
  );
}
