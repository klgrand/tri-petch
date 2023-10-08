import React from 'react';
import { TittleBulletProps } from '@/types';

function TittleBullet({ text, underscoreStyles = '', textStyle = '' }: TittleBulletProps) {
  return (
    <div className="text__bullet-container">
      <div className={`text__bullet ${textStyle}`}>
        {text}
      </div>
      <div className={`underscore-line border-radis rounded-[2.5px] bg-primary-purple ${underscoreStyles}`} />
    </div>
  );
}

export default TittleBullet;
