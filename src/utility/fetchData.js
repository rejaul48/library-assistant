export const fetchDataFromApi = async () => {
    try {
        const response = await fetch('/Data.json');
        if (!response.ok) throw new Error("Failed to fetch data");
        return response.json();
    } catch (error) {
        console.error("Error loading data for Home:", error);
        throw error;
    }
}

