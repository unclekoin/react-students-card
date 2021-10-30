export const getAge = (year) => {
  return new Date(Date.now()).getFullYear() - Number(year);
}
