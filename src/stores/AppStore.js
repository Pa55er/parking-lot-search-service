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
}));

export default useZustandStore;
