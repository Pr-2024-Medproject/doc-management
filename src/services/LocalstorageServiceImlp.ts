export const getAllValues = () => {
    try {
        return Object.keys(window.localStorage).map((k) =>
            JSON.parse(window.localStorage.getItem(k)!),
        );
    } catch (error) {
        console.warn(`Error getting localStorage data:`, error);
        return [];
    }
};
