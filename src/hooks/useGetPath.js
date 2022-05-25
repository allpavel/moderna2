import { useLocation } from "@reach/router";

const useGetPath = () => {
    const location = useLocation();
    const locationReplaceSlug = location.pathname.replace(/-/g, " ");
    const path = locationReplaceSlug.replace(/(^\/+|\/+$)/gm, "").split("/");
    const breadcrumbs = path.map(pathItem => pathItem.charAt(0).toUpperCase() + pathItem.slice(1));

    return breadcrumbs;
};

export default useGetPath;
