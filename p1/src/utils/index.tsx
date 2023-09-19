export const getYYYYMMDD = (date?: string) => {
  if (!date) return "";
  return date.split(" ")[0];
};
