import apiRequest from "./apiRequest";
import { defer } from "react-router-dom";

export const singlePageLoadingData = async ({ params }) => {
    try {
        const data = await apiRequest.get("/posts/" + params.id);
        return data.data;
    } catch (error) {
        console.error('Error loading data:', error);
        throw error;
    }
};

export const listPageLoader = async ({ request, params }) => {
    const query = request.url.split("?")[1];
    console.log(query)
    const postPromise = apiRequest("/posts?" + query);
    return defer({
      postResponse: postPromise,
    });
  };

  export const profilePageLoader = async () => {
    const postPromise = apiRequest("/users/profilePosts");
    const chatPromise = apiRequest("/chats/");
    return defer({
      postResponse: postPromise,
      chatResponse: chatPromise,
    });
  };