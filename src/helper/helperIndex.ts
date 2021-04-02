export const Fraction = (start: number, end: number, scrollVariable): number =>
    (scrollVariable >= start ? (scrollVariable < end ? scrollVariable - start : end - start) : 0) / (end - start);
