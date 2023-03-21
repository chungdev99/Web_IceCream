import { createSelector } from "@reduxjs/toolkit";

const cartItemSelector = (state) => state.cart.cartItems;

// count number of products  in cart
export const cartItemsCountSelector = createSelector(cartItemSelector, (cartItems) =>
    cartItems.reduce((count, item) => count + item.quantity, 0)
);

export const cartTotalSelector = createSelector(cartItemSelector, (cartItems) =>
    cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0)
);

export const cartPriceSelector = createSelector(cartItemSelector, (cartItems) =>
    cartItems.map((item, index) =>  item.product.price * item.quantity, 0)
);