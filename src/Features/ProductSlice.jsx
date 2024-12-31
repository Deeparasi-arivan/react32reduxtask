import { createSlice } from "@reduxjs/toolkit";

//creating the slice
const productSlice = createSlice({
  name: "priceCart",
  initialState: {
    products: [
      {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
          "https://tse3.mm.bing.net/th?id=OIP.bJU6tOQOL3_GjMYExdeesgHaHa&pid=Api&P=0&h=180",
        ],
      },
      {
        id: 2,
        title: "iPhone X",
        description:
          "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        images: [
          "https://tse3.mm.bing.net/th?id=OIP.CRBBGZZzyJGhWrt1kCbRQQHaHa&pid=Api&P=0&h=180",
        ],
      },
      {
        id: 3,
        title: "Samsung Universe 9",
        description:
          "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: "Samsung",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        images: [
          "https://tse3.mm.bing.net/th?id=OIP._E-7PsPOclFTlogV0C9n4wHaI2&pid=Api&P=0&h=180",
        ],
      },
      {
        id: 4,
        title: "OPPOF19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3,
        stock: 123,
        brand: "OPPO",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        images: [
          "https://tse4.mm.bing.net/th?id=OIP.Ok5DnSNHHso6T_kJ1c-IKwHaHz&pid=Api&P=0&h=180",
        ],
      },
      {
        id: 5,
        title: "Huawei P30",
        description:
          "Huawei's re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        price: 499,
        discountPercentage: 10.58,
        rating: 4.09,
        stock: 32,
        brand: "Huawei",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        images: [
          "https://tse3.mm.bing.net/th?id=OIP.9H7XaBP9UP441jM57a3kaAHaHa&pid=Api&P=0&h=180",
        ],
      },
    ],
  },
  reducers: {
    // increasing the cart quantity
    Increment_Cart: (state, action) => {
      let { id } = action.payload;
      let index = state.products.findIndex((product) => product.id === id);
      if (index !== null) {
        state.products[index].quantity =
          (state.products[index].quantity || 1) + 1;
      }
    },
    //decreasing the cart quantity
    Decrement_Cart: (state, action) => {
      let { id } = action.payload;
      let index = state.products.findIndex((product) => product.id === id);
      if (index != null && state.products[index].quantity > 1) {
        state.products[index].quantity = state.products[index].quantity - 1;
      }
    },
    //removing the cart product
    Remove_Cart: (state, action) => {
      const { id } = action.payload;
      state.products = state.products.filter((product) => product.id !== id);
    },
  },
});

export const { Increment_Cart, Decrement_Cart, Remove_Cart } =
  productSlice.actions;
export default productSlice.reducer;