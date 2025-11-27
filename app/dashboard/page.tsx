"use client"; // If not already present due to useState for modal

import React, { useState } from 'react';
import DashboardFrame from '@/app/dashboard/components/DashboardFrame';
import GridsAndWorkbooksSection from '@/app/dashboard/components/GridsAndWorkbooksSection';
import FindPeopleModal from '@/app/dashboard/components/FindPeopleModal'; // Import the modal

export default function DashboardPage() {
  const [isFindPeopleModalOpen, setIsFindPeopleModalOpen] = useState(false);

  const openFindPeopleModal = () => setIsFindPeopleModalOpen(true);
  const closeFindPeopleModal = () => setIsFindPeopleModalOpen(false);

  return (
    <div className="pt-[12px] pb-6 space-y-[21px]">
      {/* You'll need to pass openFindPeopleModal to ActionButtons */}
      <DashboardFrame onFindPeopleClick={openFindPeopleModal} />
      <GridsAndWorkbooksSection />

      <FindPeopleModal isOpen={isFindPeopleModalOpen} onClose={closeFindPeopleModal} />
    </div>
  );
}