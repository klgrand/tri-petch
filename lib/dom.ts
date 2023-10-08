export default (e: TouchEvent | React.TouchEvent<HTMLDivElement>) => ('changedTouches' in e ? e.changedTouches[0] : e);
