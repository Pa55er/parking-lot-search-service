import { create } from "zustand";
import { persist } from "zustand/middleware";

const useZustandStore = create(
    persist(
        (set) => ({
            detailTarget: {},
            setDetailTarget: (newTarget) => set({ detailTarget: newTarget }),
            listingTarget: [],
            setListingTarget: (newList) => set({ listingTarget: newList }),
            inputFilter: "",
            setInputFilter: (string) => set({ inputFilter: string }),
            filterOpt: "",
            setFilterOpt: (string) => set({ filterOpt: string }),
        }),
        {
            name: "zustandStore",
        }
    )
);

export default useZustandStore;
