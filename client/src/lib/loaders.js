import apiRequest from "./apiRequest";

export const singlePageLoadingData = async ({ params }) => {
    try {
        const data = await apiRequest.get("/posts/" + params.id);
        return data.data;
    } catch (error) {
        console.error('Error loading data:', error);
        throw error;
    }
};