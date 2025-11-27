import DashboardFrame from '@/app/dashboard/components/DashboardFrame';
import GridsAndWorkbooksSection from '@/app/dashboard/components/GridsAndWorkbooksSection';

export default function DashboardPage() {
  return (
    <div className="pt-[12px] pb-6 space-y-[21px]">
      <DashboardFrame />
      <GridsAndWorkbooksSection />
    </div>
  );
}