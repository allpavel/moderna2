import { useLocation } from "@reach/router";

const useGetPath = () => {
    const location = useLocation();
    const path = location.pathname.replace(/-/g, " ").slice(1, -1).split("/");
    const breadcrumbs = path.map(pathItem => pathItem[0].toUpperCase() + pathItem.slice(1));
    return breadcrumbs;
};

export default useGetPath;
