import React from 'react';
import { InfoBar } from '@/components/infobar';
import BillingSettings from '@/components/settings/billing-settings';
import DarkModeToggle from '@/components/settings/dark-mode';
import ChangePassword from '@/components/settings/change-password';
const page = () => {
  return (
    <>
      <InfoBar />
      <div className="overflow-y-auto w-full chat-window flex-1 h-0 flex flex-col gap-10">
        <BillingSettings />
        <DarkModeToggle />
        <ChangePassword />
      </div>
    </>
  );
};

export default page;
