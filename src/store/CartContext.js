import React, { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    totalItems: 0,
    addItem: () => {},
    clearCart: () => {},
});

const cartReducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
        const existingItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        const updatedItems = [...state.items];

        if (existingItemIndex > -1) {
            updatedItems[existingItemIndex] = {
                ...updatedItems[existingItemIndex],
                quantity: updatedItems[existingItemIndex].quantity + 1,
            };
        } else {
            updatedItems.push({ ...action.item, quantity: 1 });
        }

        return {
            items: updatedItems,
            totalItems: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
        };
    }

    if (action.type === "CLEAR_CART") {
        return {
            items: [],
            totalItems: 0,
        };
    }

    return state;
};

export const CartProvider = ({ children }) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, {
        items: [],
        totalItems: 0,
    });

    const addItemHandler = (item) => {
        dispatchCartAction({ type: "ADD_ITEM", item });
    };

    const clearCartHandler = () => {
        dispatchCartAction({ type: "CLEAR_CART" });
    };

    return (
        <CartContext.Provider
            value={{
                items: cartState.items,
                totalItems: cartState.totalItems,
                addItem: addItemHandler,
                clearCart: clearCartHandler,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;