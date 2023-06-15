import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    value: [],
    status: false,
  },
  reducers: {
    save: (state, action) => {
      state.value = action.payload;
    },
    deleteOrder: (state, action) => {
      state.value = state.value.filter(
        (order) => order.orderNo !== action.payload
      );
    },
    updateOrder: (state, action) => {
      const id = action.payload[1];
      const updatedOrder = action.payload[0];
      const allOrders = state.value.map((item) =>
        item.orderNo === id ? updatedOrder : item
      );

      state.value = allOrders;
    },
    createOrder: (state, action) => {
      const newOrder = action.payload;

      state.value = [...state.value, newOrder];
    },
  },
});

export const { save, deleteOrder, updateOrder, createOrder } = orderSlice.actions;

export const selectOrder = (state) => state.order.value;

export default orderSlice.reducer;
