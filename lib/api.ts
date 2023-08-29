const baseUrl = process.env.NEXT_PUBLIC_API;

const api = {
  post: async (endpoint: string, data: any, headers = {}) => {
    try {
      const response = await fetch(`${baseUrl}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...headers
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("Error in POST request:", error);
      throw error;
    }
  },

  delete: async (endpoint: string) => {
    try {
      const response = await fetch(`${baseUrl}${endpoint}`, {
        method: "DELETE",
      });
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("Error in DELETE request:", error);
      throw error;
    }
  },

  put: async (endpoint: string, data: any, headers = {}) => {
    try {
      const response = await fetch(`${baseUrl}${endpoint}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...headers
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("Error in PUT request:", error);
      throw error;
    }
  },

  get: async (endpoint: string, headers = {}) => {
    try {
      const response = await fetch(`${baseUrl}${endpoint}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          ...headers
        },
      });
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("Error in GET request:", error);
      throw error;
    }
  },
};

export default api;
