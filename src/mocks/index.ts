export type Sizes = "S" | "XS" | "M" | "L" | "XL" | "XXL" | string;

export type ProductVariants = {
  color: string;
  imageUrl: string;
  hexCode?: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  sizes?: Sizes[];
  variants?: ProductVariants[];
};

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Green hat",
    price: 90.78,
    imageUrl:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b8bf7a23b77440c7a84aad440038451b_9366/Relaxed_Strap-Back_Hat_Green_FZ8489_01_standard.jpg",
    category: "Hats",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    variants: [
      {
        hexCode: "#2A5B54",
        color: "Green",
        imageUrl:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b8bf7a23b77440c7a84aad440038451b_9366/Relaxed_Strap-Back_Hat_Green_FZ8489_01_standard.jpg",
      },
      {
        hexCode: "#294790",
        color: "Dark Blue",
        imageUrl:
          "https://cdnd.lystit.com/photos/d93b-2016/01/10/adidas-originals-blue-snapback-cap-product-1-231799664-normal.jpeg",
      },
    ],
  },
  {
    id: "2",
    name: "Brown Hoodie",
    price: 85.55,
    imageUrl:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5c6737700a364600b6d22f08011b1035_9366/Field_Issue_Essentials_Hoodie_Brown_IY2290_25_model_hover.jpg",
    category: "Hats",
    sizes: ["L"],
    variants: [
      {
        color: "Brown",
        imageUrl:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5c6737700a364600b6d22f08011b1035_9366/Field_Issue_Essentials_Hoodie_Brown_IY2290_25_model_hover.jpg",
        hexCode: "#D4B491",
      },
    ],
  },
  {
    id: "3",
    name: "Blue Sneakers",
    price: 95.67,
    imageUrl:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d5edc475-2201-4294-b86b-e59fb64d8ce0/air-jordan-1-elevate-low-shoes-QpxBzG.png",
    category: "Shoes",
    sizes: ["XS", "S"],
    variants: [
      {
        color: "Blue",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d5edc475-2201-4294-b86b-e59fb64d8ce0/air-jordan-1-elevate-low-shoes-QpxBzG.png",
        hexCode: "#003BA4",
      },
    ],
  },
  {
    id: "4",
    name: "Green Shoe",
    price: 80.99,
    imageUrl:
      "https://sneakernews.com/wp-content/uploads/2021/01/Nike-Air-Force-1-DD8458-300-6.jpg?w=1140",
    category: "Shoes",
    sizes: ["XS", "S", "M"],
    variants: [
      {
        color: "Green",
        imageUrl:
          "https://sneakernews.com/wp-content/uploads/2021/01/Nike-Air-Force-1-DD8458-300-6.jpg?w=1140",
        hexCode: "#008057",
      },
    ],
  },
  {
    id: "5",
    name: "White hat",
    price: 88,
    imageUrl:
      "https://images.unsplash.com/photo-1714950736077-58fc93cb8b6d?q=80&w=2146&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Hats",
    sizes: ["XS", "S", "M"],
    variants: [
      {
        color: "White",
        imageUrl:
          "https://images.unsplash.com/photo-1714950736077-58fc93cb8b6d?q=80&w=2146&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        hexCode: "#D4CFD0",
      },
    ],
  },
  {
    id: "6",
    name: "Orange shoes",
    price: 80,
    imageUrl: "https://www.sneakersnstuff.com/images/148730/original.jpg",
    category: "Shoes",
    sizes: ["11", "12"],
    variants: [
      {
        color: "orange",
        imageUrl: "https://www.sneakersnstuff.com/images/148730/original.jpg",
        hexCode: "#F7673D",
      },
      {
        color: "Copper Brown",
        imageUrl:
          "https://data.sneakers76.com/images/galleries/6620/AURORA_DV7223-800_PHSLH000-2000.png",
        hexCode: "#C2733E",
      },
    ],
  },
];
