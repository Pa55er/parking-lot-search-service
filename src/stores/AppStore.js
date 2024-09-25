import { create } from "zustand";
import { persist } from "zustand/middleware";

const useZustandStore = create(
    persist(
        (set) => ({
            detailTarget: {},
            setDetailTarget: (newTarget) => set({ detailTarget: newTarget }),
        }),
        {
            name: "zustandStore",
        }
    )
);

export default useZustandStore;
