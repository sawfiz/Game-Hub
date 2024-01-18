import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string | null;
  search?: string | null;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genre: number) => void;
  setPlatformId: (platform: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {} as GameQuery,
  setSearchText: (searchText) => {
    set(() => ({ gameQuery: { search: searchText } }));
  },
  setGenreId: (genreId) => {
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } }));
  },
  setPlatformId: (platformId) => {
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } }));
  },
  setSortOrder: (sortOrder) => {
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } }));
  },
}));

export default useGameQueryStore;
