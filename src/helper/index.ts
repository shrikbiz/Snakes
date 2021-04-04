export const Fraction = (start: number, end: number, scrollVariable): number =>
    (scrollVariable >= start ? (scrollVariable < end ? scrollVariable - start : end - start) : 0) / (end - start);

export const RandomFoodId = (limit: number): string =>
    `cell-${1 + Math.floor(Math.random() * limit)}-${1 + Math.floor(Math.random() * limit)}`;
