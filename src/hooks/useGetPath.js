import { useLocation } from "@reach/router";

const useGetPath = () => {
    const location = useLocation();
    const path = location.pathname.replace(/-/g, " ").slice(1, -1);
    console.log(path.split("/"));
    return path.split("/");
};

export default useGetPath;
