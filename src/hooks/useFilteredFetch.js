import { useEffect, useState } from "react";
import useZustandStore from "../stores/AppStore";
import fetchParkingData from "../utils/fetchParkingData";

const useFilteredFetch = () => {
    const lists = useZustandStore((state) => state.listingTarget);
    const setLists = useZustandStore((state) => state.setListingTarget);
    const inputFilter = useZustandStore((state) => state.inputFilter);
    const filterOpt = useZustandStore((state) => state.filterOpt);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const initData = async () => {
            setIsLoading(true);
            let result = await fetchParkingData(inputFilter, filterOpt);
            setLists(result);
            setIsLoading(false);
        };

        initData();
    }, [inputFilter, filterOpt, setLists]);

    return [lists, isLoading];
};

export default useFilteredFetch;
