import { create } from "zustand"

interface loginFormState {
  error: boolean
  setError: (error: boolean) => void
}

const useLoginFormStore = create<loginFormState>((set) => ({
  error: false,
  setError: (error: boolean) => set({ error: error }),
}))

export default useLoginFormStore
