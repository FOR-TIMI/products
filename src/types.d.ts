declare module "bag/util" {
  import { BehaviorSubject, Observable } from "rxjs";

  type Sizes = "S" | "XS" | "M" | "L" | "XL" | "XXL";

  type ProductVariants = {
    color: string;
    imageUrl: string;
    hexCode?: string;
  };

  type Product = {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    category?: string;
    sizes?: Sizes[];
    variants?: ProductVariants[];
  };

  type BagProduct = Product & {
    quantity: number;
    size: string;
    color: string;
  };

  declare const bag: BehaviorSubject<BagProduct[]>;
  declare const getBag: () => BagProduct[];
  declare const addToBag: (item: BagProduct) => void;
  declare const bagObservable: Observable<BagProduct[]>;
  declare const noOfItemsObservable: Observable<number>;
  declare const removeFromBag: (productId: string, size: string) => void;
  declare const clearBag: () => void;

  export {
    BagProduct,
    addToBag,
    bag,
    bagObservable,
    clearBag,
    getBag,
    noOfItemsObservable,
    removeFromBag,
  };
}
