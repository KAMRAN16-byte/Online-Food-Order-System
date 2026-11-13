import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice.tsx"; // Import the cart reducer

// Load state from localStorage
const loadFromLocalStorage = () => {
    try {
        const stateStr = localStorage.getItem("cartState");
        return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (err) {
        console.error("Could not load state", err);
        return undefined;
    }
};

// Save state to localStorage
const saveToLocalStorage = (state: any) => {
    try {
        const stateStr = JSON.stringify(state);
        localStorage.setItem("cartState", stateStr);
    } catch (err) {
        console.error("Could not save state", err);
    }
};

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState: {
        cart: loadFromLocalStorage(), // Load cart from localStorage
    },
});

store.subscribe(() => {
    saveToLocalStorage(store.getState().cart); // Save only cart state
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
