import React from 'react';
import { RowContentProps } from '@/types';
import TittleBullet from './TittleBullet';

function RowContent({
  title, description, bulletText, bulletTitleStyle = '', contentContainerStyle = '', bgColor = '', textDescriptionStyle = '', reverse, textBulletStyle = '',
}: RowContentProps) {
  return (
    <div className={`flex md:w-full w-screen justify-between ${reverse ? 'flex-row-reverse' : ''} ${bgColor}`} key={title}>
      <div className="sm:hidden md:block lg:basis-1/2 md:basis-4/12 sm:basis-0" />
      <div className={`lg:basis-1/2 md:basis-8/12 basis-full ${contentContainerStyle}`}>
        <div className="w-full sm:select-none md:select-auto">
          <div className="text__title-container">
            {bulletText && (
            <TittleBullet
              text={bulletText}
              underscoreStyles={bulletTitleStyle}
              textStyle={textBulletStyle}
            />
            )}
            <div className="text__title">
              {title}
            </div>
          </div>
          <div className="text__description-container">
            <div className={`text__description ${textDescriptionStyle}`}>
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RowContent;
