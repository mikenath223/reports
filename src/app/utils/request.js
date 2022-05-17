import axios from "axios";

const baseUrl = "http://178.63.13.157:8090/mock-api/api";

export const getData = async (query, requestType, payload) => {
  const queryUrl = `${baseUrl}${query}`;
  try {
    switch (requestType) {
      case "get": {
        const { data } = await axios.get(queryUrl);
        return data;
      }
      case "post": {
        const { data } = await axios.post(queryUrl, payload);
        return data;
      }
      default:
        return null;
    }
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return error.response;
  }
};

export const requestUsers = async () => {
  return await getData("/users", "get");
};

export const requestProjects = async () => {
  return await getData("/projects", "get");
};

export const requestGateways = async () => {
  return await getData("/gateways", "get");
};

export const requestReports = async (payload) => {
  return await getData("/report", "post", payload);
};
