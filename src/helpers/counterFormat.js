export const countValueFormat = (value) => {
    if (value < 1000) return value;
    if (value >= 1000 && value < 1000000) return `${((value) / 1000).toFixed(1)}k`;
    if (value >= 1000000 && value < 1000000000) return `${((value) / 1000000).
        toFixed(1)}M`;
    if (value >= 1000000000 && value < 1000000000000) return `${((value) / 1000000000).toFixed(1)}B`;
    if (value >= 1000000000000) return `${((value) / 1000000000000).toFixed(1)}T`;
}