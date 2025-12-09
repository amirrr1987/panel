export const isoToTimestamp = (iso: string | null | undefined): number => {
  if (!iso) return 0;
  const time = Date.parse(iso);
  return isNaN(time) ? 0 : time;
};
