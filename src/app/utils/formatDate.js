export const formatDate = (date) => {
  if (!date) {
    return;
  }
  const [month, day, year] = new Date(date).toLocaleDateString().split("/");
  return [year, month, day].join("-");
};
