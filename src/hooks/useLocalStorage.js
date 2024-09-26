import { useCallback, useEffect, useState } from "react";
import useZustandStore from "../stores/AppStore";
import fetchParkingData from "../utils/fetchParkingData";

const useLocalStorage = () => {
    const lists = useZustandStore((state) => state.listingTarget);
    const setLists = useZustandStore((state) => state.setListingTarget);

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
            let result = await fetchParkingData();
            const answer = [];

            for (const { PKLT_CD } of targetInfo) {
                for (let i = 0; i < result.length - 1; i++) {
                    if (result[i].PKLT_CD === PKLT_CD) {
                        answer.push(result[i]);
                        break;
                    }
                }
            }

            setLists(answer);
            setIsLoading(false);
        };

        initData();
    }, [setLists]);

    return [lists, isLoading, setLocalStorage];
};

export default useLocalStorage;
