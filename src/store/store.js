import { create } from 'zustand'

const useStore = create((set) => ({
    age: 0,
    increaseAge: () => set((state) => ({ age: state.age + 1 })),
    decreaseAge: () => set((state) => ({ age: state.age - 1 })),
}))


export default useStore