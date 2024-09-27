import { useEffect, useState } from "react";
import useZustandStore from "../stores/AppStore";
import fetchParkingData from "../utils/fetchParkingData";

const useFilteredFetch = () => {
    const lists = useZustandStore((state) => state.listingTarget);
    const setLists = useZustandStore((state) => state.setListingTarget);
    const inputFilter = useZustandStore((state) => state.inputFilter);
    const filterOpt = useZustandStore((state) => state.filterOpt);
    const setTargetMarker = useZustandStore((state) => state.setTargetMarker);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const initData = async () => {
            setIsLoading(true);
            let result = await fetchParkingData(inputFilter, filterOpt);

            if (result.length)
                setTargetMarker({
                    latitude: result[0].LAT,
                    longitude: result[0].LOT,
                    index: 0,
                });
            else
                setTargetMarker({
                    latitude: 37.575752,
                    longitude: 126.976823,
                    index: -1,
                });

            setLists(result);
            setIsLoading(false);
        };

        initData();
    }, [inputFilter, filterOpt, setLists, setTargetMarker]);

    return [lists, isLoading];
};

export default useFilteredFetch;
