import { create } from "zustand";
import { persist } from "zustand/middleware";

const useZustandStore = create(
    persist(
        (set) => ({
            detailTarget: {},
            setDetailTarget: (newTarget) => set({ detailTarget: newTarget }),
            listingTarget: [],
            setListingTarget: (newList) => set({ listingTarget: newList }),
        }),
        {
            name: "zustandStore",
        }
    )
);

export default useZustandStore;
