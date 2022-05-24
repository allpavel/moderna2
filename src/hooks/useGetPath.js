import { useLocation } from "@reach/router";

const useGetPath = () => {
    const location = useLocation();
    const path = location.pathname.replace(/-/g, " ").slice(1, -1);
    console.log(path.split("/"));
    return path.split("/").map(link => link[0].toUpperCase() + link.slice(1));
};

export default useGetPath;
