import { useCallback, useEffect, useState } from "react";
import useZustandStore from "../stores/AppStore";
import fetchParkingData from "../utils/fetchParkingData";

const useLocalStorage = () => {
    const lists = useZustandStore((state) => state.listingTarget);
    const setLists = useZustandStore((state) => state.setListingTarget);
    const setTargetMarker = useZustandStore((state) => state.setTargetMarker);

    const [isLoading, setIsLoading] = useState(true);

    const setLocalStorage = useCallback(
        (newArray, info = false) => {
            localStorage.setItem("favLists", JSON.stringify(newArray));
            if (info) {
                setLists(lists.filter((list) => list.PKLT_CD !== info.PKLT_CD));
            } else {
                setLists(newArray);
            }
        },
        [lists, setLists]
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
                    latitude: 37.575752,
                    longitude: 126.976823,
                    index: -1,
                });

            setLists(answer);
            setIsLoading(false);
        };

        initData();
    }, [setLists, setTargetMarker]);

    return [lists, isLoading, setLocalStorage];
};

export default useLocalStorage;
