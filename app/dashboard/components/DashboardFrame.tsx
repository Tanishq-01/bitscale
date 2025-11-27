import React from 'react';
import WelcomeHeader from './WelcomeHeader';
import ActionButtons from './ActionButtons';
import LatestFromBitscale from './LatestFromBitscale';
import ProductDemoCard from './ProductDemoCard';

export default function DashboardFrame() {
  return (
    <div className="flex flex-col mb-6">
      <div className="flex items-start justify-between w-full">
        <div className="w-[606px]">
          <WelcomeHeader />
        </div>

        <ActionButtons />
      </div>
      <div className="flex gap-6 mt-4">
        <LatestFromBitscale />
        <ProductDemoCard />
      </div>
    </div>
  );
}
