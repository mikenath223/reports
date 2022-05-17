import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {
  getData,
  requestGateways,
  requestProjects,
  requestReports,
  requestUsers,
} from "./request";

describe("request", () => {
  it("gets /users", async () => {
    const mock = new MockAdapter(axios);
    const mockSuccessResponse = {
      code: "200",
      data: [
        { firstName: "John", lastName: "Doe", email: "john.doe@email.com" },
      ],
      error: null,
    };
    mock
      .onGet("http://178.63.13.157:8090/mock-api/api/users")
      .reply(200, mockSuccessResponse);
    const response = await requestUsers();
    expect(response).toEqual(mockSuccessResponse);
  });

  it("gets /projects", async () => {
    const mock = new MockAdapter(axios);
    const mockSuccessResponse = {
      code: "200",
      data: [
        {
          projectId: "bgYhx",
          userIds: ["rahej"],
          rule: "Manual Selection",
          gatewayIds: ["gDJ2s"],
          structure: "Sole proprietorship",
          industry: "IT",
          website: "https://mvpmatch.co/",
          description:
            "Sit amet luctus venenatis lectus magna fringilla urna porttitor.",
          image: "https://mvpmatch.co/images/logo.svg",
          name: "Project 1",
        },
      ],
      error: null,
    };
    mock
      .onGet("http://178.63.13.157:8090/mock-api/api/projects")
      .reply(200, mockSuccessResponse);
    const response = await requestProjects();
    expect(response).toEqual(mockSuccessResponse);
  });

  it("gets /gateways", async () => {
    const mock = new MockAdapter(axios);
    const mockSuccessResponse = {
      code: "200",
      data: [
        {
          gatewayId: "i6ssp",
          userIds: ["rahej"],
          name: "Gateway 1",
          type: "Stripe",
          apiKey: "sk_test_6eC49HqLyjWDarjtT1zdp7dc",
          secondaryApiKey: "",
          description:
            "Sit amet luctus venenatis lectus magna fringilla urna porttitor.",
        },
      ],
      error: null,
    };
    mock
      .onGet("http://178.63.13.157:8090/mock-api/api/gateways")
      .reply(200, mockSuccessResponse);
    const response = await requestGateways();
    expect(response).toEqual(mockSuccessResponse);
  });

  it("post /report", async () => {
    const mock = new MockAdapter(axios);
    const payload = {};
    const mockSuccessResponse = {
      code: "200",
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
      error: null,
    };
    mock
      .onPost("http://178.63.13.157:8090/mock-api/api/report")
      .reply(200, mockSuccessResponse);
    const response = await requestReports(payload);
    expect(response).toEqual(mockSuccessResponse);
  });

  it("getData", async () => {
    const mock = new MockAdapter(axios);
    const mockSuccessResponse = {
      code: "200",
      data: [
        { firstName: "John", lastName: "Doe", email: "john.doe@email.com" },
      ],
      error: null,
    };
    mock
      .onGet("http://178.63.13.157:8090/mock-api/api/users")
      .reply(200, mockSuccessResponse);
    const response = await getData("/users", "get");
    expect(response).toEqual(mockSuccessResponse);
  });
});
