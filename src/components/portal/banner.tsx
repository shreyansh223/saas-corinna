import Image from 'next/image';
import React from 'react';

type Props = {};

const PortalBanner = (props: Props) => {
  return (
    <div className="w-full bg-muted flex justify-center py-5">
      P
      <Image
        src={'/images/logo.png'}
        alt="LOGO"
        sizes="100vw"
        style={{
          width: '100px',
          height: '100px',
        }}
        width={0}
        height={0}
      />
    </div>
  );
};

export default PortalBanner;
