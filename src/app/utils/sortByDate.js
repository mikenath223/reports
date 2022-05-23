export const sortByDate = (reports) => {
  const data = reports?.data || reports;
  return [...data]?.sort(
    (item1, item2) => new Date(item2.created) - new Date(item1.created)
  );
};
