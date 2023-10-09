export default (e: TouchEvent | MouseEvent | React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLElement>) => ('changedTouches' in e ? e.changedTouches[0] : e);
