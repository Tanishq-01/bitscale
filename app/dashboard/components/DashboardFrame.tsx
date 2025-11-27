import React from 'react';
import WelcomeHeader from './WelcomeHeader';
import ActionButtons from './ActionButtons';
import LatestFromBitscale from './LatestFromBitscale';
import ProductDemoCard from './ProductDemoCard';

interface DashboardFrameProps {
  onFindPeopleClick: () => void;
}

export default function DashboardFrame({ onFindPeopleClick }: DashboardFrameProps) {
  return (
    <div className="flex flex-col mb-6">
      <div className="h-[52px] flex items-center justify-between">
        <WelcomeHeader />
        <ActionButtons onFindPeopleClick={onFindPeopleClick} />
      </div>
      <div className="h-[170px] flex gap-6 mt-4">
        <LatestFromBitscale />
        <ProductDemoCard />
      </div>
    </div>
  );
}
