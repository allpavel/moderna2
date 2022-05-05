import { useLocation } from "@reach/router";

const useGetPath = () => {
    const location = useLocation();
    const path = location.pathname.match(/\w+/gm);
    return path.map(link => link[0].toUpperCase() + link.slice(1));
};

export default useGetPath;
