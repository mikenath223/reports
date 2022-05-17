export const getPieChartValues = (data, grandTotal) => {
  const projects = Object.keys(data);
  const piedata = projects.reduce((a, c) => {
    a[c] = Math.round((data[c].total / grandTotal) * 100);
    return a;
  }, {});
  return piedata;
};
