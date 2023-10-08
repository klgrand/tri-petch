import React from 'react';
import { RowHeaderProps } from '@/types';

function RowHeader({
  header, contentContainerStyle = '', headerContainerStyle = '', reverse,
}: RowHeaderProps) {
  return (
    <div className={`flex md:w-full sm:w-screen justify-between md:flex sm:block ${reverse ? 'flex-row-reverse' : ''}`} key={header}>
      <div className="sm:hidden md:block lg:basis-1/2 md:basis-4/12 sm:basis-0" />
      <div className={`lg:basis-1/2 md:basis-8/12 basis-full ${contentContainerStyle}`}>
        <div className={headerContainerStyle}>
          <div className="text__header md:min-w-[457px]">
            {header}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RowHeader;
