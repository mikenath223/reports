import { groupDataByProjects } from "./groupData";

describe("group data", () => {
  it("groups projects", () => {
    const data = [
      {
        paymentId: "6149cf567833e57669e60455",
        amount: 2663.69,
        projectId: "ERdPQ",
        gatewayId: "i6ssp",
        userIds: ["rahej"],
        modified: "2021-09-20",
        created: "2021-04-11",
      },
      {
        paymentId: "6149cf56625a7464b7ec345a",
        amount: 327.72,
        projectId: "bgYhx",
        gatewayId: "GzFF8",
        userIds: ["rahej"],
        modified: "2021-04-17",
        created: "2021-04-21",
      },
    ];
    const selector = [
      {
        projectId: "bgYhx",
        name: "Project 1",
      },
      {
        projectId: "ERdPQ",
        name: "Project 2",
      },
    ];
    const response = {
      "Project 2": {
        data: [
          {
            paymentId: "6149cf567833e57669e60455",
            amount: 2663.69,
            projectId: "ERdPQ",
            gatewayId: "i6ssp",
            userIds: ["rahej"],
            modified: "2021-09-20",
            created: "2021-04-11",
          },
        ],
        total: 2663.69,
      },
      "Project 1": {
        data: [
          {
            paymentId: "6149cf56625a7464b7ec345a",
            amount: 327.72,
            projectId: "bgYhx",
            gatewayId: "GzFF8",
            userIds: ["rahej"],
            modified: "2021-04-17",
            created: "2021-04-21",
          },
        ],
        total: 327.72,
      },
    };

    const grouped = groupDataByProjects(data, selector);
    expect(grouped).toEqual(response);
  });
});
