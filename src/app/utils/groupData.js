export const groupDataByProjects = (data, selector) => {
  const groupedSelector = selector?.reduce((a, c) => {
    a[c?.projectId] = c;
    return a;
  }, {});

  const groupedData = data?.reduce((a, c) => {
    a[groupedSelector?.[c?.projectId]?.name] = {
      data: [...(a[groupedSelector?.[c?.projectId]?.name]?.data || []), c],
      total: (a[groupedSelector?.[c?.projectId]?.name]?.total || 0) + c?.amount,
    };
    return a;
  }, {});

  return groupedData;
};

export const groupDataByGateways = (data, selector) => {
  const groupedSelector = selector?.reduce((a, c) => {
    a[c?.gatewayId] = c;
    return a;
  }, {});

  const groupedData = data?.reduce((a, c) => {
    a[groupedSelector?.[c?.gatewayId]?.name] = {
      data: [...(a[groupedSelector?.[c?.gatewayId]?.name]?.data || []), c],
      total: (a[groupedSelector?.[c?.gatewayId]?.name]?.total || 0) + c?.amount,
    };
    return a;
  }, {});

  return groupedData;
};
