import { onGetAllBookingsForCurrentUser } from '@/actions/appointment';
import { currentUser } from '@clerk/nextjs';
import React from 'react';

type Props = {};

const Page = async (props: Props) => {
  const user = await currentUser();
  if (!user) return null;
  const domainBookings = await onGetAllBookingsForCurrentUser(user.id);
  const today = new Date();
  return <div>page</div>;
};

export default Page;
