import { PaginationState } from "@tanstack/react-table"
import { create } from "zustand"

interface AppState {
  pagination: PaginationState
  setPagination: (pagination: PaginationState) => void
  searchText: string
  setSearchText: (searchText: string) => void
  selectedPokemonId: string
  setSelectedPokemonId: (selectedPokemonId: string) => void
  search: string
  setSearch: (search: string) => void
}

const useAppStore = create<AppState>((set) => ({
  pagination: { pageIndex: 0, pageSize: 10 },
  setPagination: (pagination: PaginationState) => set({ pagination: pagination }),
  searchText: "",
  setSearchText: (searchText: string) => set({ searchText: searchText }),
  selectedPokemonId: "",
  setSelectedPokemonId: (selectedPokemonId: string) => set({ selectedPokemonId: selectedPokemonId }),
  search: "",
  setSearch: (search: string) => set({ search: search }),
}))

export default useAppStore
