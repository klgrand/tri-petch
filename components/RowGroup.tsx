/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import React, { useState, useRef, useEffect } from 'react';
import { RowGroupProps } from '@/types';
import { getRefValue, useStateRef } from '@/lib/hooks';
import getTouchEventData from '@/lib/dom';
import RowContent from './RowContent';

const MIN_SWIPE_REQUIRED = 40;

function RowGroup({ rows }: RowGroupProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerWidthRef = useRef(0);
  const minOffsetXRef = useRef(0);
  const currentOffsetXRef = useRef(0);
  const startXRef = useRef(0);

  const [isSwiping, setIsSwiping] = useState(false);
  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);
  const [currentIdx, setCurrentIdx] = useState(0);

  const resizeHanlder = () => {
    if (getRefValue(offsetXRef) !== 0) {
      setCurrentIdx(0);
      setOffsetX(0);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHanlder);
    return () => {
      window.removeEventListener('resize', resizeHanlder);
    };
  }, []);

  const onTouchMove = (e: TouchEvent | MouseEvent) => {
    const currentX = getTouchEventData(e).clientX;
    const diff = getRefValue(startXRef) - currentX;
    let newOffsetX = getRefValue(currentOffsetXRef) - diff;

    const maxOffsetX = 0;
    const minOffsetX = getRefValue(minOffsetXRef);

    if (newOffsetX > maxOffsetX) {
      newOffsetX = 0;
    }

    if (newOffsetX < minOffsetX) {
      newOffsetX = minOffsetX;
    }

    setOffsetX(newOffsetX);
  };

  const onTouchEnd = () => {
    const containerWidth = getRefValue(containerWidthRef);
    const currentOffsetX = getRefValue(currentOffsetXRef);
    let newOffsetX = getRefValue(offsetXRef);

    const diff = currentOffsetX - newOffsetX;

    if (Math.abs(diff) > MIN_SWIPE_REQUIRED) {
      if (diff > 0) {
        newOffsetX = Math.floor(newOffsetX / containerWidth) * containerWidth;
      } else {
        newOffsetX = Math.ceil(newOffsetX / containerWidth) * containerWidth;
      }
    } else {
      newOffsetX = Math.round(newOffsetX / containerWidth) * containerWidth;
    }

    setIsSwiping(false);
    setOffsetX(newOffsetX);
    setCurrentIdx(Math.abs(newOffsetX / containerWidth));

    window.removeEventListener('touchmove', onTouchMove);
    window.removeEventListener('touchend', onTouchEnd);
    window.removeEventListener('mousemove', onTouchMove);
    window.removeEventListener('mouseup', onTouchEnd);
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLElement>) => {
    currentOffsetXRef.current = getRefValue(offsetXRef);
    startXRef.current = getTouchEventData(e).clientX;

    const containerEl = getRefValue(containerRef);
    const containerWidth = containerEl.offsetWidth;

    containerWidthRef.current = containerWidth;
    minOffsetXRef.current = containerWidth - containerEl.scrollWidth;

    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('mousemove', onTouchMove);
    window.addEventListener('mouseup', onTouchEnd);
  };

  const indicatorOnClick = (idx: number) => {
    const containerEl = getRefValue(containerRef);
    const containerWidth = containerEl.offsetWidth;

    setCurrentIdx(idx);
    setOffsetX(-(containerWidth * idx));
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="swiper" onTouchStart={onTouchStart} onMouseDown={onTouchStart}>
      <div className="swiper-container" ref={containerRef}>
        {
          rows?.map((row) => (
            <div
              className={`swiper-item ${isSwiping ? 'transition-none' : ''}`}
              key={`${row.title}`}
              draggable={false}
              style={{ transform: `translate3d(${offsetX}px , 0 , 0)` }}
            >
              <RowContent
                title={row.title}
                description={row.description}
                bgColor={row.bgColor}
                reverse={row.reverse}
                bulletText={row.bulletText}
                textBulletStyle={row.textBulletStyle}
                bulletTitleStyle={row.bulletTitleStyle}
                contentContainerStyle={row.contentContainerStyle}
                textDescriptionStyle={row.textDescriptionStyle}
              />
            </div>
          ))
        }
      </div>
      <div className="indicators">
        <div className="indicator-container">
          {
            rows.map((_, idx) => (
              // eslint-disable-next-line max-len
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
              <div
                key={`${_.title}`}
                className={`indicator ${idx === currentIdx ? 'indicator_active' : ''}`}
                onClick={() => indicatorOnClick(idx)}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default RowGroup;
