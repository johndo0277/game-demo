import { create } from "zustand";

interface GameQuery {
    genreId?: number;
    parent_platformId?: number;
    searchText?: string;
    sortOrder?: string;
  }

interface GameQueryStore {
    gameQuery: GameQuery;
    setSearchText: (searchText: string) => void;
    setGenreId: (genreId: number) => void;
    setPlatformId: (parent_platformId: number) => void;
    setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
    setGenreId: (genreId) => set(store => ({ gameQuery: { ...store.gameQuery, genreId } })),
    setPlatformId: (parent_platformId) => set(store => ({ gameQuery: { ...store.gameQuery, parent_platformId } })),
    setSortOrder: (sortOrder) => set(store => ({ gameQuery: { ...store.gameQuery, sortOrder } }))
}));

export default useGameQueryStore;