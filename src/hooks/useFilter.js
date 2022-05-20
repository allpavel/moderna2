export const useFilter = (data, filter = "all") => {
    if (filter === "all") return data;
    return data.filter(item => item.category.toLowerCase().includes(filter));
};
