import { useCallback, useEffect, useState } from "react";
import useZustandStore from "../stores/AppStore";
import fetchParkingData from "../utils/fetchParkingData";

const useLocalStorage = () => {
    const lists = useZustandStore((state) => state.listingTarget);
    const setLists = useZustandStore((state) => state.setListingTarget);
    const setTargetMarker = useZustandStore((state) => state.setTargetMarker);
    const setIsSearchPage = useZustandStore((state) => state.setIsSearchPage);

    const [isLoading, setIsLoading] = useState(true);

    const setLocalStorage = useCallback(
        (newArray, info = false) => {
            localStorage.setItem("favLists", JSON.stringify(newArray));
            if (info) {
                const target = lists.filter(
                    (list) => list.PKLT_CD !== info.PKLT_CD
                );
                if (target.length)
                    setTargetMarker({
                        latitude: target[0].LAT,
                        longitude: target[0].LOT,
                        index: 0,
                    });
                else
                    setTargetMarker({
                        index: -1,
                    });
                setLists(target);
            } else {
                setLists(newArray);
            }
        },
        [lists, setLists, setTargetMarker]
    );

    useEffect(() => {
        const initData = async () => {
            const targetInfo = JSON.parse(
                localStorage.getItem("favLists") || "[]"
            );
            let result = await fetchParkingData("", "");
            const answer = [];

            for (const { PKLT_CD } of targetInfo) {
                for (let i = 0; i < result.length - 1; i++) {
                    if (result[i].PKLT_CD === PKLT_CD) {
                        answer.push(result[i]);
                        break;
                    }
                }
            }

            if (answer.length)
                setTargetMarker({
                    latitude: answer[0].LAT,
                    longitude: answer[0].LOT,
                    index: 0,
                });
            else
                setTargetMarker({
                    index: -1,
                });

            setLists(answer);
            setIsLoading(false);
        };

        setIsSearchPage(false);
        initData();
    }, [setLists, setTargetMarker, setIsSearchPage]);

    return [lists, isLoading, setLocalStorage];
};

export default useLocalStorage;
