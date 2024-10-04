import { create } from "zustand";

const useZustandStore = create((set) => ({
    detailTarget: {},
    setDetailTarget: (newTarget) => set({ detailTarget: newTarget }),
    listingTarget: [],
    setListingTarget: (newList) => set({ listingTarget: newList }),
    inputFilter: "",
    setInputFilter: (string) => set({ inputFilter: string }),
    filterOpt: "",
    setFilterOpt: (string) => set({ filterOpt: string }),
    targetMarker: {},
    setTargetMarker: (object) => set({ targetMarker: object }),
    isSearchPage: true,
    setIsSearchPage: (boolean) => set({ isSearchPage: boolean }),
}));

export default useZustandStore;
