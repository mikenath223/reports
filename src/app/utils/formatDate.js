export const formatDate = (date) => {
  if (!date) {
    return;
  }
  const [month, day, year] = new Date(date).toLocaleDateString().split("/");
  return [day, month, year].join(".");
};
